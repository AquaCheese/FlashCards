// Unlimited AI Engine - Multiple Free AI Sources with Minimal Fallbacks
// This engine tries multiple AI sources before falling back to rule-based generation

class UnlimitedAIEngine {
    constructor() {
        this.webllm = null;
        this.ollamaAvailable = false;
        this.huggingFaceSpaces = [];
        this.cohere = null;
        this.together = null;
        this.initialized = false;
        
        // AI Model configurations
        this.models = {
            webllm: {
                name: 'Llama-2-7b-chat-hf-q4f32_1',
                available: false
            },
            ollama: {
                endpoint: 'http://localhost:11434',
                models: ['llama2:7b', 'mistral:7b', 'codellama:7b'],
                available: false
            },
            huggingFaceSpaces: [
                'https://huggingface.co/spaces/microsoft/DialoGPT-medium',
                'https://huggingface.co/spaces/facebook/blenderbot-400M-distill'
            ],
            cohere: {
                endpoint: 'https://api.cohere.ai/v1/generate',
                model: 'command-light',
                available: false
            },
            together: {
                endpoint: 'https://api.together.xyz/inference',
                models: ['togethercomputer/llama-2-7b-chat'],
                available: false
            }
        };
        
        this.cache = new Map();
        this.failureCount = {
            webllm: 0,
            ollama: 0,
            spaces: 0,
            cohere: 0,
            together: 0
        };
    }

    async initialize() {
        console.log('🚀 Initializing Unlimited AI Engine...');
        
        // Initialize all AI sources in parallel
        await Promise.allSettled([
            this.initializeWebLLM(),
            this.checkOllama(),
            this.checkHuggingFaceSpaces(),
            this.initializeCohere(),
            this.initializeTogether()
        ]);
        
        this.initialized = true;
        this.logAvailableModels();
        
        return this.getAvailableModelCount() > 0;
    }

    async initializeWebLLM() {
        try {
            console.log('🧠 Initializing WebLLM (browser-based AI)...');
            
            // Check if WebLLM is available
            if (typeof window !== 'undefined' && window.webllm) {
                const { CreateWebWorkerMLCEngine } = window.webllm;
                
                this.webllm = await CreateWebWorkerMLCEngine(
                    new Worker(this.createWebLLMWorker()),
                    this.models.webllm.name,
                    {
                        initProgressCallback: (progress) => {
                            console.log(`WebLLM Loading: ${Math.round(progress.progress * 100)}%`);
                        }
                    }
                );
                
                this.models.webllm.available = true;
                console.log('✅ WebLLM initialized successfully');
            } else {
                throw new Error('WebLLM not available in this environment');
            }
        } catch (error) {
            console.log('❌ WebLLM initialization failed:', error.message);
            this.models.webllm.available = false;
        }
    }

    async checkOllama() {
        try {
            console.log('🦙 Checking Ollama availability...');
            
            const response = await fetch(`${this.models.ollama.endpoint}/api/tags`, {
                method: 'GET',
                signal: AbortSignal.timeout(3000)
            });
            
            if (response.ok) {
                const data = await response.json();
                const availableModels = data.models.map(m => m.name);
                
                // Check which of our preferred models are available
                this.models.ollama.availableModels = this.models.ollama.models.filter(
                    model => availableModels.some(available => available.includes(model.split(':')[0]))
                );
                
                if (this.models.ollama.availableModels.length > 0) {
                    this.models.ollama.available = true;
                    console.log('✅ Ollama available with models:', this.models.ollama.availableModels);
                } else {
                    console.log('⚠️ Ollama running but no compatible models found');
                }
            }
        } catch (error) {
            console.log('❌ Ollama not available:', error.message);
            this.models.ollama.available = false;
        }
    }

    async checkHuggingFaceSpaces() {
        console.log('🤗 Checking Hugging Face Spaces...');
        // For now, we'll assume they're available and test them during actual usage
        // In a real implementation, you'd check each space's health endpoint
        this.huggingFaceSpaces = this.models.huggingFaceSpaces;
    }

    async initializeCohere() {
        try {
            console.log('🚀 Initializing Cohere API...');
            
            // Check if Cohere API key is available
            const apiKey = localStorage.getItem('cohere_api_key') || 
                          sessionStorage.getItem('cohere_api_key');
            
            if (apiKey) {
                // Test the API key with a small request
                const testResponse = await fetch(`${this.models.cohere.endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: this.models.cohere.model,
                        prompt: 'Test',
                        max_tokens: 5
                    })
                });
                
                if (testResponse.ok) {
                    this.cohere = { apiKey };
                    this.models.cohere.available = true;
                    console.log('✅ Cohere API initialized successfully');
                }
            } else {
                console.log('⚠️ Cohere API key not found');
            }
        } catch (error) {
            console.log('❌ Cohere initialization failed:', error.message);
            this.models.cohere.available = false;
        }
    }

    async initializeTogether() {
        try {
            console.log('🤝 Initializing Together AI...');
            
            const apiKey = localStorage.getItem('together_api_key') || 
                          sessionStorage.getItem('together_api_key');
            
            if (apiKey) {
                this.together = { apiKey };
                this.models.together.available = true;
                console.log('✅ Together AI initialized successfully');
            } else {
                console.log('⚠️ Together AI API key not found');
            }
        } catch (error) {
            console.log('❌ Together AI initialization failed:', error.message);
            this.models.together.available = false;
        }
    }

    // =================== AI GENERATION METHODS ===================

    async generateHint(question, answer, maxAttempts = 5) {
        const cacheKey = `hint_${this.hashString(question + answer)}`;
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        console.log('🤖 Generating AI hint with multiple sources...');
        
        const prompt = this.buildHintPrompt(question, answer);
        let lastError = null;
        
        // Try AI sources in order of preference
        const methods = [
            () => this.generateWebLLMHint(prompt),
            () => this.generateOllamaHint(prompt),
            () => this.generateCohereHint(prompt),
            () => this.generateTogetherHint(prompt),
            () => this.generateHuggingFaceSpaceHint(prompt)
        ];
        
        for (let i = 0; i < methods.length && i < maxAttempts; i++) {
            try {
                const result = await methods[i]();
                if (result && this.isValidHint(result, question, answer)) {
                    const hint = {
                        type: 'ai',
                        text: result,
                        source: this.getSourceName(i),
                        confidence: 0.9
                    };
                    
                    // Cache successful result
                    this.cache.set(cacheKey, hint);
                    return hint;
                }
            } catch (error) {
                lastError = error;
                console.log(`❌ AI source ${i + 1} failed:`, error.message);
                continue;
            }
        }
        
        // If we get here, all AI sources failed
        console.error('❌ All AI sources failed for hint generation:', lastError);
        throw new Error(`All AI sources exhausted. Last error: ${lastError?.message}`);
    }

    async generateDeckContent(subject, difficulty, cardCount, userProfile = null) {
        const cacheKey = `deck_${subject}_${difficulty}_${cardCount}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        console.log('🤖 Generating AI deck content...');
        
        const prompt = this.buildDeckPrompt(subject, difficulty, cardCount, userProfile);
        let lastError = null;
        
        // Try AI sources for deck generation
        const methods = [
            () => this.generateWebLLMDeck(prompt),
            () => this.generateOllamaDeck(prompt),
            () => this.generateCohereDeck(prompt),
            () => this.generateTogetherDeck(prompt),
            () => this.generateHuggingFaceSpaceDeck(prompt)
        ];
        
        for (const method of methods) {
            try {
                const result = await method();
                if (result && result.length > 0) {
                    const cards = this.parseDeckResponse(result);
                    if (cards.length >= Math.min(cardCount, 3)) { // At least 3 cards or requested count
                        // Cache successful result
                        this.cache.set(cacheKey, cards);
                        return cards;
                    }
                }
            } catch (error) {
                lastError = error;
                console.log('❌ AI deck generation method failed:', error.message);
                continue;
            }
        }
        
        // If we get here, all AI sources failed
        console.error('❌ All AI sources failed for deck generation:', lastError);
        throw new Error(`All AI sources exhausted for deck generation. Last error: ${lastError?.message}`);
    }

    // =================== INDIVIDUAL AI SOURCE METHODS ===================

    async generateWebLLMHint(prompt) {
        if (!this.models.webllm.available || !this.webllm) {
            throw new Error('WebLLM not available');
        }
        
        try {
            const response = await this.webllm.chat.completions.create({
                messages: [
                    { role: 'system', content: 'You are a helpful study assistant. Generate concise, helpful hints.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 100,
                temperature: 0.7
            });
            
            return response.choices[0].message.content.trim();
        } catch (error) {
            this.failureCount.webllm++;
            throw error;
        }
    }

    async generateOllamaHint(prompt) {
        if (!this.models.ollama.available) {
            throw new Error('Ollama not available');
        }
        
        const model = this.models.ollama.availableModels[0];
        
        try {
            const response = await fetch(`${this.models.ollama.endpoint}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: model,
                    prompt: prompt,
                    stream: false,
                    options: {
                        temperature: 0.7,
                        top_p: 0.9,
                        max_tokens: 100
                    }
                }),
                signal: AbortSignal.timeout(15000)
            });
            
            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.status}`);
            }
            
            const data = await response.json();
            return data.response.trim();
        } catch (error) {
            this.failureCount.ollama++;
            throw error;
        }
    }

    async generateCohereHint(prompt) {
        if (!this.models.cohere.available || !this.cohere) {
            throw new Error('Cohere not available');
        }
        
        try {
            const response = await fetch(this.models.cohere.endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.cohere.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.models.cohere.model,
                    prompt: prompt,
                    max_tokens: 100,
                    temperature: 0.7,
                    stop_sequences: ['\n\n']
                }),
                signal: AbortSignal.timeout(10000)
            });
            
            if (!response.ok) {
                throw new Error(`Cohere API error: ${response.status}`);
            }
            
            const data = await response.json();
            return data.generations[0].text.trim();
        } catch (error) {
            this.failureCount.cohere++;
            throw error;
        }
    }

    async generateTogetherHint(prompt) {
        if (!this.models.together.available || !this.together) {
            throw new Error('Together AI not available');
        }
        
        try {
            const response = await fetch(this.models.together.endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.together.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.models.together.models[0],
                    prompt: prompt,
                    max_tokens: 100,
                    temperature: 0.7
                }),
                signal: AbortSignal.timeout(10000)
            });
            
            if (!response.ok) {
                throw new Error(`Together AI error: ${response.status}`);
            }
            
            const data = await response.json();
            return data.output.choices[0].text.trim();
        } catch (error) {
            this.failureCount.together++;
            throw error;
        }
    }

    async generateHuggingFaceSpaceHint(prompt) {
        // This would connect to your custom Hugging Face Space
        // For now, we'll use the original HF Inference API as a fallback
        throw new Error('Hugging Face Spaces not implemented yet');
    }

    // =================== DECK GENERATION METHODS ===================

    async generateWebLLMDeck(prompt) {
        if (!this.models.webllm.available || !this.webllm) {
            throw new Error('WebLLM not available');
        }
        
        const response = await this.webllm.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are an educational content creator. Generate flashcard questions and answers in the requested format.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 800,
            temperature: 0.8
        });
        
        return response.choices[0].message.content;
    }

    async generateOllamaDeck(prompt) {
        if (!this.models.ollama.available) {
            throw new Error('Ollama not available');
        }
        
        const model = this.models.ollama.availableModels[0];
        
        const response = await fetch(`${this.models.ollama.endpoint}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: model,
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.8,
                    max_tokens: 800
                }
            }),
            signal: AbortSignal.timeout(30000)
        });
        
        const data = await response.json();
        return data.response;
    }

    async generateCohereDeck(prompt) {
        if (!this.models.cohere.available) {
            throw new Error('Cohere not available');
        }
        
        const response = await fetch(this.models.cohere.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.cohere.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: this.models.cohere.model,
                prompt: prompt,
                max_tokens: 800,
                temperature: 0.8
            }),
            signal: AbortSignal.timeout(20000)
        });
        
        const data = await response.json();
        return data.generations[0].text;
    }

    async generateTogetherDeck(prompt) {
        if (!this.models.together.available) {
            throw new Error('Together AI not available');
        }
        
        const response = await fetch(this.models.together.endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.together.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: this.models.together.models[0],
                prompt: prompt,
                max_tokens: 800,
                temperature: 0.8
            })
        });
        
        const data = await response.json();
        return data.output.choices[0].text;
    }

    async generateHuggingFaceSpaceDeck(prompt) {
        throw new Error('Hugging Face Spaces deck generation not implemented yet');
    }

    // =================== UTILITY METHODS ===================

    buildHintPrompt(question, answer) {
        return `Create a helpful study hint for this flashcard:

Question: "${question}"
Answer: "${answer}"

Generate a concise hint that helps the student think about the answer without giving it away directly. Focus on context, key concepts, or thinking strategies.

Hint:`;
    }

    buildDeckPrompt(subject, difficulty, cardCount, userProfile) {
        const profileInfo = userProfile ? 
            `\nStudent Profile: Accuracy ${userProfile.averageAccuracy}%, Strong in: ${userProfile.strengths?.join(', ') || 'None'}, Weak in: ${userProfile.weaknesses?.join(', ') || 'None'}` : '';

        return `Generate ${cardCount} flashcard questions and answers for ${subject} at ${difficulty} level.${profileInfo}

Format each card as:
Q: [question]
A: [answer]
---

Make questions challenging but fair, covering different aspects of the topic. Ensure variety in question types.

Cards:`;
    }

    parseDeckResponse(response) {
        const cards = [];
        const sections = response.split('---');
        
        for (const section of sections) {
            const lines = section.trim().split('\n');
            let question = '';
            let answer = '';
            
            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed.startsWith('Q:')) {
                    question = trimmed.substring(2).trim();
                } else if (trimmed.startsWith('A:')) {
                    answer = trimmed.substring(2).trim();
                }
            }
            
            if (question && answer && question.length > 5 && answer.length > 2) {
                cards.push({
                    id: Date.now() + Math.random(),
                    question: question,
                    answer: answer,
                    difficulty: 'ai-generated',
                    dateCreated: Date.now()
                });
            }
        }
        
        return cards;
    }

    isValidHint(hint, question, answer) {
        if (!hint || hint.length < 5) return false;
        
        // Check if hint doesn't just repeat the answer
        const lowerHint = hint.toLowerCase();
        const lowerAnswer = answer.toLowerCase();
        
        // If hint contains more than 70% of the answer, it's too revealing
        const answerWords = lowerAnswer.split(/\s+/);
        const hintWords = lowerHint.split(/\s+/);
        const matchingWords = answerWords.filter(word => 
            word.length > 2 && hintWords.some(hintWord => hintWord.includes(word))
        );
        
        const similarity = matchingWords.length / answerWords.length;
        return similarity < 0.7;
    }

    getSourceName(index) {
        const sources = ['WebLLM', 'Ollama', 'Cohere', 'Together AI', 'HuggingFace Spaces'];
        return sources[index] || 'Unknown AI';
    }

    getAvailableModelCount() {
        return Object.values(this.models).filter(model => 
            typeof model === 'object' && model.available
        ).length;
    }

    logAvailableModels() {
        const available = [];
        if (this.models.webllm.available) available.push('WebLLM (Browser)');
        if (this.models.ollama.available) available.push(`Ollama (${this.models.ollama.availableModels?.length || 0} models)`);
        if (this.models.cohere.available) available.push('Cohere API');
        if (this.models.together.available) available.push('Together AI');
        
        console.log(`🚀 Available AI sources: ${available.join(', ') || 'None'}`);
        
        if (available.length === 0) {
            console.warn('⚠️ No AI sources available! The app will rely on fallbacks.');
        } else {
            console.log(`✅ ${available.length} AI source(s) ready - minimal fallbacks needed!`);
        }
    }

    createWebLLMWorker() {
        const workerCode = `
            importScripts('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.19/lib/webllm.min.js');
            
            const engine = new webllm.WebWorkerMLCEngine();
            
            self.onmessage = function(e) {
                engine.onmessage(e);
            };
        `;
        
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }

    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString();
    }

    // API key management
    setAPIKey(service, key) {
        localStorage.setItem(`${service}_api_key`, key);
        console.log(`✅ ${service} API key saved`);
    }

    getFailureStats() {
        return this.failureCount;
    }

    clearCache() {
        this.cache.clear();
        console.log('🗑️ AI cache cleared');
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnlimitedAIEngine;
} else {
    window.UnlimitedAIEngine = UnlimitedAIEngine;
}