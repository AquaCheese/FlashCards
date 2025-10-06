// Web-First AI Engine - Optimized for GitHub Pages deployment
// Focuses on browser-based AI with seamless fallbacks

class WebFirstAIEngine {
    constructor() {
        this.webllm = null;
        this.webllmReady = false;
        this.webllmLoading = false;
        this.fallbackEngine = null;
        this.cache = new Map();
        this.requestQueue = [];
        this.processing = false;
    }

    async initialize() {
        console.log('🌐 Initializing Web-First AI Engine...');
        
        // Initialize fallback engine immediately
        this.fallbackEngine = new EnhancedFallbackEngine();
        
        // Check WebLLM support without initializing
        this.webllmSupported = await this.checkWebLLMSupport();
        
        if (this.webllmSupported) {
            console.log('✅ WebLLM supported - will initialize on first use');
        } else {
            console.log('📝 Using enhanced fallback engine');
        }
        
        this.updateStatus();
        return true; // Always return true for web deployment
    }

    async checkWebLLMSupport() {
        try {
            if (!navigator.gpu) return false;
            
            const adapter = await navigator.gpu.requestAdapter();
            return !!adapter;
        } catch (error) {
            return false;
        }
    }

    async generateHint(question, answer) {
        const cacheKey = `hint_${this.hashString(question + answer)}`;
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Try WebLLM if supported, otherwise use enhanced fallback
        if (this.webllmSupported) {
            try {
                const hint = await this.generateWebLLMHint(question, answer);
                this.cache.set(cacheKey, hint);
                return hint;
            } catch (error) {
                console.log('WebLLM hint failed, using fallback:', error.message);
                return this.generateFallbackHint(question, answer);
            }
        } else {
            return this.generateFallbackHint(question, answer);
        }
    }

    async generateWebLLMHint(question, answer) {
        // Initialize WebLLM lazily on first use
        if (!this.webllmReady && !this.webllmLoading) {
            await this.initializeWebLLM();
        }

        // If WebLLM is still not ready, use fallback
        if (!this.webllmReady) {
            throw new Error('WebLLM not ready');
        }

        // Get user profile for personalized hints
        const profile = this.getUserProfile();
        const overallAccuracy = profile?.preferences?.accuracyTrends?.length > 0 
            ? profile.preferences.accuracyTrends.reduce((sum, acc) => sum + acc, 0) / profile.preferences.accuracyTrends.length 
            : 75;
        const yearGroup = profile?.preferences?.yearGroup || 'General';
        const subjects = Object.keys(profile?.deckStats || {}).join(', ') || 'Mixed subjects';
        const timeSpent = Math.round((profile?.totalTimeSpent || 0) / 60);

        const prompt = `You are a helpful school tutor that likes to give hints to students based on questions, can you please create a helpful hint for this question: ${question} with this answer: ${answer}, that doesn't fully reveal the answer but it helps significantly towards the answer, an example would be a "Fill in the Blank" type hint or give the right equation to solve the question, just make a decent hint only based on the question and answer: ${question} and ${answer}.

Student Statistics:
- Overall Accuracy: ${overallAccuracy.toFixed(1)}%
- Overall Time Spent: ${timeSpent} minutes
- Year Group: ${yearGroup}
- Subjects Studied: ${subjects}

Please tailor the hint complexity to match the student's performance level and year group.

Hint:`;

        const response = await this.webllm.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a helpful study assistant. Generate concise, helpful hints.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 80,
            temperature: 0.7
        });

        const hintText = response.choices[0].message.content.trim();
        return {
            type: 'webllm',
            text: `💡 ${hintText}`,
            source: 'Browser AI',
            confidence: 0.9
        };
    }

    async initializeWebLLM() {
        if (this.webllmLoading) return;
        
        this.webllmLoading = true;
        this.updateStatus('loading');
        
        try {
            console.log('🧠 Initializing WebLLM...');
            
            // Load WebLLM script if not already loaded
            if (typeof window.webllm === 'undefined') {
                await this.loadWebLLMScript();
            }

            const { CreateWebWorkerMLCEngine } = window.webllm;

            // Use a smaller, faster model for web deployment
            this.webllm = await CreateWebWorkerMLCEngine(
                new Worker(this.createWebLLMWorker()),
                'TinyLlama-1.1B-Chat-v0.4-q4f32_1', // Smaller model for web
                {
                    initProgressCallback: (progress) => {
                        console.log(`WebLLM Loading: ${Math.round(progress.progress * 100)}%`);
                        this.updateProgressIndicator(progress.progress);
                    }
                }
            );

            this.webllmReady = true;
            this.webllmLoading = false;
            this.updateStatus('ready');
            console.log('✅ WebLLM initialized successfully');

        } catch (error) {
            console.log('❌ WebLLM initialization failed:', error);
            this.webllmLoading = false;
            this.webllmReady = false;
            this.updateStatus('fallback');
        }
    }

    async loadWebLLMScript() {
        return new Promise((resolve, reject) => {
            if (typeof window.webllm !== 'undefined') {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.19/lib/index.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load WebLLM'));
            document.head.appendChild(script);
        });
    }

    createWebLLMWorker() {
        const workerCode = `
            importScripts('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.19/lib/webllm.min.js');
            
            let engine;
            
            self.addEventListener('message', async (event) => {
                const { type, data } = event.data;
                
                try {
                    switch (type) {
                        case 'init':
                            engine = new self.webllm.WebWorkerMLCEngine();
                            await engine.reload(data.modelId, data.chatConfig);
                            self.postMessage({ type: 'init_complete' });
                            break;
                            
                        case 'chat':
                            const response = await engine.chat.completions.create(data);
                            self.postMessage({ type: 'chat_response', data: response });
                            break;
                            
                        default:
                            throw new Error('Unknown message type: ' + type);
                    }
                } catch (error) {
                    self.postMessage({ type: 'error', error: error.message });
                }
            });
        `;

        const blob = new Blob([workerCode], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }

    generateFallbackHint(question, answer) {
        const hint = this.fallbackEngine.generateAdvancedHint(question, answer);
        return {
            type: 'enhanced-fallback',
            text: hint,
            source: 'Smart Analysis',
            confidence: 0.8
        };
    }

    async generateDeck(subject, difficulty = 'intermediate', cardCount = 8, userProfile = null) {
        // For deck generation, always use enhanced templates for web deployment
        const deck = this.fallbackEngine.generateTemplateDeck(subject, difficulty, cardCount, userProfile);
        
        return {
            id: 'web_' + Date.now(),
            title: `Study Deck: ${subject}`,
            subject: subject,
            difficulty: difficulty,
            cards: deck.cards,
            dateCreated: Date.now(),
            aiGenerated: true,
            source: 'Smart Templates',
            metadata: {
                generatedBy: 'WebFirstAI',
                cardCount: deck.cards.length,
                timestamp: Date.now()
            }
        };
    }

    updateStatus(status = 'ready') {
        const indicator = document.getElementById('ai-status-indicator');
        if (!indicator) return;

        const dot = indicator.querySelector('.ai-dot');
        const text = indicator.querySelector('.ai-text');
        
        if (dot && text) {
            dot.className = 'ai-dot';
            
            switch (status) {
                case 'loading':
                    dot.classList.add('loading');
                    text.textContent = 'AI Loading...';
                    break;
                case 'ready':
                    dot.classList.remove('loading', 'error');
                    text.textContent = this.webllmReady ? 'AI Ready' : 'Smart Hints';
                    break;
                case 'fallback':
                    dot.classList.add('error');
                    text.textContent = 'Smart Mode';
                    break;
            }
        }
    }

    updateProgressIndicator(progress) {
        const indicator = document.getElementById('ai-status-indicator');
        if (!indicator) return;

        const text = indicator.querySelector('.ai-text');
        if (text) {
            text.textContent = `Loading ${Math.round(progress * 100)}%`;
        }
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

    getStats() {
        return {
            webllmSupported: this.webllmSupported,
            webllmReady: this.webllmReady,
            mode: this.webllmReady ? 'AI' : 'Smart Fallback'
        };
    }
}

// Enhanced Fallback Engine with much smarter rule-based generation
class EnhancedFallbackEngine {
    constructor() {
        this.subjectPatterns = this.initializeSubjectPatterns();
        this.hintStrategies = this.initializeHintStrategies();
    }

    initializeSubjectPatterns() {
        return {
            mathematics: {
                keywords: ['calculate', 'solve', 'equation', 'formula', 'theorem', 'proof'],
                concepts: ['algebra', 'geometry', 'calculus', 'statistics', 'trigonometry'],
                patterns: [/\d+/, /x|y|z/, /π|pi/, /sin|cos|tan/, /\+|\-|\*|\/|\=/]
            },
            science: {
                keywords: ['element', 'compound', 'reaction', 'cell', 'organism', 'force', 'energy'],
                concepts: ['physics', 'chemistry', 'biology', 'atom', 'molecule', 'DNA'],
                patterns: [/H2O|CO2|NaCl/, /kg|m\/s|joule/, /celsius|fahrenheit/]
            },
            history: {
                keywords: ['war', 'battle', 'empire', 'revolution', 'treaty', 'dynasty'],
                concepts: ['ancient', 'medieval', 'modern', 'century', 'BC', 'AD'],
                patterns: [/\d{4}/, /\d+th century/, /BC|AD/]
            },
            literature: {
                keywords: ['author', 'writer', 'novel', 'poem', 'character', 'theme'],
                concepts: ['romanticism', 'modernism', 'shakespeare', 'poetry', 'prose'],
                patterns: [/".*"/, /'.*'/, /chapter|act|scene/]
            },
            geography: {
                keywords: ['country', 'capital', 'river', 'mountain', 'ocean', 'continent'],
                concepts: ['climate', 'population', 'culture', 'economy', 'region'],
                patterns: [/north|south|east|west/, /km|miles/, /°C|°F/]
            }
        };
    }

    initializeHintStrategies() {
        return {
            definition: (question, answer) => {
                if (question.toLowerCase().includes('what is') || question.toLowerCase().includes('define')) {
                    const firstWord = answer.split(' ')[0];
                    return `Think about the definition of "${firstWord}". What field or category does this belong to?`;
                }
                return null;
            },
            
            calculation: (question, answer) => {
                if (/calculate|solve|find/.test(question.toLowerCase()) || /\d+/.test(answer)) {
                    return 'Work through this step by step. What mathematical operation or formula should you apply?';
                }
                return null;
            },
            
            temporal: (question, answer) => {
                if (/when|year|date/.test(question.toLowerCase()) || /\d{4}/.test(answer)) {
                    const year = answer.match(/\d{4}/)?.[0];
                    if (year) {
                        const century = Math.ceil(parseInt(year) / 100);
                        return `This event occurred in the ${century}${this.getOrdinalSuffix(century)} century. Think about what was happening during that time period.`;
                    }
                }
                return null;
            },
            
            geographical: (question, answer) => {
                if (/where|capital|country|city/.test(question.toLowerCase())) {
                    const firstLetter = answer.charAt(0).toUpperCase();
                    return `This location starts with "${firstLetter}". Consider the geographical context of the question.`;
                }
                return null;
            },
            
            categorical: (question, answer) => {
                const subject = this.detectSubject(question + ' ' + answer);
                if (subject) {
                    return `This relates to ${subject}. Think about the key concepts and terminology in this field.`;
                }
                return null;
            },
            
            structural: (question, answer) => {
                const words = answer.split(' ').filter(w => w.length > 2);
                if (words.length === 1) {
                    return `The answer is a single word. Think about key terms related to this topic.`;
                } else if (words.length > 3) {
                    return `The answer involves multiple concepts. Break down the question into parts.`;
                }
                return null;
            }
        };
    }

    generateAdvancedHint(question, answer) {
        // Try each hint strategy
        for (const [strategy, generator] of Object.entries(this.hintStrategies)) {
            const hint = generator(question, answer);
            if (hint) {
                return `💡 ${hint}`;
            }
        }

        // Fallback to basic analysis
        const subject = this.detectSubject(question + ' ' + answer);
        const firstLetter = answer.charAt(0).toUpperCase();
        
        return `💡 The answer starts with "${firstLetter}". ${subject ? `This relates to ${subject}.` : 'Think about the context of the question.'}`;
    }

    detectSubject(text) {
        const lowerText = text.toLowerCase();
        
        for (const [subject, data] of Object.entries(this.subjectPatterns)) {
            const keywordMatches = data.keywords.some(keyword => lowerText.includes(keyword));
            const conceptMatches = data.concepts.some(concept => lowerText.includes(concept));
            const patternMatches = data.patterns.some(pattern => pattern.test(text));
            
            if (keywordMatches || conceptMatches || patternMatches) {
                return subject;
            }
        }
        
        return null;
    }

    generateTemplateDeck(subject, difficulty, cardCount, userProfile) {
        const templates = this.getSubjectTemplates(subject);
        const selectedTemplates = this.selectTemplatesByDifficulty(templates, difficulty, cardCount);
        
        const cards = selectedTemplates.map((template, index) => ({
            id: Date.now() + index,
            question: template.question,
            answer: template.answer,
            difficulty: template.difficulty || difficulty,
            subject: subject,
            dateCreated: Date.now()
        }));

        return { cards };
    }

    getSubjectTemplates(subject) {
        const allTemplates = {
            'Mathematics': [
                { question: 'What is the Pythagorean theorem?', answer: 'a² + b² = c²', difficulty: 'intermediate' },
                { question: 'What is the quadratic formula?', answer: 'x = (-b ± √(b²-4ac)) / 2a', difficulty: 'higher' },
                { question: 'What is the area formula for a circle?', answer: 'π × r²', difficulty: 'foundation' },
                { question: 'What is the derivative of x²?', answer: '2x', difficulty: 'higher' },
                { question: 'What does BODMAS/PEMDAS stand for?', answer: 'Brackets/Parentheses, Orders/Exponents, Division, Multiplication, Addition, Subtraction', difficulty: 'foundation' }
            ],
            'Biology': [
                { question: 'What is the basic unit of life?', answer: 'Cell', difficulty: 'foundation' },
                { question: 'What process do plants use to make food?', answer: 'Photosynthesis', difficulty: 'foundation' },
                { question: 'What does DNA stand for?', answer: 'Deoxyribonucleic acid', difficulty: 'intermediate' },
                { question: 'What are the four bases in DNA?', answer: 'Adenine, Thymine, Guanine, Cytosine', difficulty: 'intermediate' },
                { question: 'What is mitosis?', answer: 'Cell division that produces two identical diploid cells', difficulty: 'higher' }
            ],
            'Chemistry': [
                { question: 'What is the chemical formula for water?', answer: 'H₂O', difficulty: 'foundation' },
                { question: 'What is the atomic number of carbon?', answer: '6', difficulty: 'foundation' },
                { question: 'What is Avogadro\'s number?', answer: '6.022 × 10²³', difficulty: 'higher' },
                { question: 'What is the pH of pure water?', answer: '7', difficulty: 'intermediate' },
                { question: 'What is the first element on the periodic table?', answer: 'Hydrogen', difficulty: 'foundation' }
            ],
            'Physics': [
                { question: 'What is Newton\'s first law of motion?', answer: 'An object at rest stays at rest, an object in motion stays in motion', difficulty: 'intermediate' },
                { question: 'What is the speed of light in a vacuum?', answer: '299,792,458 m/s', difficulty: 'higher' },
                { question: 'What is the formula for kinetic energy?', answer: 'KE = ½mv²', difficulty: 'higher' },
                { question: 'What is Ohm\'s law?', answer: 'V = IR', difficulty: 'intermediate' },
                { question: 'What is gravity on Earth?', answer: '9.81 m/s²', difficulty: 'foundation' }
            ],
            'History': [
                { question: 'When did World War II end?', answer: '1945', difficulty: 'foundation' },
                { question: 'Who was the first President of the United States?', answer: 'George Washington', difficulty: 'foundation' },
                { question: 'When was the Declaration of Independence signed?', answer: '1776', difficulty: 'intermediate' },
                { question: 'What empire was ruled by Julius Caesar?', answer: 'Roman Empire', difficulty: 'intermediate' },
                { question: 'When did the Berlin Wall fall?', answer: '1989', difficulty: 'intermediate' }
            ],
            'Geography': [
                { question: 'What is the capital of France?', answer: 'Paris', difficulty: 'foundation' },
                { question: 'What is the largest ocean?', answer: 'Pacific Ocean', difficulty: 'foundation' },
                { question: 'What is the longest river in the world?', answer: 'Nile River', difficulty: 'intermediate' },
                { question: 'What is the highest mountain?', answer: 'Mount Everest', difficulty: 'foundation' },
                { question: 'How many continents are there?', answer: '7', difficulty: 'foundation' }
            ]
        };

        // Find matching templates
        const exactMatch = allTemplates[subject];
        if (exactMatch) return exactMatch;

        // Try partial matching
        const subjectLower = subject.toLowerCase();
        for (const [key, templates] of Object.entries(allTemplates)) {
            if (key.toLowerCase().includes(subjectLower) || subjectLower.includes(key.toLowerCase())) {
                return templates;
            }
        }

        // Return general knowledge templates
        return allTemplates['Geography']; // Default fallback
    }

    selectTemplatesByDifficulty(templates, difficulty, count) {
        // Filter by difficulty if specified
        let filtered = templates;
        if (difficulty && difficulty !== 'mixed') {
            filtered = templates.filter(t => t.difficulty === difficulty);
            
            // If no matches, include all difficulties
            if (filtered.length === 0) {
                filtered = templates;
            }
        }

        // Shuffle and select requested count
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    getOrdinalSuffix(number) {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const remainder = number % 100;
        return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
    }

    getUserProfile() {
        try {
            return JSON.parse(localStorage.getItem('flashcard-profile')) || {};
        } catch {
            return {};
        }
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WebFirstAIEngine, EnhancedFallbackEngine };
} else {
    window.WebFirstAIEngine = WebFirstAIEngine;
    window.EnhancedFallbackEngine = EnhancedFallbackEngine;
}