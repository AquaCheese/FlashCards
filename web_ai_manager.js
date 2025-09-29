// Web-Optimized AI Manager - Simplified for GitHub Pages deployment
// Focuses on instant availability with smart fallbacks

class WebAIManager {
    constructor() {
        this.webEngine = null;
        this.initialized = false;
        this.stats = {
            totalRequests: 0,
            successfulRequests: 0,
            fallbacksUsed: 0
        };
    }

    async initialize() {
        if (this.initialized) return true;
        
        console.log('🌐 Initializing Web AI Manager...');
        
        try {
            // Initialize web-first AI engine
            this.webEngine = new WebFirstAIEngine();
            await this.webEngine.initialize();
            
            this.initialized = true;
            console.log('✅ Web AI Manager ready');
            
            return true;
        } catch (error) {
            console.error('❌ Web AI Manager initialization failed:', error);
            
            // Still mark as initialized since we have fallbacks
            this.initialized = true;
            return true;
        }
    }

    async generateHint(question, answer) {
        // Auto-initialize if needed
        if (!this.initialized) {
            await this.initialize();
        }

        this.stats.totalRequests++;

        try {
            const result = await this.webEngine.generateHint(question, answer);
            
            if (result.type === 'webllm') {
                this.stats.successfulRequests++;
            } else {
                this.stats.fallbacksUsed++;
            }
            
            console.log(`💡 Hint generated (${result.source}):`, result.text);
            return result.text;
            
        } catch (error) {
            console.error('❌ Hint generation failed:', error);
            this.stats.fallbacksUsed++;
            
            // Emergency fallback
            return `💡 Think about the key concepts related to "${question}". What field or category does this relate to?`;
        }
    }

    async generateDeck(subject, difficulty = 'intermediate', cardCount = 8, userProfile = null) {
        // Auto-initialize if needed
        if (!this.initialized) {
            await this.initialize();
        }

        this.stats.totalRequests++;

        try {
            const result = await this.webEngine.generateDeck(subject, difficulty, cardCount, userProfile);
            
            this.stats.successfulRequests++;
            console.log(`📚 Generated deck: "${result.title}" with ${result.cards.length} cards`);
            
            return result;
            
        } catch (error) {
            console.error('❌ Deck generation failed:', error);
            this.stats.fallbacksUsed++;
            
            // Emergency fallback - create basic deck
            return this.createEmergencyDeck(subject, difficulty, cardCount);
        }
    }

    createEmergencyDeck(subject, difficulty, cardCount) {
        const basicCards = [
            {
                id: Date.now() + 1,
                question: `What is the main concept in ${subject}?`,
                answer: `Key principles and ideas in ${subject}`,
                difficulty: difficulty,
                subject: subject,
                dateCreated: Date.now()
            },
            {
                id: Date.now() + 2,
                question: `Name an important aspect of ${subject}`,
                answer: `Core elements and components of ${subject}`,
                difficulty: difficulty,
                subject: subject,
                dateCreated: Date.now()
            },
            {
                id: Date.now() + 3,
                question: `How would you explain ${subject} to someone new?`,
                answer: `Fundamental understanding and basics of ${subject}`,
                difficulty: difficulty,
                subject: subject,
                dateCreated: Date.now()
            }
        ].slice(0, cardCount);

        return {
            id: 'emergency_' + Date.now(),
            title: `Study Deck: ${subject}`,
            subject: subject,
            difficulty: difficulty,
            cards: basicCards,
            dateCreated: Date.now(),
            aiGenerated: true,
            source: 'Emergency Templates',
            metadata: {
                generatedBy: 'WebAIManager',
                cardCount: basicCards.length,
                timestamp: Date.now()
            }
        };
    }

    getStatus() {
        if (!this.webEngine) {
            return {
                ready: false,
                mode: 'Initializing',
                stats: this.stats
            };
        }

        const engineStats = this.webEngine.getStats();
        
        return {
            ready: this.initialized,
            mode: engineStats.webllmReady ? 'Super Smart' : 'Smart Mode',
            webllmSupported: engineStats.webllmSupported,
            webllmReady: engineStats.webllmReady,
            stats: this.stats,
            successRate: this.stats.totalRequests > 0 
                ? Math.round((this.stats.successfulRequests / this.stats.totalRequests) * 100) 
                : 0
        };
    }

    // Method for updating status indicator
    updateStatusDisplay() {
        const status = this.getStatus();
        const indicator = document.getElementById('ai-status-indicator');
        
        if (!indicator) return;

        const dot = indicator.querySelector('.ai-dot');
        const text = indicator.querySelector('.ai-text');
        
        if (dot && text) {
            dot.className = 'ai-dot';
            
            if (status.webllmReady) {
                text.textContent = 'Super Smart';
                dot.classList.remove('loading', 'error');
            } else if (status.webllmSupported) {
                text.textContent = 'Smart Mode';
                dot.classList.add('loading');
            } else {
                text.textContent = 'Smart Mode';
                dot.classList.add('error');
            }
        }
    }

    // Convenience method to check if full AI is available
    isAIReady() {
        return this.webEngine && this.webEngine.webllmReady;
    }

    // Get human-readable mode description
    getModeDescription() {
        const status = this.getStatus();
        
        if (status.webllmReady) {
            return 'Full AI capabilities active';
        } else if (status.webllmSupported) {
            return 'Browser AI available (will load when needed)';
        } else {
            return 'Smart rule-based hints and templates';
        }
    }
}

// Create global instance for web app
let webAIManager = null;

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🌐 Starting FlashCards Web App...');
    
    webAIManager = new WebAIManager();
    await webAIManager.initialize();
    
    // Update status display
    webAIManager.updateStatusDisplay();
    
    // Set up periodic status updates
    setInterval(() => {
        webAIManager.updateStatusDisplay();
    }, 5000);
});

// Export for compatibility with existing code
if (typeof window !== 'undefined') {
    window.webAIManager = webAIManager;
    
    // Compatibility alias
    window.aiManager = {
        get initialized() { return webAIManager?.initialized || false; },
        async initialize() { 
            if (!webAIManager) {
                webAIManager = new WebAIManager();
            }
            return await webAIManager.initialize(); 
        },
        async generateHint(question, answer) { 
            if (!webAIManager) {
                webAIManager = new WebAIManager();
                await webAIManager.initialize();
            }
            return await webAIManager.generateHint(question, answer); 
        },
        async generateDeck(subject, difficulty, cardCount, userProfile) { 
            if (!webAIManager) {
                webAIManager = new WebAIManager();
                await webAIManager.initialize();
            }
            return await webAIManager.generateDeck(subject, difficulty, cardCount, userProfile); 
        },
        getStatus() { 
            return webAIManager?.getStatus() || { ready: false, mode: 'Not Initialized' }; 
        }
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebAIManager;
}