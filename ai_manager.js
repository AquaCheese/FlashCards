// AI Manager - Coordinates all AI sources with minimal fallbacks
// This is the main interface for AI functionality in the FlashCards app

class AIManager {
    constructor() {
        this.unlimitedEngine = new UnlimitedAIEngine();
        this.webllmSetup = new WebLLMSetup();
        this.ollamaSetup = new OllamaSetup();
        this.initialized = false;
        this.aiSources = [];
        this.fallbacksUsed = 0;
        this.totalRequests = 0;
        this.successRate = 0;
    }

    async initialize() {
        console.log('🚀 Initializing Web-First AI Manager...');
        
        try {
            // Initialize the unlimited engine (this checks all sources)
            const success = await this.unlimitedEngine.initialize();
            
            if (success) {
                this.initialized = true;
                this.updateAISourcesList();
                console.log('✅ AI Manager initialized successfully');
                
                // For web app, try to auto-setup WebLLM if available
                if (!this.aiSources.length && typeof window !== 'undefined') {
                    await this.tryAutoSetupWebLLM();
                }
                
                return true;
            } else {
                console.log('⚠️ No AI sources available, attempting auto-setup...');
                await this.tryAutoSetupWebLLM();
                return true; // Always return true for web app
            }
        } catch (error) {
            console.error('❌ AI Manager initialization failed:', error);
            // For web app, still return true and use enhanced fallbacks
            return true;
        }
    }

    async tryAutoSetupWebLLM() {
        console.log('🧠 Attempting WebLLM auto-setup...');
        try {
            const supported = await this.webllmSetup.checkWebLLMSupport();
            if (supported) {
                console.log('✅ WebLLM supported - will initialize on first use');
                // Don't initialize immediately to avoid blocking, just mark as available
                this.models.webllm.available = true;
                this.updateAISourcesList();
                return true;
            }
        } catch (error) {
            console.log('WebLLM auto-setup failed:', error);
        }
        return false;
    }

    async generateHint(question, answer) {
        this.totalRequests++;
        
        if (!this.initialized) {
            console.warn('AI Manager not initialized, attempting initialization...');
            const success = await this.initialize();
            if (!success) {
                return this.handleFallback('hint', { question, answer });
            }
        }

        try {
            console.log('🤖 Generating AI hint...');
            const result = await this.unlimitedEngine.generateHint(question, answer);
            
            // Track success
            this.updateSuccessRate(true);
            
            return result;
        } catch (error) {
            console.error('❌ AI hint generation failed:', error);
            
            // Track failure and use fallback
            this.updateSuccessRate(false);
            return this.handleFallback('hint', { question, answer });
        }
    }

    async generateDeck(subject, difficulty = 'intermediate', cardCount = 8, userProfile = null) {
        this.totalRequests++;
        
        if (!this.initialized) {
            const success = await this.initialize();
            if (!success) {
                return this.handleFallback('deck', { subject, difficulty, cardCount, userProfile });
            }
        }

        try {
            console.log('🤖 Generating AI deck...');
            const cards = await this.unlimitedEngine.generateDeckContent(
                subject, difficulty, cardCount, userProfile
            );
            
            // Track success
            this.updateSuccessRate(true);
            
            // Format as deck object
            return {
                id: 'ai_' + Date.now(),
                title: `AI Generated: ${subject}`,
                subject: subject,
                difficulty: difficulty,
                cards: cards,
                dateCreated: Date.now(),
                aiGenerated: true,
                source: this.getActiveAISource(),
                metadata: {
                    generatedBy: 'AIManager',
                    userProfile: userProfile ? 'personalized' : 'generic',
                    cardCount: cards.length,
                    timestamp: Date.now()
                }
            };
        } catch (error) {
            console.error('❌ AI deck generation failed:', error);
            
            // Track failure and use fallback
            this.updateSuccessRate(false);
            return this.handleFallback('deck', { subject, difficulty, cardCount, userProfile });
        }
    }

    handleFallback(type, params) {
        this.fallbacksUsed++;
        console.log(`🔄 Using fallback for ${type} generation (${this.fallbacksUsed}/${this.totalRequests})`);
        
        if (type === 'hint') {
            return this.generateFallbackHint(params.question, params.answer);
        } else if (type === 'deck') {
            return this.generateFallbackDeck(params);
        }
        
        throw new Error(`No fallback available for type: ${type}`);
    }

    generateFallbackHint(question, answer) {
        // Advanced rule-based hint generation
        const hints = this.analyzeQuestionForHints(question, answer);
        
        return {
            type: 'smart-fallback',
            text: hints.bestHint,
            source: 'Smart Analysis Engine',
            confidence: hints.confidence
        };
    }

    analyzeQuestionForHints(question, answer) {
        const questionLower = question.toLowerCase();
        const answerLower = answer.toLowerCase();
        const questionWords = question.split(/\s+/);
        const answerWords = answer.split(/\s+/);
        
        const hints = [];
        
        // Hint based on question type
        if (questionLower.includes('what is') || questionLower.includes('what are')) {
            hints.push(`Think about the definition or characteristics of the concept.`);
        } else if (questionLower.includes('when') || questionLower.includes('date')) {
            hints.push(`Consider the time period or historical context.`);
        } else if (questionLower.includes('where')) {
            hints.push(`Think about the location or geographical context.`);
        } else if (questionLower.includes('how')) {
            hints.push(`Focus on the process or method involved.`);
        } else if (questionLower.includes('why')) {
            hints.push(`Consider the reasons or causes behind this.`);
        }
        
        // Hint based on answer characteristics
        if (/^\d+$/.test(answer.trim())) {
            hints.push(`The answer is a number. Think about quantities, dates, or measurements.`);
        } else if (answer.includes('%')) {
            hints.push(`Think about percentages or proportions.`);
        } else if (answerWords.length === 1) {
            hints.push(`The answer is a single word. Think about key terms or concepts.`);
        } else if (answerWords.length > 5) {
            hints.push(`The answer involves multiple concepts. Break down the question into parts.`);
        }
        
        // Subject-specific hints
        if (questionLower.includes('formula') || questionLower.includes('equation')) {
            hints.push(`Think about mathematical or scientific formulas you've learned.`);
        } else if (questionLower.includes('capital') || questionLower.includes('country')) {
            hints.push(`Consider geography and world locations.`);
        } else if (questionLower.includes('author') || questionLower.includes('wrote')) {
            hints.push(`Think about literature and famous writers.`);
        }
        
        // Contextual hints
        const firstLetter = answer.charAt(0).toUpperCase();
        if (/[A-Z]/.test(firstLetter)) {
            hints.push(`The answer starts with the letter "${firstLetter}".`);
        }
        
        const wordCount = answerWords.length;
        if (wordCount > 1) {
            hints.push(`The answer contains ${wordCount} words.`);
        }
        
        // Choose best hint
        const bestHint = hints[Math.floor(Math.random() * hints.length)] || 
                        `Think about the key concepts related to this topic.`;
        
        return {
            bestHint: `💡 ${bestHint}`,
            confidence: hints.length > 3 ? 0.8 : 0.6,
            alternativeHints: hints
        };
    }

    generateFallbackDeck(params) {
        const { subject, difficulty, cardCount, userProfile } = params;
        
        // Template-based deck generation
        const templates = this.getDeckTemplates(subject, difficulty);
        const cards = [];
        
        for (let i = 0; i < Math.min(cardCount, templates.length); i++) {
            const template = templates[i % templates.length];
            cards.push({
                id: Date.now() + i,
                question: template.question,
                answer: template.answer,
                difficulty: difficulty,
                dateCreated: Date.now(),
                source: 'template'
            });
        }
        
        return {
            id: 'fallback_' + Date.now(),
            title: `Study Deck: ${subject}`,
            subject: subject,
            difficulty: difficulty,
            cards: cards,
            dateCreated: Date.now(),
            aiGenerated: false,
            source: 'Template Generator',
            metadata: {
                generatedBy: 'FallbackEngine',
                templateBased: true,
                cardCount: cards.length,
                timestamp: Date.now()
            }
        };
    }

    getDeckTemplates(subject, difficulty) {
        // Comprehensive template database
        const templates = {
            'mathematics': [
                { question: 'What is the formula for the area of a circle?', answer: 'π × r²' },
                { question: 'What is the Pythagorean theorem?', answer: 'a² + b² = c²' },
                { question: 'What is the quadratic formula?', answer: 'x = (-b ± √(b²-4ac)) / 2a' },
                { question: 'What is the derivative of x²?', answer: '2x' },
                { question: 'What is the integral of 2x?', answer: 'x² + C' }
            ],
            'biology': [
                { question: 'What is the basic unit of life?', answer: 'Cell' },
                { question: 'What process do plants use to make food?', answer: 'Photosynthesis' },
                { question: 'What is DNA?', answer: 'Deoxyribonucleic acid' },
                { question: 'What are the four bases in DNA?', answer: 'Adenine, Thymine, Guanine, Cytosine' },
                { question: 'What is mitosis?', answer: 'Cell division that produces two identical diploid cells' }
            ],
            'chemistry': [
                { question: 'What is the chemical symbol for water?', answer: 'H₂O' },
                { question: 'What is the atomic number of carbon?', answer: '6' },
                { question: 'What is Avogadro\'s number?', answer: '6.022 × 10²³' },
                { question: 'What is the pH of pure water?', answer: '7' },
                { question: 'What is the first element on the periodic table?', answer: 'Hydrogen' }
            ],
            'physics': [
                { question: 'What is Newton\'s first law of motion?', answer: 'An object at rest stays at rest, an object in motion stays in motion' },
                { question: 'What is the speed of light in a vacuum?', answer: '299,792,458 m/s' },
                { question: 'What is the formula for kinetic energy?', answer: 'KE = ½mv²' },
                { question: 'What is Ohm\'s law?', answer: 'V = IR' },
                { question: 'What is the acceleration due to gravity on Earth?', answer: '9.81 m/s²' }
            ],
            'history': [
                { question: 'When did World War II end?', answer: '1945' },
                { question: 'Who was the first President of the United States?', answer: 'George Washington' },
                { question: 'In what year was the Declaration of Independence signed?', answer: '1776' },
                { question: 'What empire was ruled by Julius Caesar?', answer: 'Roman Empire' },
                { question: 'When did the Berlin Wall fall?', answer: '1989' }
            ],
            'geography': [
                { question: 'What is the capital of France?', answer: 'Paris' },
                { question: 'What is the largest ocean?', answer: 'Pacific Ocean' },
                { question: 'What is the longest river in the world?', answer: 'Nile River' },
                { question: 'What is the highest mountain in the world?', answer: 'Mount Everest' },
                { question: 'How many continents are there?', answer: '7' }
            ]
        };
        
        const subjectKey = subject.toLowerCase();
        return templates[subjectKey] || templates['mathematics']; // Default fallback
    }

    updateAISourcesList() {
        this.aiSources = [];
        
        const models = this.unlimitedEngine.models;
        if (models.webllm.available) this.aiSources.push('WebLLM (Browser)');
        if (models.ollama.available) this.aiSources.push('Ollama (Local)');
        if (models.cohere.available) this.aiSources.push('Cohere API');
        if (models.together.available) this.aiSources.push('Together AI');
        
        console.log(`📊 Available AI sources: ${this.aiSources.length}`);
    }

    getActiveAISource() {
        return this.aiSources[0] || 'Fallback Engine';
    }

    updateSuccessRate(success) {
        if (success) {
            this.successRate = (this.successRate * (this.totalRequests - 1) + 1) / this.totalRequests;
        } else {
            this.successRate = (this.successRate * (this.totalRequests - 1)) / this.totalRequests;
        }
        
        // Log if success rate drops below 50%
        if (this.successRate < 0.5 && this.totalRequests > 5) {
            console.warn(`⚠️ AI success rate low: ${Math.round(this.successRate * 100)}%`);
        }
    }

    showSetupHelpIfNeeded() {
        const availableCount = this.aiSources.length;
        
        if (availableCount === 0) {
            this.showSetupDialog();
        } else if (availableCount === 1) {
            console.log('💡 Consider setting up additional AI sources for redundancy');
        }
    }

    showSetupDialog() {
        // Create setup dialog
        const dialog = document.createElement('div');
        dialog.className = 'ai-setup-dialog';
        dialog.innerHTML = `
            <div class="setup-content">
                
                <div class="setup-options">
                    <div class="setup-option" data-source="ollama">
                        <h3>🦙 Ollama (Recommended)</h3>
                        <p>Run AI locally on your computer</p>
                        <button class="setup-btn" onclick="aiManager.showOllamaSetup()">Set Up Ollama</button>
                    </div>
                    
                    <div class="setup-option" data-source="webllm">
                        <h3>🧠 WebLLM (Browser AI)</h3>
                        <p>Run AI directly in your browser</p>
                        <div class="pros">
                            ✅ No installation needed<br>
                            ✅ Works in browser<br>
                            ✅ Privacy-focused<br>
                            ⚠️ Requires modern browser
                        </div>
                        <button class="setup-btn" onclick="aiManager.setupWebLLM()">Try WebLLM</button>
                    </div>
                    
                        <button class="setup-btn" onclick="aiManager.showAPISetup()">Configure APIs</button>
                    </div>
                </div>
                
                <div class="setup-footer">
                    <button class="skip-btn" onclick="this.parentElement.parentElement.parentElement.remove()">
                        Skip for Now
                    </button>
                    <p><small>You can always set up AI later from Settings</small></p>
                </div>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .ai-setup-dialog {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            }
            
            .ai-setup-dialog .setup-content {
                background: white;
                border-radius: 15px;
                padding: 30px;
                max-width: 900px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 25px 80px rgba(0,0,0,0.3);
            }
            
            .ai-setup-dialog h2 {
                text-align: center;
                margin-bottom: 20px;
                color: #333;
            }
            
            .ai-setup-dialog .setup-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .ai-setup-dialog .setup-option {
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                padding: 20px;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .ai-setup-dialog .setup-option:hover {
                border-color: #007acc;
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0,122,204,0.15);
            }
            
            .ai-setup-dialog .setup-option h3 {
                margin: 0 0 10px 0;
                color: #333;
            }
            
            .ai-setup-dialog .pros {
                font-size: 14px;
                text-align: left;
                margin: 15px 0;
                line-height: 1.6;
            }
            
            .ai-setup-dialog .setup-btn {
                background: #007acc;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                transition: background 0.3s ease;
            }
            
            .ai-setup-dialog .setup-btn:hover {
                background: #005a9e;
            }
            
            .ai-setup-dialog .setup-footer {
                text-align: center;
                margin-top: 30px;
                border-top: 1px solid #e0e0e0;
                padding-top: 20px;
            }
            
            .ai-setup-dialog .skip-btn {
                background: #6c757d;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(dialog);
    }

    showOllamaSetup() {
        this.ollamaSetup.showSetupDialog();
    }

    async setupWebLLM() {
        try {
            const supported = await this.webllmSetup.checkWebLLMSupport();
            if (supported) {
                await this.webllmSetup.initialize();
                console.log('✅ WebLLM setup successful');
                window.location.reload();
            } else {
                alert('WebLLM is not supported in this browser. Please try Ollama instead.');
            }
        } catch (error) {
            console.error('WebLLM setup failed:', error);
            alert('WebLLM setup failed. Please try Ollama instead.');
        }
    }

    showAPISetup() {
        // Show API key configuration dialog
        const dialog = document.createElement('div');
        dialog.className = 'api-setup-dialog';
        dialog.innerHTML = `
            <div class="api-setup-content">
                <h2>🔑 API Configuration</h2>
                <p>Add your API keys for cloud AI services:</p>
                
                
                
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(dialog);
    }

    saveAPIKey(service, key) {
        if (key.trim()) {
            this.unlimitedEngine.setAPIKey(service, key.trim());
            alert(`${service} API key saved! Refresh the page to use it.`);
        }
    }

    getStats() {
        return {
            initialized: this.initialized,
            aiSources: this.aiSources.length,
            successRate: Math.round(this.successRate * 100),
            fallbacksUsed: this.fallbacksUsed,
            totalRequests: this.totalRequests,
            availableSources: this.aiSources
        };
    }

    async runDiagnostics() {
        console.log('🔧 Running AI diagnostics...');
        
        const results = {
            webllm: await this.webllmSetup.checkWebLLMSupport(),
            ollama: await this.ollamaSetup.checkAvailability(),
            unlimitedEngine: this.unlimitedEngine.getAvailableModelCount() > 0
        };
        
        console.log('📊 Diagnostic Results:', results);
        return results;
    }
}

// Global instance
let aiManager = null;

// Initialize when DOM is ready
if (typeof window !== 'undefined') {
    window.AIManager = AIManager;
    
    // Auto-initialize
    document.addEventListener('DOMContentLoaded', async () => {
        aiManager = new AIManager();
        window.aiManager = aiManager; // Make globally available
        
        try {
            await aiManager.initialize();
        } catch (error) {
            console.error('Failed to initialize AI Manager:', error);
        }
    });
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIManager;
}