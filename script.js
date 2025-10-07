// Global app instance
let app = null;

// FlashCards App - AI-Enhanced Learning System
console.log('FlashCards script loading...');

// Immediately available global functions for onclick handlers
window.addCard = function() {
    console.log('addCard called, app:', !!app);
    if (app && app.addCard) {
        app.addCard();
    } else {
        console.log('App not ready or addCard method missing');
    }
};

window.addTitleCard = function() {
    console.log('addTitleCard called, app:', !!app);
    if (app && app.addTitleCard) {
        app.addTitleCard();
    } else {
        console.log('App not ready or addTitleCard method missing');
    }
};

window.showView = function(view) {
    console.log('showView called with:', view, 'app:', !!app);
    if (app && app.showView) {
        app.showView(view);
    } else {
        console.log('App not ready or showView method missing');
    }
};

window.clearForm = function() {
    console.log('clearForm called, app:', !!app);
    if (app && app.clearForm) {
        app.clearForm();
    } else {
        console.log('App not ready or clearForm method missing');
    }
};

window.checkAnswer = function() {
    console.log('checkAnswer called, app:', !!app);
    if (app && app.checkAnswer) {
        app.checkAnswer();
    } else {
        console.log('App not ready or checkAnswer method missing');
    }
};

window.startStudy = function(deckId) {
    console.log('startStudy called with:', deckId);
    if (app && app.startStudy) {
        app.startStudy(deckId);
    } else {
        console.log('App not ready or startStudy method missing');
    }
};

window.editDeck = function(deckId) {
    console.log('editDeck called with:', deckId, 'app:', !!app);
    if (app && app.editDeck) {
        app.editDeck(deckId);
    } else {
        console.log('App not ready or editDeck method missing');
    }
};

window.showDeckStats = function(deckId) {
    console.log('showDeckStats called with:', deckId, 'app:', !!app);
    if (app && app.showDeckStats) {
        app.showDeckStats(deckId);
    } else {
        console.log('App not ready or showDeckStats method missing');
    }
};

window.saveDeckToFile = function(deckId) {
    console.log('saveDeckToFile called with:', deckId, 'app:', !!app);
    if (app && app.saveDeckToFile) {
        app.saveDeckToFile(deckId);
    } else {
        console.log('App not ready or saveDeckToFile method missing');
    }
};

window.deleteDeck = function(deckId) {
    console.log('deleteDeck called with:', deckId);
    if (app && app.deleteDeck) {
        app.deleteDeck(deckId);
    } else {
        console.log('App not ready or deleteDeck method missing');
    }
};

window.generateSubjectSpecificDeck = function() {
    console.log('generateSubjectSpecificDeck called, app:', !!app);
    if (app && app.generateAIDeck) {
        const subjectSelect = document.getElementById('deck-subject');
        const subject = subjectSelect.value;
        
        if (!subject) {
            app.showNotification('Subject Required', 'Please select a GCSE subject first', 'warning');
            return;
        }
        
        // Generate comprehensive 20-card deck with full features
        app.generateAIDeck({ 
            subject: subject, 
            cardCount: 20,  // Always generate 20 cards
            difficulty: 'intermediate',
            includeExplanations: true,
            includeMultipleAnswers: true,
            includeTitleCards: true
        });
    } else {
        console.log('App not ready or generateAIDeck method missing');
    }
};

window.devBonus = function() {
    if (app && app.earnCoins) {app.earnCoins(1000, 'Dev bonus');
    }
};

window.restartStudy = function() {
    console.log('restartStudy called, app:', !!app);
    if (app && app.restartStudy) {
        app.restartStudy();
    } else {
        console.log('App not ready or restartStudy method missing');
    }
};

// Functions are now defined directly on window object above

window.exitStudy = function() {
    console.log('exitStudy called, app:', !!app);
    if (app && app.exitStudy) {
        app.exitStudy();
    } else {
        console.log('App not ready or exitStudy method missing');
    }
};

window.importDeck = function() {
    console.log('importDeck called, app:', !!app);
    if (app && app.importDeck) {
        app.importDeck();
    } else {
        console.log('App not ready or importDeck method missing');
    }
};

window.showGenerationInsights = function() {
    console.log('showGenerationInsights called, app:', !!app);
    if (app && app.showGenerationInsights) {
        app.showGenerationInsights();
    } else {
        console.log('App not ready or showGenerationInsights method missing');
    }
};

window.closeGenerationInsights = function() {
    console.log('closeGenerationInsights called');
    if (app && app.closeGenerationInsights) {
        app.closeGenerationInsights();
    } else {
        console.log('App not ready or closeGenerationInsights method missing');
    }
};

window.confirmDelete = function() {
    console.log('confirmDelete called, app:', !!app);
    if (app && app.confirmDelete) {
        app.confirmDelete();
    } else {
        console.log('App not ready or confirmDelete method missing');
    }
};

window.cancelDelete = function() {
    console.log('cancelDelete called, app:', !!app);
    if (app && app.cancelDelete) {
        app.cancelDelete();
    } else {
        console.log('App not ready or cancelDelete method missing');
    }
};

window.closeStatsModal = function() {
    console.log('closeStatsModal called, app:', !!app);
    if (app && app.closeStatsModal) {
        app.closeStatsModal();
    } else {
        console.log('App not ready or closeStatsModal method missing');
    }
};

window.previousTitleCard = function() {
    console.log('previousTitleCard called, app:', !!app);
    if (app && app.previousTitleCard) {
        app.previousTitleCard();
    } else {
        console.log('App not ready or previousTitleCard method missing');
    }
};

window.nextTitleCard = function() {
    console.log('nextTitleCard called, app:', !!app);
    if (app && app.nextTitleCard) {
        app.nextTitleCard();
    } else {
        console.log('App not ready or nextTitleCard method missing');
    }
};

window.startActualStudy = function() {
    console.log('startActualStudy called, app:', !!app);
    if (app && app.startActualStudy) {
        app.startActualStudy();
    } else {
        console.log('App not ready or startActualStudy method missing');
    }
};

window.skipToStudy = function() {
    console.log('skipToStudy called, app:', !!app);
    if (app && app.skipToStudy) {
        app.skipToStudy();
    } else {
        console.log('App not ready or skipToStudy method missing');
    }
};

window.regenerateDecks = function() {
    console.log('regenerateDecks called, app:', !!app);
    if (app && app.regenerateDecks) {
        app.regenerateDecks();
    } else {
        console.log('App not ready or regenerateDecks method missing');
    }
};

window.viewGeneratedDeck = function(deckId) {
    console.log('viewGeneratedDeck called with:', deckId);
    if (app && app.viewGeneratedDeck) {
        app.viewGeneratedDeck(deckId);
    } else {
        console.log('App not ready or viewGeneratedDeck method missing');
    }
};

window.adoptDeck = function(deckId) {
    console.log('adoptDeck called with:', deckId);
    if (app && app.adoptDeck) {
        app.adoptDeck(deckId);
    } else {
        console.log('App not ready or adoptDeck method missing');
    }
};

window.deleteGeneratedDeck = function(deckId) {
    console.log('deleteGeneratedDeck called with:', deckId);
    if (app && app.deleteGeneratedDeck) {
        app.deleteGeneratedDeck(deckId);
    } else {
        console.log('App not ready or deleteGeneratedDeck method missing');
    }
};

// New flip card functions
window.showAnswer = function() {
    console.log('showAnswer called (I Don\'t Know button)');
    if (app && app.showAnswer) {
        app.showAnswer();
    } else {
        console.log('App not ready or showAnswer method missing');
    }
};

window.continueToNext = function() {
    console.log('continueToNext called (Continue button)');
    if (app && app.continueToNext) {
        app.continueToNext();
    } else {
        console.log('App not ready or continueToNext method missing');
    }
};

window.updateAnswerNumbers = function(element) {
    if (app && app.updateAnswerNumbers) {
        app.updateAnswerNumbers(element);
    }
};

// Additional global functions for HTML onclick handlers
window.generateAIDeck = function() {
    console.log('generateAIDeck called via app.generateAIDeck()');
    if (app && app.generateAIDeck) {
        // Generate comprehensive 20-card deck with default settings
        app.generateAIDeck({
            cardCount: 20,
            subject: 'Mathematics',
            difficulty: 'intermediate',
            includeExplanations: true,
            includeMultipleAnswers: true,
            includeTitleCards: true
        });
    } else {
        console.log('App not ready or generateAIDeck method missing');
    }
};

window.useHint = function() {
    console.log('useHint called via app.useHint()');
    if (app && app.useHint) {
        app.useHint();
    } else {
        console.log('App not ready or useHint method missing');
    }
};

window.useSkipCard = function() {
    console.log('useSkipCard called via app.useSkipCard()');
    if (app && app.useSkipCard) {
        app.useSkipCard();
    } else {
        console.log('App not ready or useSkipCard method missing');
    }
};

window.activateDoubleCoins = function() {
    console.log('activateDoubleCoins called via app.activateDoubleCoins()');
    if (app && app.activateDoubleCoins) {
        app.activateDoubleCoins();
    } else {
        console.log('App not ready or activateDoubleCoins method missing');
    }
};

window.activateStreakShield = function() {
    console.log('activateStreakShield called via app.activateStreakShield()');
    if (app && app.activateStreakShield) {
        app.activateStreakShield();
    } else {
        console.log('App not ready or activateStreakShield method missing');
    }
};

window.purchasePowerUp = function(type, cost) {
    console.log('purchasePowerUp called via app.purchasePowerUp()', type, cost);
    if (app && app.purchasePowerUp) {
        app.purchasePowerUp(type, cost);
    } else {
        console.log('App not ready or purchasePowerUp method missing');
    }
};

// Simple level display updater that runs immediately
function immediatelyUpdateLevelDisplay() {
    // Use global variables if available, otherwise get from localStorage
    let currentXP = window.userXP || parseInt(localStorage.getItem('userXP')) || 50;
    let currentLevel = window.userLevel || parseInt(localStorage.getItem('userLevel')) || 1;
    
    // Save defaults if they didn't exist
    if (!localStorage.getItem('userXP')) {
        localStorage.setItem('userXP', '50');
        localStorage.setItem('userLevel', '1');
        window.userXP = 50;
        window.userLevel = 1;
    }
    
    // Basic level calculation
    const levelThresholds = [0, 100, 250, 450, 700, 1000];
    for (let i = levelThresholds.length - 1; i >= 0; i--) {
        if (currentXP >= levelThresholds[i]) {
            currentLevel = i + 1;
            break;
        }
    }
    
    // Update level number immediately
    const levelElement = document.getElementById('user-level');
    if (levelElement) {
        levelElement.textContent = currentLevel;
        console.log('Updated level element to:', currentLevel);
    } else {
        console.log('Could not find user-level element');
    }
    
    // Calculate and update XP display
    const nextLevelXP = levelThresholds[currentLevel] || 1000;
    const currentLevelXP = levelThresholds[currentLevel - 1] || 0;
    const progressXP = currentXP - currentLevelXP;
    const neededXP = nextLevelXP - currentLevelXP;
    
    // Update XP text
    const xpElement = document.getElementById('user-xp');
    if (xpElement) {
        xpElement.textContent = `${Math.max(0, progressXP)}/${neededXP}`;
        console.log('Updated XP element to:', `${Math.max(0, progressXP)}/${neededXP}`);
    } else {
        console.log('Could not find user-xp element');
    }
    
    // Update progress bar
    const progressElement = document.getElementById('xp-progress');
    if (progressElement) {
        const percentage = Math.max(0, Math.min(100, (progressXP / neededXP) * 100));
        progressElement.style.width = `${percentage}%`;
        console.log('Updated progress bar to:', `${percentage}%`);
    } else {
        console.log('Could not find xp-progress element');
    }
    
    console.log('Immediate level display update:', { currentLevel, currentXP, progressXP, neededXP });
}

// Run immediately when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        immediatelyUpdateLevelDisplay();
    }, 100);
});

// Also run after a delay to catch any timing issues
setTimeout(() => {
    immediatelyUpdateLevelDisplay();
}, 1000);

// Listen for storage changes and update display
window.addEventListener('storage', function(e) {
    if (e.key === 'userXP' || e.key === 'userLevel') {
        setTimeout(() => {
            immediatelyUpdateLevelDisplay();
        }, 100);
    }
});

// Make the function globally available
window.immediatelyUpdateLevelDisplay = immediatelyUpdateLevelDisplay;

// Fix for button clickability issues
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all modals are properly hidden on page load
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        if (!modal.style.display || modal.style.display === 'none') {
            modal.style.display = 'none';
            modal.style.pointerEvents = 'none';
        }
    });
    
    // Fix any buttons that might not be clickable
    const buttons = document.querySelectorAll('button, .btn, [onclick]');
    buttons.forEach(button => {
        button.style.pointerEvents = 'auto';
        button.style.cursor = 'pointer';
        
        // Ensure click events work
        if (button.onclick || button.getAttribute('onclick')) {
            button.addEventListener('click', function(e) {
                // Don't interfere with existing handlers
                e.stopPropagation();
            }, false);
        }
    });
    
    console.log('Button clickability fixes applied');
});

// FlashCards Application
class FlashCardsApp {
    constructor() {
        console.log('FlashCardsApp constructor started');
        this.decks = this.loadDecks();
        console.log('loadDecks() completed');
        this.currentDeck = null;
        this.currentCards = [];
        this.currentCardIndex = 0;
        this.score = 0;
        this.cardCount = 0;
        this.selectedStyle = 'classic';
        this.selectedColor = 'blue';
        this.isEditMode = false;
        this.editingDeckId = null;
        this.currentTitleCardIndex = 0;
        this.isAnimating = false;
        
        // Advanced GCSE AI Learning System
        console.log('Initializing Advanced GCSE AI Engine...');
        this.aiEngine = new GCSEAIEngine();
        this.learningData = this.loadLearningData();
        console.log('GCSE AI Engine loaded');
        this.sessionStartTime = Date.now();
        
        // Initialize comprehensive AI Manager for deck generation
        console.log('Initializing AI Manager for deck generation...');
        try {
            if (typeof AIManager !== 'undefined') {
                this.aiManager = new AIManager();
                this.aiManagerReady = false; // Will be set to true when ready
                
                // Initialize AI Manager asynchronously (don't block constructor)
                this.initializeAIManager();
            } else {
                console.warn('AIManager class not available - AI features will be disabled');
                this.aiManager = null;
                this.aiManagerReady = false;
            }
        } catch (error) {
            console.error('Error creating AI Manager:', error);
            this.aiManager = null;
            this.aiManagerReady = false;
        }
        
        // Gamification System - Coin Management
        this.coins = this.loadCoins();
        this.initializeCoinSystem();
        
        // Power-ups and Shop System
        this.powerUps = this.loadPowerUps();
        this.initializePowerUpSystem();
        
        // Power-up usage statistics
        this.powerUpUsageStats = this.loadPowerUpUsageStats();
        
        // Chart instances for cleanup
        this.chartInstances = {};
        
        console.log('Calling init()...');
        this.init();
        console.log('Constructor completed successfully');
    }

    init() {
        console.log('init() started');
        this.setupEventListeners();
        console.log('setupEventListeners() completed');
        this.setupCustomizationListeners();
        console.log('setupCustomizationListeners() completed');
        this.renderDecks();
        console.log('renderDecks() completed');
        
        // Check for first-time user and show onboarding
        if (this.isFirstTimeUser()) {
            this.showOnboarding();
        } else {
            // Load and render generated decks
            const generatedDecks = this.loadGeneratedDecks();
            this.renderGeneratedDecks(generatedDecks);
            console.log('Generated decks loaded and rendered');
        }
        
        this.updateAILockStatus();
        console.log('updateAILockStatus() completed');
        
        // Initialize level system
        this.initializeLevelSystem();
        console.log('Level system initialized');
        
        // Ensure level display is updated after everything is loaded
        setTimeout(() => {
            this.forceUpdateLevelDisplay();
            console.log('Forced level display update completed');
        }, 500);
        
        this.showView('home');
        
        // Start background AI monitoring
        this.startBackgroundAIMonitoring();
        
        console.log('init() completed');
    }

    async initializeAIManager() {
        if (!this.aiManager) {
            console.log('No AI Manager available - skipping initialization');
            this.aiManagerReady = false;
            return;
        }
        
        try {
            console.log('Starting AI Manager initialization...');
            const initialized = await this.aiManager.initialize();
            if (initialized) {
                console.log('AI Manager initialized for deck generation');
                this.aiManagerReady = true;
            } else {
                console.log('AI Manager not fully initialized');
                this.aiManagerReady = false;
            }
        } catch (error) {
            console.error('AI Manager initialization failed:', error);
            this.aiManagerReady = false;
        }
        
        // Update UI to show AI status
        this.updateAIStatus();
    }
    
    updateAIStatus() {
        // You can add UI indicators here if needed
        console.log('AI Manager Ready:', this.aiManagerReady);
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.dataset.view;
                this.showView(view);
            });
        });

        // Deck form
        document.getElementById('deck-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveDeck();
        });

        // Answer input
        document.getElementById('answer-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });

        // Add initial card when create view is shown
        this.addCard();

        // Modal event listeners
        document.getElementById('stats-modal').addEventListener('click', (e) => {
            if (e.target.id === 'stats-modal') {
                this.closeStatsModal();
            }
        });
        
        document.getElementById('generation-insights-modal').addEventListener('click', (e) => {
            if (e.target.id === 'generation-insights-modal') {
                this.closeGenerationInsights();
            }
        });

        document.getElementById('delete-confirmation-modal').addEventListener('click', (e) => {
            if (e.target.id === 'delete-confirmation-modal') {
                this.cancelDelete();
            }
        });

        // Main action buttons
        const importBtn = document.getElementById('import-deck-btn');
        if (importBtn) {
            importBtn.addEventListener('click', () => this.importDeck());
        }

        const newDeckBtn = document.getElementById('new-deck-btn');
        if (newDeckBtn) {
            newDeckBtn.addEventListener('click', () => this.showView('create'));
        }

        const createDeckBtn = document.getElementById('create-deck-btn');
        if (createDeckBtn) {
            createDeckBtn.addEventListener('click', () => this.showView('create'));
        }

        const howItWorksBtn = document.getElementById('how-it-works-btn');
        if (howItWorksBtn) {
            howItWorksBtn.addEventListener('click', () => this.showGenerationInsights());
        }

        const regenerateBtn = document.getElementById('regenerate-btn');
        if (regenerateBtn) {
            regenerateBtn.addEventListener('click', () => this.regenerateDecks());
        }

        const backToHomeBtn = document.getElementById('back-to-home-btn');
        if (backToHomeBtn) {
            backToHomeBtn.addEventListener('click', () => this.showView('home'));
        }
    }

    updateAILockStatus() {
        // AI Generator is always available - no more lock system
        const lockOverlay = document.getElementById('ai-lock-overlay');
        const regenerateBtn = document.getElementById('regenerate-btn');

        // Hide lock overlay and enable regenerate button
        if (lockOverlay) {
            lockOverlay.style.display = 'none';
        }
        if (regenerateBtn) {
            regenerateBtn.disabled = false;
        }

        // AI will generate content based on actual user study patterns
        console.log('🤖 AI system ready - will generate content based on your study patterns');
    }

    updateAIGenerationStatus() {
        const aiRequirements = document.getElementById('ai-requirements');
        const aiButtons = document.querySelectorAll('.btn-ai, .btn-ai-subject');
        
        if (!aiRequirements) return;
        
        // Check if user has enough data for AI generation
        const profile = JSON.parse(localStorage.getItem('ai-learning-profile') || '{}');
        const sessionCount = profile.preferences?.accuracyTrends?.length || 0;
        
        if (sessionCount >= 2) {
            // User has enough data
            aiRequirements.innerHTML = `
                <p>✅ <strong>AI Ready!</strong> Generated from ${sessionCount} study sessions</p>
            `;
            aiRequirements.style.background = 'rgba(34, 197, 94, 0.1)';
            aiRequirements.style.borderColor = 'rgba(34, 197, 94, 0.2)';
            aiRequirements.style.color = '#166534';
            
            // Enable AI buttons
            aiButtons.forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
            });
        } else {
            // User needs more data
            const needed = 2 - sessionCount;
            aiRequirements.innerHTML = `
                <p>📊 <strong>Requirements:</strong> Complete ${needed} more study session${needed === 1 ? '' : 's'} to unlock AI generation</p>
            `;
            aiRequirements.style.background = 'rgba(59, 130, 246, 0.1)';
            aiRequirements.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            aiRequirements.style.color = '#1e40af';
            
            // Disable AI buttons
            aiButtons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.5';
            });
        }
    }

    // Removed generateStarterDecks - AI now creates decks without preset content

    generateIntelligentTemplates(deckName, subject, count = 10) {
        // Analyze the deck name to understand what specific topic to focus on
        const topicAnalysis = this.analyzeDeckTopic(deckName, subject);
        
        // Generate contextually relevant questions based on the specific topic
        const templates = [];
        
        // Use AI-driven template generation based on the actual topic
        if (topicAnalysis.isGCSE) {
            templates.push(...this.generateGCSESpecificTemplates(topicAnalysis));
        } else if (topicAnalysis.specificTopic) {
            templates.push(...this.generateTopicSpecificTemplates(topicAnalysis));
        } else {
            templates.push(...this.generateSubjectBasedTemplates(subject));
        }
        
        // Ensure we have enough templates
        while (templates.length < count) {
            templates.push(...this.generateAdditionalRelevantTemplates(topicAnalysis, subject));
        }
        
        // Return the requested number of templates, shuffled
        return templates.slice(0, count).sort(() => Math.random() - 0.5);
    }
    
    analyzeDeckTopic(deckName, subject) {
        const name = deckName.toLowerCase();
        const subj = subject.toLowerCase();
        
        const analysis = {
            originalName: deckName,
            originalSubject: subject,
            isGCSE: name.includes('gcse') || name.includes('year') || subj.includes('gcse'),
            specificTopic: null,
            difficulty: 'intermediate',
            yearGroup: null,
            examBoard: null
        };
        
        // Extract year group
        const yearMatch = name.match(/year\s*(\d+)/);
        if (yearMatch) {
            analysis.yearGroup = parseInt(yearMatch[1]);
        }
        
        // Extract exam board
        if (name.includes('aqa')) analysis.examBoard = 'AQA';
        if (name.includes('edexcel')) analysis.examBoard = 'Edexcel';
        if (name.includes('ocr')) analysis.examBoard = 'OCR';
        
        // Identify specific topics within subjects
        if (subj.includes('math') || name.includes('math')) {
            if (name.includes('algebra')) analysis.specificTopic = 'algebra';
            else if (name.includes('geometry')) analysis.specificTopic = 'geometry';
            else if (name.includes('calculus')) analysis.specificTopic = 'calculus';
            else if (name.includes('trigonometry')) analysis.specificTopic = 'trigonometry';
            else if (name.includes('statistics')) analysis.specificTopic = 'statistics';
            else if (name.includes('percentage')) analysis.specificTopic = 'percentages';
            else if (name.includes('fraction')) analysis.specificTopic = 'fractions';
        } else if (subj.includes('biology') || name.includes('biology')) {
            if (name.includes('cell')) analysis.specificTopic = 'cell_biology';
            else if (name.includes('genetics')) analysis.specificTopic = 'genetics';
            else if (name.includes('evolution')) analysis.specificTopic = 'evolution';
            else if (name.includes('photosynthesis')) analysis.specificTopic = 'photosynthesis';
            else if (name.includes('respiration')) analysis.specificTopic = 'respiration';
            else if (name.includes('organ')) analysis.specificTopic = 'organ_systems';
        } else if (subj.includes('chemistry') || name.includes('chemistry')) {
            if (name.includes('atomic')) analysis.specificTopic = 'atomic_structure';
            else if (name.includes('periodic')) analysis.specificTopic = 'periodic_table';
            else if (name.includes('bonding')) analysis.specificTopic = 'chemical_bonding';
            else if (name.includes('acid')) analysis.specificTopic = 'acids_bases';
            else if (name.includes('reaction')) analysis.specificTopic = 'chemical_reactions';
        } else if (subj.includes('physics') || name.includes('physics')) {
            if (name.includes('force')) analysis.specificTopic = 'forces';
            else if (name.includes('energy')) analysis.specificTopic = 'energy';
            else if (name.includes('wave')) analysis.specificTopic = 'waves';
            else if (name.includes('electric')) analysis.specificTopic = 'electricity';
            else if (name.includes('magnet')) analysis.specificTopic = 'magnetism';
        } else if (subj.includes('history') || name.includes('history')) {
            if (name.includes('world war')) analysis.specificTopic = 'world_wars';
            else if (name.includes('medieval')) analysis.specificTopic = 'medieval';
            else if (name.includes('roman')) analysis.specificTopic = 'roman_empire';
            else if (name.includes('victorian')) analysis.specificTopic = 'victorian';
        } else if (subj.includes('geography') || name.includes('geography')) {
            if (name.includes('climate')) analysis.specificTopic = 'climate';
            else if (name.includes('population')) analysis.specificTopic = 'population';
            else if (name.includes('river')) analysis.specificTopic = 'rivers';
            else if (name.includes('volcano')) analysis.specificTopic = 'volcanoes';
        }
        
        return analysis;
    }
    
    generateGCSESpecificTemplates(analysis) {
        const templates = [];
        const { specificTopic, yearGroup, originalSubject } = analysis;
        
        // Generate GCSE-appropriate questions based on curriculum
        if (originalSubject.toLowerCase().includes('math')) {
            if (specificTopic === 'algebra') {
                templates.push(
                    { question: 'Solve for x: 3x + 7 = 25', answer: 'x = 6' },
                    { question: 'Expand: 3(x + 4)', answer: '3x + 12' },
                    { question: 'Factorise: x² + 5x + 6', answer: '(x + 2)(x + 3)' },
                    { question: 'If y = 2x + 1, find y when x = 4', answer: 'y = 9' }
                );
            } else if (specificTopic === 'geometry') {
                templates.push(
                    { question: 'What is the area of a rectangle 8cm × 5cm?', answer: '40 cm²' },
                    { question: 'What is the circumference of a circle with radius 3cm? (use π = 3.14)', answer: '18.84 cm' },
                    { question: 'Sum of interior angles in a pentagon?', answer: '540°' },
                    { question: 'What type of triangle has all sides equal?', answer: 'Equilateral triangle' }
                );
            } else {
                templates.push(
                    { question: 'Calculate 25% of £80', answer: '£20' },
                    { question: 'What is 2³?', answer: '8' },
                    { question: 'Convert 0.75 to a fraction', answer: '3/4' },
                    { question: 'Round 15.678 to 2 decimal places', answer: '15.68' }
                );
            }
        } else if (originalSubject.toLowerCase().includes('biology')) {
            if (specificTopic === 'cell_biology') {
                templates.push(
                    { question: 'What controls what enters and leaves a cell?', answer: 'Cell membrane' },
                    { question: 'Where is DNA found in a cell?', answer: 'Nucleus' },
                    { question: 'What do mitochondria do?', answer: 'Release energy for the cell' },
                    { question: 'What do ribosomes make?', answer: 'Proteins' }
                );
            } else if (specificTopic === 'photosynthesis') {
                templates.push(
                    { question: 'Complete: Carbon dioxide + water → ? + oxygen', answer: 'Glucose' },
                    { question: 'What gas is released during photosynthesis?', answer: 'Oxygen' },
                    { question: 'Where does photosynthesis occur in plants?', answer: 'Chloroplasts' },
                    { question: 'What absorbs light energy for photosynthesis?', answer: 'Chlorophyll' }
                );
            } else {
                templates.push(
                    { question: 'How many chambers does a human heart have?', answer: '4' },
                    { question: 'What carries oxygen in blood?', answer: 'Red blood cells' },
                    { question: 'What is the largest organ in the human body?', answer: 'Skin' },
                    { question: 'What system includes the brain and spinal cord?', answer: 'Nervous system' }
                );
            }
        } else if (originalSubject.toLowerCase().includes('chemistry')) {
            if (specificTopic === 'atomic_structure') {
                templates.push(
                    { question: 'What are the three subatomic particles?', answer: 'Protons, neutrons, electrons' },
                    { question: 'Where are protons and neutrons found?', answer: 'In the nucleus' },
                    { question: 'What charge do electrons have?', answer: 'Negative' },
                    { question: 'How do you calculate neutrons? (Formula)', answer: 'Mass number - Atomic number' }
                );
            } else if (specificTopic === 'periodic_table') {
                templates.push(
                    { question: 'What is the chemical symbol for sodium?', answer: 'Na' },
                    { question: 'How many elements are in Group 1?', answer: '6 (plus hydrogen)' },
                    { question: 'What are Group 1 elements called?', answer: 'Alkali metals' },
                    { question: 'What is the atomic number of carbon?', answer: '6' }
                );
            } else {
                templates.push(
                    { question: 'What is the chemical formula for water?', answer: 'H₂O' },
                    { question: 'What gas is produced when metals react with acids?', answer: 'Hydrogen' },
                    { question: 'What is the pH of pure water?', answer: '7' },
                    { question: 'What colour does litmus paper turn in acid?', answer: 'Red' }
                );
            }
        }
        
        return templates;
    }
    
    generateTopicSpecificTemplates(analysis) {
        const templates = [];
        const { specificTopic, originalName } = analysis;
        
        // Generate questions based on the specific topic extracted from the deck name
        switch (specificTopic) {
            case 'algebra':
                templates.push(
                    { question: `In ${originalName}: Solve 2x - 5 = 11`, answer: 'x = 8' },
                    { question: `${originalName} problem: Expand (x + 3)²`, answer: 'x² + 6x + 9' },
                    { question: `From ${originalName}: If 3y = 15, what is y?`, answer: 'y = 5' }
                );
                break;
            case 'cell_biology':
                templates.push(
                    { question: `${originalName}: What is the function of the cell wall?`, answer: 'Provides structural support and protection' },
                    { question: `From ${originalName}: Name two organelles found only in plant cells`, answer: 'Chloroplasts and cell wall' },
                    { question: `${originalName} topic: What is cytoplasm?`, answer: 'Jelly-like substance where chemical reactions occur' }
                );
                break;
            case 'atomic_structure':
                templates.push(
                    { question: `${originalName}: What is an isotope?`, answer: 'Atoms with same number of protons but different neutrons' },
                    { question: `From ${originalName}: Define atomic number`, answer: 'Number of protons in an atom' },
                    { question: `${originalName} concept: What is mass number?`, answer: 'Total number of protons and neutrons' }
                );
                break;
            // Add more specific cases as needed
            default:
                templates.push(
                    { question: `Related to ${originalName}: What is the main concept?`, answer: 'Check your study materials for key definitions' },
                    { question: `From ${originalName}: What are the key principles?`, answer: 'Review the fundamental concepts in this topic' }
                );
        }
        
        return templates;
    }
    
    generateSubjectBasedTemplates(subject) {
        const templates = [];
        const subj = subject.toLowerCase();
        
        if (subj.includes('math')) {
            templates.push(
                { question: 'What is 12 × 15?', answer: '180' },
                { question: 'Calculate 30% of 250', answer: '75' },
                { question: 'What is the square root of 169?', answer: '13' },
                { question: 'Solve: x + 15 = 23', answer: 'x = 8' }
            );
        } else if (subj.includes('science') || subj.includes('biology') || subj.includes('chemistry') || subj.includes('physics')) {
            templates.push(
                { question: 'What is the chemical symbol for oxygen?', answer: 'O' },
                { question: 'How many bones are in an adult human body?', answer: '206' },
                { question: 'What is the speed of light in a vacuum?', answer: '299,792,458 m/s' },
                { question: 'What gas do plants release during photosynthesis?', answer: 'Oxygen' }
            );
        } else if (subj.includes('history')) {
            templates.push(
                { question: 'In what year did World War II end?', answer: '1945' },
                { question: 'Who was the first person to walk on the moon?', answer: 'Neil Armstrong' },
                { question: 'What year was the Berlin Wall built?', answer: '1961' },
                { question: 'Which empire was known for building Machu Picchu?', answer: 'Inca Empire' }
            );
        } else if (subj.includes('geography')) {
            templates.push(
                { question: 'What is the highest mountain in the world?', answer: 'Mount Everest' },
                { question: 'Which river is the longest in the world?', answer: 'Nile River' },
                { question: 'What is the smallest continent?', answer: 'Australia' },
                { question: 'Which country has the most time zones?', answer: 'France (12 time zones)' }
            );
        } else {
            templates.push(
                { question: 'What is the capital of the United Kingdom?', answer: 'London' },
                { question: 'How many days are there in a leap year?', answer: '366' },
                { question: 'What is the largest ocean on Earth?', answer: 'Pacific Ocean' },
                { question: 'Who wrote "Romeo and Juliet"?', answer: 'William Shakespeare' }
            );
        }
        
        return templates;
    }
    
    generateAdditionalRelevantTemplates(analysis, subject) {
        // Generate additional templates to ensure we have enough
        const additionalTemplates = [];
        const { originalName, specificTopic } = analysis;
        
        // Create contextual questions that reference the original deck name
        additionalTemplates.push(
            { question: `Key concept from "${originalName}": What should you remember most?`, answer: 'Focus on the main learning objectives of this topic' },
            { question: `Important for "${originalName}": What are common mistakes?`, answer: 'Review errors and practice problem areas' },
            { question: `From "${originalName}" study: How can you apply this knowledge?`, answer: 'Connect concepts to real-world examples' }
        );
        
        return additionalTemplates;
    }

    saveGeneratedDecks(decks) {
        localStorage.setItem('flashcards-generated-decks', JSON.stringify(decks));
    }

    loadGeneratedDecks() {
        const saved = localStorage.getItem('flashcards-generated-decks');
        const decks = saved ? JSON.parse(saved) : [];
        
        // Ensure all generated decks have style and color properties
        return decks.map(deck => ({
            ...deck,
            style: deck.style || 'classic',
            color: deck.color || 'blue'
        }));
    }

    renderGeneratedDecks(decks) {
        const grid = document.getElementById('generated-decks-grid');
        if (!grid) return;

        grid.innerHTML = '';
        
        decks.forEach(deck => {
            const deckCard = this.createGeneratedDeckCard(deck);
            grid.appendChild(deckCard);
        });
    }

    createGeneratedDeckCard(deck) {
        const card = document.createElement('div');
        card.className = `deck-card generated-deck ${deck.isAdopted ? 'adopted' : ''}`;
        
        // Determine button content based on adoption status
        const adoptButton = deck.isAdopted ? 
            `<button class="btn btn-accent btn-small adopted-indicator" disabled title="Already adopted">
                ✅ Adopted
            </button>` :
            `<button class="btn btn-accent btn-small" onclick="event.stopPropagation(); adoptDeck('${deck.id}')" title="Add to your personal collection">
                📥 Adopt
            </button>`;
        
        card.innerHTML = `
            <div class="deck-header">
                <div class="deck-info">
                    <h4>${deck.name} ${deck.isAdopted ? '<span class="adopted-indicator">✅</span>' : ''}</h4>
                    <div class="deck-meta">
                        <span class="subject-badge">${deck.subject}</span>
                        <span class="difficulty-badge ${deck.difficulty.toLowerCase()}">${deck.difficulty}</span>
                        <span class="ai-badge">🤖 AI Generated</span>
                        ${deck.isAdopted ? '<span class="adopted-badge">📚 In Collection</span>' : ''}
                    </div>
                    <p class="deck-description">${deck.cards.length} cards • Generated ${new Date(deck.generatedAt).toLocaleDateString()}${deck.isAdopted ? ` • Adopted ${new Date(deck.adoptedAt).toLocaleDateString()}` : ''}</p>
                </div>
            </div>
            <div class="deck-buttons">
                <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); startStudy('${deck.id}')" title="Study this deck">
                    ▶️ Study
                </button>
                <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); viewGeneratedDeck('${deck.id}')" title="View deck contents">
                    👁️ View
                </button>
                ${adoptButton}
                <button class="deck-delete" onclick="event.stopPropagation(); deleteGeneratedDeck('${deck.id}')" title="Remove generated deck">
                    🗑️
                </button>
            </div>
        `;
        return card;
    }

    setupCustomizationListeners() {
        // Style options
        document.querySelectorAll('.style-option').forEach(option => {
            option.addEventListener('click', (e) => {
                document.querySelectorAll('.style-option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                this.selectedStyle = option.dataset.style;
            });
        });

        // Color options
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                this.selectedColor = option.dataset.color;
            });
        });

        // Set default selections
        document.querySelector('.style-option[data-style="classic"]')?.classList.add('selected');
        document.querySelector('.color-option[data-color="blue"]')?.classList.add('selected');
    }

    showView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === viewName) {
                btn.classList.add('active');
            }
        });

        // Show view
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewName}-view`).classList.add('active');

        // Special handling for views
        if (viewName === 'home') {
            this.renderDecks();
            this.updateAILockStatus();
        } else if (viewName === 'create') {
            this.updateAIGenerationStatus();
            if (!this.isEditMode) {
                // Reset to create mode if not already in edit mode
                this.updateUIForEditMode(false);
            }
        } else if (viewName === 'stats') {
            // Initialize stats page with a small delay to ensure DOM is ready
            setTimeout(() => {
                this.initializeStatsPage();
            }, 100);
        }
        
        // Add smooth transition class
        document.querySelectorAll('.view').forEach(view => {
            view.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
    }

    // Deck Management
    loadDecks() {
        const saved = localStorage.getItem('flashcards-decks');
        const decks = saved ? JSON.parse(saved) : [];
        
        // Ensure all decks have style and color properties (for backward compatibility)
        return decks.map(deck => ({
            ...deck,
            style: deck.style || 'classic',
            color: deck.color || 'blue'
        }));
    }

    saveDecks() {
        localStorage.setItem('flashcards-decks', JSON.stringify(this.decks));
    }

    // Adaptive Learning System
    loadLearningData() {
        const saved = localStorage.getItem('flashcards-learning-data');
        return saved ? JSON.parse(saved) : {};
    }

    saveLearningData() {
        localStorage.setItem('flashcards-learning-data', JSON.stringify(this.learningData));
    }

    // Study Session Tracking
    loadSessionData() {
        const saved = localStorage.getItem('flashcards-sessions');
        return saved ? JSON.parse(saved) : [];
    }

    saveSessionData(sessions) {
        localStorage.setItem('flashcards-sessions', JSON.stringify(sessions));
    }

    // 🪙 Gamification System - Coin Management
    loadCoins() {
        const saved = localStorage.getItem('flashcards-coins');
        return saved ? parseInt(saved) : 100; // Start with 100 coins
    }

    saveCoins() {
        localStorage.setItem('flashcards-coins', this.coins.toString());
    }

    initializeCoinSystem() {
        console.log('💰 Coin system initialized with', this.coins, 'coins');
        this.updateCoinDisplay();
        
        // Initialize coin transaction history
        this.coinHistory = this.loadCoinHistory();
    }

    loadCoinHistory() {
        const saved = localStorage.getItem('flashcards-coin-history');
        return saved ? JSON.parse(saved) : [];
    }

    saveCoinHistory() {
        // Keep only last 50 transactions to prevent storage bloat
        if (this.coinHistory.length > 50) {
            this.coinHistory = this.coinHistory.slice(-50);
        }
        localStorage.setItem('flashcards-coin-history', JSON.stringify(this.coinHistory));
    }

    addCoinTransaction(amount, type, reason) {
        const transaction = {
            amount: amount,
            type: type, // 'earn' or 'lose'
            reason: reason,
            timestamp: Date.now(),
            balance: this.coins
        };
        
        this.coinHistory.unshift(transaction); // Add to beginning
        this.saveCoinHistory();
    }

    // 🚀 Power-ups and Shop System
    loadPowerUps() {
        const saved = localStorage.getItem('flashcards-powerups');
        return saved ? JSON.parse(saved) : {
            hints: 0,
            skipCards: 0,
            doubleCoins: 0,
            streakShields: 0,
            activePowerUps: {
                doubleCoinsActive: false,
                streakShieldActive: false
            }
        };
    }

    savePowerUps() {
        localStorage.setItem('flashcards-powerups', JSON.stringify(this.powerUps));
    }

    initializePowerUpSystem() {
        console.log('🚀 Power-up system initialized:', this.powerUps);
        this.updatePowerUpDisplay();
    }

    updatePowerUpDisplay() {
        // Update power-up counts in UI
        const hintCount = document.querySelector('.hint-count');
        const skipCount = document.querySelector('.skip-count');
        const doubleCount = document.querySelector('.double-count');
        const shieldCount = document.querySelector('.shield-count');
        
        if (hintCount) hintCount.textContent = this.powerUps.hints;
        if (skipCount) skipCount.textContent = this.powerUps.skipCards;
        if (doubleCount) doubleCount.textContent = this.powerUps.doubleCoins;
        if (shieldCount) shieldCount.textContent = this.powerUps.streakShields;
    }

    purchasePowerUp(type, cost) {
        if (this.coins < cost) {
            this.showNotification('Not enough coins! 💸', 'error');
            return false;
        }

        this.coins -= cost;
        this.saveCoins();
        this.updateCoinDisplay();
        this.addCoinTransaction(cost, 'lose', `Purchased ${type}`);

        // Award power-up
        this.powerUps[type]++;
        this.savePowerUps();
        this.updatePowerUpDisplay();

        this.showNotification(`Purchased ${type}! 🚀`, 'success');
        return true;
    }

    usePowerUp(type) {
        if (this.powerUps[type] <= 0) {
            this.showNotification(`No ${type} available! Buy more in the shop.`, 'error');
            return false;
        }

        this.powerUps[type]--;
        this.savePowerUps();
        this.updatePowerUpDisplay();
        
        // Track power-up usage for statistics
        this.trackPowerUpUsage(type);
        
        console.log(`🚀 Used ${type} power-up`);
        return true;
    }
    
    trackPowerUpUsage(type) {
        // Initialize power-up usage tracking if not exists
        if (!this.powerUpUsageStats) {
            this.powerUpUsageStats = this.loadPowerUpUsageStats();
        }
        
        // Update usage count
        if (!this.powerUpUsageStats[type]) {
            this.powerUpUsageStats[type] = 0;
        }
        this.powerUpUsageStats[type]++;
        
        // Track usage in current session
        if (this.currentSession) {
            if (!this.currentSession.powerUpsUsed) {
                this.currentSession.powerUpsUsed = {};
            }
            if (!this.currentSession.powerUpsUsed[type]) {
                this.currentSession.powerUpsUsed[type] = 0;
            }
            this.currentSession.powerUpsUsed[type]++;
        }
        
        // Save to localStorage
        this.savePowerUpUsageStats();
        
        console.log(`📊 Tracked ${type} usage - Total: ${this.powerUpUsageStats[type]}`);
    }
    
    loadPowerUpUsageStats() {
        const saved = localStorage.getItem('flashcards-powerup-usage');
        return saved ? JSON.parse(saved) : {
            hints: 0,
            skipCards: 0,
            doubleCoins: 0,
            streakShields: 0
        };
    }
    
    savePowerUpUsageStats() {
        localStorage.setItem('flashcards-powerup-usage', JSON.stringify(this.powerUpUsageStats));
    }

    activateDoubleCoins() {
        if (!this.usePowerUp('doubleCoins')) return false;
        
        this.powerUps.activePowerUps.doubleCoinsActive = true;
        this.savePowerUps();
        this.showNotification('Double Coins activated for this session! 💰✨', 'success');
        
        // Visual indicator
        const coinDisplay = document.querySelector('.coin-display');
        if (coinDisplay) {
            coinDisplay.classList.add('double-coins-active');
        }
        
        return true;
    }

    activateStreakShield() {
        if (!this.usePowerUp('streakShields')) return false;
        
        this.powerUps.activePowerUps.streakShieldActive = true;
        this.savePowerUps();
        this.showNotification('Streak Shield activated! Next wrong answer won\'t break your streak! 🛡️', 'success');
        
        return true;
    }

    updateCoinDisplay() {
        // Update coin display in header
        const coinElement = document.querySelector('.coin-balance');
        if (coinElement) {
            coinElement.textContent = this.coins.toLocaleString();
        }
    }

    earnCoins(amount, reason = 'Correct answer!') {
        const previousCoins = this.coins;
        let finalAmount = amount;
        
        // Apply double coins power-up
        if (this.powerUps.activePowerUps.doubleCoinsActive) {
            finalAmount = amount * 2;
            reason += ' (2x boost!)';
        }
        
        this.coins += finalAmount;
        this.saveCoins();
        this.updateCoinDisplay();
        this.showCoinAnimation(finalAmount, 'earn', reason);
        this.addCoinTransaction(finalAmount, 'earn', reason);
        console.log(`💰 Earned ${finalAmount} coins! Total: ${this.coins} (${reason})`);
        
        // Check for coin milestones
        this.checkCoinMilestones(previousCoins, this.coins);
        

        
        // Check coin achievements
        if (typeof checkAchievements === 'function') {
            checkAchievements('coinsEarned', { totalCoins: this.coins });
        }
    }

    loseCoins(amount, reason = 'Incorrect answer') {
        const actualLoss = Math.min(amount, this.coins); // Don't go below 0
        this.coins -= actualLoss;
        this.saveCoins();
        this.updateCoinDisplay();
        this.showCoinAnimation(actualLoss, 'lose', reason);
        this.addCoinTransaction(actualLoss, 'lose', reason);
        console.log(`💸 Lost ${actualLoss} coins! Total: ${this.coins} (${reason})`);
        return actualLoss;
    }

    showCoinAnimation(amount, type, reason) {
        // Create floating coin animation
        const animation = document.createElement('div');
        animation.className = `coin-animation ${type}`;
        animation.innerHTML = `
            <div class="coin-popup">
                <div class="coin-icon">${type === 'earn' ? '💰' : '💸'}</div>
                <div class="coin-amount">${type === 'earn' ? '+' : '-'}${amount}</div>
                <div class="coin-reason">${reason}</div>
            </div>
        `;
        
        document.body.appendChild(animation);
        
        // Remove animation after it completes
        setTimeout(() => {
            if (animation.parentNode) {
                animation.parentNode.removeChild(animation);
            }
        }, 3000);
    }

    calculateCoinReward(difficulty, streakCount = 0, responseTime = 0) {
        let baseReward = 10;
        
        // Difficulty multiplier
        const difficultyMultipliers = {
            'Beginner': 1.0,
            'Intermediate': 1.5,
            'Advanced': 2.0,
            'Expert': 2.5
        };
        
        const multiplier = difficultyMultipliers[difficulty] || 1.0;
        let reward = Math.floor(baseReward * multiplier);
        
        // Streak bonus (up to 50% extra)
        if (streakCount > 0) {
            const streakBonus = Math.min(streakCount * 2, 15);
            reward += streakBonus;
        }
        
        // Speed bonus (if answered quickly)
        if (responseTime > 0 && responseTime < 5000) { // Less than 5 seconds
            reward += 5;
        }
        
        return reward;
    }

    calculateCoinPenalty(difficulty) {
        const basePenalty = 5;
        const difficultyMultipliers = {
            'Beginner': 0.5,
            'Intermediate': 1.0,
            'Advanced': 1.5,
            'Expert': 2.0
        };
        
        const multiplier = difficultyMultipliers[difficulty] || 1.0;
        return Math.floor(basePenalty * multiplier);
    }

    getCorrectStreakCount() {
        // Track correct answers in current session for streak bonus
        if (!this.currentSessionStreak) {
            this.currentSessionStreak = 0;
        }
        return this.currentSessionStreak;
    }

    incrementStreak() {
        if (!this.currentSessionStreak) {
            this.currentSessionStreak = 0;
        }
        this.currentSessionStreak++;
    }

    resetStreak() {
        // Check if streak shield is active
        if (this.powerUps.activePowerUps.streakShieldActive) {
            this.powerUps.activePowerUps.streakShieldActive = false;
            this.savePowerUps();
            this.showNotification('Streak Shield protected your streak! 🛡️✨', 'success');
            return; // Don't reset streak
        }
        
        this.currentSessionStreak = 0;
    }

    checkCoinMilestones(previousCoins, currentCoins) {
        const milestones = [
            { coins: 100, title: 'The First Taste of Victory', message: 'You earned your first 100 coins! 🎉', emoji: '💯' },
            { coins: 250, title: 'Coin Collector', message: 'A Quarter of The Way to 1000! (That\'s a math reference)', emoji: '🏆' },
            { coins: 500, title: 'Halfway Theeerrrrree', message: 'Livin\' on a prayerrr!', emoji: '🌟' },
            { coins: 1000, title: 'Expanding The Collection', message: 'Awesome!', emoji: '👑' },
            { coins: 2500, title: 'WOOO!!!!', message: 'WOOOOOOOOOOOOOOO!!', emoji: '💎' },
            { coins: 5000, title: '????', message: 'Do You Have a Life? (Blink Twice if You Need Help)', emoji: '🎖️' },
            { coins: 10000, title: 'woah.', message: 'Just... Woah.', emoji: '🤯' },
            { coins: 1000000, title: 'Developer', message: 'Either you\'re cheating or you\'re... me?', emoji: '👨‍💻' }
        ];

        for (const milestone of milestones) {
            if (previousCoins < milestone.coins && currentCoins >= milestone.coins) {
                this.showMilestoneAchievement(milestone);
                break; // Only show one milestone at a time
            }
        }
    }

    showMilestoneAchievement(milestone) {
        // Create achievement popup
        const achievement = document.createElement('div');
        achievement.className = 'achievement-popup';
        achievement.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-emoji">${milestone.emoji}</div>
                <div class="achievement-title">${milestone.title}</div>
                <div class="achievement-message">${milestone.message}</div>
                <div class="achievement-coins">💰 ${milestone.coins.toLocaleString()} Coins Reached!</div>
            </div>
        `;
        
        document.body.appendChild(achievement);
        
        // Trigger animation
        setTimeout(() => achievement.classList.add('show'), 100);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            achievement.classList.remove('show');
            setTimeout(() => {
                if (achievement.parentNode) {
                    achievement.parentNode.removeChild(achievement);
                }
            }, 500);
        }, 5000);
        
        console.log(`🏆 Achievement unlocked: ${milestone.title} - ${milestone.message}`);
    }

    // Initialize level system
    initializeLevelSystem() {
        // Call the global XP system initialization
        if (typeof window.initializeXPSystem === 'function') {
            window.initializeXPSystem();
        } else {
            // Fallback: try direct calls
            if (typeof loadUserXP === 'function') {
                loadUserXP();
            }
            if (typeof updateLevelDisplay === 'function') {
                updateLevelDisplay();
            }
        }
        
        // Force update the display after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.forceUpdateLevelDisplay();
        }, 100);
        
        console.log('💫 Level system initialized');
    }

    // Force update the level display with current values
    forceUpdateLevelDisplay() {
        const levelElement = document.getElementById('user-level');
        const xpElement = document.getElementById('user-xp');
        const progressElement = document.getElementById('xp-progress');
        
        // Get current values from global variables or defaults
        const currentLevel = window.userLevel || 1;
        const currentXP = window.userXP || 0;
        
        // Update level number
        if (levelElement) {
            levelElement.textContent = currentLevel;
        }
        
        // Update XP display and progress bar
        if (xpElement && progressElement) {
            // Calculate progress for current level
            const LEVEL_THRESHOLDS = window.LEVEL_THRESHOLDS || [0, 100, 250, 450, 700, 1000];
            const nextLevelXP = LEVEL_THRESHOLDS[currentLevel] || (currentLevel * 100);
            const currentLevelXP = currentLevel > 1 ? (LEVEL_THRESHOLDS[currentLevel - 1] || ((currentLevel - 1) * 100)) : 0;
            const progressXP = currentXP - currentLevelXP;
            const neededXP = nextLevelXP - currentLevelXP;
            
            // Update text display
            xpElement.textContent = `${Math.max(0, progressXP)}/${neededXP}`;
            
            // Update progress bar
            const percentage = Math.max(0, Math.min(100, (progressXP / neededXP) * 100));
            progressElement.style.width = `${percentage}%`;
            
            console.log('Level display updated:', { currentLevel, currentXP, progressXP, neededXP, percentage });
        }
    }

    // Show level info modal
    showLevelInfo() {
        // Access global level variables
        const currentLevel = window.userLevel || 1;
        const currentXP = window.userXP || 0;
        const nextLevelXP = window.getXPForNextLevel ? window.getXPForNextLevel(currentLevel) : 100;
        const currentLevelXP = currentLevel > 1 && window.LEVEL_THRESHOLDS ? window.LEVEL_THRESHOLDS[currentLevel - 1] : 0;
        const progressXP = currentXP - currentLevelXP;
        const neededXP = nextLevelXP - currentLevelXP;
        const progressPercent = Math.round((progressXP / neededXP) * 100);

        const modal = document.createElement('div');
        modal.className = 'level-info-modal';
        modal.innerHTML = `
            <div class="level-info-content">
                <div class="level-info-header">
                    <h3>⭐ Level ${currentLevel}</h3>
                    <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <div class="level-info-body">
                    <div class="level-progress-display">
                        <div class="level-progress-bar">
                            <div class="level-progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <div class="level-progress-text">${progressXP} / ${neededXP} XP (${progressPercent}%)</div>
                    </div>
                    <div class="level-info-stats">
                        <div class="stat-item">
                            <div class="stat-label">Total XP</div>
                            <div class="stat-value">${currentXP.toLocaleString()}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Next Level</div>
                            <div class="stat-value">${neededXP - progressXP} XP to go</div>
                        </div>
                    </div>
                    <div class="level-benefits">
                        <h4>How to gain XP:</h4>
                        <ul>
                            <li>📚 Study cards: +10 XP per correct answer</li>
                            <li>🎯 Perfect completion: +100 XP</li>
                            <li>📝 Create decks: +25 XP</li>
                            <li>🔥 Study streaks: +5 XP per streak level</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 10000);
    }

    // 💡 AI Hint System
    async useHint() {
        if (!this.usePowerUp('hints')) {
            // Offer to buy hints
            if (confirm('No hints available! Would you like to buy a hint for 100 coins?')) {
                if (this.purchaseHint()) {
                    return await this.useHint(); // Try again after purchase
                }
            }
            return false;
        }

        const currentCard = this.currentCards[this.currentCardIndex];
        if (!currentCard) return false;

        // Show loading state
        this.showHintLoading();

        try {
            const hint = await this.generateHint(currentCard);
            if (hint) {
                this.showHint(hint);
                return true;
            } else {
                // AI failed - refund and show error
                this.powerUps.hints++;
                this.savePowerUps();
                this.updatePowerUpDisplay();
                return false;
            }
        } catch (error) {
            console.error('Hint generation failed:', error);
            this.showNotification('AI unavailable, good luck!', 'error');
            // Refund the hint
            this.powerUps.hints++;
            this.savePowerUps();
            this.updatePowerUpDisplay();
            return false;
        }
    }

    purchaseHint() {
        return this.purchasePowerUp('hints', 100);
    }

    async generateHint(card) {
        // First check if card has custom hint
        if (card.customHint && card.customHint.trim()) {
            return {
                type: 'custom',
                text: card.customHint,
                source: 'Custom hint from deck creator'
            };
        }

        // Try AI hint generation - no fallback
        const aiHint = await this.generateAIHint(card.question, card.answer);
        if (aiHint) {
            return {
                type: 'ai',
                text: aiHint,
                source: 'AI-generated hint'
            };
        } else {
            // Return null if AI failed - no fallback
            return null;
        }
    }

    async generateAIHint(question, answer) {
        console.log('🤖 Generating AI hint for:', question, 'Answer:', answer);
        
        try {
            // Show loading state to user
            this.showHintLoadingState();
            
            let hint = null;
            
            // Try AI Manager first (uses WebLLM, Ollama, etc.)
            if (this.aiManagerReady && this.aiManager) {
                try {
                    console.log('🤖 Using AI Manager for hint generation...');
                    const hintResult = await this.aiManager.generateHint(question, answer);
                    
                    if (hintResult && hintResult.text) {
                        hint = hintResult.text;
                        console.log('✅ AI Manager generated hint successfully:', hint);
                    }
                } catch (error) {
                    console.log('AI Manager hint failed, trying Hugging Face:', error.message);
                }
            }
            
            // Fallback to Hugging Face if AI Manager failed
            if (!hint) {
                try {
                    console.log('🔄 Trying Hugging Face fallback for hint...');
                    hint = await this.getHuggingFaceHint(question, answer);
                } catch (error) {
                    console.log('Hugging Face hint failed:', error.message);
                }
            }
            
            // Hide loading state
            this.hideHintLoadingState();
            
            if (hint) {
                console.log('✅ AI hint successful:', hint);
                return hint;
            } else {
                throw new Error('All AI hint methods failed');
            }
        } catch (error) {
            console.log('❌ All AI hint generation failed:', error);
            
            // Hide loading state and show error
            this.hideHintLoadingState();
            
            // Show error message instead of fallback
            this.showNotification('AI unavailable, good luck!', 'error');
            console.error('All AI systems failed - cannot generate hint without AI');
            return null;
        }
    }
    
    showHintLoadingState() {
        const hintText = document.querySelector('.hint-text');
        if (hintText) {
            hintText.innerHTML = '🤖 <em>AI is thinking...</em>';
            hintText.style.opacity = '0.7';
        }
    }
    
    hideHintLoadingState() {
        const hintText = document.querySelector('.hint-text');
        if (hintText) {
            hintText.style.opacity = '1';
        }
    }



    async getHuggingFaceHint(question, answer) {
        // Get user statistics for personalized hints
        const profile = this.getUserProfile();
        const overallAccuracy = profile.preferences.accuracyTrends?.length > 0 
            ? profile.preferences.accuracyTrends.reduce((sum, acc) => sum + acc, 0) / profile.preferences.accuracyTrends.length 
            : 75;
        const yearGroup = profile.preferences?.yearGroup || 'General';
        const subjects = Object.keys(profile.deckStats || {}).join(', ') || 'Mixed subjects';
        const timeSpent = Math.round((profile.totalTimeSpent || 0) / 60); // Convert to minutes

        // Improved hint prompt
        const hintPrompt = `You are a helpful school tutor that likes to give hints to students based on questions, can you please create a helpful hint for this question: ${question} with this answer: ${answer}, that doesn't fully reveal the answer but it helps significantly towards the answer, an example would be a "Fill in the Blank" type hint or give the right equation to solve the question, just make a decent hint only based on the question and answer: ${question} and ${answer}.

Student Statistics:
- Overall Accuracy: ${overallAccuracy.toFixed(1)}%
- Overall Time Spent: ${timeSpent} minutes
- Year Group: ${yearGroup}  
- Subjects Studied: ${subjects}

Please tailor the hint complexity to match the student's performance level and year group.`;

        // Try multiple AI models with the improved prompt
        const models = [
            {
                name: 'microsoft/DialoGPT-medium',
                prompt: hintPrompt
            },
            {
                name: 'facebook/blenderbot-400M-distill',  
                prompt: hintPrompt
            },
            {
                name: 'huggingface/CodeBERTa-small-v1',
                prompt: hintPrompt
            },
            {
                name: 'distilbert-base-uncased-distilled-squad',
                prompt: hintPrompt
            }
        ];

        // Try each model in sequence
        for (const model of models) {
            try {
                console.log(`🤖 Trying AI model: ${model.name}`);
                
                const response = await fetch(`https://api-inference.huggingface.co/models/${model.name}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        inputs: model.prompt,
                        parameters: {
                            max_new_tokens: 80,
                            temperature: 0.6,
                            do_sample: true,
                            return_full_text: false,
                            repetition_penalty: 1.2,
                            top_p: 0.9
                        }
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    let hintText = '';
                    
                    // Handle different response formats
                    if (Array.isArray(data) && data[0]?.generated_text) {
                        hintText = data[0].generated_text.trim();
                    } else if (data.generated_text) {
                        hintText = data.generated_text.trim();
                    } else if (typeof data === 'string') {
                        hintText = data.trim();
                    }
                    
                    // Clean up the hint more thoroughly
                    hintText = hintText
                        .replace(/^(hint:|answer:|response:|clue:|think about:|consider:|the hint is:?)/i, '')
                        .replace(/^(a hint:?|here's a hint:?)/i, '')
                        .replace(/\n.*/s, '') // Remove everything after first line break
                        .trim();
                    
                    // Additional cleaning - remove common AI artifacts
                    if (hintText.startsWith('"') && hintText.endsWith('"')) {
                        hintText = hintText.slice(1, -1);
                    }
                    
                    // Validate hint quality
                    if (this.isGoodHint(hintText, question, answer)) {
                        console.log(`✅ Good hint from ${model.name}:`, hintText);
                        return `💡 ${hintText}`;
                    } else {
                        console.log(`❌ Poor quality hint from ${model.name}:`, hintText);
                    }
                }
            } catch (error) {
                console.log(`❌ Model ${model.name} failed:`, error);
                continue;
            }
        }
        
        // If all AI models fail, try a simpler approach
        return await this.getSimpleAIHint(question, answer);
    }

    isGoodHint(hintText, question, answer) {
        if (!hintText || hintText.length < 15 || hintText.length > 250) {
            return false;
        }
        
        const hintLower = hintText.toLowerCase();
        const answerLower = answer.toLowerCase();
        const questionLower = question.toLowerCase();
        
        // Reject if hint contains the full answer (unless it's a very short common word)
        if (answerLower.length > 4 && hintLower.includes(answerLower)) {
            return false;
        }
        
        // Reject hints that are completely irrelevant to the question context
        const contextMismatches = [
            // Mathematical hints for non-math questions
            {
                hint: ['calculation', 'mathematical', 'formula', 'operation', 'step by step', 'work through', 'mathematical process'],
                question: ['what is', 'name', 'capital', 'country', 'city', 'equivalent', 'similar', 'like', 'called', 'known as', 'famous for'],
                notQuestion: ['calculate', 'solve', 'equation', 'sum', 'multiply', 'divide', 'add', 'subtract', 'formula', 'compute']
            },
            // Mathematical hints specifically for "What is" questions that aren't math
            {
                hint: ['calculation', 'mathematical', 'step by step', 'work through', 'process applies'],
                question: ['what is lagos', 'what is the', 'what is nigeria', 'equivalent to', 'similar to', 'like hollywood'],
                notQuestion: ['what is 2+2', 'what is the result', 'what is the sum', 'what is the product']
            },
            // Statistical hints for factual questions
            {
                hint: ['percentage', 'statistical', 'statistics', 'rate', 'proportion'],
                question: ['school', 'name', 'capital', 'author', 'wrote', 'invented', 'equivalent', 'similar', 'called'],
                notQuestion: ['percent', '%', 'rate of', 'proportion of', 'percentage of']
            },
            // Calculation hints for cultural/geographic questions
            {
                hint: ['calculation', 'mathematical', 'work through', 'step by step'],
                question: ['hollywood', 'entertainment', 'district', 'area', 'quarter', 'neighborhood', 'culture', 'film', 'movie'],
                notQuestion: ['calculate', 'math', 'equation']
            }
        ];
        
        for (const mismatch of contextMismatches) {
            const hasHintPattern = mismatch.hint.some(pattern => hintLower.includes(pattern));
            const hasQuestionPattern = mismatch.question.some(pattern => questionLower.includes(pattern));
            const hasNotQuestionPattern = mismatch.notQuestion.some(pattern => questionLower.includes(pattern));
            
            if (hasHintPattern && hasQuestionPattern && !hasNotQuestionPattern) {
                console.log('❌ Rejecting contextually irrelevant hint:', hintText);
                return false;
            }
        }
        
        // Reject hints that are too generic or unhelpful
        const badPatterns = [
            'i cannot', 'i can\'t', 'i don\'t know', 'i\'m sorry', 'i am not able',
            'mathematical relationship', 'operation or formula', 'what operation',
            'as an ai', 'i\'m not sure', 'i apologize', 'sorry,',
            'think about much', 'related to much', 'focus on much',
            'the answer is', 'it is', 'this is', 'the correct answer'
        ];
        
        if (badPatterns.some(pattern => hintLower.includes(pattern))) {
            return false;
        }
        
        // Reject hints that are just repetitions of the question
        const questionWords = questionLower.split(' ').filter(w => w.length > 3);
        const hintWords = hintLower.split(' ').filter(w => w.length > 3);
        const overlap = questionWords.filter(word => hintWords.includes(word)).length;
        
        if (overlap > questionWords.length * 0.7 && questionWords.length > 3) {
            return false; // Too much overlap with question
        }
        
        // Reject very short or incomplete hints
        if (hintText.split(' ').length < 4) {
            return false;
        }
        
        // Check if hint provides some context or guidance
        const helpfulPatterns = [
            'think about', 'consider', 'look for', 'focus on', 'remember',
            'this relates to', 'associated with', 'connected to', 'involves',
            'type of', 'kind of', 'form of', 'example of', 'used for'
        ];
        
        const hasHelpfulPattern = helpfulPatterns.some(pattern => hintLower.includes(pattern));
        
        // Accept if it has helpful language or seems contextually relevant
        return hasHelpfulPattern || hintText.length > 30;
    }

    async getSimpleAIHint(question, answer) {
        // Try one more simplified approach
        try {
            const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: `Study hint for "${question}": Think about`,
                    parameters: {
                        max_new_tokens: 30,
                        temperature: 0.8,
                        do_sample: true,
                        return_full_text: false
                    }
                })
            });

            if (response.ok) {
                const data = await response.json();
                let hintText = '';
                
                if (Array.isArray(data) && data[0]?.generated_text) {
                    hintText = data[0].generated_text.trim();
                } else if (data.generated_text) {
                    hintText = data.generated_text.trim();
                }
                
                if (hintText && hintText.length > 5) {
                    return `💡 Think about ${hintText}`;
                }
            }
        } catch (error) {
            console.log('Simple AI hint failed:', error);
        }
        
        // Final fallback - smart but minimal hint
        return this.generateMinimalSmartHint(question, answer);
    }

    generateMinimalSmartHint(question, answer) {
        const questionLower = question.toLowerCase();
        const answerLower = answer.toLowerCase();
        
        // Analyze the question for specific contexts and provide targeted hints
        
        // Lagos/Nigeria geography contexts
        if (questionLower.includes('lagos') || (questionLower.includes('nigeria') && !questionLower.includes('percentage'))) {
            if (questionLower.includes('equivalent') && questionLower.includes('hollywood')) {
                return `💡 Think about Lagos' entertainment industry. What district or area is known for film production and entertainment, similar to Hollywood's role in America?`;
            }
            if (questionLower.includes('school') && questionLower.includes('number')) {
                return `💡 Think about Lagos as a major African city. What would be a reasonable estimate for educational institutions in such a large urban area?`;
            }
            if (questionLower.includes('population') || questionLower.includes('people')) {
                return `💡 Consider Lagos as one of Africa's largest cities. Think about major metropolitan population figures.`;
            }
            if (questionLower.includes('industry') || questionLower.includes('economy')) {
                return `💡 Think about what Lagos is known for economically. What major industries drive this West African economic hub?`;
            }
            if (questionLower.includes('film') || questionLower.includes('movie') || questionLower.includes('entertainment')) {
                return `💡 Consider Lagos' role in African entertainment and film industry. What area or district is famous for this?`;
            }
        }
        
        // Educational/Exam contexts
        if (questionLower.includes('spag') || questionLower.includes('spelling') || questionLower.includes('grammar')) {
            if (answer.match(/^\d+$/)) {
                return `💡 Think about exam marking schemes. SPaG (Spelling, Punctuation and Grammar) has a specific point allocation in assessments.`;
            }
        }
        
        if (questionLower.includes('marks') && questionLower.includes('worth')) {
            if (answer.match(/^\d+$/)) {
                return `💡 Consider the scoring system. How many points are typically allocated for this component in the assessment?`;
            }
        }
        
        // GCSE/Educational assessment hints
        if (questionLower.includes('gcse') || questionLower.includes('exam') || questionLower.includes('assessment')) {
            if (answer.match(/^\d+$/)) {
                return `💡 Think about standard exam marking criteria. What's the typical point value for this component?`;
            }
        }
        
        // Science contexts
        if (questionLower.includes('element') || questionLower.includes('atomic') || questionLower.includes('periodic')) {
            const firstLetter = answer.charAt(0).toUpperCase();
            return `💡 Look at the periodic table. This element's symbol starts with "${firstLetter}".`;
        }
        
        // Historical contexts
        if (questionLower.includes('when') || questionLower.includes('year') || questionLower.includes('date')) {
            if (answer.match(/^\d{4}$/)) {
                const year = parseInt(answer);
                const century = Math.ceil(year / 100);
                return `💡 This historical event occurred in the ${century}${this.getOrdinalSuffix(century)} century.`;
            }
        }
        
        // "Equivalent to" or "similar to" questions
        if (questionLower.includes('equivalent') || questionLower.includes('similar to') || questionLower.includes('like hollywood') || questionLower.includes('known as')) {
            const firstLetter = answer.charAt(0).toUpperCase();
            return `💡 Think about what area or district serves a similar function to the comparison being made. The answer starts with "${firstLetter}".`;
        }
        
        // Geography contexts
        if (questionLower.includes('capital') || questionLower.includes('country') || questionLower.includes('city')) {
            const firstLetter = answer.charAt(0).toUpperCase();
            return `💡 This geographical location starts with "${firstLetter}" and is significant to the region mentioned.`;
        }
        
        // Literature contexts
        if (questionLower.includes('author') || questionLower.includes('writer') || questionLower.includes('wrote')) {
            const words = answer.split(' ');
            if (words.length > 1) {
                return `💡 This person's name has ${words.length} parts. Think about famous writers in this context.`;
            }
        }
        
        // Mathematical contexts
        if (questionLower.includes('calculate') || questionLower.includes('solve') || /[\+\-\*\/\=]/.test(question)) {
            return `💡 Work through the calculation step by step. What mathematical process applies here?`;
        }
        
        // Percentage/Statistics (only when actually relevant)
        if (answer.includes('%') && (questionLower.includes('percent') || questionLower.includes('rate') || questionLower.includes('proportion'))) {
            return `💡 Look for the statistical data mentioned. What percentage is being asked about?`;
        }
        
        // Factual "how many" or "number of" questions
        if ((questionLower.includes('how many') || questionLower.includes('number of')) && answer.match(/^\d+$/)) {
            const num = parseInt(answer);
            if (questionLower.includes('school') || questionLower.includes('university') || questionLower.includes('college')) {
                if (num > 1000) {
                    return `💡 Think about the scale of education in a major city or region. The answer is in the thousands.`;
                } else if (num > 100) {
                    return `💡 Consider the educational infrastructure. The answer is in the hundreds.`;
                } else {
                    return `💡 Think about the number of educational institutions in this context.`;
                }
            }
            if (num > 1000000) {
                return `💡 This is a very large number - think millions. Consider the scale of what's being asked about.`;
            } else if (num > 1000) {
                return `💡 This number is in the thousands. Think about the magnitude of what's being counted.`;
            }
        }
        
        // Generic but intelligent fallback based on answer structure
        if (answer.match(/^\d+$/)) {
            const num = parseInt(answer);
            if (num < 10) {
                return `💡 The answer is a single digit number. Think about the specific value related to what's being asked.`;
            } else if (num < 100) {
                return `💡 The answer is a two-digit number. Consider the typical ranges for this type of measurement or value.`;
            }
        }
        
        if (answer.split(' ').length === 1) {
            const firstLetter = answer.charAt(0).toUpperCase();
            const lastLetter = answer.charAt(answer.length - 1).toLowerCase();
            return `💡 The answer is one word starting with "${firstLetter}" and ending with "${lastLetter}".`;
        }
        
        // Last resort - give structural information
        const wordCount = answer.split(' ').length;
        return `💡 The answer has ${wordCount} word${wordCount === 1 ? '' : 's'}. Think about what specifically relates to the question being asked.`;
    }
    
    getWordCategory(word) {
        const categories = {
            technology: ['tech', 'digital', 'software', 'computer', 'internet', 'data', 'cyber'],
            business: ['finance', 'bank', 'trade', 'market', 'company', 'industry', 'economy'],
            science: ['biology', 'chemistry', 'physics', 'element', 'molecule', 'cell', 'energy'],
            geography: ['country', 'city', 'river', 'mountain', 'continent', 'ocean', 'climate'],
            history: ['war', 'empire', 'revolution', 'ancient', 'medieval', 'dynasty', 'battle'],
            literature: ['novel', 'poem', 'story', 'author', 'writer', 'book', 'character']
        };
        
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => word.includes(keyword))) {
                return category;
            }
        }
        return 'this topic';
    }
    
    getOrdinalSuffix(number) {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const remainder = number % 100;
        return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
    }

    generateContextualHint(question, answer) {
        // Enhanced contextual hint generation
        const questionLower = question.toLowerCase();
        const answerLower = answer.toLowerCase();
        const answerWords = answer.split(' ').filter(word => word.length > 2);
        
        // Math/calculation hints
        if (questionLower.includes('solve') || questionLower.includes('calculate') || questionLower.includes('find') || /[\d\+\-\*\/\=]/.test(question)) {
            return 'Look for the mathematical relationship between the given numbers. What operation or formula applies here?';
        }
        
        // Definition/concept hints
        if (questionLower.includes('what is') || questionLower.includes('define') || questionLower.includes('meaning')) {
            if (answerWords.length > 0) {
                const firstWord = answerWords[0];
                return `Think about concepts related to "${firstWord}". What category or field does this belong to?`;
            }
            return 'Consider the key characteristics and properties. What field of study does this relate to?';
        }
        
        // Science hints
        if (questionLower.includes('cell') || questionLower.includes('atom') || questionLower.includes('molecule') || questionLower.includes('reaction')) {
            return 'Think about the basic scientific principles involved. What processes or structures are at work?';
        }
        
        // History/dates hints
        if (/\d{4}/.test(question) || questionLower.includes('when') || questionLower.includes('year')) {
            return 'Consider the historical context and timeline. What major events were happening around this time?';
        }
        
        // Language/literature hints
        if (questionLower.includes('author') || questionLower.includes('wrote') || questionLower.includes('poem') || questionLower.includes('novel')) {
            return 'Think about the time period and literary movement. What themes or styles was this writer known for?';
        }
        
        // Give a hint based on answer structure
        if (answer.length < 15) {
            return `The answer is concise - think of a ${answerWords.length === 1 ? 'single key term' : 'short phrase'} that directly addresses the question.`;
        }
        
        // Generic but helpful hint
        return 'Break down the question into its key components. What is it really asking for?';
    }



    generateSmartHint(question, answer) {
        // Fallback smart hint generation based on analysis
        const questionLower = question.toLowerCase();
        const answerLower = answer.toLowerCase();
        
        // Math hints
        if (questionLower.includes('solve') || questionLower.includes('calculate') || questionLower.includes('find')) {
            return {
                type: 'smart',
                text: 'Think about what mathematical operation or formula might be needed here. Look for key numbers or variables in the question.',
                source: 'Smart hint system'
            };
        }
        
        // Science hints
        if (questionLower.includes('what is') || questionLower.includes('define')) {
            return {
                type: 'smart',
                text: 'Think about the key characteristics or properties. What category does this belong to?',
                source: 'Smart hint system'
            };
        }
        
        // Give a hint based on answer length
        if (answer.length < 10) {
            return {
                type: 'smart',
                text: `The answer is a short ${answer.split(' ').length === 1 ? 'single word' : 'phrase'}. Think about the most direct response to the question.`,
                source: 'Smart hint system'
            };
        }
        
        // Generic hint
        return {
            type: 'smart',
            text: 'Think about what you already know about this topic. What concepts or keywords come to mind?',
            source: 'Smart hint system'
        };
    }

    showHintLoading() {
        const hintButton = document.querySelector('.hint-button');
        if (hintButton) {
            hintButton.innerHTML = '💭 Generating...';
            hintButton.disabled = true;
        }
    }

    showHint(hint) {
        // Create hint modal
        const modal = document.createElement('div');
        modal.className = 'hint-modal';
        
        const aiDisclaimer = hint.source === 'AI-generated hint' ? 
            `<div class="hint-disclaimer">⚠️ This hint is AI-generated and may not be fully accurate</div>` : '';
        
        modal.innerHTML = `
            <div class="hint-content">
                <div class="hint-header">
                    <h3>💡 Hint</h3>
                    <button class="hint-close" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <div class="hint-text">${hint.text}</div>
                <div class="hint-source">${hint.source}</div>
                ${aiDisclaimer}
                <div class="hint-actions">
                    <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">Got it!</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Reset hint button
        const hintButton = document.querySelector('.hint-button');
        if (hintButton) {
            hintButton.innerHTML = '💡 Hint';
            hintButton.disabled = false;
        }
        
        // Auto-remove after 30 seconds
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 30000);
    }

    useSkipCard() {
        if (!this.usePowerUp('skipCards')) {
            this.showNotification('No skip cards available! Buy more in the shop.', 'error');
            return false;
        }

        if (this.currentCards.length === 0) return false;

        // Remove current card without penalty
        this.currentCards.splice(this.currentCardIndex, 1);
        
        // Adjust index if needed
        if (this.currentCardIndex >= this.currentCards.length) {
            this.currentCardIndex = 0;
        }

        this.showNotification('Card skipped! No penalty applied. 🚀', 'success');
        
        // Show next card or complete study
        if (this.currentCards.length === 0) {
            this.showStudyComplete();
        } else {
            this.showCurrentCard();
        }
        
        return true;
    }



    recordStudySession(deckId, cardsStudied, correctAnswers, totalTime) {
        const sessions = this.loadSessionData();
        
        // Look for deck in both regular decks and generated decks
        let deck = this.decks.find(d => d.id === deckId);
        let isGeneratedDeck = false;
        
        if (!deck) {
            // Check generated decks
            const generatedDecks = this.loadGeneratedDecks();
            deck = generatedDecks.find(d => d.id === deckId);
            isGeneratedDeck = !!deck;
        } else {
            // Check if it's an adopted deck (originated from AI)
            isGeneratedDeck = !!deck.adoptedFrom;
        }
        
        const session = {
            id: Date.now().toString(),
            deckId: deckId,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
            timestamp: Date.now(),
            cardsStudied: cardsStudied,
            correctAnswers: correctAnswers,
            accuracy: cardsStudied > 0 ? Math.round((correctAnswers / cardsStudied) * 100) : 0,
            totalTime: totalTime,
            averageTimePerCard: cardsStudied > 0 ? Math.round(totalTime / cardsStudied) : 0,
            // Enhanced AI learning data
            deckType: isGeneratedDeck ? 'generated' : 'custom',
            subject: deck?.subject || 'Unknown',
            difficulty: deck?.difficulty || 'Unknown',
            // Additional AI metadata for generated decks
            ...(isGeneratedDeck && deck.aiMetadata ? {
                generationType: deck.generationType,
                aiConfidence: deck.confidence,
                targetWeakness: deck.aiMetadata.targetWeakness
            } : {}),
            // Power-up usage tracking
            powerUpsUsed: this.currentSession?.powerUpsUsed || {}
        };
        
        sessions.push(session);
        this.saveSessionData(sessions);
        
        // Update AI learning patterns
        this.updateAILearningPatterns(session);
        

    }

    updateAILearningPatterns(session) {
        // Get or create user learning profile
        let profile = JSON.parse(localStorage.getItem('ai-learning-profile') || '{}');
        
        // Initialize profile if new
        if (!profile.preferences) {
            profile = {
                preferences: {
                    favoriteSubjects: {},
                    difficultyPreference: {},
                    studyTimePatterns: {},
                    accuracyTrends: []
                },
                weaknesses: {},
                strengths: {},
                studyHabits: {
                    preferredSessionLength: 0,
                    bestPerformanceTime: 'unknown',
                    consistencyScore: 0
                },
                lastUpdated: Date.now()
            };
        }

        // Update favorite subjects
        if (!profile.preferences.favoriteSubjects[session.subject]) {
            profile.preferences.favoriteSubjects[session.subject] = 0;
        }
        profile.preferences.favoriteSubjects[session.subject]++;

        // Update difficulty preferences based on accuracy
        if (!profile.preferences.difficultyPreference[session.difficulty]) {
            profile.preferences.difficultyPreference[session.difficulty] = { attempts: 0, totalAccuracy: 0 };
        }
        const diffPref = profile.preferences.difficultyPreference[session.difficulty];
        diffPref.attempts++;
        diffPref.totalAccuracy += session.accuracy;
        diffPref.averageAccuracy = Math.round(diffPref.totalAccuracy / diffPref.attempts);

        // Track accuracy trends
        profile.preferences.accuracyTrends.push({
            timestamp: session.timestamp,
            accuracy: session.accuracy,
            subject: session.subject,
            deckType: session.deckType
        });
        
        // Keep only last 50 accuracy records
        if (profile.preferences.accuracyTrends.length > 50) {
            profile.preferences.accuracyTrends = profile.preferences.accuracyTrends.slice(-50);
        }

        // Identify strengths and weaknesses
        if (session.accuracy >= 80) {
            if (!profile.strengths[session.subject]) profile.strengths[session.subject] = 0;
            profile.strengths[session.subject]++;
        } else if (session.accuracy < 60) {
            if (!profile.weaknesses[session.subject]) profile.weaknesses[session.subject] = 0;
            profile.weaknesses[session.subject]++;
        }

        // Update study habits
        profile.studyHabits.preferredSessionLength = Math.round(
            (profile.studyHabits.preferredSessionLength + session.totalTime) / 2
        );

        profile.lastUpdated = Date.now();
        localStorage.setItem('ai-learning-profile', JSON.stringify(profile));
        
        console.log('AI Learning Profile updated:', profile);
        
        // Trigger background AI deck generation
        this.triggerBackgroundAI(profile);
    }

    // =================== ADVANCED GCSE AI LEARNING SYSTEM ===================
    
    triggerBackgroundAI(profile) {
        // Intelligent frequency control based on user activity
        const lastAIGeneration = localStorage.getItem('last-ai-generation') || 0;
        const timeSinceLastGeneration = Date.now() - parseInt(lastAIGeneration);
        const minInterval = this.calculateOptimalGenerationInterval(profile);
        
        if (timeSinceLastGeneration < minInterval) {
            console.log(`🧠 AI cooling down... Next generation in ${Math.round((minInterval - timeSinceLastGeneration) / (1000 * 60))} minutes`);
            return;
        }
        
        // Dynamic data requirements based on user progression
        const requiredSessions = this.getRequiredSessionsForAI(profile);
        if (profile.preferences.accuracyTrends.length < requiredSessions) {
            console.log(`📊 Insufficient data for AI generation. Need ${requiredSessions - profile.preferences.accuracyTrends.length} more sessions`);
            return;
        }
        
        console.log('🤖 GCSE AI Engine: Analyzing learning patterns...');
        this.showAIAnalysisStatus();
        
        // Non-blocking AI processing with progress updates
        setTimeout(() => {
            this.runAdvancedGCSEAnalysis(profile);
        }, 1500);
    }
    
    calculateOptimalGenerationInterval(profile) {
        // Base interval of 20 minutes
        let interval = 20 * 60 * 1000;
        
        // Reduce interval for highly active users
        if (profile.preferences.accuracyTrends.length > 20) {
            interval *= 0.7; // 14 minutes
        }
        
        // Increase interval for struggling users (need more time to practice)
        const avgAccuracy = profile.preferences.accuracyTrends.slice(-5)
            .reduce((sum, t) => sum + t.accuracy, 0) / 5;
        if (avgAccuracy < 60) {
            interval *= 1.5; // 30 minutes
        }
        
        return interval;
    }
    
    getRequiredSessionsForAI(profile) {
        // Fewer sessions needed for returning users
        const totalSessions = profile.preferences.accuracyTrends.length;
        if (totalSessions === 0) return 3;
        if (totalSessions < 10) return 2;
        return 1; // Frequent users need less data for new generation
    }
    
    showAIAnalysisStatus() {
        const statusElement = document.getElementById('generation-status');
        if (statusElement) {
            statusElement.style.display = 'flex';
            const statusText = statusElement.querySelector('.status-title');
            const statusDesc = statusElement.querySelector('.status-description');
            
            const analysisSteps = [
                { title: '🧠 Analyzing your learning patterns...', desc: 'Processing study session data and performance metrics' },
                { title: '📊 Identifying knowledge gaps...', desc: 'Finding areas where you need extra practice' },
                { title: '🎯 Matching GCSE curriculum...', desc: 'Aligning content with exam specifications' },
                { title: '✨ Generating personalized content...', desc: 'Creating cards tailored to your needs' }
            ];
            
            let stepIndex = 0;
            const updateStatus = () => {
                if (stepIndex < analysisSteps.length) {
                    statusText.textContent = analysisSteps[stepIndex].title;
                    statusDesc.textContent = analysisSteps[stepIndex].desc;
                    stepIndex++;
                    setTimeout(updateStatus, 1200);
                } else {
                    setTimeout(() => {
                        statusElement.style.display = 'none';
                    }, 1000);
                }
            };
            updateStatus();
        }
    }
    
    runAdvancedGCSEAnalysis(profile) {
        try {
            console.log('🎓 Starting Advanced GCSE AI Analysis...');
            
            // 1. Deep learning pattern analysis
            const patterns = this.analyzeGCSELearningPatterns(profile);
            console.log('🧠 GCSE Learning patterns identified:', patterns);
            
            // 2. Curriculum gap analysis
            const curriculumGaps = this.identifyGCSECurriculumGaps(profile, patterns);
            console.log('📚 Curriculum gaps identified:', curriculumGaps);
            
            // 3. Exam preparation optimization
            const examReadiness = this.assessGCSEExamReadiness(profile, patterns);
            console.log('🎯 Exam readiness assessment:', examReadiness);
            
            // 4. Intelligent content generation decision
            const generationPlan = this.createGCSEGenerationPlan(patterns, curriculumGaps, examReadiness);
            
            if (generationPlan.shouldGenerate) {
                console.log('✨ AI generating GCSE content:', generationPlan.reason);
                this.generateAdvancedGCSEDeck(patterns, generationPlan);
            } else {
                console.log('📊 AI analysis complete - optimal learning state detected');
                // Optionally show encouragement message to user
                this.showLearningProgressFeedback(patterns, examReadiness);
            }
            
        } catch (error) {
            console.error('🚨 Advanced GCSE AI Analysis error:', error);
            // Fallback to basic generation
            this.fallbackGeneration(profile);
        }
    }
    
    analyzeGCSELearningPatterns(profile) {
        const trends = profile.preferences.accuracyTrends;
        const recentTrends = trends.slice(-10);
        
        // Advanced pattern recognition
        const patterns = {
            // Performance analytics
            currentPerformance: this.calculateCurrentPerformance(recentTrends),
            learningVelocity: this.calculateLearningVelocity(trends),
            consistencyIndex: this.calculateConsistencyIndex(trends),
            
            // Subject-specific analysis
            subjectStrengths: this.analyzeSubjectPerformance(trends, 'strengths'),
            subjectWeaknesses: this.analyzeSubjectPerformance(trends, 'weaknesses'),
            
            // GCSE-specific metrics
            examReadinessScore: this.calculateExamReadinessScore(trends),
            foundationVsHigherSuitability: this.assessTierSuitability(trends),
            
            // Learning behavior analysis
            studyPatterns: this.analyzeStudyPatterns(trends),
            motivationLevel: this.assessMotivationLevel(trends),
            retentionRate: this.calculateRetentionRate(profile),
            
            // Personalization factors
            preferredDifficulty: this.identifyPreferredDifficulty(trends),
            optimalCardCount: this.calculateOptimalCardCount(trends),
            bestTopics: this.identifyBestTopics(trends)
        };
        
        return patterns;
    }
    
    calculateCurrentPerformance(recentTrends) {
        if (recentTrends.length === 0) return { accuracy: 0, trend: 'insufficient_data' };
        
        const recent5 = recentTrends.slice(-5);
        const avgAccuracy = recent5.reduce((sum, t) => sum + t.accuracy, 0) / recent5.length;
        
        let trend = 'stable';
        if (recent5.length > 2) {
            const first = recent5.slice(0, Math.floor(recent5.length / 2));
            const second = recent5.slice(Math.floor(recent5.length / 2));
            const firstAvg = first.reduce((sum, t) => sum + t.accuracy, 0) / first.length;
            const secondAvg = second.reduce((sum, t) => sum + t.accuracy, 0) / second.length;
            const change = secondAvg - firstAvg;
            
            if (change > 10) trend = 'improving_fast';
            else if (change > 5) trend = 'improving';
            else if (change < -10) trend = 'declining_fast';
            else if (change < -5) trend = 'declining';
        }
        
        return { accuracy: Math.round(avgAccuracy), trend, confidence: recent5.length / 5 };
    }
    
    calculateLearningVelocity(trends) {
        if (trends.length < 6) return { velocity: 0, acceleration: 0 };
        
        const velocities = [];
        for (let i = 1; i < trends.length; i++) {
            const timeDiff = trends[i].timestamp - trends[i-1].timestamp;
            const accuracyDiff = trends[i].accuracy - trends[i-1].accuracy;
            velocities.push(accuracyDiff / (timeDiff / (1000 * 60 * 60))); // accuracy change per hour
        }
        
        const avgVelocity = velocities.reduce((sum, v) => sum + v, 0) / velocities.length;
        
        // Calculate acceleration (change in velocity)
        let acceleration = 0;
        if (velocities.length > 3) {
            const firstHalf = velocities.slice(0, Math.floor(velocities.length / 2));
            const secondHalf = velocities.slice(Math.floor(velocities.length / 2));
            const firstAvg = firstHalf.reduce((sum, v) => sum + v, 0) / firstHalf.length;
            const secondAvg = secondHalf.reduce((sum, v) => sum + v, 0) / secondHalf.length;
            acceleration = secondAvg - firstAvg;
        }
        
        return {
            velocity: avgVelocity,
            acceleration: acceleration,
            classification: this.classifyLearningSpeed(avgVelocity, acceleration)
        };
    }
    
    classifyLearningSpeed(velocity, acceleration) {
        if (velocity > 2 && acceleration > 0) return 'accelerating_learner';
        if (velocity > 1) return 'fast_learner';
        if (velocity > 0 && acceleration > 0) return 'steady_improver';
        if (velocity < -1) return 'struggling_learner';
        if (acceleration < -0.5) return 'losing_momentum';
        return 'stable_learner';
    }
    
    analyzeSubjectPerformance(trends, type) {
        const subjectPerformance = {};
        
        trends.forEach(trend => {
            if (!subjectPerformance[trend.subject]) {
                subjectPerformance[trend.subject] = {
                    sessions: 0,
                    totalAccuracy: 0,
                    recentAccuracy: [],
                    improvement: 0
                };
            }
            
            const subj = subjectPerformance[trend.subject];
            subj.sessions++;
            subj.totalAccuracy += trend.accuracy;
            subj.recentAccuracy.push(trend.accuracy);
            
            // Keep only recent 5 sessions for subject
            if (subj.recentAccuracy.length > 5) {
                subj.recentAccuracy.shift();
            }
        });
        
        // Calculate metrics for each subject
        Object.keys(subjectPerformance).forEach(subject => {
            const subj = subjectPerformance[subject];
            subj.averageAccuracy = subj.totalAccuracy / subj.sessions;
            
            if (subj.recentAccuracy.length > 2) {
                const first = subj.recentAccuracy.slice(0, Math.floor(subj.recentAccuracy.length / 2));
                const second = subj.recentAccuracy.slice(Math.floor(subj.recentAccuracy.length / 2));
                const firstAvg = first.reduce((sum, acc) => sum + acc, 0) / first.length;
                const secondAvg = second.reduce((sum, acc) => sum + acc, 0) / second.length;
                subj.improvement = secondAvg - firstAvg;
            }
        });
        
        // Return top subjects based on type
        const sortedSubjects = Object.entries(subjectPerformance)
            .filter(([_, data]) => data.sessions >= 2) // Minimum sessions for meaningful data
            .sort(([_, a], [__, b]) => {
                if (type === 'strengths') {
                    return (b.averageAccuracy + b.improvement) - (a.averageAccuracy + a.improvement);
                } else {
                    return (a.averageAccuracy - a.improvement) - (b.averageAccuracy - b.improvement);
                }
            })
            .slice(0, 3) // Top 3
            .map(([subject, data]) => ({
                subject,
                ...data,
                score: type === 'strengths' ? 
                    data.averageAccuracy + data.improvement : 
                    100 - data.averageAccuracy + Math.abs(data.improvement)
            }));
        
        return sortedSubjects;
    }
    
    identifyGCSECurriculumGaps(profile, patterns) {
        // Map user subjects to GCSE curriculum requirements
        const gcseRequirements = {
            'GCSE Mathematics': {
                foundationTopics: ['Number', 'Algebra', 'Ratio & Proportion', 'Geometry', 'Statistics'],
                higherTopics: ['Advanced Algebra', 'Trigonometry', 'Calculus Intro', 'Complex Geometry'],
                examWeight: { high: ['Algebra', 'Number'], medium: ['Geometry', 'Statistics'], low: ['Probability'] }
            },
            'GCSE Biology': {
                foundationTopics: ['Cell Biology', 'Organisation', 'Infection & Response', 'Bioenergetics'],
                higherTopics: ['Homeostasis', 'Inheritance', 'Evolution', 'Ecology'],
                examWeight: { high: ['Cell Biology', 'Bioenergetics'], medium: ['Organisation'], low: ['Evolution'] }
            },
            'GCSE Chemistry': {
                foundationTopics: ['Atomic Structure', 'Bonding', 'Quantitative Chemistry', 'Chemical Changes'],
                higherTopics: ['Energy Changes', 'Rate of Reaction', 'Organic Chemistry', 'Chemical Analysis'],
                examWeight: { high: ['Atomic Structure', 'Bonding'], medium: ['Quantitative Chemistry'], low: ['Organic Chemistry'] }
            },
            'GCSE Physics': {
                foundationTopics: ['Energy', 'Electricity', 'Particle Model', 'Atomic Structure'],
                higherTopics: ['Forces', 'Waves', 'Magnetism', 'Space Physics'],
                examWeight: { high: ['Energy', 'Electricity'], medium: ['Forces', 'Waves'], low: ['Space Physics'] }
            },
            'GCSE English Language': {
                foundationTopics: ['Reading Comprehension', 'Creative Writing', 'Language Analysis'],
                higherTopics: ['Advanced Analysis', 'Comparative Writing', 'Critical Evaluation'],
                examWeight: { high: ['Reading Comprehension', 'Creative Writing'], medium: ['Language Analysis'], low: [] }
            }
        };
        
        const gaps = [];
        const userSubjects = new Set(patterns.subjectWeaknesses.map(s => s.subject));
        
        // Identify gaps in user's weak subjects
        userSubjects.forEach(subject => {
            const curriculum = gcseRequirements[subject];
            if (curriculum) {
                const subjectWeakness = patterns.subjectWeaknesses.find(s => s.subject === subject);
                
                // Determine if foundation or higher tier needed
                const avgAccuracy = subjectWeakness.averageAccuracy;
                const recommendedTier = avgAccuracy < 70 ? 'foundation' : 'higher';
                const topics = recommendedTier === 'foundation' ? 
                    curriculum.foundationTopics : curriculum.higherTopics;
                
                gaps.push({
                    subject,
                    tier: recommendedTier,
                    priority: this.calculateGapPriority(subjectWeakness, curriculum),
                    recommendedTopics: topics.slice(0, 3), // Top 3 topics
                    urgency: avgAccuracy < 50 ? 'high' : avgAccuracy < 70 ? 'medium' : 'low'
                });
            }
        });
        
        return gaps.sort((a, b) => b.priority - a.priority);
    }
    
    calculateGapPriority(weakness, curriculum) {
        let priority = 50; // Base priority
        
        // Higher priority for worse performance
        priority += (100 - weakness.averageAccuracy) * 0.5;
        
        // Higher priority for declining performance
        if (weakness.improvement < -5) priority += 20;
        
        // Higher priority for more sessions (more data points)
        priority += Math.min(weakness.sessions * 2, 20);
        
        return Math.round(priority);
    }
    
    assessGCSEExamReadiness(profile, patterns) {
        return this.aiEngine.assessGCSEExamReadiness(profile, patterns);
    }
    
    createGCSEGenerationPlan(patterns, curriculumGaps, examReadiness) {
        return this.aiEngine.createGCSEGenerationPlan(patterns, curriculumGaps, examReadiness);
    }
    
    generateAdvancedGCSEDeck(patterns, generationPlan) {
        console.log('🎨 Generating Advanced GCSE Deck:', generationPlan);
        
        // Mark generation timestamp
        localStorage.setItem('last-ai-generation', Date.now().toString());
        
        const deckConfig = this.createAdvancedDeckConfig(patterns, generationPlan);
        const cards = this.generateAdvancedGCSECards(deckConfig, patterns, generationPlan);
        
        if (cards.length === 0) {
            console.log('No suitable cards generated');
            return;
        }
        
        const newDeck = {
            id: 'gcse_ai_' + Date.now(),
            name: deckConfig.name,
            subject: deckConfig.subject,
            yearGroup: deckConfig.yearGroup,
            difficulty: deckConfig.difficulty,
            isGenerated: true,
            generatedAt: Date.now(),
            generationType: generationPlan.contentType,
            confidence: deckConfig.confidence,
            examFocused: generationPlan.examFocus,
            reason: {
                title: deckConfig.reasonTitle,
                description: deckConfig.reasonDescription
            },
            cards: cards,
            titleCards: [{
                title: deckConfig.name,
                description: deckConfig.description
            }],
            aiMetadata: {
                generationPlan: generationPlan,
                userPatterns: {
                    currentAccuracy: patterns.currentPerformance.accuracy,
                    learningVelocity: patterns.learningVelocity.classification,
                    consistency: patterns.consistencyIndex
                },
                curriculumAlignment: deckConfig.curriculumAlignment,
                examBoard: deckConfig.examBoard,
                assessmentObjectives: deckConfig.assessmentObjectives
            }
        };
        
        // Save to generated decks
        this.saveNewGeneratedDeck(newDeck);
        
        console.log('✨ AI Generated Advanced GCSE deck:', newDeck.name);
        
        // Show smart notification
        this.showAdvancedAINotification(newDeck, generationPlan);
    }
    
    createAdvancedDeckConfig(patterns, generationPlan) {
        const subject = generationPlan.targetSubject || 'GCSE Mathematics';
        const difficulty = generationPlan.difficulty || 'intermediate';
        
        const configs = {
            'exam_focused': {
                name: `${subject.replace('GCSE ', '')} - Exam Focus`,
                reasonTitle: 'Exam Preparation Critical',
                reasonDescription: 'AI detected approaching exams. These cards focus on high-yield exam topics.',
                description: 'Exam-focused practice targeting the most important topics for your upcoming GCSEs.',
                cardTypes: ['exam-style', 'high-yield', 'past-paper'],
                examBoard: 'AQA',
                yearGroup: 'Year 11'
            },
            'gap_filling': {
                name: `${subject.replace('GCSE ', '')} - Knowledge Gaps`,
                reasonTitle: 'Learning Gaps Identified',
                reasonDescription: `AI found knowledge gaps in ${subject}. These cards address fundamental concepts you need to master.`,
                description: 'Targeted practice to fill identified knowledge gaps and build solid foundations.',
                cardTypes: ['foundational', 'step-by-step', 'concept-building'],
                examBoard: 'AQA',
                yearGroup: this.inferYearGroup(patterns)
            },
            'advancement': {
                name: `${subject.replace('GCSE ', '')} - Advanced Challenge`,
                reasonTitle: 'Ready for Advanced Content',
                reasonDescription: 'Your excellent progress deserves more challenging material!',
                description: 'Advanced concepts and challenging questions to push your understanding further.',
                cardTypes: ['advanced', 'synthesis', 'challenge'],
                examBoard: 'AQA',
                yearGroup: 'Year 11'
            },
            'reinforcement': {
                name: `${subject.replace('GCSE ', '')} - Foundation Builder`,
                reasonTitle: 'Building Strong Foundations',
                reasonDescription: 'AI providing targeted support to strengthen your understanding.',
                description: 'Carefully scaffolded practice to build confidence and understanding.',
                cardTypes: ['foundation', 'reinforcement', 'confidence-building'],
                examBoard: 'AQA',
                yearGroup: this.inferYearGroup(patterns)
            },
            'variety': {
                name: `${subject.replace('GCSE ', '')} - Fresh Practice`,
                reasonTitle: 'Maintaining Engagement',
                reasonDescription: 'Your consistent effort deserves fresh, engaging content!',
                description: 'Varied and interesting practice to keep your learning momentum going.',
                cardTypes: ['varied', 'engaging', 'comprehensive'],
                examBoard: 'AQA',
                yearGroup: this.inferYearGroup(patterns)
            }
        };
        
        const baseConfig = configs[generationPlan.contentType] || configs['reinforcement'];
        
        return {
            ...baseConfig,
            subject: subject,
            difficulty: difficulty,
            confidence: generationPlan.confidence || 0.8,
            curriculumAlignment: this.getCurriculumAlignment(subject),
            assessmentObjectives: this.getAssessmentObjectives(subject)
        };
    }
    
    inferYearGroup(patterns) {
        // Infer year group based on performance and subjects
        const avgAccuracy = patterns.currentPerformance.accuracy;
        const hasAdvancedSubjects = patterns.subjectStrengths.some(s => 
            s.subject.includes('Higher') || s.averageAccuracy > 80
        );
        
        if (avgAccuracy > 75 && hasAdvancedSubjects) return 'Year 11';
        if (avgAccuracy > 60) return 'Year 10';
        return 'Year 9';
    }
    
    getCurriculumAlignment(subject) {
        const alignments = {
            'GCSE Mathematics': 'AQA GCSE Mathematics (8300) Specification',
            'GCSE Biology': 'AQA GCSE Biology (8461) Specification',
            'GCSE Chemistry': 'AQA GCSE Chemistry (8462) Specification',
            'GCSE Physics': 'AQA GCSE Physics (8463) Specification',
            'GCSE English Language': 'AQA GCSE English Language (8700) Specification'
        };
        return alignments[subject] || 'GCSE National Curriculum';
    }
    
    getAssessmentObjectives(subject) {
        return this.aiEngine.subjectSpecifications[subject]?.assessmentObjectives || {};
    }
    
    generateAdvancedGCSECards(deckConfig, patterns, generationPlan) {
        const templateLibrary = this.getCardTemplateLibrary();
        const subjectTemplates = templateLibrary[deckConfig.subject.toLowerCase()] || 
                                templateLibrary['general'];
        
        const generatedCards = [];
        const targetCardCount = generationPlan.cardCount || 8;
        
        // Select templates based on generation plan
        const selectedTemplates = this.selectOptimalTemplates(
            subjectTemplates, 
            deckConfig.cardTypes, 
            patterns,
            generationPlan
        );
        
        // Generate cards with advanced personalization
        for (let i = 0; i < targetCardCount && selectedTemplates.length > 0; i++) {
            const template = selectedTemplates[i % selectedTemplates.length];
            const advancedCard = this.generateAdvancedPersonalizedCard(
                template, 
                patterns, 
                generationPlan,
                deckConfig
            );
            
            if (advancedCard) {
                generatedCards.push({
                    ...advancedCard,
                    type: 'standard',
                    aiGenerated: true,
                    confidence: template.confidence * deckConfig.confidence,
                    examRelevance: this.calculateExamRelevance(advancedCard, deckConfig.subject),
                    difficultyLevel: this.calibrateDifficulty(advancedCard, patterns),
                    personalizedFor: {
                        accuracy: patterns.currentPerformance.accuracy,
                        learningStyle: patterns.learningVelocity.classification,
                        weaknessTarget: generationPlan.focusAreas
                    }
                });
            }
        }
        
        // Ensure cards are optimally ordered for learning
        return this.optimizeCardOrder(generatedCards, patterns);
    }
    
    selectOptimalTemplates(templates, cardTypes, patterns, generationPlan) {
        // Filter templates by required card types
        let selectedTemplates = templates.filter(template => 
            template.types.some(type => cardTypes.includes(type))
        );
        
        // If no specific types found, use all templates
        if (selectedTemplates.length === 0) {
            selectedTemplates = templates;
        }
        
        // Sort by suitability for user's current state
        selectedTemplates.sort((a, b) => {
            const suitabilityA = this.calculateTemplateSuitability(a, patterns, generationPlan);
            const suitabilityB = this.calculateTemplateSuitability(b, patterns, generationPlan);
            return suitabilityB - suitabilityA;
        });
        
        return selectedTemplates;
    }
    
    calculateTemplateSuitability(template, patterns, generationPlan) {
        let suitability = template.confidence || 0.5;
        
        // Boost suitability for templates matching user's level
        const userAccuracy = patterns.currentPerformance.accuracy;
        if (userAccuracy < 50 && template.types.includes('foundational')) {
            suitability += 0.3;
        } else if (userAccuracy > 80 && template.types.includes('advanced')) {19
            suitability += 0.3;
        }
        
        // Boost for exam-focused content if needed
        if (generationPlan.examFocus && template.types.includes('exam-style')) {
            suitability += 0.4;
        }
        
        return suitability;
    }
    
    generateAdvancedPersonalizedCard(template, patterns, generationPlan, deckConfig) {
        const variants = template.variants;
        if (!variants || variants.length === 0) return null;
        
        // Advanced variant selection using AI
        const optimalVariant = this.selectOptimalVariant(variants, patterns, generationPlan);
        
        // Generate card content
        let front = template.template;
        let back = template.backTemplate;
        
        // Replace template placeholders
        Object.entries(optimalVariant).forEach(([key, value]) => {
            const placeholder = new RegExp(`\\{${key}\\}`, 'g');
            front = front.replace(placeholder, value);
            back = back.replace(placeholder, value);
        });
        
        // Add advanced personalization
        back = this.addAdvancedPersonalization(back, patterns, generationPlan, deckConfig);
        
        return { front, back };
    }
    
    selectOptimalVariant(variants, patterns, generationPlan) {
        // Use advanced selection algorithm
        const userAccuracy = patterns.currentPerformance.accuracy;
        const learningVelocity = patterns.learningVelocity.classification;
        
        let optimalIndex = 0;
        
        if (generationPlan.contentType === 'advancement' && userAccuracy > 80) {
            // High performers get challenging variants
            optimalIndex = Math.min(variants.length - 1, Math.floor(variants.length * 0.8));
        } else if (generationPlan.contentType === 'reinforcement' && userAccuracy < 60) {
            // Struggling learners get foundational variants
            optimalIndex = 0;
        } else if (learningVelocity === 'accelerating_learner') {
            // Accelerating learners get slightly advanced content
            optimalIndex = Math.min(variants.length - 1, Math.floor(variants.length * 0.6));
        } else {
            // Balanced selection for most users
            optimalIndex = Math.floor(variants.length * 0.4);
        }
        
        return variants[optimalIndex];
    }
    
    addAdvancedPersonalization(backContent, patterns, generationPlan, deckConfig) {
        let personalizedBack = backContent;
        
        // Add motivational elements based on user state
        if (patterns.currentPerformance.trend === 'improving_fast') {
            personalizedBack += '<br>🚀 <em>You\'re on fire! Keep up this amazing progress!</em>';
        } else if (patterns.learningVelocity.classification === 'struggling_learner') {
            personalizedBack += '<br>💪 <em>Don\'t give up! Every expert was once a beginner.</em>';
        } else if (patterns.consistencyIndex > 0.8) {
            personalizedBack += '<br>⭐ <em>Your consistency is paying off - well done!</em>';
        }
        
        // Add exam-specific tips if relevant
        if (generationPlan.examFocus) {
            const timeToExam = this.aiEngine.calculateTimeToExam();
            personalizedBack += `<br>📅 <em>Exam in ${timeToExam.weeks} weeks - this topic is high-yield!</em>`;
        }
        
        // Add subject-specific encouragement
        if (deckConfig.subject.includes('Mathematics')) {
            personalizedBack += '<br>🧮 <em>Math is logical - practice makes it click!</em>';
        } else if (deckConfig.subject.includes('Science')) {
            personalizedBack += '<br>🔬 <em>Science is everywhere - understanding it is powerful!</em>';
        }
        
        return personalizedBack;
    }
    
    calculateExamRelevance(card, subject) {
        // Calculate how relevant this card is to actual GCSE exams
        let relevance = 0.5; // Base relevance
        
        // Higher relevance for cards with specific GCSE keywords
        const gcseKeywords = ['calculate', 'explain', 'describe', 'compare', 'evaluate', 'analyse'];
        const hasGCSEKeywords = gcseKeywords.some(keyword => 
            card.front.toLowerCase().includes(keyword) || 
            card.back.toLowerCase().includes(keyword)
        );
        
        if (hasGCSEKeywords) relevance += 0.3;
        
        // Subject-specific relevance boosts
        if (subject.includes('Mathematics') && card.front.includes('equation')) relevance += 0.2;
        if (subject.includes('Science') && card.front.includes('practical')) relevance += 0.2;
        
        return Math.min(relevance, 1.0);
    }
    
    calibrateDifficulty(card, patterns) {
        const userAccuracy = patterns.currentPerformance.accuracy;
        
        // Calibrate difficulty based on content complexity and user ability
        let difficulty = 'intermediate';
        
        if (userAccuracy < 50) {
            difficulty = 'foundation';
        } else if (userAccuracy > 80 && patterns.learningVelocity.velocity > 0) {
            difficulty = 'higher';
        }
        
        return difficulty;
    }
    
    optimizeCardOrder(cards, patterns) {
        // Optimize card order for learning effectiveness
        const learningStyle = patterns.learningVelocity.classification;
        
        if (learningStyle === 'struggling_learner') {
            // Start with easier cards for struggling learners
            return cards.sort((a, b) => a.confidence - b.confidence);
        } else if (learningStyle === 'accelerating_learner') {
            // Mix difficulties for accelerating learners
            return this.interleaveDifficulties(cards);
        } else {
            // Progressive difficulty for most learners
            return cards.sort((a, b) => a.examRelevance - b.examRelevance);
        }
    }
    
    interleaveDifficulties(cards) {
        // Interleave different difficulty levels for optimal challenge
        const easy = cards.filter(c => c.confidence > 0.8);
        const medium = cards.filter(c => c.confidence >= 0.5 && c.confidence <= 0.8);
        const hard = cards.filter(c => c.confidence < 0.5);
        
        const interleaved = [];
        const maxLength = Math.max(easy.length, medium.length, hard.length);
        
        for (let i = 0; i < maxLength; i++) {
            if (easy[i]) interleaved.push(easy[i]);
            if (medium[i]) interleaved.push(medium[i]);
            if (hard[i]) interleaved.push(hard[i]);
        }
        
        return interleaved;
    }
    
    showAdvancedAINotification(deck, generationPlan) {
        // Create sophisticated notification with plan details
        const notification = document.createElement('div');
        notification.className = 'advanced-ai-notification';
        
        const urgencyClass = generationPlan.urgency === 'high' ? 'urgent' : 'normal';
        const examFocusIcon = generationPlan.examFocus ? '🎯' : '🤖';
        
        notification.innerHTML = `
            <div class="advanced-ai-notification-content ${urgencyClass}">
                <div class="ai-notification-header">
                    <span class="advanced-ai-badge">${examFocusIcon} Advanced AI</span>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: ${generationPlan.confidence * 100}%"></div>
                        <span class="confidence-text">${Math.round(generationPlan.confidence * 100)}% match</span>
                    </div>
                    <button class="ai-notification-close" onclick="this.parentElement.parentElement.parentElement.remove()">✕</button>
                </div>
                <h4>${deck.name}</h4>
                <div class="generation-details">
                    <div class="generation-reason">${deck.reason.description}</div>
                    <div class="generation-metadata">
                        📊 ${deck.cards.length} cards • ${deck.aiMetadata.curriculumAlignment}
                        ${generationPlan.examFocus ? '<br>🎯 Exam-focused content' : ''}
                    </div>
                </div>
                <div class="ai-notification-actions">
                    <button class="btn btn-ai btn-small ${urgencyClass}" onclick="viewGeneratedDeck('${deck.id}'); this.parentElement.parentElement.parentElement.remove();">
                        📖 Study Now
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="this.parentElement.parentElement.parentElement.remove();">
                        Later
                    </button>
                </div>
            </div>
        `;
        
        // Advanced styling
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
            color: white;
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 400px;
            min-width: 350px;
            animation: slideInAdvanced 0.5s ease-out;
            border: 2px solid rgba(255,255,255,0.2);
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 12 seconds (longer for important notifications)
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutAdvanced 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }
        }, generationPlan.urgency === 'high' ? 15000 : 12000);
    }
    
    showLearningProgressFeedback(patterns, examReadiness) {
        // Show encouraging feedback when no generation is needed
        console.log('📈 Showing learning progress feedback');
        
        const feedback = document.createElement('div');
        feedback.className = 'learning-feedback';
        feedback.innerHTML = `
            <div class="feedback-content">
                <h4>🎉 Great Progress!</h4>
                <p>You're in an optimal learning state. Current accuracy: ${patterns.currentPerformance.accuracy}%</p>
                <div class="progress-highlights">
                    <div>🎯 Exam readiness: ${Math.round(examReadiness.overall)}%</div>
                    <div>⚡ Learning velocity: ${patterns.learningVelocity.classification.replace('_', ' ')}</div>
                </div>
            </div>
        `;
        
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 350px;
            animation: slideInAdvanced 0.5s ease-out;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOutAdvanced 0.3s ease-in';
            setTimeout(() => feedback.remove(), 300);
        }, 8000);
    }
    
    fallbackGeneration(profile) {
        // Fallback generation if advanced AI fails
        console.log('🔄 Using fallback generation');
        const basicDeck = {
            id: 'fallback_' + Date.now(),
            name: 'Study Session - Mixed Review',
            subject: 'General Review',
            yearGroup: 'Year 10',
            difficulty: 'Intermediate',
            isGenerated: true,
            generatedAt: Date.now(),
            cards: [
                {
                    front: 'Quick Review: What have you learned recently?',
                    back: 'Take a moment to reflect on your recent learning. Active recall helps strengthen memory pathways.',
                    type: 'standard'
                }
            ],
            titleCards: [{ title: 'Quick Review', description: 'A moment to consolidate your recent learning.' }]
        };
        
        this.saveNewGeneratedDeck(basicDeck);
    }
    
    analyzeUserPatterns(profile) {
        const trends = profile.preferences.accuracyTrends;
        const recent = trends.slice(-10); // Last 10 sessions
        
        // Calculate learning velocity
        let improvementTrend = 0;
        if (recent.length > 3) {
            const firstHalf = recent.slice(0, Math.floor(recent.length / 2));
            const secondHalf = recent.slice(Math.floor(recent.length / 2));
            const firstAvg = firstHalf.reduce((sum, t) => sum + t.accuracy, 0) / firstHalf.length;
            const secondAvg = secondHalf.reduce((sum, t) => sum + t.accuracy, 0) / secondHalf.length;
            improvementTrend = secondAvg - firstAvg;
        }
        
        // Identify knowledge gaps
        const subjectWeaknesses = Object.entries(profile.weaknesses)
            .map(([subject, count]) => ({
                subject,
                weakness: count,
                strength: profile.strengths[subject] || 0,
                ratio: count / (profile.strengths[subject] || 1)
            }))
            .filter(item => item.ratio > 1.5) // Significantly more weaknesses than strengths
            .sort((a, b) => b.ratio - a.ratio);
        
        // Find preferred learning style
        const difficultyPrefs = profile.preferences.difficultyPreference;
        const bestDifficulty = Object.entries(difficultyPrefs)
            .map(([diff, data]) => ({
                difficulty: diff,
                accuracy: data.averageAccuracy || 0,
                attempts: data.attempts || 0
            }))
            .filter(item => item.attempts > 2)
            .sort((a, b) => b.accuracy - a.accuracy)[0];
        
        // Analyze study timing
        const studyTimes = trends.map(t => new Date(t.timestamp).getHours());
        const timePreference = this.findMostFrequentHour(studyTimes);
        
        return {
            improvementTrend,
            currentAccuracy: recent.length > 0 ? recent[recent.length - 1].accuracy : 0,
            averageAccuracy: trends.reduce((sum, t) => sum + t.accuracy, 0) / trends.length,
            knowledgeGaps: subjectWeaknesses,
            preferredDifficulty: bestDifficulty?.difficulty || 'Intermediate',
            optimalStudyHour: timePreference,
            sessionCount: trends.length,
            consistencyScore: this.calculateConsistencyScore(trends)
        };
    }
    
    shouldGenerateNewContent(patterns, profile) {
        const reasons = [];
        
        // 1. Knowledge gap detection
        if (patterns.knowledgeGaps.length > 0) {
            const topGap = patterns.knowledgeGaps[0];
            reasons.push({
                type: 'weakness-reinforcement',
                priority: 90,
                reason: `Struggling with ${topGap.subject} (${topGap.weakness} weak sessions vs ${topGap.strength} strong)`,
                subject: topGap.subject,
                focus: 'remedial'
            });
        }
        
        // 2. Plateau detection
        if (patterns.improvementTrend < -5) {
            reasons.push({
                type: 'plateau-breaker',
                priority: 85,
                reason: `Performance declining by ${Math.abs(patterns.improvementTrend).toFixed(1)}% - need variety`,
                focus: 'challenge'
            });
        }
        
        // 3. Mastery advancement
        if (patterns.currentAccuracy > 85 && patterns.improvementTrend > 5) {
            const strongSubjects = Object.entries(profile.strengths)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 3);
                
            if (strongSubjects.length > 0) {
                reasons.push({
                    type: 'advancement',
                    priority: 75,
                    reason: `Excelling in ${strongSubjects[0][0]} (${strongSubjects[0][1]} strong sessions) - ready for advanced content`,
                    subject: strongSubjects[0][0],
                    focus: 'advanced'
                });
            }
        }
        
        // 4. Consistency reward
        if (patterns.consistencyScore > 0.8 && patterns.sessionCount > 10) {
            reasons.push({
                type: 'consistency-reward',
                priority: 60,
                reason: `High consistency score (${(patterns.consistencyScore * 100).toFixed(0)}%) - deserve specialized content`,
                focus: 'specialized'
            });
        }
        
        // Select highest priority reason
        const topReason = reasons.sort((a, b) => b.priority - a.priority)[0];
        
        return {
            recommend: !!topReason,
            reason: topReason?.reason || 'No generation needed',
            type: topReason?.type || null,
            subject: topReason?.subject || null,
            focus: topReason?.focus || 'general'
        };
    }
    
    findMostFrequentHour(hours) {
        const hourCounts = {};
        hours.forEach(hour => {
            hourCounts[hour] = (hourCounts[hour] || 0) + 1;
        });
        
        return Object.entries(hourCounts)
            .sort(([,a], [,b]) => b - a)[0]?.[0] || 12;
    }
    
    calculateConsistencyScore(trends) {
        if (trends.length < 3) return 0;
        
        // Calculate variance in accuracy
        const accuracies = trends.map(t => t.accuracy);
        const mean = accuracies.reduce((sum, acc) => sum + acc, 0) / accuracies.length;
        const variance = accuracies.reduce((sum, acc) => sum + Math.pow(acc - mean, 2), 0) / accuracies.length;
        const standardDeviation = Math.sqrt(variance);
        
        // Lower standard deviation = higher consistency
        // Convert to 0-1 scale where 1 = very consistent
        return Math.max(0, 1 - (standardDeviation / 50));
    }
    
    generatePersonalizedDeck(patterns, profile, generationType) {
        console.log('🎨 Generating personalized deck:', generationType);
        
        // Mark generation timestamp
        localStorage.setItem('last-ai-generation', Date.now().toString());
        
        const deckConfig = this.createDeckConfig(patterns, profile, generationType);
        const cards = this.generateSmartCards(deckConfig, patterns, profile);
        
        if (cards.length === 0) {
            console.log('No suitable cards generated');
            return;
        }
        
        const newDeck = {
            id: 'ai_generated_' + Date.now(),
            name: deckConfig.name,
            subject: deckConfig.subject,
            difficulty: deckConfig.difficulty,
            isGenerated: true,
            generatedAt: Date.now(),
            generationType: generationType,
            confidence: deckConfig.confidence,
            reason: {
                title: deckConfig.reasonTitle,
                description: deckConfig.reasonDescription
            },
            cards: cards,
            titleCards: [{
                title: deckConfig.name,
                description: deckConfig.description
            }],
            aiMetadata: {
                targetWeakness: patterns.knowledgeGaps[0]?.subject || null,
                userAccuracy: patterns.currentAccuracy,
                improvementTrend: patterns.improvementTrend,
                generatedFor: generationType,
                profileSnapshot: {
                    sessionCount: patterns.sessionCount,
                    consistency: patterns.consistencyScore,
                    preferredDifficulty: patterns.preferredDifficulty
                }
            }
        };
        
        // Save to generated decks
        this.saveNewGeneratedDeck(newDeck);
        
        console.log('✨ AI Generated new personalized deck:', newDeck.name);
        
        // Show notification to user
        this.showAIGenerationNotification(newDeck);
    }
    
    createDeckConfig(patterns, profile, generationType) {
        const configs = {
            'weakness-reinforcement': {
                name: `${patterns.knowledgeGaps[0]?.subject || 'Focus'} - Targeted Practice`,
                subject: patterns.knowledgeGaps[0]?.subject || 'General',
                difficulty: 'Beginner', // Start easier for weak areas
                confidence: 0.95,
                reasonTitle: 'Weakness Detected',
                reasonDescription: `AI identified struggles in ${patterns.knowledgeGaps[0]?.subject}. These cards focus on foundational concepts.`,
                description: 'Personalized practice targeting your challenging areas.',
                cardTypes: ['foundational', 'step-by-step', 'reinforcement']
            },
            'plateau-breaker': {
                name: 'Challenge Booster - Break Through!',
                subject: Object.keys(profile.preferences.favoriteSubjects)[0] || 'Mixed',
                difficulty: 'Advanced',
                confidence: 0.88,
                reasonTitle: 'Performance Plateau',
                reasonDescription: 'AI detected stagnation. These varied challenges will reignite your learning momentum.',
                description: 'Diverse, engaging content to overcome learning plateaus.',
                cardTypes: ['challenge', 'creative', 'application']
            },
            'advancement': {
                name: `Advanced ${patterns.knowledgeGaps.length > 0 ? Object.keys(profile.strengths)[0] : 'Concepts'}`,
                subject: Object.keys(profile.strengths)[0] || 'General',
                difficulty: 'Advanced',
                confidence: 0.92,
                reasonTitle: 'Ready to Advance',
                reasonDescription: `Excellent progress in ${Object.keys(profile.strengths)[0]}! Time for more sophisticated challenges.`,
                description: 'Advanced concepts building on your demonstrated strengths.',
                cardTypes: ['advanced', 'synthesis', 'expert-level']
            },
            'consistency-reward': {
                name: 'Consistency Champion - Special Edition',
                subject: 'Mixed',
                difficulty: patterns.preferredDifficulty,
                confidence: 0.90,
                reasonTitle: 'Consistency Rewarded',
                reasonDescription: `Your ${(patterns.consistencyScore * 100).toFixed(0)}% consistency deserves special content!`,
                description: 'Curated premium content celebrating your dedication.',
                cardTypes: ['premium', 'comprehensive', 'achievement']
            },
            'onboarding-welcome': {
                name: `Welcome to ${patterns.knowledgeGaps[0]?.subject || 'Learning'}!`,
                subject: Object.keys(profile.preferences.favoriteSubjects)[0] || 'General',
                difficulty: patterns.preferredDifficulty,
                confidence: 0.95,
                reasonTitle: 'Welcome Gift',
                reasonDescription: 'A personalized starter deck created just for you based on your preferences!',
                description: 'Your first AI-generated deck, tailored to your interests and confidence level.',
                cardTypes: ['foundational', 'welcome', 'comprehensive']
            }
        };
        
        return configs[generationType] || configs['consistency-reward'];
    }
    
    generateSmartCards(deckConfig, patterns, profile) {
        const cardTemplates = this.getCardTemplateLibrary();
        const subjectTemplates = cardTemplates[deckConfig.subject.toLowerCase()] || cardTemplates['general'];
        const difficultyLevel = this.getDifficultyMultiplier(deckConfig.difficulty);
        
        const generatedCards = [];
        const targetCardCount = Math.min(12, Math.max(6, Math.floor(patterns.sessionCount / 2)));
        
        // Select appropriate templates based on card types
        const selectedTemplates = deckConfig.cardTypes.flatMap(type => 
            subjectTemplates.filter(template => template.types.includes(type))
        );
        
        // Generate cards with personalization
        for (let i = 0; i < targetCardCount && i < selectedTemplates.length * 2; i++) {
            const template = selectedTemplates[i % selectedTemplates.length];
            const personalizedCard = this.personalizeCard(template, patterns, profile, difficultyLevel);
            
            if (personalizedCard) {
                generatedCards.push({
                    ...personalizedCard,
                    type: 'standard',
                    aiGenerated: true,
                    confidence: template.confidence * deckConfig.confidence,
                    personalizedFor: {
                        accuracy: patterns.currentAccuracy,
                        weakness: patterns.knowledgeGaps[0]?.subject || null
                    }
                });
            }
        }
        
        return generatedCards;
    }
    
    getCardTemplateLibrary() {
        return {
            // ============== GCSE MATHEMATICS ==============
            'gcse mathematics': [
                {
                    types: ['foundational', 'reinforcement'],
                    template: 'Solve: <strong>{equation}</strong><br><small>📊 {tier} Tier • {topic}</small>',
                    backTemplate: '<strong>{answer}</strong><br><em>Step-by-step method:</em><br>{method}<br>✅ <strong>Check:</strong> {check}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.92,
                    variants: [
                        { 
                            equation: '3x + 7 = 22', answer: 'x = 5',
                            method: '1) 3x + 7 = 22<br>2) 3x = 22 - 7 = 15<br>3) x = 15 ÷ 3 = 5',
                            check: '3(5) + 7 = 15 + 7 = 22 ✓',
                            gcseTip: 'Always show your working and check your answer!',
                            tier: 'Foundation', topic: 'Linear Equations'
                        },
                        { 
                            equation: '2(x - 4) = 10', answer: 'x = 9',
                            method: '1) 2(x - 4) = 10<br>2) 2x - 8 = 10<br>3) 2x = 18<br>4) x = 9',
                            check: '2(9 - 4) = 2(5) = 10 ✓',
                            gcseTip: 'Expand brackets first, then solve step by step',
                            tier: 'Foundation', topic: 'Linear Equations'
                        },
                        { 
                            equation: 'x² - 9 = 0', answer: 'x = ±3',
                            method: '1) x² = 9<br>2) x = ±√9<br>3) x = ±3',
                            check: '(3)² - 9 = 0 and (-3)² - 9 = 0 ✓',
                            gcseTip: 'Square roots always have positive AND negative solutions',
                            tier: 'Higher', topic: 'Quadratic Equations'
                        }
                    ]
                },
                {
                    types: ['practical', 'calculation'],
                    template: 'Calculate <strong>{calculation}</strong><br><small>💰 {tier} Tier • {topic}</small>',
                    backTemplate: '<strong>{answer}</strong><br><em>Method:</em><br>{method}<br>💡 <strong>Alternative:</strong> {alternative}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.89,
                    variants: [
                        { 
                            calculation: '25% of £80', answer: '£20',
                            method: '25% = 0.25<br>0.25 × £80 = £20',
                            alternative: '25% = ¼<br>£80 ÷ 4 = £20',
                            gcseTip: 'Use whichever method you find easier in exams!',
                            tier: 'Foundation', topic: 'Percentages'
                        },
                        { 
                            calculation: 'the compound interest on £500 at 3% for 2 years', answer: '£30.45',
                            method: 'Year 1: £500 × 1.03 = £515<br>Year 2: £515 × 1.03 = £530.45<br>Interest = £530.45 - £500 = £30.45',
                            alternative: 'Final amount = £500 × (1.03)² = £530.45<br>Interest = £530.45 - £500 = £30.45',
                            gcseTip: 'Compound interest uses multiplier method',
                            tier: 'Higher', topic: 'Compound Interest'
                        }
                    ]
                }
            ],
            // ============== GCSE BIOLOGY ==============
            'gcse biology': [
                {
                    types: ['foundational', 'reinforcement'],
                    template: 'What is <strong>{concept}</strong>?<br><small>🔬 {tier} • {topic}</small>',
                    backTemplate: '<strong>{definition}</strong><br><em>Key points:</em><br>• {point1}<br>• {point2}<br>🧬 <strong>Example:</strong> {example}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.90,
                    variants: [
                        {
                            concept: 'mitosis', definition: 'Cell division producing two identical diploid cells',
                            point1: 'Used for growth and repair in organisms',
                            point2: 'Each daughter cell has the full set of chromosomes',
                            example: 'Skin cells dividing to heal a cut',
                            gcseTip: 'Don\'t confuse with meiosis (produces gametes)!',
                            tier: 'Foundation/Higher', topic: 'Cell Division'
                        },
                        {
                            concept: 'photosynthesis', definition: 'Process where plants make glucose using light energy',
                            point1: 'Occurs in chloroplasts containing chlorophyll',
                            point2: 'Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
                            example: 'Green leaves producing oxygen during daylight',
                            gcseTip: 'This equation is worth 3-4 marks - learn it perfectly!',
                            tier: 'Foundation/Higher', topic: 'Bioenergetics'
                        },
                        {
                            concept: 'an enzyme', definition: 'Biological catalyst that speeds up chemical reactions',
                            point1: 'Have specific active sites for substrates (lock & key model)',
                            point2: 'Can be denatured by high temperature or wrong pH',
                            example: 'Pepsin breaking down proteins in the stomach',
                            gcseTip: '"Denatured" means permanently damaged - shape changes!',
                            tier: 'Foundation/Higher', topic: 'Enzymes'
                        }
                    ]
                },
                {
                    types: ['practical', 'required'],
                    template: 'In the <strong>{practical}</strong> practical, what would you observe?<br><small>🧪 Required Practical • {topic}</small>',
                    backTemplate: '<strong>Observations:</strong><br>{observations}<br><em>Explanation:</em><br>{explanation}<br>⚗️ <strong>Safety note:</strong> {safety}<br>🎯 <strong>Exam Tip:</strong> {examTip}',
                    confidence: 0.87,
                    variants: [
                        {
                            practical: 'food tests', topic: 'Required Practical',
                            observations: '• Benedict\'s test: blue → brick red (reducing sugars)<br>• Iodine test: brown → blue-black (starch)<br>• Biuret test: blue → purple (protein)',
                            explanation: 'Each test uses specific reagents that change colour when the nutrient is present',
                            safety: 'Benedict\'s reagent is heated - handle carefully',
                            examTip: 'Learn the colour changes - they\'re tested every year!'
                        }
                    ]
                }
            ],
            // ============== GCSE CHEMISTRY ==============
            'gcse chemistry': [
                {
                    types: ['foundational', 'calculation'],
                    template: 'Calculate the relative formula mass (Mr) of <strong>{compound}</strong><br><small>🧮 {tier} • Quantitative Chemistry</small>',
                    backTemplate: '<strong>Mr = {answer}</strong><br><em>Calculation:</em><br>{calculation}<br>📚 <strong>Method:</strong> {method}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.88,
                    variants: [
                        {
                            compound: 'CaCO₃', answer: '100',
                            calculation: 'Ca: 40 × 1 = 40<br>C: 12 × 1 = 12<br>O: 16 × 3 = 48<br>Total: 40 + 12 + 48 = 100',
                            method: '1) Find atomic masses from periodic table<br>2) Multiply by number of atoms<br>3) Add them all together',
                            gcseTip: 'Use the periodic table given in exams - don\'t memorise atomic masses!',
                            tier: 'Foundation/Higher'
                        },
                        {
                            compound: 'H₂SO₄', answer: '98',
                            calculation: 'H: 1 × 2 = 2<br>S: 32 × 1 = 32<br>O: 16 × 4 = 64<br>Total: 2 + 32 + 64 = 98',
                            method: '1) Count each type of atom<br>2) Multiply by atomic mass<br>3) Add all values',
                            gcseTip: 'Be careful with subscripts - H₂SO₄ has 2 H atoms and 4 O atoms!',
                            tier: 'Foundation/Higher'
                        }
                    ]
                },
                {
                    types: ['practical', 'observation'],
                    template: 'What happens when <strong>{reactant1}</strong> reacts with <strong>{reactant2}</strong>?<br><small>⚗️ {tier} • {topic}</small>',
                    backTemplate: '<strong>Equation:</strong> {equation}<br><em>Observations:</em><br>{observations}<br>🧪 <strong>Test:</strong> {test}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.91,
                    variants: [
                        {
                            reactant1: 'magnesium', reactant2: 'hydrochloric acid',
                            equation: 'Mg + 2HCl → MgCl₂ + H₂',
                            observations: '• Fizzing/bubbling (hydrogen gas)<br>• Metal dissolves<br>• Solution gets warm (exothermic)',
                            test: 'Squeaky pop test confirms hydrogen gas',
                            gcseTip: 'This is a classic Required Practical - know the observations!',
                            tier: 'Foundation/Higher', topic: 'Metal Reactions'
                        },
                        {
                            reactant1: 'calcium carbonate', reactant2: 'hydrochloric acid',
                            equation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂',
                            observations: '• Fizzing (CO₂ gas produced)<br>• Solid dissolves<br>• Effervescence',
                            test: 'Limewater turns milky with CO₂',
                            gcseTip: 'Test for carbonates - they all react with acids to give CO₂',
                            tier: 'Foundation/Higher', topic: 'Chemical Changes'
                        }
                    ]
                }
            ],
            // ============== GCSE PHYSICS ==============
            'gcse physics': [
                {
                    types: ['foundational', 'equations'],
                    template: 'State the equation for <strong>{concept}</strong><br><small>⚡ {tier} • {topic}</small>',
                    backTemplate: '<strong>{equation}</strong><br><em>Where:</em><br>{variables}<br>📐 <strong>Units:</strong> {units}<br>📏 <strong>Example:</strong> {example}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.91,
                    variants: [
                        {
                            concept: 'speed', equation: 'speed = distance ÷ time',
                            variables: 's = speed<br>d = distance<br>t = time',
                            units: 'speed: m/s, distance: m, time: s',
                            example: 'Car travels 100m in 10s: speed = 100÷10 = 10 m/s',
                            gcseTip: 'This is the most tested equation in GCSE Physics!',
                            tier: 'Foundation/Higher', topic: 'Motion'
                        },
                        {
                            concept: 'electrical power', equation: 'power = voltage × current',
                            variables: 'P = power (W)<br>V = voltage (V)<br>I = current (A)',
                            units: 'power: W (watts), voltage: V (volts), current: A (amps)',
                            example: '12V bulb with 2A current: P = 12×2 = 24W',
                            gcseTip: 'Remember P = VI for electrical power calculations',
                            tier: 'Foundation/Higher', topic: 'Electricity'
                        }
                    ]
                }
            ],
            // ============== GCSE ENGLISH LANGUAGE ==============
            'gcse english language': [
                {
                    types: ['foundational', 'techniques'],
                    template: 'What is the effect of using <strong>{technique}</strong> in writing?<br><small>✍️ {paper} • Language Analysis</small>',
                    backTemplate: '<strong>Effect:</strong> {effect}<br><em>Purpose:</em> {purpose}<br>📝 <strong>Example:</strong> {example}<br>✏️ <strong>Analysis Tip:</strong> {tip}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.87,
                    variants: [
                        {
                            technique: 'short sentences', 
                            effect: 'Creates tension, emphasis, and dramatic impact',
                            purpose: 'Controls pace and draws attention to key information',
                            example: '"The door creaked open. Silence. Nothing but darkness ahead."',
                            tip: 'Always explain the effect on the reader, not just identify the technique',
                            gcseTip: 'Use short sentences at key moments in creative writing!',
                            paper: 'Paper 1 & 2'
                        },
                        {
                            technique: 'metaphor', 
                            effect: 'Creates vivid imagery by directly comparing unrelated things',
                            purpose: 'Helps readers understand complex ideas through familiar comparisons',
                            example: '"Her voice was music to his ears" - suggests beauty and pleasure',
                            tip: 'Explain HOW the metaphor creates meaning, not just what it compares',
                            gcseTip: 'Better than similes for creating powerful imagery',
                            paper: 'Paper 1 & 2'
                        }
                    ]
                },
                {
                    types: ['creative', 'structure'],
                    template: 'How do you create a strong <strong>{element}</strong> in creative writing?<br><small>🚀 Paper 2 Section B • Creative Writing</small>',
                    backTemplate: '<strong>Techniques:</strong><br>{techniques}<br><em>Examples:</em><br>{examples}<br>✍️ <strong>Why it works:</strong> {why}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.85,
                    variants: [
                        {
                            element: 'opening',
                            techniques: '• Start in the middle of action (in media res)<br>• Use dialogue to immediately engage<br>• Create mystery or ask questions<br>• Establish atmosphere quickly',
                            examples: '"The scream pierced the night air."<br>"I should never have opened that door."',
                            why: 'Hooks the reader immediately and makes them want to continue',
                            gcseTip: 'Your first sentence is crucial - make it count!'
                        }
                    ]
                }
            ],
            // ============== GCSE ENGLISH LITERATURE ==============
            'gcse english literature': [
                {
                    types: ['analysis', 'quotes'],
                    template: 'Analyse this quote from <strong>{text}</strong>: <em>"{quote}"</em><br><small>📖 Paper {paper} • {text}</small>',
                    backTemplate: '<strong>Analysis:</strong> {analysis}<br><em>Context:</em> {context}<br>📚 <strong>Themes:</strong> {themes}<br>🎭 <strong>Language features:</strong> {language}<br>🎯 <strong>Exam Tip:</strong> {examTip}',
                    confidence: 0.83,
                    variants: [
                        {
                            text: 'Macbeth', quote: 'Is this a dagger which I see before me, The handle toward my hand?',
                            analysis: 'The rhetorical question shows Macbeth\'s psychological turmoil and uncertainty. The dagger symbolizes his murderous intentions and the supernatural influence corrupting him.',
                            context: 'Spoken just before Duncan\'s murder, showing Macbeth\'s hesitation and horror at what he\'s about to do',
                            themes: 'Ambition, guilt, supernatural, appearance vs reality',
                            language: 'Rhetorical question, symbolism, dramatic soliloquy',
                            examTip: 'Always link language choices to character development and themes',
                            paper: '1'
                        }
                    ]
                }
            ],
            // ============== GCSE HISTORY ==============
            'gcse history': [
                {
                    types: ['chronology', 'causation'],
                    template: 'What were the main causes of <strong>{event}</strong>?<br><small>🏛️ {paper} • {topic}</small>',
                    backTemplate: '<strong>Short-term causes:</strong><br>{shortTerm}<br><strong>Long-term causes:</strong><br>{longTerm}<br>🎯 <strong>Most important:</strong> {most}<br>📚 <strong>Exam Tip:</strong> {examTip}',
                    confidence: 0.86,
                    variants: [
                        {
                            event: 'World War One',
                            shortTerm: '• Assassination of Archduke Franz Ferdinand<br>• July Crisis and ultimatums<br>• Alliance system activated',
                            longTerm: '• Imperialism creating tensions<br>• Naval arms race<br>• Balkan nationalism<br>• Alliance system dividing Europe',
                            most: 'Alliance system - turned a regional conflict into world war',
                            examTip: 'Always explain how causes link together - don\'t just list them!',
                            paper: 'Paper 1', topic: 'Conflict & Tension'
                        }
                    ]
                }
            ],
            // ============== GCSE GEOGRAPHY ==============
            'gcse geography': [
                {
                    types: ['physical', 'processes'],
                    template: 'Explain the process of <strong>{process}</strong><br><small>🌍 {paper} • {topic}</small>',
                    backTemplate: '<strong>Process:</strong><br>{steps}<br><em>Key factors:</em><br>{factors}<br>🌎 <strong>Example:</strong> {example}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.88,
                    variants: [
                        {
                            process: 'coastal erosion',
                            steps: '1) Waves hit cliff face<br>2) Hydraulic action and abrasion<br>3) Cracks widen (freeze-thaw)<br>4) Rock falls create wave-cut platform',
                            factors: '• Wave energy and fetch<br>• Rock type and structure<br>• Weather conditions',
                            example: 'Flamborough Head, Yorkshire - chalk cliffs retreating',
                            gcseTip: 'Learn case studies - they\'re worth lots of marks!',
                            paper: 'Paper 1', topic: 'Coastal Landscapes'
                        }
                    ]
                }
            ],
            // ============== GCSE MODERN FOREIGN LANGUAGES ==============
            'gcse french': [
                {
                    types: ['vocabulary', 'foundation'],
                    template: 'How do you say <strong>"{english}"</strong> in French?<br><small>🇫🇷 Foundation/Higher • {topic}</small>',
                    backTemplate: '<strong>{french}</strong><br><em>Pronunciation:</em> {pronunciation}<br>📝 <strong>Grammar note:</strong> {grammar}<br>💡 <strong>Example sentence:</strong> {example}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.90,
                    variants: [
                        {
                            english: 'I would like', french: 'Je voudrais',
                            pronunciation: 'zhuh voo-dray',
                            grammar: 'Conditional tense - more polite than "je veux"',
                            example: 'Je voudrais un café, s\'il vous plaît',
                            gcseTip: 'Essential for role-plays and speaking assessments!',
                            topic: 'Daily Routines'
                        }
                    ]
                }
            ],
            'gcse spanish': [
                {
                    types: ['vocabulary', 'foundation'],
                    template: 'How do you say <strong>"{english}"</strong> in Spanish?<br><small>🇪🇸 Foundation/Higher • {topic}</small>',
                    backTemplate: '<strong>{spanish}</strong><br><em>Pronunciation:</em> {pronunciation}<br>📝 <strong>Grammar note:</strong> {grammar}<br>💡 <strong>Example:</strong> {example}<br>🎯 <strong>GCSE Tip:</strong> {gcseTip}',
                    confidence: 0.90,
                    variants: [
                        {
                            english: 'I live in', spanish: 'Vivo en',
                            pronunciation: 'VEE-voh en',
                            grammar: 'Present tense of "vivir" (to live)',
                            example: 'Vivo en Manchester - I live in Manchester',
                            gcseTip: 'Key phrase for personal information topics!',
                            topic: 'Personal Information'
                        }
                    ]
                }
            ],
            // ============== FALLBACK TEMPLATES ==============
            'mathematics': [
                {
                    types: ['foundational', 'reinforcement'],
                    template: 'Calculate: <strong>{operation}</strong>',
                    backTemplate: '<strong>{answer}</strong><br><em>Method: {method}</em><br>💡 <strong>Tip:</strong> {tip}',
                    confidence: 0.9,
                    variants: [
                        { operation: '15% of 60', answer: '9', method: '15% = 0.15, so 0.15 × 60 = 9', tip: 'Convert percentages to decimals for easy calculation' }
                    ]
                }
            ],
            'general': [
                {
                    types: ['study-skills', 'meta'],
                    template: 'GCSE Study Tip: <strong>{tip}</strong>',
                    backTemplate: '<strong>Why it works:</strong> {explanation}<br><em>How to apply:</em><br>{application}<br>🎓 <strong>Subjects this helps:</strong> {subjects}',
                    confidence: 0.85,
                    variants: [
                        {
                            tip: 'Use the Pomodoro Technique',
                            explanation: 'Breaks study into focused 25-minute chunks with breaks',
                            application: '1) Study for 25 minutes<br>2) Take 5-minute break<br>3) Repeat 4 times<br>4) Take longer 30-minute break',
                            subjects: 'All GCSE subjects - especially Maths, Sciences, English'
                        }
                    ]
                }
            ]
        };
    }
    
    personalizeCard(template, patterns, profile, difficultyLevel) {
        const variants = template.variants;
        if (!variants || variants.length === 0) return null;
        
        // Select variant based on user's current performance level
        let variantIndex = 0;
        if (patterns.currentAccuracy > 80) {
            // High performers get more challenging variants
            variantIndex = Math.min(variants.length - 1, Math.floor(variants.length * 0.7));
        } else if (patterns.currentAccuracy < 60) {
            // Struggling users get foundational variants
            variantIndex = 0;
        } else {
            // Mid-level performers get random selection
            variantIndex = Math.floor(Math.random() * variants.length);
        }
        
        const selectedVariant = variants[variantIndex];
        
        // Replace template placeholders with variant data
        let front = template.template;
        let back = template.backTemplate;
        
        Object.entries(selectedVariant).forEach(([key, value]) => {
            const placeholder = `{${key}}`;
            front = front.replace(new RegExp(placeholder, 'g'), value);
            back = back.replace(new RegExp(placeholder, 'g'), value);
        });
        
        // Add personalization based on user patterns
        if (patterns.consistencyScore > 0.8) {
            back += '<br>🌟 <em>Great consistency! Keep it up!</em>';
        } else if (patterns.improvementTrend > 10) {
            back += '<br>📈 <em>You\'re improving fast!</em>';
        }
        
        return { front, back };
    }
    
    getDifficultyMultiplier(difficulty) {
        const multipliers = {
            'Beginner': 0.7,
            'Intermediate': 1.0,
            'Advanced': 1.3,
            'Expert': 1.6
        };
        return multipliers[difficulty] || 1.0;
    }
    
    saveNewGeneratedDeck(newDeck) {
        const existingDecks = this.loadGeneratedDecks();
        
        // Limit to 10 generated decks to prevent storage overflow
        if (existingDecks.length >= 10) {
            // Remove oldest deck
            existingDecks.sort((a, b) => a.generatedAt - b.generatedAt);
            existingDecks.shift();
        }
        
        existingDecks.push(newDeck);
        this.saveGeneratedDecks(existingDecks);
        
        // Update display
        this.renderGeneratedDecks(existingDecks);
        
        console.log('💾 Saved new AI-generated deck:', newDeck.name);
    }
    
    showAIGenerationNotification(deck) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'ai-notification';
        notification.innerHTML = `
            <div class="ai-notification-content">
                <div class="ai-notification-header">
                    <span class="ai-badge">🤖 AI Generated</span>
                    <button class="ai-notification-close" onclick="this.parentElement.parentElement.parentElement.remove()">✕</button>
                </div>
                <h4>${deck.name}</h4>
                <p>${deck.reason.description}</p>
                <div class="ai-notification-actions">
                    <button class="btn btn-ai btn-small" onclick="viewGeneratedDeck('${deck.id}'); this.parentElement.parentElement.parentElement.remove();">
                        📖 Study Now
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="this.parentElement.parentElement.parentElement.remove();">
                        Later
                    </button>
                </div>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 350px;
            animation: slideIn 0.5s ease-out;
        `;
        
        // Add animation keyframe if not exists
        if (!document.getElementById('ai-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'ai-notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .ai-notification-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }
                .ai-badge {
                    background: rgba(255,255,255,0.2);
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.8em;
                    font-weight: bold;
                }
                .ai-notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ai-notification-close:hover {
                    background: rgba(255,255,255,0.2);
                }
                .ai-notification-content h4 {
                    margin: 10px 0;
                    font-size: 1.1em;
                }
                .ai-notification-content p {
                    margin: 10px 0;
                    opacity: 0.9;
                    line-height: 1.4;
                }
                .ai-notification-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: 15px;
                }
                .ai-notification-actions .btn {
                    flex: 1;
                    padding: 8px 12px;
                    font-size: 0.85em;
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideIn 0.5s ease-out reverse';
                setTimeout(() => notification.remove(), 500);
            }
        }, 8000);
    }
    
    startBackgroundAIMonitoring() {
        // Check for AI opportunities every 5 minutes during active use
        setInterval(() => {
            const profile = JSON.parse(localStorage.getItem('ai-learning-profile') || '{}');
            if (profile.preferences && profile.preferences.accuracyTrends.length >= 5) {
                // Only run if user is actively using the app (last activity within 10 minutes)
                const lastActivity = parseInt(localStorage.getItem('last-user-activity') || '0');
                const timeSinceActivity = Date.now() - lastActivity;
                
                if (timeSinceActivity < 10 * 60 * 1000) { // 10 minutes
                    this.checkForAIOpportunities(profile);
                }
            }
        }, 5 * 60 * 1000); // 5 minutes
        
        // Track user activity
        this.trackUserActivity();
    }
    
    trackUserActivity() {
        const updateActivity = () => {
            localStorage.setItem('last-user-activity', Date.now().toString());
        };
        
        // Track various user interactions
        ['click', 'keypress', 'scroll', 'mousemove'].forEach(event => {
            document.addEventListener(event, updateActivity, { passive: true });
        });
        
        updateActivity(); // Initial activity
    }
    
    checkForAIOpportunities(profile) {
        const patterns = this.analyzeUserPatterns(profile);
        
        // Check if user would benefit from new content
        const recommendation = this.shouldGenerateNewContent(patterns, profile);
        
        if (recommendation.recommend && recommendation.type !== 'consistency-reward') {
            console.log('🎯 Background AI detected opportunity:', recommendation.reason);
            
            // Generate content in background (no immediate notification)
            setTimeout(() => {
                this.generatePersonalizedDeck(patterns, profile, recommendation.type);
            }, 1000);
        }
    }
    
    // =================== END AI LEARNING SYSTEM ===================
    
    // =================== ONBOARDING SYSTEM ===================
    
    isFirstTimeUser() {
        const hasVisited = localStorage.getItem('flashcards-first-visit');
        const hasProfile = localStorage.getItem('ai-learning-profile');
        return !hasVisited || !hasProfile;
    }
    
    showOnboarding() {
        const modal = document.getElementById('onboarding-modal');
        if (modal) {
            modal.style.display = 'flex';
            this.initializeOnboarding();
        }
    }
    
    initializeOnboarding() {
        this.onboardingData = {
            subjects: [],
            confidence: {},
            preferences: {
                sessionLength: 15,
                studyTime: null,
                learningStyle: null,
                goal: null
            }
        };
        
        this.currentStep = 1;
        this.totalSteps = 5;
        
        this.setupOnboardingListeners();
        this.updateStepIndicators();
    }
    
    setupOnboardingListeners() {
        // Subject selection
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', () => {
                const subject = card.dataset.subject;
                this.toggleSubjectSelection(card, subject);
            });
        });
        
        // Session length selection
        document.querySelectorAll('.session-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.session-option').forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                this.onboardingData.preferences.sessionLength = parseInt(option.dataset.minutes);
            });
        });
        
        // Study time selection
        document.querySelectorAll('.time-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.time-option').forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                this.onboardingData.preferences.studyTime = option.dataset.time;
            });
        });
        
        // Learning style selection
        document.querySelectorAll('.style-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.style-option').forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                this.onboardingData.preferences.learningStyle = option.dataset.style;
            });
        });
        
        // Goal selection
        document.querySelectorAll('.goal-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.goal-option').forEach(o => o.classList.remove('selected'));
                option.classList.add('selected');
                this.onboardingData.preferences.goal = option.dataset.goal;
            });
        });
        
        // Navigation buttons
        const nextBtn = document.getElementById('next-step');
        const prevBtn = document.getElementById('prev-step');
        const finishBtn = document.getElementById('finish-onboarding');
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevStep());
        }
        
        if (finishBtn) {
            finishBtn.addEventListener('click', () => this.completeOnboarding());
        }
    }
    
    toggleSubjectSelection(card, subject) {
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
            this.onboardingData.subjects = this.onboardingData.subjects.filter(s => s !== subject);
        } else {
            card.classList.add('selected');
            this.onboardingData.subjects.push(subject);
        }
    }
    
    nextStep() {
        if (!this.validateCurrentStep()) {
            return;
        }
        
        if (this.currentStep === 1) {
            this.generateConfidenceStep();
        } else if (this.currentStep === 4) {
            this.generateAIPreview();
        }
        
        if (this.currentStep < this.totalSteps) {
            this.showStep(this.currentStep + 1);
        }
    }
    
    prevStep() {
        if (this.currentStep > 1) {
            this.showStep(this.currentStep - 1);
        }
    }
    
    showStep(stepNumber) {
        // Hide current step
        const currentStepEl = document.getElementById(`step-${this.currentStep}`);
        if (currentStepEl) currentStepEl.style.display = 'none';
        
        // Show new step
        const newStepEl = document.getElementById(stepNumber === 5 ? 'step-final' : `step-${stepNumber}`);
        if (newStepEl) newStepEl.style.display = 'block';
        
        this.currentStep = stepNumber;
        this.updateStepIndicators();
        this.updateNavigationButtons();
    }
    
    updateStepIndicators() {
        const indicators = document.querySelectorAll('.step-dot');
        indicators.forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                dot.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                dot.classList.add('active');
            }
        });
    }
    
    updateNavigationButtons() {
        const nextBtn = document.getElementById('next-step');
        const prevBtn = document.getElementById('prev-step');
        const finishBtn = document.getElementById('finish-onboarding');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentStep > 1 ? 'inline-block' : 'none';
        }
        
        if (nextBtn && finishBtn) {
            if (this.currentStep === this.totalSteps) {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
            }
        }
    }
    
    validateCurrentStep() {
        switch (this.currentStep) {
            case 1:
                if (this.onboardingData.subjects.length === 0) {
                    alert('Please select at least one subject that interests you.');
                    return false;
                }
                return true;
            case 2:
                const hasAllConfidence = this.onboardingData.subjects.every(
                    subject => this.onboardingData.confidence[subject] !== undefined
                );
                if (!hasAllConfidence) {
                    alert('Please set your confidence level for all selected subjects.');
                    return false;
                }
                return true;
            case 3:
                if (!this.onboardingData.preferences.studyTime || !this.onboardingData.preferences.learningStyle) {
                    alert('Please complete all preference selections.');
                    return false;
                }
                return true;
            case 4:
                if (!this.onboardingData.preferences.goal) {
                    alert('Please select your main learning goal.');
                    return false;
                }
                return true;
            default:
                return true;
        }
    }
    
    generateConfidenceStep() {
        const container = document.getElementById('confidence-subjects');
        if (!container) return;
        
        container.innerHTML = this.onboardingData.subjects.map(subject => `
            <div class="confidence-subject">
                <h4>
                    ${this.getSubjectIcon(subject)} ${subject}
                </h4>
                <div class="confidence-levels">
                    <button type="button" class="confidence-level" data-subject="${subject}" data-level="1">
                        😰 Beginner<br><small>Just starting out</small>
                    </button>
                    <button type="button" class="confidence-level" data-subject="${subject}" data-level="2">
                        🤔 Some Knowledge<br><small>Know the basics</small>
                    </button>
                    <button type="button" class="confidence-level" data-subject="${subject}" data-level="3">
                        😊 Confident<br><small>Pretty comfortable</small>
                    </button>
                    <button type="button" class="confidence-level" data-subject="${subject}" data-level="4">
                        🎓 Advanced<br><small>Very knowledgeable</small>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners for confidence levels
        container.querySelectorAll('.confidence-level').forEach(level => {
            level.addEventListener('click', () => {
                const subject = level.dataset.subject;
                const confidence = parseInt(level.dataset.level);
                
                // Remove selection from siblings
                const siblings = container.querySelectorAll(`[data-subject="${subject}"]`);
                siblings.forEach(s => s.classList.remove('selected'));
                
                // Select this level
                level.classList.add('selected');
                this.onboardingData.confidence[subject] = confidence;
            });
        });
    }
    
    getSubjectIcon(subject) {
        const icons = {
            'Mathematics': '🔢',
            'Science': '🔬',
            'Languages': '🗣️',
            'History': '📜',
            'Literature': '📖',
            'Computer Science': '💻',
            'Art': '🎨',
            'Music': '🎵'
        };
        return icons[subject] || '📚';
    }
    
    generateAIPreview() {
        const container = document.getElementById('ai-preview');
        if (!container) return;
        
        const insights = this.generatePersonalizedInsights();
        
        container.innerHTML = `
            <h4>🤖 Your Personalized AI Profile</h4>
            ${insights.map(insight => `
                <div class="ai-preview-item">
                    <span>${insight.icon}</span>
                    <span>${insight.text}</span>
                </div>
            `).join('')}
        `;
    }
    
    generatePersonalizedInsights() {
        const insights = [];
        
        // Subject focus
        if (this.onboardingData.subjects.length > 0) {
            insights.push({
                icon: '🎯',
                text: `Will focus on ${this.onboardingData.subjects.slice(0, 2).join(' and ')}${this.onboardingData.subjects.length > 2 ? ' and more' : ''}`
            });
        }
        
        // Difficulty adaptation
        const avgConfidence = Object.values(this.onboardingData.confidence).reduce((a, b) => a + b, 0) / Object.values(this.onboardingData.confidence).length;
        const difficultyLevel = avgConfidence <= 2 ? 'beginner-friendly' : avgConfidence >= 3.5 ? 'advanced' : 'intermediate';
        insights.push({
            icon: '📊',
            text: `Starting with ${difficultyLevel} content based on your confidence levels`
        });
        
        // Session timing
        insights.push({
            icon: '⏰',
            text: `Optimized for ${this.onboardingData.preferences.sessionLength}-minute study sessions`
        });
        
        // Learning style
        if (this.onboardingData.preferences.learningStyle) {
            const styleDescriptions = {
                visual: 'rich visual content with diagrams and images',
                auditory: 'content with pronunciation guides and audio cues',
                kinesthetic: 'interactive and hands-on learning materials',
                reading: 'comprehensive text-based explanations'
            };
            insights.push({
                icon: '🧠',
                text: `Tailored for ${styleDescriptions[this.onboardingData.preferences.learningStyle]}`
            });
        }
        
        // Goal-based approach
        if (this.onboardingData.preferences.goal) {
            const goalDescriptions = {
                'exam-prep': 'Structured practice with test-taking strategies',
                'skill-building': 'Progressive skill development with real-world applications',
                'review': 'Spaced repetition for knowledge retention',
                'curiosity': 'Diverse, engaging content to satisfy your curiosity'
            };
            insights.push({
                icon: '🚀',
                text: goalDescriptions[this.onboardingData.preferences.goal]
            });
        }
        
        return insights;
    }
    
    completeOnboarding() {
        // Create AI learning profile from onboarding data
        const aiProfile = this.createInitialAIProfile();
        
        // Save profile and mark as visited
        localStorage.setItem('ai-learning-profile', JSON.stringify(aiProfile));
        localStorage.setItem('flashcards-first-visit', Date.now().toString());
        localStorage.setItem('onboarding-completed', JSON.stringify(this.onboardingData));
        
        // Generate initial personalized decks based on preferences
        this.generateInitialPersonalizedDecks(aiProfile);
        
        // Close modal
        const modal = document.getElementById('onboarding-modal');
        if (modal) {
            modal.style.display = 'none';
        }
        
        // Load and render generated decks
        const generatedDecks = this.loadGeneratedDecks();
        this.renderGeneratedDecks(generatedDecks);
        
        // Show success message
        this.showWelcomeMessage();
        
        console.log('🎉 Onboarding completed!', this.onboardingData);
    }
    
    createInitialAIProfile() {
        return {
            preferences: {
                favoriteSubjects: this.onboardingData.subjects.reduce((acc, subject) => {
                    acc[subject] = 1; // Initial interest
                    return acc;
                }, {}),
                difficultyPreference: {},
                studyTimePatterns: {
                    preferredTime: this.onboardingData.preferences.studyTime,
                    sessionLength: this.onboardingData.preferences.sessionLength
                },
                accuracyTrends: [],
                learningStyle: this.onboardingData.preferences.learningStyle,
                goal: this.onboardingData.preferences.goal
            },
            confidence: this.onboardingData.confidence,
            weaknesses: {},
            strengths: {},
            studyHabits: {
                preferredSessionLength: this.onboardingData.preferences.sessionLength,
                bestPerformanceTime: this.mapStudyTimeToHour(this.onboardingData.preferences.studyTime),
                consistencyScore: 0
            },
            lastUpdated: Date.now(),
            onboardingCompleted: true
        };
    }
    
    mapStudyTimeToHour(timePreference) {
        const mapping = {
            'morning': 9,
            'afternoon': 15,
            'evening': 19,
            'night': 22
        };
        return mapping[timePreference] || 12;
    }
    
    generateInitialPersonalizedDecks(profile) {
        // Generate a starter deck for the user's most confident subject
        const mostConfidentSubject = Object.entries(this.onboardingData.confidence)
            .sort(([,a], [,b]) => b - a)[0];
        
        if (mostConfidentSubject) {
            const [subject, confidence] = mostConfidentSubject;
            const patterns = {
                currentAccuracy: confidence * 20 + 20, // Convert 1-4 to 40-100 range
                knowledgeGaps: [],
                preferredDifficulty: confidence >= 3 ? 'Advanced' : confidence >= 2 ? 'Intermediate' : 'Beginner',
                sessionCount: 1,
                consistencyScore: 1.0,
                improvementTrend: 0
            };
            
            setTimeout(() => {
                this.generatePersonalizedDeck(patterns, profile, 'onboarding-welcome');
            }, 2000);
        }
    }
    
    showWelcomeMessage() {
        const notification = document.createElement('div');
        notification.className = 'welcome-notification';
        notification.innerHTML = `
            <div class="welcome-content">
                <h3>🎉 Welcome to FlashCards!!!!</h3>
                <p>Your personalized learning journey begins now. I'm already creating your first custom deck!</p>
                <button onclick="this.parentElement.parentElement.remove()" class="btn btn-ai">Get Started!</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            z-index: 10001;
            text-align: center;
            max-width: 400px;
            animation: bounceIn 0.6s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // =================== END ONBOARDING SYSTEM ===================

    getCardLearningData(deckId, cardIndex) {
        const cardId = `${deckId}-${cardIndex}`;
        if (!this.learningData[cardId]) {
            this.learningData[cardId] = {
                attempts: 0,
                correctAttempts: 0,
                incorrectAttempts: 0,
                averageResponseTime: 0,
                lastStudied: null,
                difficultyScore: 1.0, // 1.0 = normal, >1.0 = harder, <1.0 = easier
                repetitionLevel: 0, // Spaced repetition level
                nextReviewDate: null,
                totalStudyTime: 0
            };
        }
        return this.learningData[cardId];
    }

    updateCardPerformance(deckId, cardIndex, isCorrect, responseTime) {
        const cardData = this.getCardLearningData(deckId, cardIndex);
        
        // Update basic stats
        cardData.attempts++;
        cardData.lastStudied = Date.now();
        cardData.totalStudyTime += responseTime;
        cardData.averageResponseTime = cardData.totalStudyTime / cardData.attempts;
        
        if (isCorrect) {
            cardData.correctAttempts++;
            
            // Improve difficulty score for correct answers
            cardData.difficultyScore *= 0.95; // Slightly easier
            cardData.repetitionLevel++;
            
            // Calculate next review date (spaced repetition)
            const intervals = [1, 3, 7, 14, 30, 90]; // Days
            const intervalDays = intervals[Math.min(cardData.repetitionLevel - 1, intervals.length - 1)];
            cardData.nextReviewDate = Date.now() + (intervalDays * 24 * 60 * 60 * 1000);
            
        } else {
            cardData.incorrectAttempts++;
            
            // Increase difficulty score for incorrect answers
            cardData.difficultyScore *= 1.2; // Harder
            cardData.repetitionLevel = Math.max(0, cardData.repetitionLevel - 1);
            
            // Reset to shorter interval for difficult cards
            cardData.nextReviewDate = Date.now() + (1 * 24 * 60 * 60 * 1000); // Tomorrow
        }
        
        // Keep difficulty score within reasonable bounds
        cardData.difficultyScore = Math.max(0.1, Math.min(5.0, cardData.difficultyScore));
        
        this.saveLearningData();
    }

    calculateCardWeight(deckId, cardIndex) {
        const cardData = this.getCardLearningData(deckId, cardIndex);
        const now = Date.now();
        
        // Base weight is the difficulty score
        let weight = cardData.difficultyScore;
        
        // If card is due for review (past next review date), increase weight significantly
        if (cardData.nextReviewDate && now >= cardData.nextReviewDate) {
            weight *= 3.0; // Much higher chance of appearing
        }
        
        // If card was answered incorrectly recently, increase weight
        const timeSinceLastStudy = cardData.lastStudied ? (now - cardData.lastStudied) / (1000 * 60 * 60) : 999; // Hours
        if (cardData.incorrectAttempts > cardData.correctAttempts && timeSinceLastStudy < 24) {
            weight *= 2.0; // Double weight for recently missed cards
        }
        
        // Never let weight be zero
        return Math.max(0.1, weight);
    }

    // Weighted shuffle algorithm - cards with higher weights appear more frequently
    weightedShuffle(cards, deckId) {
        const weightedCards = [];
        
        cards.forEach((card, index) => {
            const weight = this.calculateCardWeight(deckId, index);
            const copies = Math.ceil(weight * 2); // More copies = higher frequency
            
            for (let i = 0; i < copies; i++) {
                weightedCards.push({ ...card, originalIndex: index });
            }
        });
        
        // Shuffle the weighted array
        return weightedCards.sort(() => Math.random() - 0.5);
    }

    saveDeck() {
        const name = document.getElementById('deck-name').value.trim();
        const subject = document.getElementById('deck-subject').value.trim();
        const yearGroup = document.getElementById('year-group').value.trim();
        
        if (!name || !subject || !yearGroup) {
            alert('Please fill in deck name, subject, and year group');
            return;
        }

        const cards = this.collectCards();
        const titleCards = this.collectTitleCards();
        
        if (cards.length === 0) {
            alert('Please add at least one study card');
            return;
        }

        if (this.isEditMode && this.editingDeckId) {
            // Update existing deck
            const deckIndex = this.decks.findIndex(d => d.id === this.editingDeckId);
            if (deckIndex !== -1) {
                this.decks[deckIndex] = {
                    ...this.decks[deckIndex], // Keep original id and createdAt
                    name,
                    subject,
                    yearGroup,
                    cards,
                    titleCards,
                    style: this.selectedStyle,
                    color: this.selectedColor,
                    updatedAt: new Date().toISOString()
                };
                this.showNotification('Deck updated successfully!', 'success');
            }
        } else {
            // Create new deck
            const deck = {
                id: Date.now().toString(),
                name,
                subject,
                yearGroup,
                cards,
                titleCards,
                style: this.selectedStyle,
                color: this.selectedColor,
                createdAt: new Date().toISOString()
            };
            this.decks.push(deck);
            this.showNotification('Deck saved successfully!', 'success');
            
            // Award XP for creating a new deck
            if (typeof awardXP === 'function') {
                awardXP(XP_VALUES.createDeck, 'Deck created!');
                
                // Check deck creation achievements
                if (typeof checkAchievements === 'function') {
                    checkAchievements('createDeck', { totalDecks: this.decks.length });
                }
            }
        }

        this.saveDecks();
        this.clearForm();
        this.showView('home');
    }

    collectCards() {
        const cards = [];
        const cardItems = document.querySelectorAll('.card-item');
        
        cardItems.forEach(item => {
            const questionEditor = item.querySelector('.card-question-editor');
            const answerEditor = item.querySelector('.card-answer-editor');
            
            // Get HTML content, but remove placeholder elements
            let questionHTML = questionEditor.innerHTML;
            let answerHTML = answerEditor.innerHTML;
            
            // Remove placeholder spans
            questionHTML = questionHTML.replace(/<span class="placeholder">.*?<\/span>/g, '');
            answerHTML = answerHTML.replace(/<span class="placeholder">.*?<\/span>/g, '');
            
            const questionText = questionEditor.textContent.trim();
            const answerText = answerEditor.textContent.trim();
            
            // Get explanation if provided
            const explanationEditor = item.querySelector('.card-explanation-editor');
            let explanationHTML = '';
            let explanationText = '';
            
            if (explanationEditor) {
                explanationHTML = explanationEditor.innerHTML;
                explanationHTML = explanationHTML.replace(/<span class="placeholder">.*?<\/span>/g, '');
                explanationText = explanationEditor.textContent.trim();
            }
            
            // Get alternative answers
            const alternativeAnswers = [];
            const altAnswerInputs = item.querySelectorAll('.alternative-answer-input');
            altAnswerInputs.forEach(input => {
                const altAnswer = input.value.trim();
                if (altAnswer) {
                    alternativeAnswers.push(altAnswer);
                }
            });
            
            // Get custom hint if provided
            const hintInput = item.querySelector('.card-hint-input');
            const customHint = hintInput ? hintInput.value.trim() : '';
            
            if (questionText && answerText) {
                const card = { 
                    question: questionHTML.trim(), 
                    answer: answerHTML.trim(),
                    questionText: questionText,
                    answerText: answerText
                };
                
                // Add explanation if provided
                if (explanationText) {
                    card.explanation = explanationHTML.trim();
                    card.explanationText = explanationText;
                }
                
                // Add alternative answers if provided
                if (alternativeAnswers.length > 0) {
                    card.alternativeAnswers = alternativeAnswers;
                }
                
                // Add custom hint if provided
                if (customHint) {
                    card.customHint = customHint;
                }
                
                cards.push(card);
            }
        });
        
        return cards;
    }

    collectTitleCards() {
        const titleCards = [];
        const titleCardItems = document.querySelectorAll('.title-card-item');
        
        titleCardItems.forEach(item => {
            const titleEditor = item.querySelector('.title-card-title-editor');
            const contentEditor = item.querySelector('.title-card-content-editor');
            
            // Get HTML content, but remove placeholder elements
            let titleHTML = titleEditor.innerHTML;
            let contentHTML = contentEditor.innerHTML;
            
            // Remove placeholder spans
            titleHTML = titleHTML.replace(/<span class="placeholder">.*?<\/span>/g, '');
            contentHTML = contentHTML.replace(/<span class="placeholder">.*?<\/span>/g, '');
            
            const titleText = titleEditor.textContent.trim();
            const contentText = contentEditor.textContent.trim();
            
            if (titleText) {  // Title is required, content is optional
                titleCards.push({ 
                    title: titleHTML.trim(), 
                    content: contentHTML.trim(),
                    titleText: titleText,
                    contentText: contentText
                });
            }
        });
        
        return titleCards;
    }

    clearForm() {
        document.getElementById('deck-form').reset();
        document.getElementById('cards-list').innerHTML = '';
        document.getElementById('title-cards-list').innerHTML = '';
        
        // Reset customization selections
        document.querySelectorAll('.style-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector('.style-option[data-style="classic"]')?.classList.add('selected');
        document.querySelector('.color-option[data-color="blue"]')?.classList.add('selected');
        this.selectedStyle = 'classic';
        this.selectedColor = 'blue';
        
        // Reset edit mode state
        this.isEditMode = false;
        this.editingDeckId = null;
        this.updateUIForEditMode(false);
        
        this.addCard();
    }

    deleteDeck(deckId) {
        const deck = this.decks.find(d => d.id === deckId);
        if (!deck) {
            alert('Deck not found');
            return;
        }

        // Store the deck to delete for confirmation
        this.deckToDelete = deck;
        
        // Show confirmation modal
        document.getElementById('delete-deck-name').textContent = deck.name;
        document.getElementById('delete-confirmation-input').value = '';
        document.getElementById('confirm-delete-btn').disabled = true;
        document.getElementById('delete-confirmation-modal').style.display = 'flex';
        
        // Focus on the input field
        setTimeout(() => {
            document.getElementById('delete-confirmation-input').focus();
        }, 100);
        
        // Set up input validation
        this.setupDeleteConfirmation();
    }

    setupDeleteConfirmation() {
        const input = document.getElementById('delete-confirmation-input');
        const confirmBtn = document.getElementById('confirm-delete-btn');
        
        // Remove any existing event listeners
        input.replaceWith(input.cloneNode(true));
        const newInput = document.getElementById('delete-confirmation-input');
        
        newInput.addEventListener('input', (e) => {
            const inputValue = e.target.value.trim();
            const deckName = this.deckToDelete.name;
            
            // Check if input matches deck name exactly or is "dev" (developer shortcut)
            const isValid = inputValue === deckName || inputValue === 'dev';
            
            if (isValid) {
                confirmBtn.disabled = false;
                newInput.classList.add('valid');
            } else {
                confirmBtn.disabled = true;
                newInput.classList.remove('valid');
            }
        });
        
        // Allow Enter key to confirm if valid
        newInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !confirmBtn.disabled) {
                this.confirmDelete();
            }
        });
    }

    confirmDelete() {
        if (!this.deckToDelete) return;
        
        // Delete the deck
        this.decks = this.decks.filter(deck => deck.id !== this.deckToDelete.id);
        this.saveDecks();
        this.renderDecks();
        this.updateAILockStatus();
        
        // Show notification
        this.showNotification(`"${this.deckToDelete.name}" deleted successfully`, 'info');
        
        // Close modal and cleanup
        this.cancelDelete();
    }

    cancelDelete() {
        document.getElementById('delete-confirmation-modal').style.display = 'none';
        this.deckToDelete = null;
        
        // Reset form
        document.getElementById('delete-confirmation-input').value = '';
        document.getElementById('confirm-delete-btn').disabled = true;
        document.getElementById('delete-confirmation-input').classList.remove('valid');
    }

    saveDeckToFile(deckId) {
        const deck = this.decks.find(d => d.id === deckId);
        if (!deck) {
            alert('Deck not found');
            return;
        }

        // Create deck data with metadata for file format validation
        const deckData = {
            version: '1.0',
            type: 'flashcards-deck',
            exportedAt: new Date().toISOString(),
            deck: {
                ...deck,
                // Remove the ID to generate new one on import
                id: undefined
            }
        };

        // Convert to JSON string
        const jsonString = JSON.stringify(deckData, null, 2);
        
        // Create blob and download
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Create download link
        const link = document.createElement('a');
        link.href = url;
        link.download = `${deck.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.flashdeck`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the URL object
        URL.revokeObjectURL(url);
        
        this.showNotification('Deck saved to file!', 'success');
    }

    importDeck() {
        const fileInput = document.getElementById('import-file-input');
        
        // Set up the file input change handler
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            
            // Check file extension
            if (!file.name.endsWith('.flashdeck')) {
                alert('Please select a valid .flashdeck file');
                return;
            }
            
            // Read the file
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const deckData = JSON.parse(e.target.result);
                    
                    // Validate file format
                    if (!deckData.type || deckData.type !== 'flashcards-deck') {
                        throw new Error('Invalid file format');
                    }
                    
                    if (!deckData.deck || !deckData.deck.name || !deckData.deck.cards) {
                        throw new Error('Incomplete deck data');
                    }
                    
                    const importedDeck = deckData.deck;
                    
                    // Generate new ID and timestamps
                    importedDeck.id = Date.now().toString();
                    importedDeck.createdAt = new Date().toISOString();
                    importedDeck.importedAt = new Date().toISOString();
                    
                    // Check for duplicate names and modify if necessary
                    let deckName = importedDeck.name;
                    let counter = 1;
                    while (this.decks.some(d => d.name === deckName)) {
                        deckName = `${importedDeck.name} (${counter})`;
                        counter++;
                    }
                    importedDeck.name = deckName;
                    
                    // Add to decks array
                    this.decks.push(importedDeck);
                    this.saveDecks();
                    this.renderDecks();
                    
                    this.showNotification(`Deck "${deckName}" imported successfully!`, 'success');
                    
                } catch (error) {
                    console.error('Import error:', error);
                    alert('Error importing deck: Invalid file format or corrupted data');
                }
                
                // Reset the file input
                fileInput.value = '';
            };
            
            reader.onerror = () => {
                alert('Error reading file');
                fileInput.value = '';
            };
            
            reader.readAsText(file);
        };
        
        // Trigger file selection
        fileInput.click();
    }

    // Learning Statistics
    showDeckStats(deckId) {
        const deck = this.decks.find(d => d.id === deckId);
        if (!deck) {
            alert('Deck not found');
            return;
        }

        // Populate modal with deck name
        document.getElementById('stats-deck-name').textContent = `${deck.name} - Learning Statistics`;

        // Calculate overall statistics
        let totalAttempts = 0;
        let totalCorrect = 0;
        let totalResponseTime = 0;
        let totalCards = deck.cards.length;
        let studiedCards = 0;

        const cardStats = [];

        deck.cards.forEach((card, index) => {
            const cardData = this.getCardLearningData(deckId, index);
            
            if (cardData.attempts > 0) {
                studiedCards++;
                totalAttempts += cardData.attempts;
                totalCorrect += cardData.correctAttempts;
                totalResponseTime += cardData.totalStudyTime;
            }

            // Determine difficulty level
            let difficultyLevel = 'normal';
            let difficultyColor = '🟡';
            
            if (cardData.difficultyScore < 0.8) {
                difficultyLevel = 'easy';
                difficultyColor = '🟢';
            } else if (cardData.difficultyScore > 1.5) {
                difficultyLevel = 'hard';
                difficultyColor = '🔴';
            }

            cardStats.push({
                question: card.question,
                accuracy: cardData.attempts > 0 ? Math.round((cardData.correctAttempts / cardData.attempts) * 100) : 0,
                attempts: cardData.attempts,
                avgTime: cardData.attempts > 0 ? Math.round(cardData.averageResponseTime / 1000) : 0,
                difficulty: difficultyLevel,
                difficultyColor: difficultyColor,
                difficultyScore: cardData.difficultyScore
            });
        });

        // Update summary statistics
        const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        const avgResponseTime = totalAttempts > 0 ? Math.round((totalResponseTime / totalAttempts) / 1000) : 0;

        document.getElementById('total-sessions').textContent = studiedCards;
        document.getElementById('overall-accuracy').textContent = `${overallAccuracy}%`;
        document.getElementById('avg-response-time').textContent = `${avgResponseTime}s`;

        // Populate card statistics
        const cardsStatsContainer = document.getElementById('cards-stats');
        cardsStatsContainer.innerHTML = cardStats.map(card => `
            <div class="card-stat-item">
                <div class="card-question">${this.escapeHtml(card.question)}</div>
                <div class="card-stats-data">
                    <span class="difficulty-indicator difficulty-${card.difficulty}">
                        ${card.difficultyColor} ${card.difficulty}
                    </span>
                    <span>${card.accuracy}% (${card.attempts} attempts)</span>
                    <span>${card.avgTime}s avg</span>
                </div>
            </div>
        `).join('');

        // Generate learning insights
        this.generateLearningInsights(deckId, cardStats, overallAccuracy);

        // Show modal
        document.getElementById('stats-modal').style.display = 'flex';
    }

    generateLearningInsights(deckId, cardStats, overallAccuracy) {
        const insights = [];
        
        // Accuracy insights
        if (overallAccuracy >= 80) {
            insights.push("🎉 Excellent work! You're mastering this deck.");
        } else if (overallAccuracy >= 60) {
            insights.push("📈 Good progress! Focus on the difficult cards to improve.");
        } else if (overallAccuracy > 0) {
            insights.push("🎯 Keep practicing! The adaptive system will help you improve.");
        }

        // Difficult cards insight
        const hardCards = cardStats.filter(card => card.difficulty === 'hard').length;
        if (hardCards > 0) {
            insights.push(`🔴 ${hardCards} card${hardCards > 1 ? 's' : ''} need${hardCards === 1 ? 's' : ''} more practice - they'll appear more frequently.`);
        }

        // Easy cards insight
        const easyCards = cardStats.filter(card => card.difficulty === 'easy').length;
        if (easyCards > 0) {
            insights.push(`🟢 ${easyCards} card${easyCards > 1 ? 's' : ''} mastered! They'll appear less frequently.`);
        }

        // Response time insight
        const slowCards = cardStats.filter(card => card.avgTime > 10).length;
        if (slowCards > 0) {
            insights.push(`⏱️ ${slowCards} card${slowCards > 1 ? 's' : ''} taking longer to answer - practice for faster recall.`);
        }

        // Adaptive learning explanation
        if (cardStats.some(card => card.attempts > 0)) {
            insights.push("🧠 The app is learning your patterns and will show difficult cards more often!");
        }

        const insightsContainer = document.getElementById('learning-insights');
        insightsContainer.innerHTML = `
            <h4>📊 Learning Insights</h4>
            ${insights.map(insight => `<div class="insight-item">${insight}</div>`).join('')}
        `;
    }

    closeStatsModal() {
        document.getElementById('stats-modal').style.display = 'none';
        // Reset modal for normal stats view
        document.querySelector('.stats-summary').style.display = 'grid';
    }

    // Stats Page Analytics
    initializeStatsPage() {
        if (document.querySelector('.view.active')?.id !== 'stats-view') return;
        
        // Set up event listeners
        document.getElementById('stats-time-range').addEventListener('change', () => {
            this.refreshStatsPage();
        });
        
        this.refreshStatsPage();
    }

    refreshStatsPage() {
        this.updateOverviewStats();
        this.renderCharts();
        this.generateAdvancedInsights();
    }

    getFilteredSessions() {
        const timeRange = document.getElementById('stats-time-range').value;
        const sessions = this.loadSessionData();
        
        if (timeRange === 'all') return sessions;
        
        const days = parseInt(timeRange);
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        
        return sessions.filter(session => new Date(session.timestamp) >= cutoffDate);
    }

    updateOverviewStats() {
        const sessions = this.getFilteredSessions();
        
        // Calculate overall accuracy
        let totalCards = 0;
        let totalCorrect = 0;
        let totalTime = 0;
        
        sessions.forEach(session => {
            totalCards += session.cardsStudied;
            totalCorrect += session.correctAnswers;
            totalTime += session.totalTime;
        });
        
        const overallAccuracy = totalCards > 0 ? Math.round((totalCorrect / totalCards) * 100) : 0;
        const avgResponseTime = totalCards > 0 ? Math.round((totalTime / totalCards) / 1000) : 0;
        
        // Calculate study streak
        const studyStreak = this.calculateStudyStreak();
        
        // Calculate total coins earned from coin history
        const totalCoinsEarned = this.calculateTotalCoinsEarned();
        
        // Get power-up usage stats
        const powerUpStats = this.powerUpUsageStats || {};
        
        // Update DOM
        // Update DOM elements safely
        const updateElement = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        };
        
        updateElement('overall-accuracy-stat', `${overallAccuracy}%`);
        updateElement('total-cards-studied', totalCards.toLocaleString());
        updateElement('avg-response-time-stat', `${avgResponseTime}s`);
        updateElement('study-streak', studyStreak);
        updateElement('total-coins-earned', totalCoinsEarned.toLocaleString());
        updateElement('hints-used-stat', (powerUpStats.hints || 0).toLocaleString());
        updateElement('skips-used-stat', (powerUpStats.skipCards || 0).toLocaleString());
        updateElement('double-coins-used-stat', (powerUpStats.doubleCoins || 0).toLocaleString());
    }

    calculateStudyStreak() {
        const sessions = this.loadSessionData();
        if (sessions.length === 0) return 0;
        
        // Get unique study dates, sorted by date
        const studyDates = [...new Set(sessions.map(s => s.date))].sort().reverse();
        
        let streak = 0;
        const today = new Date().toISOString().split('T')[0];
        let currentDate = new Date(today);
        
        for (const studyDate of studyDates) {
            const dateStr = currentDate.toISOString().split('T')[0];
            
            if (studyDate === dateStr) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        return streak;
    }
    
    calculateTotalCoinsEarned() {
        const coinHistory = this.loadCoinHistory();
        return coinHistory
            .filter(transaction => transaction.amount > 0)
            .reduce((total, transaction) => total + transaction.amount, 0);
    }

    renderCharts() {
        // Destroy existing charts to prevent memory leaks
        Object.keys(this.chartInstances).forEach(key => {
            if (this.chartInstances[key]) {
                this.chartInstances[key].destroy();
            }
        });
        this.chartInstances = {};
        
        this.renderAccuracyChart();
        this.renderActivityChart();
        this.renderDifficultyChart();
        this.renderResponseTimeChart();
        this.renderDeckPerformanceChart();
        this.renderStudyHeatmap();
        this.renderPowerUpUsageChart();
    }

    renderAccuracyChart() {
        const ctx = document.getElementById('accuracy-chart').getContext('2d');
        const sessions = this.getFilteredSessions();
        
        // Group by date and calculate daily accuracy
        const dailyStats = {};
        sessions.forEach(session => {
            if (!dailyStats[session.date]) {
                dailyStats[session.date] = { total: 0, correct: 0 };
            }
            dailyStats[session.date].total += session.cardsStudied;
            dailyStats[session.date].correct += session.correctAnswers;
        });
        
        const dates = Object.keys(dailyStats).sort();
        const accuracyData = dates.map(date => {
            const stats = dailyStats[date];
            return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        });
        
        this.chartInstances.accuracyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates.map(date => new Date(date).toLocaleDateString()),
                datasets: [{
                    label: 'Accuracy %',
                    data: accuracyData,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    renderActivityChart() {
        const ctx = document.getElementById('activity-chart').getContext('2d');
        const sessions = this.getFilteredSessions();
        
        // Group by date
        const dailyActivity = {};
        sessions.forEach(session => {
            dailyActivity[session.date] = (dailyActivity[session.date] || 0) + session.cardsStudied;
        });
        
        const dates = Object.keys(dailyActivity).sort();
        const activityData = dates.map(date => dailyActivity[date]);
        
        this.chartInstances.activityChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dates.map(date => new Date(date).toLocaleDateString()),
                datasets: [{
                    label: 'Cards Studied',
                    data: activityData,
                    backgroundColor: 'rgba(72, 187, 120, 0.8)',
                    borderColor: '#48bb78',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    renderDifficultyChart() {
        const ctx = document.getElementById('difficulty-chart').getContext('2d');
        
        // Analyze all cards across all decks
        let easyCards = 0;
        let normalCards = 0;
        let hardCards = 0;
        
        this.decks.forEach(deck => {
            deck.cards.forEach((_, index) => {
                const cardData = this.getCardLearningData(deck.id, index);
                if (cardData.attempts === 0) {
                    normalCards++; // Unstudied cards are normal
                } else if (cardData.difficultyScore < 0.8) {
                    easyCards++;
                } else if (cardData.difficultyScore > 1.5) {
                    hardCards++;
                } else {
                    normalCards++;
                }
            });
        });
        
        this.chartInstances.difficultyChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Easy', 'Normal', 'Hard'],
                datasets: [{
                    data: [easyCards, normalCards, hardCards],
                    backgroundColor: [
                        '#48bb78', // Green
                        '#ed8936', // Orange
                        '#f56565'  // Red
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    renderResponseTimeChart() {
        const ctx = document.getElementById('response-time-chart').getContext('2d');
        const sessions = this.getFilteredSessions();
        
        // Group by date and calculate average response time
        const dailyResponseTime = {};
        sessions.forEach(session => {
            if (!dailyResponseTime[session.date]) {
                dailyResponseTime[session.date] = { totalTime: 0, totalCards: 0 };
            }
            dailyResponseTime[session.date].totalTime += session.totalTime;
            dailyResponseTime[session.date].totalCards += session.cardsStudied;
        });
        
        const dates = Object.keys(dailyResponseTime).sort();
        const responseTimeData = dates.map(date => {
            const stats = dailyResponseTime[date];
            return stats.totalCards > 0 ? Math.round((stats.totalTime / stats.totalCards) / 1000) : 0;
        });
        
        this.chartInstances.responseTimeChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates.map(date => new Date(date).toLocaleDateString()),
                datasets: [{
                    label: 'Avg Response Time (s)',
                    data: responseTimeData,
                    borderColor: '#9f7aea',
                    backgroundColor: 'rgba(159, 122, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + 's';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    renderDeckPerformanceChart() {
        const ctx = document.getElementById('deck-performance-chart').getContext('2d');
        const sessions = this.getFilteredSessions();
        
        // Calculate performance per deck
        const deckPerformance = {};
        sessions.forEach(session => {
            const deck = this.decks.find(d => d.id === session.deckId);
            if (deck) {
                if (!deckPerformance[deck.name]) {
                    deckPerformance[deck.name] = { total: 0, correct: 0 };
                }
                deckPerformance[deck.name].total += session.cardsStudied;
                deckPerformance[deck.name].correct += session.correctAnswers;
            }
        });
        
        const deckNames = Object.keys(deckPerformance);
        const accuracyData = deckNames.map(name => {
            const stats = deckPerformance[name];
            return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        });
        
        this.chartInstances.deckPerformanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: deckNames,
                datasets: [{
                    label: 'Accuracy %',
                    data: accuracyData,
                    backgroundColor: 'rgba(49, 130, 206, 0.8)',
                    borderColor: '#3182ce',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    renderStudyHeatmap() {
        const container = document.getElementById('heatmap-container');
        const sessions = this.loadSessionData(); // Get all sessions for heatmap
        
        // Create activity map by date
        const activityMap = {};
        sessions.forEach(session => {
            activityMap[session.date] = (activityMap[session.date] || 0) + session.cardsStudied;
        });
        
        // Generate last 90 days
        const heatmapHTML = [];
        const today = new Date();
        
        for (let i = 89; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            
            const activity = activityMap[dateStr] || 0;
            let level = 0;
            
            if (activity > 0) level = 1;
            if (activity > 5) level = 2;
            if (activity > 10) level = 3;
            if (activity > 20) level = 4;
            if (activity > 30) level = 5;
            
            heatmapHTML.push(`
                <div class="heatmap-day level-${level}" 
                     title="${dateStr}: ${activity} cards studied"
                     data-date="${dateStr}">
                </div>
            `);
        }
        
        heatmapHTML.push(`
            <div class="heatmap-legend">
                <span>Less</span>
                <div class="legend-item">
                    <div class="legend-color level-0"></div>
                </div>
                <div class="legend-item">
                    <div class="legend-color level-1"></div>
                </div>
                <div class="legend-item">
                    <div class="legend-color level-2"></div>
                </div>
                <div class="legend-item">
                    <div class="legend-color level-3"></div>
                </div>
                <div class="legend-item">
                    <div class="legend-color level-4"></div>
                </div>
                <div class="legend-item">
                    <div class="legend-color level-5"></div>
                </div>
                <span>More</span>
            </div>
        `);
        
        container.innerHTML = heatmapHTML.join('');
    }
    
    renderPowerUpUsageChart() {
        const ctx = document.getElementById('powerup-usage-chart');
        if (!ctx) return;
        
        const powerUpStats = this.powerUpUsageStats || {};
        
        // Prepare data
        const data = {
            labels: ['💡 Hints', '⏭️ Skip Cards', '💰 2x Coins', '🛡️ Streak Shields'],
            datasets: [{
                label: 'Times Used',
                data: [
                    powerUpStats.hints || 0,
                    powerUpStats.skipCards || 0,
                    powerUpStats.doubleCoins || 0,
                    powerUpStats.streakShields || 0
                ],
                backgroundColor: [
                    'rgba(255, 206, 84, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 206, 84, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 2
            }]
        };
        
        this.chartInstances.powerupUsage = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Power-up Usage Distribution',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                                return `${label}: ${value} times (${percentage}%)`;
                            }
                        }
                    }
                },
                cutout: '50%',
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    generateAdvancedInsights() {
        const sessions = this.getFilteredSessions();
        const insights = [];
        
        if (sessions.length === 0) {
            insights.push({
                icon: '👋',
                title: 'Start Studying!',
                description: 'Begin your learning journey by studying some flashcards. The more you practice, the better insights we can provide!'
            });
        } else {
            // Performance trend analysis
            const recentSessions = sessions.slice(-5);
            const olderSessions = sessions.slice(0, -5);
            
            if (recentSessions.length >= 3 && olderSessions.length >= 3) {
                const recentAccuracy = recentSessions.reduce((sum, s) => sum + s.accuracy, 0) / recentSessions.length;
                const olderAccuracy = olderSessions.reduce((sum, s) => sum + s.accuracy, 0) / olderSessions.length;
                
                if (recentAccuracy > olderAccuracy + 5) {
                    insights.push({
                        icon: '📈',
                        title: 'Improving Performance!',
                        description: `Your accuracy has improved by ${Math.round(recentAccuracy - olderAccuracy)}% in recent sessions. Keep up the great work!`
                    });
                } else if (recentAccuracy < olderAccuracy - 5) {
                    insights.push({
                        icon: '🎯',
                        title: 'Focus Opportunity',
                        description: 'Your recent accuracy has decreased slightly. Consider reviewing difficult cards or taking breaks to maintain focus.'
                    });
                }
            }
            
            // Study consistency
            const studyStreak = this.calculateStudyStreak();
            if (studyStreak >= 7) {
                insights.push({
                    icon: '🔥',
                    title: 'Amazing Consistency!',
                    description: `You've studied for ${studyStreak} days in a row! Consistent practice leads to better retention.`
                });
            } else if (studyStreak >= 3) {
                insights.push({
                    icon: '✨',
                    title: 'Building Good Habits',
                    description: `${studyStreak} days of consistent studying! Try to maintain this streak for optimal learning.`
                });
            }
            
            // Power-up usage insights
            const powerUpStats = this.powerUpUsageStats || {};
            const totalPowerUpsUsed = Object.values(powerUpStats).reduce((sum, count) => sum + count, 0);
            
            if (totalPowerUpsUsed > 0) {
                const mostUsedPowerUp = Object.keys(powerUpStats).reduce((a, b) => 
                    (powerUpStats[a] || 0) > (powerUpStats[b] || 0) ? a : b
                );
                
                const powerUpNames = {
                    hints: 'Hints',
                    skipCards: 'Skip Cards',
                    doubleCoins: '2x Coins',
                    streakShields: 'Streak Shields'
                };
                
                const powerUpEmojis = {
                    hints: '💡',
                    skipCards: '⏭️', 
                    doubleCoins: '💰',
                    streakShields: '🛡️'
                };
                
                insights.push({
                    icon: '🚀',
                    title: 'Power-up Activity',
                    description: `You've used ${totalPowerUpsUsed} power-ups total! Your favorite is ${powerUpEmojis[mostUsedPowerUp]} ${powerUpNames[mostUsedPowerUp]} (${powerUpStats[mostUsedPowerUp]} times).`
                });
                
                // Strategic insight about power-up usage
                if (powerUpStats.hints > powerUpStats.skipCards * 2) {
                    insights.push({
                        icon: '🧠',
                        title: 'Learning Strategy',
                        description: 'You prefer hints over skipping cards - great approach! This shows you want to understand rather than avoid difficult content.'
                    });
                }
            }
            
            // Time of day analysis
            const sessionsByHour = {};
            sessions.forEach(session => {
                const hour = new Date(session.timestamp).getHours();
                if (!sessionsByHour[hour]) sessionsByHour[hour] = [];
                sessionsByHour[hour].push(session);
            });
            
            let bestHour = null;
            let bestAccuracy = 0;
            
            Object.keys(sessionsByHour).forEach(hour => {
                if (sessionsByHour[hour].length >= 3) { // Need at least 3 sessions
                    const avgAccuracy = sessionsByHour[hour].reduce((sum, s) => sum + s.accuracy, 0) / sessionsByHour[hour].length;
                    if (avgAccuracy > bestAccuracy) {
                        bestAccuracy = avgAccuracy;
                        bestHour = parseInt(hour);
                    }
                }
            });
            
            if (bestHour !== null) {
                const timeString = bestHour < 12 ? `${bestHour || 12}:00 AM` : `${bestHour > 12 ? bestHour - 12 : bestHour}:00 PM`;
                insights.push({
                    icon: '⏰',
                    title: 'Optimal Study Time',
                    description: `You perform best around ${timeString} with ${Math.round(bestAccuracy)}% accuracy. Consider scheduling study sessions at this time.`
                });
            }
            
            // Card difficulty insights
            let hardCardCount = 0;
            this.decks.forEach(deck => {
                deck.cards.forEach((_, index) => {
                    const cardData = this.getCardLearningData(deck.id, index);
                    if (cardData.attempts > 0 && cardData.difficultyScore > 1.5) {
                        hardCardCount++;
                    }
                });
            });
            
            if (hardCardCount > 0) {
                insights.push({
                    icon: '🎓',
                    title: 'Challenge Cards Identified',
                    description: `You have ${hardCardCount} challenging cards that appear more frequently. The adaptive system is helping you master them!`
                });
            }
        }
        
        // Render insights
        const container = document.getElementById('learning-insights-list');
        container.innerHTML = insights.map(insight => `
            <div class="insight-card">
                <div class="insight-icon">${insight.icon}</div>
                <div class="insight-content">
                    <div class="insight-title">${insight.title}</div>
                    <div class="insight-description">${insight.description}</div>
                </div>
            </div>
        `).join('');
    }

    // AI Deck Generation System
    analyzeUserPatterns() {
        const sessions = this.loadSessionData();
        const learningData = this.learningData;
        
        if (sessions.length < 3) {
            return null; // Not enough data for analysis
        }
        
        const analysis = {
            preferredSubjects: {},
            difficultyPreference: 0,
            studyFrequency: 0,
            accuracyTrend: 0,
            responseTimePattern: 0,
            challengeLevel: 'balanced',
            studyTimePreference: 'short', // short, medium, long
            improvementAreas: [],
            strengths: [],
            learningStyle: 'visual' // visual, analytical, mixed
        };
        
        // Analyze preferred subjects
        sessions.forEach(session => {
            const deck = this.decks.find(d => d.id === session.deckId);
            if (deck) {
                analysis.preferredSubjects[deck.subject] = (analysis.preferredSubjects[deck.subject] || 0) + 1;
            }
        });
        
        // Calculate difficulty preference based on performance patterns
        let totalDifficultyScore = 0;
        let cardCount = 0;
        
        Object.keys(learningData).forEach(cardKey => {
            const cardData = learningData[cardKey];
            if (cardData.attempts > 0) {
                totalDifficultyScore += cardData.difficultyScore;
                cardCount++;
            }
        });
        
        analysis.difficultyPreference = cardCount > 0 ? totalDifficultyScore / cardCount : 1.0;
        
        // Determine challenge level preference
        if (analysis.difficultyPreference > 1.3) {
            analysis.challengeLevel = 'challenging';
        } else if (analysis.difficultyPreference < 0.8) {
            analysis.challengeLevel = 'easier';
        }
        
        // Calculate study frequency (sessions per week)
        const weeklyActivity = this.calculateWeeklyActivity(sessions);
        analysis.studyFrequency = weeklyActivity;
        
        // Calculate accuracy trend
        const recentSessions = sessions.slice(-10);
        const olderSessions = sessions.slice(0, -10);
        
        if (recentSessions.length > 0 && olderSessions.length > 0) {
            const recentAccuracy = recentSessions.reduce((sum, s) => sum + s.accuracy, 0) / recentSessions.length;
            const olderAccuracy = olderSessions.reduce((sum, s) => sum + s.accuracy, 0) / olderSessions.length;
            analysis.accuracyTrend = recentAccuracy - olderAccuracy;
        }
        
        // Identify improvement areas and strengths
        this.identifyLearningAreas(analysis);
        
        return analysis;
    }
    
    calculateWeeklyActivity(sessions) {
        if (sessions.length === 0) return 0;
        
        const firstSession = new Date(sessions[0].timestamp);
        const lastSession = new Date(sessions[sessions.length - 1].timestamp);
        const daysDiff = Math.max(1, (lastSession - firstSession) / (1000 * 60 * 60 * 24));
        const weeksDiff = daysDiff / 7;
        
        return Math.round(sessions.length / weeksDiff * 10) / 10;
    }
    
    identifyLearningAreas(analysis) {
        const subjects = Object.keys(analysis.preferredSubjects);
        
        // Find strongest and weakest subjects based on accuracy
        subjects.forEach(subject => {
            const subjectSessions = this.loadSessionData().filter(session => {
                const deck = this.decks.find(d => d.id === session.deckId);
                return deck && deck.subject === subject;
            });
            
            if (subjectSessions.length > 0) {
                const avgAccuracy = subjectSessions.reduce((sum, s) => sum + s.accuracy, 0) / subjectSessions.length;
                
                if (avgAccuracy < 70) {
                    analysis.improvementAreas.push(subject);
                } else if (avgAccuracy > 85) {
                    analysis.strengths.push(subject);
                }
            }
        });
    }

    async generateAIDecks() {
        const analysis = this.analyzeUserPatterns();
        
        if (!analysis) {
            return []; // Not enough data
        }
        
        // Check if AI is available
        if (!this.aiManagerReady || !this.aiManager) {
            this.showNotification('AI unavailable, good luck!', 'error');
            console.error('AI unavailable - cannot generate smart decks without AI');
            return [];
        }
        
        const generatedDecks = [];
        
        try {
            // Generate different types of decks based on user patterns using AI
            
            // 1. Improvement Deck - Focus on weak areas
            if (analysis.improvementAreas.length > 0) {
                const improvementDeck = await this.generateAIImprovementDeck(analysis);
                if (improvementDeck) generatedDecks.push(improvementDeck);
            }
            
            // 2. Challenge Deck - Harder content for growth
            if (analysis.challengeLevel !== 'challenging') {
                const challengeDeck = await this.generateAIChallengeDeck(analysis);
                if (challengeDeck) generatedDecks.push(challengeDeck);
            }
            
            // 3. Review Deck - Reinforce strengths
            if (analysis.strengths.length > 0) {
                const reviewDeck = await this.generateAIReviewDeck(analysis);
                if (reviewDeck) generatedDecks.push(reviewDeck);
            }
            
            // 4. Quick Practice Deck - Short session based on study time preference
            const quickDeck = await this.generateAIQuickPracticeDeck(analysis);
            if (quickDeck) generatedDecks.push(quickDeck);
            
            return generatedDecks.slice(0, 4); // Limit to 4 decks
        } catch (error) {
            console.error('AI deck generation failed:', error);
            this.showNotification('AI unavailable, good luck!', 'error');
            return [];
        }
    }
    
    async generateAIImprovementDeck(analysis) {
        const improvementSubject = analysis.improvementAreas[0];
        
        try {
            const deckResult = await this.aiManager.generateDeck(
                improvementSubject,
                'beginner', // Easier for improvement
                10, // Smaller deck for focused practice
                { weakness: improvementSubject, type: 'improvement' }
            );
            
            if (deckResult && (deckResult.cards || typeof deckResult === 'string')) {
                return {
                    id: `ai-improvement-${Date.now()}`,
                    name: `${improvementSubject} - Focus Practice`,
                    subject: improvementSubject,
                    type: 'ai-generated',
                    generatedAt: Date.now(),
                    reason: {
                        title: 'AI Improvement Focus',
                        description: `AI-generated deck focusing on ${improvementSubject} to help boost your confidence in this area.`
                    },
                    confidence: 0.85,
                    cards: deckResult.cards || this.parseAICardResponse(deckResult, 10),
                    titleCards: [{
                        title: `${improvementSubject} Practice Session`,
                        content: `This AI-generated deck is specifically designed to help you improve in ${improvementSubject}. Take your time and focus on understanding each concept.`
                    }],
                    style: 'classic',
                    color: 'red' // Red for improvement areas
                };
            }
        } catch (error) {
            console.error('❌ AI improvement deck generation failed:', error);
        }
        return null;
    }
    
    async generateAIChallengeDeck(analysis) {
        const preferredSubjects = Object.keys(analysis.preferredSubjects);
        const subject = preferredSubjects[Math.floor(Math.random() * preferredSubjects.length)];
        
        try {
            const deckResult = await this.aiManager.generateDeck(
                subject,
                'expert', // Harder for challenge
                15,
                { strength: subject, type: 'challenge' }
            );
            
            if (deckResult && (deckResult.cards || typeof deckResult === 'string')) {
                return {
                    id: `ai-challenge-${Date.now()}`,
                    name: `${subject} - AI Challenge Mode`,
                    subject: subject,
                    type: 'ai-generated',
                    generatedAt: Date.now(),
                    reason: {
                        title: 'AI Level Up Challenge',
                        description: `AI-generated advanced deck to push your ${subject} knowledge to the next level.`
                    },
                    confidence: 0.75,
                    cards: deckResult.cards || this.parseAICardResponse(deckResult, 15),
                    titleCards: [{
                        title: `${subject} AI Challenge`,
                        content: `Ready for an AI challenge? These advanced questions will test your mastery of ${subject} concepts.`
                    }],
                    style: 'classic',
                    color: 'orange' // Orange for challenges
                };
            }
        } catch (error) {
            console.error('❌ AI challenge deck generation failed:', error);
        }
        return null;
    }
    
    async generateAIReviewDeck(analysis) {
        const strengths = analysis.strengths;
        const subject = strengths[Math.floor(Math.random() * strengths.length)];
        
        try {
            const deckResult = await this.aiManager.generateDeck(
                subject,
                'intermediate',
                12,
                { strength: subject, type: 'review' }
            );
            
            if (deckResult && (deckResult.cards || typeof deckResult === 'string')) {
                return {
                    id: `ai-review-${Date.now()}`,
                    name: `${subject} - AI Review Session`,
                    subject: subject,
                    type: 'ai-generated',
                    generatedAt: Date.now(),
                    reason: {
                        title: 'AI Strength Reinforcement',
                        description: `AI-generated deck to reinforce your strong ${subject} skills.`
                    },
                    confidence: 0.80,
                    cards: deckResult.cards || this.parseAICardResponse(deckResult, 12),
                    titleCards: [{
                        title: `${subject} AI Review`,
                        content: `Keep your ${subject} skills sharp with this AI-generated review session.`
                    }],
                    style: 'classic',
                    color: 'green' // Green for strengths
                };
            }
        } catch (error) {
            console.error('❌ AI review deck generation failed:', error);
        }
        return null;
    }
    
    async generateAIQuickPracticeDeck(analysis) {
        const preferredSubjects = Object.keys(analysis.preferredSubjects);
        const subject = preferredSubjects[0] || 'General Knowledge';
        
        try {
            const deckResult = await this.aiManager.generateDeck(
                subject,
                'intermediate',
                8, // Shorter deck
                { type: 'quick_practice' }
            );
            
            if (deckResult && (deckResult.cards || typeof deckResult === 'string')) {
                return {
                    id: `ai-quick-${Date.now()}`,
                    name: `${subject} - AI Quick Session`,
                    subject: subject,
                    type: 'ai-generated',
                    generatedAt: Date.now(),
                    reason: {
                        title: 'AI Quick Practice',
                        description: `AI-generated focused 5-10 minute practice session in ${subject}.`
                    },
                    confidence: 0.88,
                    cards: deckResult.cards || this.parseAICardResponse(deckResult, 8),
                    titleCards: [{
                        title: `Quick ${subject} AI Practice`,
                        content: `A short but effective AI-generated practice session. Perfect for when you have just a few minutes to study!`
                    }],
                    style: 'classic',
                    color: 'teal' // Teal for quick sessions
                };
            }
        } catch (error) {
            console.error('❌ AI quick practice deck generation failed:', error);
        }
        return null;
    }
    
    generateImprovementDeck(analysis) {
        const improvementSubject = analysis.improvementAreas[0];
        
        return {
            id: `ai-improvement-${Date.now()}`,
            name: `${improvementSubject} - Focus Practice`,
            subject: improvementSubject,
            type: 'ai-generated',
            generatedAt: Date.now(),
            reason: {
                title: 'Improvement Focus',
                description: `Based on your recent performance, this deck focuses on ${improvementSubject} to help boost your confidence in this area.`
            },
            confidence: 0.85,
            cards: this.generateCards('improvement', improvementSubject, analysis),
            titleCards: [{
                title: `${improvementSubject} Practice Session`,
                content: `This deck is specifically designed to help you improve in ${improvementSubject}. Take your time and focus on understanding each concept.`
            }],
            style: this.getUserPreferredStyle(),
            color: 'red' // Red for improvement areas
        };
    }
    
    generateChallengeDeck(analysis) {
        const preferredSubjects = Object.keys(analysis.preferredSubjects);
        const subject = preferredSubjects[Math.floor(Math.random() * preferredSubjects.length)];
        
        return {
            id: `ai-challenge-${Date.now()}`,
            name: `${subject} - Challenge Mode`,
            subject: subject,
            type: 'ai-generated',
            generatedAt: Date.now(),
            reason: {
                title: 'Level Up Challenge',
                description: `You're doing well! This advanced deck will push your ${subject} knowledge to the next level.`
            },
            confidence: 0.75,
            cards: this.generateCards('challenge', subject, analysis),
            titleCards: [{
                title: `${subject} Challenge`,
                content: `Ready for a challenge? These advanced questions will test your mastery of ${subject} concepts.`
            }],
            style: this.getUserPreferredStyle(),
            color: 'orange' // Orange for challenges
        };
    }
    
    generateReviewDeck(analysis) {
        const strengthSubject = analysis.strengths[0];
        
        return {
            id: `ai-review-${Date.now()}`,
            name: `${strengthSubject} - Mastery Review`,
            subject: strengthSubject,
            type: 'ai-generated',
            generatedAt: Date.now(),
            reason: {
                title: 'Reinforce Mastery',
                description: `Keep your ${strengthSubject} skills sharp with this review deck of key concepts you've already mastered.`
            },
            confidence: 0.92,
            cards: this.generateCards('review', strengthSubject, analysis),
            titleCards: [{
                title: `${strengthSubject} Mastery Review`,
                content: `Excellent work in ${strengthSubject}! This review will help maintain your high performance level.`
            }],
            style: this.getUserPreferredStyle(),
            color: 'green' // Green for mastery
        };
    }
    
    generateMixedDeck(analysis) {
        const subjects = Object.keys(analysis.preferredSubjects).slice(0, 3);
        const subjectNames = subjects.join(', ');
        
        return {
            id: `ai-mixed-${Date.now()}`,
            name: `Mixed Practice: ${subjectNames}`,
            subject: 'Mixed Topics',
            type: 'ai-generated',
            generatedAt: Date.now(),
            reason: {
                title: 'Cross-Subject Practice',
                description: `Combine your favorite subjects (${subjectNames}) for varied practice that strengthens connections between topics.`
            },
            confidence: 0.80,
            cards: this.generateCards('mixed', subjects, analysis),
            titleCards: [{
                title: 'Mixed Subject Practice',
                content: `This deck combines questions from multiple subjects to help you make connections across different areas of knowledge.`
            }],
            style: this.getUserPreferredStyle(),
            color: 'purple' // Purple for mixed content
        };
    }
    
    generateQuickPracticeDeck(analysis) {
        const preferredSubjects = Object.keys(analysis.preferredSubjects);
        const subject = preferredSubjects[0] || 'General Knowledge';
        
        return {
            id: `ai-quick-${Date.now()}`,
            name: `${subject} - Quick Session`,
            subject: subject,
            type: 'ai-generated',
            generatedAt: Date.now(),
            reason: {
                title: 'Perfect for Short Sessions',
                description: `A focused 5-10 minute practice session in ${subject}, perfect for your study schedule.`
            },
            confidence: 0.88,
            cards: this.generateCards('quick', subject, analysis).slice(0, 8), // Shorter deck
            titleCards: [{
                title: `Quick ${subject} Practice`,
                content: `A short but effective practice session. Perfect for when you have just a few minutes to study!`
            }],
            style: this.getUserPreferredStyle(),
            color: 'teal' // Teal for quick sessions
        };
    }
    
    generateCards(type, subject, analysis) {
        // This is a sophisticated card generation system
        // In a real app, this could connect to educational APIs or use ML models
        // For now, I'll create contextually appropriate cards based on user patterns
        
        const cardTemplates = this.getCardTemplates(type, subject, analysis);
        const generatedCards = [];
        
        // Select appropriate number of cards based on type
        const cardCount = type === 'quick' ? 8 : 12;
        
        for (let i = 0; i < cardCount && i < cardTemplates.length; i++) {
            const template = cardTemplates[i];
            generatedCards.push({
                question: template.question,
                answer: template.answer,
                answerText: template.answer, // For comparison
                generated: true
            });
        }
        
        return generatedCards;
    }
    
    getCardTemplates(type, subject, analysis) {
        // This would ideally use AI/ML to generate contextual questions
        // For demo purposes, I'll create adaptive templates based on user patterns
        
        // Intelligent template generation based on deck name and subject
        let templates = this.generateIntelligentTemplates(deckName, subject, count);
        
        // Modify difficulty based on user analysis
        if (type === 'challenge' && analysis.challengeLevel !== 'challenging') {
            // Add more complex variations for challenge decks
            templates = templates.map(template => ({
                ...template,
                question: `Advanced: ${template.question} (Explain your reasoning)`
            }));
        } else if (type === 'improvement' && analysis.difficultyPreference > 1.2) {
            // Simplify questions for improvement areas
            templates = templates.map(template => ({
                ...template,
                question: `Review: ${template.question}`
            }));
        }
        
        // Shuffle and return
        return templates.sort(() => Math.random() - 0.5);
    }
    
    getUserPreferredStyle() {
        // Analyze user's most used style from their decks
        const styles = this.decks.map(deck => deck.style).filter(Boolean);
        const styleCounts = {};
        
        styles.forEach(style => {
            styleCounts[style] = (styleCounts[style] || 0) + 1;
        });
        
        const mostUsedStyle = Object.keys(styleCounts).reduce((a, b) => 
            styleCounts[a] > styleCounts[b] ? a : b, 'modern');
            
        return mostUsedStyle;
    }
    
    // UI Management for Generated Decks
    updateGeneratedDecksDisplay() {
        const generatedSection = document.getElementById('generated-decks-section');
        const statusElement = document.getElementById('generation-status');
        const gridElement = document.getElementById('generated-decks-grid');
        const lockOverlay = document.getElementById('ai-lock-overlay');
        
        // Always show the section and content - no more restrictions
        if (generatedSection) generatedSection.style.display = 'block';
        if (lockOverlay) lockOverlay.style.display = 'none';
        if (statusElement) statusElement.style.display = 'block';
        if (gridElement) gridElement.style.display = 'block';
        statusElement.style.display = 'block';
        
        // Show generation process
        setTimeout(async () => {
            const generatedDecks = await this.generateAIDecks();
            
            if (generatedDecks.length > 0) {
                statusElement.style.display = 'none';
                this.renderGeneratedDecks(generatedDecks);
            } else {
                statusElement.innerHTML = `
                    <div class="status-content">
                        <div class="status-title">Learning more about you...</div>
                        <div class="status-description">Keep studying! We need a bit more data to create perfect decks for you.</div>
                    </div>
                `;
            }
        }, 1500); // Simulate AI processing time
    }
    
    renderGeneratedDecks(generatedDecks) {
        const grid = document.getElementById('generated-decks-grid');
        if (!grid) {
            console.error('Generated decks grid not found');
            return;
        }
        
        grid.innerHTML = generatedDecks.map(deck => `
            <div class="generated-deck-card">
                <div class="generated-deck-header">
                    <div class="generated-deck-name">
                        ${this.escapeHtml(deck.name)}
                        <span class="generation-badge">AI</span>
                    </div>
                    <div class="generated-deck-subject">${this.escapeHtml(deck.subject)}</div>
                </div>
                
                ${deck.reason ? `
                <div class="generation-reason">
                    <div class="reason-title">${deck.reason.title}</div>
                    <div class="reason-description">${deck.reason.description}</div>
                </div>
                ` : ''}
                
                <div class="generated-deck-info">
                    <span>${deck.cards.length} cards</span>
                    <span class="difficulty-badge ${deck.difficulty.toLowerCase()}">${deck.difficulty}</span>
                    ${deck.confidence ? `
                    <div class="confidence-score">
                        <span>Match: ${Math.round(deck.confidence * 100)}%</span>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: ${deck.confidence * 100}%"></div>
                        </div>
                    </div>
                    ` : ''}
                </div>
                
                <div class="generated-deck-buttons">
                    <button class="btn btn-ai btn-small" onclick="event.stopPropagation(); viewGeneratedDeck('${deck.id}')" title="Study this generated deck">
                        ▶️ Study
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); adoptDeck('${deck.id}')" title="Add to your personal decks">
                        💾 Adopt
                    </button>
                    <button class="btn btn-danger btn-small" onclick="event.stopPropagation(); deleteGeneratedDeck('${deck.id}')" title="Remove this deck">
                        �️ Delete
                    </button>
                </div>
            </div>
        `).join('');
        
        // Store generated decks temporarily
        this.generatedDecks = generatedDecks;
    }
    
    saveGeneratedDeck(deckId) {
        const generatedDeck = this.generatedDecks?.find(d => d.id === deckId);
        if (!generatedDeck) return;
        
        // Convert to regular deck
        const newDeck = {
            id: Date.now().toString(),
            name: generatedDeck.name + ' (AI Generated)',
            subject: generatedDeck.subject,
            cards: generatedDeck.cards,
            titleCards: generatedDeck.titleCards,
            style: generatedDeck.style,
            color: generatedDeck.color,
            createdAt: new Date().toISOString(),
            originallyGenerated: true
        };
        
        this.decks.push(newDeck);
        this.saveDecks();
        this.renderDecks();
        
        this.showNotification(`"${newDeck.name}" saved to your decks!`, 'success');
    }
    
    // Make AI-generated decks fully functional for studying
    viewGeneratedDeck(deckId) {
        const generatedDecks = this.loadGeneratedDecks();
        const deck = generatedDecks.find(d => d.id === deckId);
        
        if (!deck) {
            console.error('Generated deck not found:', deckId);
            return;
        }
        
        // Start study session with the generated deck
        this.startStudy(deckId, true); // true indicates it's a generated deck
    }
    
    adoptDeck(deckId) {
        const generatedDecks = this.loadGeneratedDecks();
        const deck = generatedDecks.find(d => d.id === deckId);
        
        if (!deck) {
            console.error('Generated deck not found for adoption:', deckId);
            return;
        }
        
        // Create a new regular deck from the generated deck
        const adoptedDeck = {
            id: 'adopted_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            name: deck.name, // Keep original name, user can edit it
            subject: deck.subject,
            yearGroup: deck.yearGroup || 'Year 10', // Ensure yearGroup is present
            difficulty: deck.difficulty,
            cards: deck.cards.map(card => ({
                question: card.front || card.question,
                answer: card.back || card.answer,
                type: card.type || 'standard'
            })),
            titleCards: (deck.titleCards || []).map(titleCard => ({
                title: titleCard.title,
                content: titleCard.content || titleCard.description
            })),
            style: 'modern',
            color: 'purple', // Special color for adopted decks
            createdAt: Date.now(),
            adoptedFrom: {
                originalId: deck.id,
                generationType: deck.generationType,
                adoptedAt: Date.now(),
                aiMetadata: deck.aiMetadata
            }
        };
        
        // Add to user's personal decks
        this.decks.push(adoptedDeck);
        this.saveDecks();
        this.renderDecks();
        
        // Mark the original generated deck as adopted (optional)
        this.markGeneratedDeckAsAdopted(deckId);
        
        // Show success message
        this.showAdoptionSuccessMessage(adoptedDeck);
        
        console.log('✅ Adopted AI-generated deck:', adoptedDeck.name);
    }
    
    markGeneratedDeckAsAdopted(deckId) {
        const generatedDecks = this.loadGeneratedDecks();
        const deckIndex = generatedDecks.findIndex(d => d.id === deckId);
        
        if (deckIndex !== -1) {
            // Mark as adopted instead of removing completely
            generatedDecks[deckIndex].adoptedAt = Date.now();
            generatedDecks[deckIndex].isAdopted = true;
            this.saveGeneratedDecks(generatedDecks);
            
            // Update the generated decks display to show the adopted status
            this.renderGeneratedDecks(generatedDecks);
        }
    }
    
    showAdoptionSuccessMessage(adoptedDeck) {
        const notification = document.createElement('div');
        notification.className = 'adoption-notification';
        notification.innerHTML = `
            <div class="adoption-content">
                <div class="adoption-icon">📚</div>
                <h4>Deck Adopted Successfully! 🎉</h4>
                <p><strong>"${adoptedDeck.name}"</strong> has been added to your personal collection.</p>
                <p><small>✨ You can now edit, study, and customize this deck like any other!</small></p>
                <button onclick="this.parentElement.parentElement.remove()" class="btn btn-ai btn-small">Awesome!</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            max-width: 350px;
            animation: slideIn 0.5s ease-out;
            text-align: center;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideIn 0.5s ease-out reverse';
                setTimeout(() => notification.remove(), 500);
            }
        }, 4000);
    }
    
    deleteGeneratedDeck(deckId) {
        const generatedDecks = this.loadGeneratedDecks();
        const filteredDecks = generatedDecks.filter(d => d.id !== deckId);
        
        this.saveGeneratedDecks(filteredDecks);
        this.renderGeneratedDecks(filteredDecks);
        
        console.log('🗑️ Deleted generated deck:', deckId);
    }
    
    previewGeneratedDeck(deckId) {
        const generatedDecks = this.loadGeneratedDecks();
        const deck = generatedDecks.find(d => d.id === deckId);
        if (!deck) return;
        
        // Show preview in the individual deck stats modal (reuse existing modal)
        document.getElementById('stats-deck-name').textContent = `Preview: ${deck.name}`;
        
        // Show cards preview
        const cardsStatsContainer = document.getElementById('cards-stats');
        cardsStatsContainer.innerHTML = deck.cards.map((card, index) => `
            <div class="card-stat-item">
                <div class="card-question">${this.escapeHtml(card.question)}</div>
                <div class="card-stats-data">
                    <span style="color: #a855f7; font-weight: 500;">AI Generated</span>
                </div>
            </div>
        `).join('');
        
        // Hide other sections and show preview info
        document.querySelector('.stats-summary').style.display = 'none';
        document.getElementById('learning-insights').innerHTML = `
            <h4>🤖 Generated Deck Info</h4>
            <div class="insight-item">${deck.reason.description}</div>
            <div class="insight-item"><strong>Confidence Match:</strong> ${Math.round(deck.confidence * 100)}%</div>
            <div class="insight-item"><strong>Generated:</strong> ${new Date(deck.generatedAt).toLocaleString()}</div>
        `;
        
        document.getElementById('stats-modal').style.display = 'flex';
    }
    
    regenerateDecks() {
        document.getElementById('generation-status').style.display = 'block';
        document.getElementById('generated-decks-grid').innerHTML = '';
        
        // Regenerate after a delay
        setTimeout(() => {
            this.updateGeneratedDecksDisplay();
        }, 500);
        
        this.showNotification('Regenerating AI decks based on latest patterns...', 'info');
    }
    
    showGenerationInsights() {
        document.getElementById('generation-insights-modal').style.display = 'flex';
    }
    
    closeGenerationInsights() {
        document.getElementById('generation-insights-modal').style.display = 'none';
    }

    editDeck(deckId) {
        const deck = this.decks.find(d => d.id === deckId);
        if (!deck) {
            alert('Deck not found');
            return;
        }

        this.isEditMode = true;
        this.editingDeckId = deckId;
        this.loadDeckForEditing(deck);
        this.showView('create');
    }

    loadDeckForEditing(deck) {
        // Clear any existing cards and title cards first
        document.getElementById('cards-list').innerHTML = '';
        document.getElementById('title-cards-list').innerHTML = '';

        // Load basic deck info
        document.getElementById('deck-name').value = deck.name;
        document.getElementById('deck-subject').value = deck.subject;
        document.getElementById('year-group').value = deck.yearGroup || '';

        // Load style selection
        this.selectedStyle = deck.style || 'classic';
        document.querySelectorAll('.style-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector(`.style-option[data-style="${this.selectedStyle}"]`)?.classList.add('selected');

        // Load color selection
        this.selectedColor = deck.color || 'blue';
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector(`.color-option[data-color="${this.selectedColor}"]`)?.classList.add('selected');

        // Load title cards
        if (deck.titleCards && deck.titleCards.length > 0) {
            deck.titleCards.forEach((titleCard, index) => {
                this.addTitleCard();
                const titleCardItems = document.querySelectorAll('.title-card-item');
                const titleCardItem = titleCardItems[titleCardItems.length - 1];
                
                const titleEditor = titleCardItem.querySelector('.title-card-title-editor');
                const contentEditor = titleCardItem.querySelector('.title-card-content-editor');
                
                // Use HTML content if available, otherwise use plain text
                const titleContent = titleCard.title || '';
                const contentContent = titleCard.content || '';
                
                // Check for HTML content for backward compatibility
                if (titleContent.indexOf('<') === -1) {
                    titleEditor.textContent = titleContent;
                } else {
                    titleEditor.innerHTML = titleContent;
                }
                
                if (contentContent.indexOf('<') === -1) {
                    contentEditor.textContent = contentContent;
                } else {
                    contentEditor.innerHTML = contentContent;
                }
            });
        }

        // Load cards
        deck.cards.forEach((card, index) => {
            this.addCard();
            const cardItems = document.querySelectorAll('.card-item');
            const cardItem = cardItems[cardItems.length - 1];
            
            const questionEditor = cardItem.querySelector('.card-question-editor');
            const answerEditor = cardItem.querySelector('.card-answer-editor');
            
            // Use HTML content if available (for formatted cards), otherwise use plain text
            // For backward compatibility, check if content contains HTML tags
            const questionContent = card.question || '';
            const answerContent = card.answer || '';
            
            // If content doesn't contain HTML tags, treat as plain text
            if (questionContent.indexOf('<') === -1) {
                questionEditor.textContent = questionContent;
            } else {
                questionEditor.innerHTML = questionContent;
            }
            
            if (answerContent.indexOf('<') === -1) {
                answerEditor.textContent = answerContent;
            } else {
                answerEditor.innerHTML = answerContent;
            }
            
            // Load explanation if available
            const explanationEditor = cardItem.querySelector('.card-explanation-editor');
            if (explanationEditor && card.explanation) {
                const explanationContent = card.explanation || '';
                
                if (explanationContent.indexOf('<') === -1) {
                    explanationEditor.textContent = explanationContent;
                } else {
                    explanationEditor.innerHTML = explanationContent;
                }
            }
            
            // Load alternative answers if available
            if (card.alternativeAnswers && card.alternativeAnswers.length > 0) {
                const alternativeAnswersContainer = cardItem.querySelector('.alternative-answers');
                
                card.alternativeAnswers.forEach(altAnswer => {
                    this.addAlternativeAnswer(alternativeAnswersContainer);
                    const altAnswerInputs = alternativeAnswersContainer.querySelectorAll('.alternative-answer-input');
                    const lastInput = altAnswerInputs[altAnswerInputs.length - 1];
                    lastInput.value = altAnswer;
                });
            }
            
            // Load custom hint if available
            const hintInput = cardItem.querySelector('.card-hint-input');
            if (hintInput && card.customHint) {
                hintInput.value = card.customHint;
            }
        });

        // Update UI labels for edit mode
        this.updateUIForEditMode(true);
    }

    updateUIForEditMode(isEdit) {
        const createHeader = document.querySelector('.create-header h2');
        const submitButton = document.querySelector('#deck-form button[type="submit"]');
        
        if (isEdit) {
            createHeader.textContent = 'Edit Deck';
            submitButton.textContent = 'Update Deck';
        } else {
            createHeader.textContent = 'Create New Deck';
            submitButton.textContent = 'Save Deck';
        }
    }

    renderDecks() {
        const grid = document.getElementById('decks-grid');
        const emptyState = document.getElementById('empty-state');
        
        if (this.decks.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }
        
        grid.style.display = 'grid';
        emptyState.style.display = 'none';
        
        // Update generated decks display
        this.updateGeneratedDecksDisplay();
        
        grid.innerHTML = this.decks.map(deck => {
            const style = deck.style || 'classic';
            const color = deck.color || 'blue';
            const styleIcon = {
                classic: '📄',
                modern: '✨',
                vintage: '📜',
                neon: '💠'
            }[style];
            
            // Check if this deck has been studied
            const hasLearningData = deck.cards.some((_, index) => {
                const cardData = this.getCardLearningData(deck.id, index);
                return cardData.attempts > 0;
            });

            return `
            <div class="deck-card deck-${style} deck-${color}" onclick="app.startStudy('${deck.id}')">
                <div class="deck-header">
                    <div>
                        <div class="deck-name">
                            ${this.escapeHtml(deck.name)}
                            ${hasLearningData ? '<span class="learning-indicator" title="Adaptive learning active">🧠</span>' : ''}
                        </div>
                        <div class="deck-meta">
                            <div class="deck-subject">${this.escapeHtml(deck.subject)}</div>
                            ${deck.yearGroup ? `<div class="deck-year-group">${this.escapeHtml(deck.yearGroup)}</div>` : ''}
                        </div>
                        <div class="deck-style-indicator">${styleIcon} ${style.charAt(0).toUpperCase() + style.slice(1)}</div>
                    </div>
                    <button class="deck-delete" onclick="event.stopPropagation(); deleteDeck('${deck.id}')" title="Delete deck">
                        🗑️
                    </button>
                </div>
                <div class="deck-info">${deck.cards.length} cards</div>
                <div class="deck-buttons">
                    <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); startStudy('${deck.id}')" title="Study this deck">
                        ▶️ Study
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); editDeck('${deck.id}')" title="Edit deck">
                        ✏️ Edit
                    </button>
                    <button class="btn btn-info btn-small" onclick="event.stopPropagation(); showDeckStats('${deck.id}')" title="View learning progress">
                        📊 Stats
                    </button>
                    <button class="btn btn-accent btn-small" onclick="event.stopPropagation(); saveDeckToFile('${deck.id}')" title="Save deck to file">
                        💾 Save
                    </button>
                </div>
            </div>
            `;
        }).join('');
    }

    // Card Management
    addCard() {
        const cardsList = document.getElementById('cards-list');
        const cardNumber = cardsList.children.length + 1;
        
        const cardHtml = `
            <div class="card-item">
                <div class="card-header">
                    <span class="card-number">Card ${cardNumber}</span>
                    <button type="button" class="card-remove" onclick="this.parentElement.parentElement.remove(); app.updateCardNumbers();">Remove</button>
                </div>
                
                <!-- Formatting Toolbar -->
                <div class="formatting-toolbar">
                    <div class="toolbar-group">
                        <button type="button" class="format-btn" data-command="bold" title="Bold">
                            <strong>B</strong>
                        </button>
                        <button type="button" class="format-btn" data-command="italic" title="Italic">
                            <em>I</em>
                        </button>
                        <button type="button" class="format-btn" data-command="underline" title="Underline">
                            <u>U</u>
                        </button>
                        <button type="button" class="format-btn" data-command="strikeThrough" title="Strikethrough">
                            <s>S</s>
                        </button>
                        <button type="button" class="format-btn" data-command="subscript" title="Subscript">
                            X<sub>2</sub>
                        </button>
                        <button type="button" class="format-btn" data-command="superscript" title="Superscript">
                            X<sup>2</sup>
                        </button>
                    </div>
                    <div class="toolbar-group">
                        <div class="color-picker-group">
                            <label>Text:</label>
                            <input type="color" class="text-color-picker" value="#000000" title="Text Color">
                            <button type="button" class="format-btn apply-text-color" title="Apply Text Color">Apply</button>
                        </div>
                        <div class="color-picker-group">
                            <label>Highlight:</label>
                            <input type="color" class="highlight-color-picker" value="#ffff00" title="Highlight Color">
                            <button type="button" class="format-btn apply-highlight-color" title="Apply Highlight Color">Apply</button>
                        </div>
                    </div>
                    <div class="toolbar-group">
                        <button type="button" class="format-btn clear-format" title="Clear Formatting">
                            🗑️ Clear
                        </button>
                        <div class="formatting-help" title="Use subscript for chemical formulas (H₂O) and superscript for exponents (x²)">
                            ❓
                        </div>
                    </div>
                </div>

                <div class="card-inputs">
                    <div class="card-input-group">
                        <label>Question (Front)</label>
                        <div class="card-question-editor" contenteditable="true" data-placeholder="Enter question..." required></div>
                    </div>
                    <div class="card-input-group">
                        <label>Answer (Back)</label>
                        <div class="card-answer-editor" contenteditable="true" data-placeholder="Enter answer..." required></div>
                        <div class="multiple-answers-container">
                            <div class="answers-header">
                                <span class="answers-label">💡 Multiple Answer Variations (Optional)</span>
                                <button type="button" class="btn btn-small add-answer-btn">+ Add Alternative</button>
                            </div>
                            <div class="alternative-answers">
                                <!-- Alternative answers will be added here -->
                            </div>
                        </div>
                    </div>
                    <div class="card-input-group">
                        <label>📝 Explanation (Optional)</label>
                        <div class="card-explanation-editor" contenteditable="true" data-placeholder="Add detailed explanation, context, or additional information..."></div>
                        <small class="explanation-help">This explanation will appear below the answer to provide additional context and learning information.</small>
                    </div>
                    <div class="card-input-group hint-input-group">
                        <label>💡 Custom Hint (Optional)</label>
                        <textarea class="card-hint-input" placeholder="Enter a helpful hint that guides without giving away the answer..."></textarea>
                        <small class="hint-help">This hint will be shown when users use the hint power-up. If empty, AI will generate a hint.</small>
                    </div>
                </div>
            </div>
        `;
        
        cardsList.insertAdjacentHTML('beforeend', cardHtml);
        
        // Set up formatting toolbar events for the new card
        this.setupFormattingToolbar(cardsList.lastElementChild);
        
        // Set up multiple answers functionality for the new card
        this.setupMultipleAnswers(cardsList.lastElementChild);
    }

    addTitleCard() {
        const titleCardsList = document.getElementById('title-cards-list');
        const titleCardNumber = titleCardsList.children.length + 1;
        
        const titleCardHtml = `
            <div class="title-card-item">
                <div class="card-header">
                    <span class="card-number">Title Card ${titleCardNumber}</span>
                    <button type="button" class="card-remove" onclick="this.parentElement.parentElement.remove(); app.updateTitleCardNumbers();">Remove</button>
                </div>
                
                <!-- Formatting Toolbar for Title Cards -->
                <div class="formatting-toolbar">
                    <div class="toolbar-group">
                        <button type="button" class="format-btn" data-command="bold" title="Bold">
                            <strong>B</strong>
                        </button>
                        <button type="button" class="format-btn" data-command="italic" title="Italic">
                            <em>I</em>
                        </button>
                        <button type="button" class="format-btn" data-command="underline" title="Underline">
                            <u>U</u>
                        </button>
                        <button type="button" class="format-btn" data-command="strikeThrough" title="Strikethrough">
                            <s>S</s>
                        </button>
                        <button type="button" class="format-btn" data-command="subscript" title="Subscript">
                            X<sub>2</sub>
                        </button>
                        <button type="button" class="format-btn" data-command="superscript" title="Superscript">
                            X<sup>2</sup>
                        </button>
                    </div>
                    <div class="toolbar-group">
                        <div class="color-picker-group">
                            <label>Text:</label>
                            <input type="color" class="text-color-picker" value="#000000" title="Text Color">
                            <button type="button" class="format-btn apply-text-color" title="Apply Text Color">Apply</button>
                        </div>
                        <div class="color-picker-group">
                            <label>Highlight:</label>
                            <input type="color" class="highlight-color-picker" value="#ffff00" title="Highlight Color">
                            <button type="button" class="format-btn apply-highlight-color" title="Apply Highlight Color">Apply</button>
                        </div>
                    </div>
                    <div class="toolbar-group">
                        <button type="button" class="format-btn clear-format" title="Clear Formatting">
                            🗑️ Clear
                        </button>
                        <div class="formatting-help" title="Use subscript for chemical formulas (H₂O) and superscript for exponents (x²)">
                            ❓
                        </div>
                    </div>
                </div>

                <div class="title-card-inputs">
                    <div class="card-input-group title-input">
                        <label>Title</label>
                        <div class="title-card-title-editor" contenteditable="true" data-placeholder="Enter title card title..." required></div>
                    </div>
                    <div class="card-input-group content-input">
                        <label>Content</label>
                        <div class="title-card-content-editor" contenteditable="true" data-placeholder="Enter title card content, instructions, or description..."></div>
                    </div>
                </div>
            </div>
        `;
        
        titleCardsList.insertAdjacentHTML('beforeend', titleCardHtml);
        
        // Set up formatting toolbar events for the new title card
        this.setupFormattingToolbar(titleCardsList.lastElementChild);
    }

    updateTitleCardNumbers() {
        document.querySelectorAll('.title-card-item').forEach((item, index) => {
            item.querySelector('.card-number').textContent = `Title Card ${index + 1}`;
        });
    }

    updateCardNumbers() {
        document.querySelectorAll('.card-item').forEach((item, index) => {
            item.querySelector('.card-number').textContent = `Card ${index + 1}`;
        });
    }

    setupFormattingToolbar(cardElement) {
        const toolbar = cardElement.querySelector('.formatting-toolbar');
        const formatButtons = toolbar.querySelectorAll('.format-btn');
        const textColorPicker = toolbar.querySelector('.text-color-picker');
        const highlightColorPicker = toolbar.querySelector('.highlight-color-picker');
        const applyTextColorBtn = toolbar.querySelector('.apply-text-color');
        const applyHighlightColorBtn = toolbar.querySelector('.apply-highlight-color');
        const clearButton = toolbar.querySelector('.clear-format');

        // Format buttons (bold, italic, underline, strikethrough)
        formatButtons.forEach(button => {
            if (!button.classList.contains('clear-format') && 
                !button.classList.contains('apply-text-color') && 
                !button.classList.contains('apply-highlight-color')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const command = button.getAttribute('data-command');
                    this.applyFormat(command);
                });
            }
        });

        // Apply text color button
        applyTextColorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedColor = textColorPicker.value;
            this.applyFormat('foreColor', selectedColor);
        });

        // Apply highlight color button
        applyHighlightColorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedColor = highlightColorPicker.value;
            this.applyFormat('backColor', selectedColor);
        });

        // Clear formatting button
        clearButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.clearFormatting();
        });

        // Add placeholder support for contenteditable divs
        const editors = cardElement.querySelectorAll('[contenteditable]');
        editors.forEach(editor => {
            this.setupPlaceholder(editor);
        });
    }

    applyFormat(command, value = null) {
        // Ensure the selection is preserved
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            document.execCommand(command, false, value);
        }
    }

    clearFormatting() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            document.execCommand('removeFormat', false, null);
            // Also remove any inline styles
            const range = selection.getRangeAt(0);
            const contents = range.extractContents();
            const div = document.createElement('div');
            div.appendChild(contents);
            // Remove all style attributes
            const elementsWithStyle = div.querySelectorAll('[style]');
            elementsWithStyle.forEach(el => el.removeAttribute('style'));
            range.insertNode(div.firstChild || document.createTextNode(div.textContent));
        }
    }

    setupPlaceholder(editor) {
        const placeholder = editor.getAttribute('data-placeholder');
        
        // Show placeholder if empty
        const updatePlaceholder = () => {
            if (editor.textContent.trim() === '') {
                editor.classList.add('empty');
                if (!editor.querySelector('.placeholder')) {
                    const placeholderEl = document.createElement('span');
                    placeholderEl.className = 'placeholder';
                    placeholderEl.textContent = placeholder;
                    editor.appendChild(placeholderEl);
                }
            } else {
                editor.classList.remove('empty');
                const placeholderEl = editor.querySelector('.placeholder');
                if (placeholderEl) {
                    placeholderEl.remove();
                }
            }
        };

        // Initial placeholder setup
        updatePlaceholder();

        // Handle focus events
        editor.addEventListener('focus', () => {
            const placeholderEl = editor.querySelector('.placeholder');
            if (placeholderEl) {
                placeholderEl.remove();
            }
        });

        editor.addEventListener('blur', updatePlaceholder);
        editor.addEventListener('input', updatePlaceholder);

        // Prevent placeholder from being part of the content
        editor.addEventListener('keydown', (e) => {
            const placeholderEl = editor.querySelector('.placeholder');
            if (placeholderEl && e.key !== 'Tab') {
                placeholderEl.remove();
            }
        });
    }

    // Study Mode
    startStudy(deckId, isGenerated = false) {
        let deck = null;
        
        if (isGenerated) {
            // Load generated decks from localStorage
            const generatedDecks = this.loadGeneratedDecks();
            deck = generatedDecks.find(d => d.id === deckId);
            
            // Normalize AI-generated card properties to match expected format
            if (deck && deck.cards) {
                deck.cards = deck.cards.map(card => ({
                    ...card,
                    question: card.question || card.front || card.question,
                    answer: card.answer || card.back || card.answer
                }));
            }
        } else {
            deck = this.decks.find(d => d.id === deckId);
        }
        
        if (!deck || deck.cards.length === 0) {
            alert('This deck has no cards to study');
            return;
        }
        
        // Mark if this is a generated deck for analytics
        deck.isGeneratedStudy = isGenerated;

        // Ensure deck has style and color properties
        if (!deck.style) deck.style = 'classic';
        if (!deck.color) deck.color = 'blue';
        
        console.log('Starting study with deck:', { name: deck.name, style: deck.style, color: deck.color });
        
        this.currentDeck = deck;
        
        // Use adaptive learning to prioritize difficult cards
        // Add original index to each card for tracking
        this.currentCards = this.weightedShuffle([...deck.cards], deckId).map((card, index) => ({
            ...card,
            originalIndex: deck.cards.findIndex(originalCard => 
                originalCard.question === card.question && originalCard.answer === card.answer
            )
        }));
        
        this.currentCardIndex = 0;
        this.score = 0;
        this.cardCount = 0;
        this.currentTitleCardIndex = 0;
        this.sessionStartTime = Date.now();
        
        // Initialize current session for power-up tracking
        this.currentSession = {
            powerUpsUsed: {}
        };
        
        // Reset streak for new study session
        this.resetStreak();
        
        // Reset session power-ups
        this.powerUps.activePowerUps.doubleCoinsActive = false;
        this.powerUps.activePowerUps.streakShieldActive = false;
        this.savePowerUps();
        
        // Update visual indicators
        const coinDisplay = document.querySelector('.coin-display');
        if (coinDisplay) {
            coinDisplay.classList.remove('double-coins-active');
        }
        
        // Track which cards have been completed correctly
        this.completedCards = new Set();
        this.totalUniqueCards = deck.cards.length;
        
        this.showView('study');
        this.updateStudyHeader();
        this.hideStudyComplete();
        
        // Check if deck has title cards
        if (deck.titleCards && deck.titleCards.length > 0) {
            this.showTitleCards();
        } else {
            this.startActualStudy();
        }
    }

    showTitleCards() {
        document.getElementById('title-card-display').style.display = 'block';
        document.getElementById('study-card-container').style.display = 'none';
        
        this.create3DTitleCardStack();
        this.updateTitleCardNavigation();
    }

    create3DTitleCardStack() {
        const titleCards = this.currentDeck.titleCards;
        const contentDisplay = document.getElementById('display-title-card-content').parentElement;
        
        // Clear existing content and create stack container
        contentDisplay.innerHTML = `
            <div class="title-cards-stack" id="title-cards-stack">
                ${titleCards.map((card, index) => `
                    <div class="title-card-layer ${index === this.currentTitleCardIndex ? 'active' : ''}" 
                         data-card-index="${index}"
                         onclick="app.selectTitleCard(${index})">
                        <h2 class="title-card-title">${this.escapeHtml(card.title || '')}</h2>
                        <div class="title-card-text">${this.escapeHtml(card.content || card.description || '')}</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Update counter
        document.getElementById('title-card-counter').textContent = 
            `${this.currentTitleCardIndex + 1} / ${titleCards.length}`;
        
        // Apply stacking positions
        this.updateCardStackPositions();
    }

    updateCardStackPositions() {
        const titleCards = this.currentDeck.titleCards;
        const cardLayers = document.querySelectorAll('.title-card-layer');
        
        cardLayers.forEach((layer, index) => {
            // Clear any leftover animation properties
            layer.style.removeProperty('animation');
            layer.classList.remove('active', 'moving-to-front', 'moving-to-back');
            
            const relativePosition = index - this.currentTitleCardIndex;
            
            if (relativePosition === 0) {
                // Active card (front)
                layer.classList.add('active');
                layer.style.zIndex = '15';
                layer.style.transform = 'translateZ(20px) translateY(-10px) scale(1.02)';
                layer.style.opacity = '1';
                layer.style.filter = 'brightness(1)';
            } else if (relativePosition > 0) {
                // Cards behind the active card
                const stackLevel = Math.min(relativePosition, 4);
                const zIndex = Math.max(6, 10 - stackLevel);
                const translateZ = -stackLevel * 20;
                const translateY = stackLevel * 8;
                const scale = Math.max(0.8, 1 - (stackLevel * 0.05));
                const opacity = Math.max(0.6, 1 - (stackLevel * 0.1));
                const brightness = Math.max(0.8, 1 - (stackLevel * 0.05));
                
                layer.style.zIndex = zIndex;
                layer.style.transform = `translateZ(${translateZ}px) translateY(${translateY}px) scale(${scale})`;
                layer.style.opacity = opacity;
                layer.style.filter = `brightness(${brightness})`;
            } else {
                // Cards that would be "before" the current active card
                layer.style.zIndex = '5';
                layer.style.transform = 'translateZ(-100px) translateY(40px) scale(0.75)';
                layer.style.opacity = '0.5';
                layer.style.filter = 'brightness(0.75)';
            }
        });
    }

    selectTitleCard(index) {
        if (index === this.currentTitleCardIndex || this.isAnimating) return;
        
        const direction = index > this.currentTitleCardIndex ? 'next' : 'prev';
        this.currentTitleCardIndex = index;
        this.animateStackTransition(direction);
    }

    showCurrentTitleCard() {
        this.updateCardStackPositions();
        this.updateTitleCardNavigation();
    }

    previousTitleCard() {
        if (this.currentTitleCardIndex > 0 && !this.isAnimating) {
            this.currentTitleCardIndex--;
            this.animateStackTransition('prev');
        }
    }

    nextTitleCard() {
        const titleCards = this.currentDeck.titleCards;
        if (this.currentTitleCardIndex < titleCards.length - 1 && !this.isAnimating) {
            this.currentTitleCardIndex++;
            this.animateStackTransition('next');
        }
    }

    animateStackTransition(direction) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        // Disable navigation buttons during animation
        const prevBtn = document.getElementById('title-prev-btn');
        const nextBtn = document.getElementById('title-next-btn');
        const actionButtons = document.querySelectorAll('.title-card-actions button');
        
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        actionButtons.forEach(btn => btn.disabled = true);
        
        const cardLayers = document.querySelectorAll('.title-card-layer');
        
        // Update counter immediately
        document.getElementById('title-card-counter').textContent = 
            `${this.currentTitleCardIndex + 1} / ${this.currentDeck.titleCards.length}`;
        
        if (direction === 'next') {
            // Find the card that WAS active (now should move to back)
            const previousActiveIndex = this.currentTitleCardIndex - 1;
            
            cardLayers.forEach((layer, index) => {
                layer.classList.remove('active');
                if (index === previousActiveIndex) {
                    layer.classList.add('moving-to-back');
                }
            });
            
        } else { // prev
            // Find the card that WILL BE active (should move from back to front)
            const newActiveIndex = this.currentTitleCardIndex;
            
            cardLayers.forEach((layer, index) => {
                layer.classList.remove('active');
                if (index === newActiveIndex) {
                    layer.classList.add('moving-to-front');
                }
            });
        }
        
        // Wait for animation to complete
        setTimeout(() => {
            // Clean up all animation classes
            cardLayers.forEach(layer => {
                layer.classList.remove('moving-to-front', 'moving-to-back');
            });
            
            // Apply final positions to all cards
            this.updateCardStackPositions();
            
            // Re-enable buttons
            prevBtn.disabled = false;
            nextBtn.disabled = false;
            actionButtons.forEach(btn => btn.disabled = false);
            
            // Update navigation state
            this.updateTitleCardNavigation();
            
            this.isAnimating = false;
        }, 1200);
    }

    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    updateTitleCardNavigation() {
        const titleCards = this.currentDeck.titleCards;
        
        // Update navigation buttons
        const prevBtn = document.getElementById('title-prev-btn');
        const nextBtn = document.getElementById('title-next-btn');
        
        prevBtn.style.visibility = this.currentTitleCardIndex === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = this.currentTitleCardIndex === titleCards.length - 1 ? 'hidden' : 'visible';
        
        // Update action buttons based on title card position and count
        const titleCardActions = document.querySelector('.title-card-actions');
        const isLastCard = this.currentTitleCardIndex === titleCards.length - 1;
        const isSingleCard = titleCards.length === 1;
        
        // Show Start/Skip buttons only for single card OR at the last card
        if (isSingleCard || isLastCard) {
            titleCardActions.innerHTML = `
                <button class="btn btn-primary" onclick="startActualStudy()">
                    Start Studying →
                </button>
                <button class="btn btn-secondary" onclick="skipToStudy()">
                    Skip to Cards
                </button>
            `;
        } else {
            // Show Next/Prev buttons for multi-card navigation
            const prevDisabled = this.currentTitleCardIndex === 0 ? 'disabled' : '';
            const nextDisabled = isLastCard ? 'disabled' : '';
            
            titleCardActions.innerHTML = `
                <button class="btn btn-secondary" onclick="previousTitleCard()" ${prevDisabled}>
                    ← Previous
                </button>
                <button class="btn btn-primary" onclick="nextTitleCard()" ${nextDisabled}>
                    Next →
                </button>
            `;
        }
    }

    startActualStudy() {
        document.getElementById('title-card-display').style.display = 'none';
        document.getElementById('study-card-container').style.display = 'block';
        
        this.showCurrentCard();
        
        // Focus on answer input
        setTimeout(() => {
            document.getElementById('answer-input').focus();
        }, 100);
    }

    skipToStudy() {
        this.startActualStudy();
    }

    updateStudyHeader() {
        document.getElementById('study-deck-name').textContent = this.currentDeck.name;
        
        // Show progress as completed cards / total cards
        const completedCount = this.completedCards ? this.completedCards.size : this.score;
        const totalCards = this.totalUniqueCards || this.currentDeck.cards.length;
        document.getElementById('card-counter').textContent = 
            `Progress: ${completedCount} / ${totalCards} completed`;
            
        document.getElementById('score').textContent = `Cards Remaining: ${this.currentCards.length}`;
    }
    
    setupMultipleAnswers(cardElement) {
        const addAnswerBtn = cardElement.querySelector('.add-answer-btn');
        const alternativeAnswersContainer = cardElement.querySelector('.alternative-answers');
        
        if (!addAnswerBtn || !alternativeAnswersContainer) return;
        
        addAnswerBtn.addEventListener('click', () => {
            this.addAlternativeAnswer(alternativeAnswersContainer);
        });
    }
    
    addAlternativeAnswer(container) {
        const answerNumber = container.children.length + 1;
        const answerHtml = `
            <div class="alternative-answer-item">
                <span class="answer-number">${answerNumber}.</span>
                <input type="text" class="alternative-answer-input" placeholder="Enter alternative answer...">
                <button type="button" class="remove-answer-btn" onclick="this.parentElement.remove(); app.updateAnswerNumbers(this);">Remove</button>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', answerHtml);
    }
    
    updateAnswerNumbers(removedElement) {
        const container = removedElement.closest('.alternative-answers');
        const items = container.querySelectorAll('.alternative-answer-item');
        
        items.forEach((item, index) => {
            const numberSpan = item.querySelector('.answer-number');
            if (numberSpan) {
                numberSpan.textContent = `${index + 1}.`;
            }
        });
    }

    showCurrentCard() {
        if (this.currentCards.length === 0) {
            this.showStudyComplete();
            return;
        }

        const card = this.currentCards[this.currentCardIndex];
        const questionElement = document.getElementById('card-question');
        
        // Ensure card is not flipped when showing new card
        const flipCard = document.getElementById('flip-card');
        if (flipCard) {
            flipCard.classList.remove('flipped');
        }
        
        // Check if content contains HTML tags for backward compatibility
        if (card.question && card.question.indexOf('<') === -1) {
            questionElement.textContent = card.question;
        } else {
            questionElement.innerHTML = card.question || '';
        }
        document.getElementById('answer-input').value = '';
        document.getElementById('card-number').textContent = `${this.cardCount + 1} / ${this.currentDeck.cards.length}`;
        this.hideFeedback();
        
        // Apply deck style and color
        const studyCard = document.getElementById('study-card');
        
        // Remove existing style and animation classes
        studyCard.classList.remove('classic', 'modern', 'vintage', 'neon');
        studyCard.classList.remove('blue', 'green', 'purple', 'red', 'orange', 'teal');
        studyCard.classList.remove('fall-correct', 'slide-incorrect', 'slide-out', 'slide-in', 'bounce-in', 'slide-in-top');
        
        // Apply deck's style and color (with fallbacks for older decks)
        const deckStyle = this.currentDeck.style || 'classic';
        const deckColor = this.currentDeck.color || 'blue';
        
        // Ensure styles are applied correctly
        console.log('Applying card styles:', { deckStyle, deckColor });
        studyCard.classList.add(deckStyle, deckColor);
        
        // Double-check that the classes were applied
        setTimeout(() => {
            if (!studyCard.classList.contains(deckStyle) || !studyCard.classList.contains(deckColor)) {
                console.warn('Card styles not applied properly, retrying...');
                studyCard.classList.add(deckStyle, deckColor);
            }
        }, 10);
        
        // Reset any inline styles from animations
        studyCard.style.transform = '';
        studyCard.style.opacity = '1';
        
        // Focus on answer input
        setTimeout(() => {
            document.getElementById('answer-input').focus();
        }, 100);
    }

    checkAnswer() {
        const userAnswer = document.getElementById('answer-input').value.trim();
        if (!userAnswer) {
            alert('Please enter an answer');
            return;
        }

        const currentCard = this.currentCards[this.currentCardIndex];
        // Check against main answer and all alternative answers
        const answerResult = this.checkAllAnswers(userAnswer, currentCard);
        const isCorrect = answerResult.isCorrect;

        // Process the answer and flip the card
        this.processAnswer(isCorrect, answerResult, currentCard);
    }
    
    showAnswer() {
        // "I Don't Know" button pressed
        const currentCard = this.currentCards[this.currentCardIndex];
        
        // Process as incorrect answer
        const answerResult = { reason: 'dont_know' };
        this.processAnswer(false, answerResult, currentCard);
    }
    
    processAnswer(isCorrect, answerResult, currentCard) {
        // Calculate response time for learning algorithm
        const responseTime = Date.now() - this.sessionStartTime;
        
        // Update adaptive learning data
        const cardIndex = currentCard.originalIndex !== undefined ? currentCard.originalIndex : 
                         this.currentDeck.cards.findIndex(c => c === currentCard || 
                         (c.question === currentCard.question && c.answer === currentCard.answer));
        
        if (cardIndex !== -1) {
            this.updateCardPerformance(this.currentDeck.id, cardIndex, isCorrect, responseTime);
        }

        this.cardCount++;
        
        // Store result for when card flips
        this.currentAnswerResult = {
            isCorrect,
            answerResult,
            currentCard,
            cardIndex
        };
        
        // Flip the card to show answer
        this.flipCard();
        
        if (isCorrect) {
            // Track unique card completion
            const cardOriginalIndex = currentCard.originalIndex;
            if (cardOriginalIndex !== undefined && !this.completedCards.has(cardOriginalIndex)) {
                this.completedCards.add(cardOriginalIndex);
                this.score = this.completedCards.size; // Score = number of unique cards completed
            }
            
            // 🪙 Gamification: Award coins for correct answer
            const difficulty = this.currentDeck.difficulty || 'Intermediate';
            const streakCount = this.getCorrectStreakCount();
            const responseTime = Date.now() - this.sessionStartTime;
            const coinReward = this.calculateCoinReward(difficulty, streakCount, responseTime);
            
            // Provide encouraging feedback based on how they got it right
            let feedbackMessage = 'Correct! Well done! 🎉';
            if (answerResult.reason === 'key_terms') {
                feedbackMessage = 'Correct! You got the key points! 🎯';
            } else if (answerResult.reason === 'high_similarity') {
                feedbackMessage = 'Correct! Close enough - great understanding! ✨';
            }
            
            // Add coin information to feedback
            feedbackMessage += ` <span class="coin-reward">+${coinReward} 💰</span>`;
            
            this.showFeedback(feedbackMessage, 'correct');
            this.earnCoins(coinReward, 'Correct answer!');
            this.incrementStreak(); // Track streak for bonus calculations
            
            // Award XP for correct answer
            if (typeof awardXP === 'function') {
                awardXP(XP_VALUES.correctAnswer, 'Correct answer!');
                
                // Check for first answer achievement
                if (typeof checkAchievements === 'function') {
                    checkAchievements('firstAnswer');
                    
                    // Check streak achievements
                    const currentStreak = this.getCorrectStreakCount();
                    checkAchievements('streak', { streak: currentStreak });
                }
            }
            
            // Trigger fall animation for correct answer
            this.animateCorrectAnswer();
            
            // Remove correct card from deck
            this.currentCards.splice(this.currentCardIndex, 1);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        } else {
            // 🪙 Gamification: Lose coins for incorrect answer
            const difficulty = this.currentDeck.difficulty || 'Intermediate';
            const coinPenalty = this.calculateCoinPenalty(difficulty);
            
            // Provide helpful feedback based on how close they were
            let feedbackMessage = `Incorrect. The correct answer is: "${currentCard.answerText || currentCard.answer}"`;
            if (answerResult.reason === 'close') {
                feedbackMessage = `Close! You were on the right track. The correct answer is: "${currentCard.answerText || currentCard.answer}"`;
            }
            
            // Add coin penalty information to feedback (but be encouraging)
            if (coinPenalty > 0) {
                feedbackMessage += ` <span class="coin-penalty">-${coinPenalty} 💰</span>`;
            }
            
            this.showFeedback(feedbackMessage, 'incorrect', currentCard.answer);
            
            if (coinPenalty > 0) {
                this.loseCoins(coinPenalty, 'Incorrect answer');
            }
            this.resetStreak(); // Reset streak on incorrect answer
            
            // Award small XP for effort even when wrong
            if (typeof awardXP === 'function') {
                awardXP(XP_VALUES.wrongAnswer, 'Keep trying!');
            }
            
            // Trigger slide animation for incorrect answer
            this.animateIncorrectAnswer();
            
            // For adaptive learning: keep difficult cards in rotation longer
            const incorrectCard = this.currentCards.splice(this.currentCardIndex, 1)[0];
            
            // Add the card back multiple times based on difficulty
            const cardData = this.getCardLearningData(this.currentDeck.id, cardIndex);
            const repetitions = Math.min(3, Math.ceil(cardData.difficultyScore));
            
            for (let i = 0; i < repetitions; i++) {
                // Insert at random positions in the latter half of the deck
                const insertPos = Math.floor(this.currentCards.length * 0.5) + 
                                Math.floor(Math.random() * Math.ceil(this.currentCards.length * 0.5));
                this.currentCards.splice(insertPos, 0, { ...incorrectCard });
            }
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        }

        this.updateStudyHeader();
        
        // Reset session timer for next card
        this.sessionStartTime = Date.now();
        
        // Show next card after animation completes
        const animationDelay = isCorrect ? 1000 : 1400; // Different delays for different animations
        setTimeout(() => {
            this.nextCard();
        }, animationDelay);
    }

    animateCorrectAnswer() {
        const studyCard = document.getElementById('study-card');
        
        // Clear any existing animation classes
        studyCard.classList.remove('slide-out', 'slide-in', 'slide-incorrect', 'fall-correct', 'bounce-in');
        
        // Add fall animation
        studyCard.classList.add('fall-correct');
        
        // Prepare next card preview
        this.prepareNextCardPreview();
    }

    animateIncorrectAnswer() {
        const studyCard = document.getElementById('study-card');
        
        // Clear any existing animation classes
        studyCard.classList.remove('slide-out', 'slide-in', 'slide-incorrect', 'fall-correct', 'bounce-in');
        
        // Add slide to side animation
        studyCard.classList.add('slide-incorrect');
        
        // Prepare next card preview
        this.prepareNextCardPreview();
    }

    prepareNextCardPreview() {
        const nextCardPreview = document.getElementById('next-card-preview');
        
        if (this.currentCards.length > 1) {
            // Show preview of next card
            const nextCardIndex = this.currentCardIndex < this.currentCards.length - 1 ? 
                this.currentCardIndex + 1 : 0;
            
            // For incorrect answers, the "next" card is actually the current one going to the back
            const isIncorrectAnswer = document.getElementById('study-card').classList.contains('slide-incorrect');
            
            if (isIncorrectAnswer && this.currentCards.length > 1) {
                // Show the actual next card in deck
                const nextCard = this.currentCards[nextCardIndex === this.currentCardIndex ? 
                    (this.currentCardIndex + 1) % this.currentCards.length : nextCardIndex];
                nextCardPreview.style.display = 'block';
                nextCardPreview.style.opacity = '0.6';
            } else if (!isIncorrectAnswer) {
                // For correct answers, show the next card
                if (this.currentCards.length > 1) {
                    nextCardPreview.style.display = 'block';
                    nextCardPreview.style.opacity = '0.6';
                }
            }
        } else {
            nextCardPreview.style.display = 'none';
        }
    }

    nextCard() {
        if (this.currentCards.length === 0) {
            this.showStudyComplete();
            return;
        }

        // Hide next card preview
        const nextCardPreview = document.getElementById('next-card-preview');
        nextCardPreview.style.display = 'none';
        
        // Get the current card element
        const studyCard = document.getElementById('study-card');
        
        // Clear all animation classes and reset the card
        studyCard.classList.remove('fall-correct', 'slide-incorrect', 'slide-out', 'slide-in', 'bounce-in', 'slide-in-top');
        
        // Reset any transform styles that might be left over from animations
        studyCard.style.transform = '';
        studyCard.style.opacity = '';
        
        // Brief delay to ensure the DOM is clean, then show new card with entrance animation
        setTimeout(() => {
            this.showCurrentCard();
            
            // Add entrance animation
            setTimeout(() => {
                studyCard.classList.add('bounce-in');
            }, 50);
        }, 100);
    }

    showFeedback(message, type, correctAnswer = null) {
        const feedback = document.getElementById('answer-feedback');
        
        let content = message;
        if (correctAnswer && type === 'incorrect') {
            content += `<div class="correct-answer">Correct answer: <span class="formatted-answer">${correctAnswer}</span></div>`;
        }
        
        feedback.innerHTML = content;
        feedback.className = `answer-feedback ${type} show`;
    }

    hideFeedback() {
        const feedback = document.getElementById('answer-feedback');
        feedback.classList.remove('show', 'correct', 'incorrect');
    }

    showStudyComplete() {
        document.getElementById('study-card-container').style.display = 'none';
        document.getElementById('study-complete').classList.add('show');
        document.getElementById('final-score').textContent = 
            `${this.score} / ${this.totalUniqueCards}`;

        // 🪙 Gamification: Award completion bonus
        if (this.currentDeck) {
            const completionRate = this.score / this.totalUniqueCards;
            let completionBonus = 0;
            
            if (completionRate === 1.0) {
                // Perfect completion - big bonus!
                completionBonus = 50;
                this.earnCoins(completionBonus, 'Perfect completion! 🌟');
                
                // Award XP for perfect completion
                if (typeof awardXP === 'function') {
                    awardXP(XP_VALUES.perfectCompletion, 'Perfect completion!');
                    
                    // Check perfect deck achievement
                    if (typeof checkAchievements === 'function') {
                        checkAchievements('perfectDeck');
                    }
                }
            } else if (completionRate >= 0.8) {
                // Good completion
                completionBonus = 25;
                this.earnCoins(completionBonus, 'Great job completing the deck!');
                
                // Award XP for deck completion
                if (typeof awardXP === 'function') {
                    awardXP(XP_VALUES.deckCompletion, 'Deck completed!');
                }
            } else if (completionRate >= 0.5) {
                // Decent effort
                completionBonus = 10;
                this.earnCoins(completionBonus, 'Good effort!');
                
                // Award XP for study session
                if (typeof awardXP === 'function') {
                    awardXP(XP_VALUES.studySession, 'Study session completed!');
                }
            }
            
            // Add streak bonus if applicable
            const streakBonus = Math.min(this.getCorrectStreakCount() * 5, 30);
            if (streakBonus > 0) {
                this.earnCoins(streakBonus, `${this.getCorrectStreakCount()}-answer streak bonus! 🔥`);
            }
        }

        // Record study session for analytics
        if (this.currentDeck) {
            const sessionDuration = Date.now() - this.sessionStartTime;
            this.recordStudySession(
                this.currentDeck.id,
                this.cardCount,
                this.score,
                sessionDuration
            );
            // Update AI lock status in case user just unlocked it
            this.updateAILockStatus();
        }
    }

    hideStudyComplete() {
        document.getElementById('study-card-container').style.display = 'block';
        document.getElementById('study-complete').classList.remove('show');
    }

    restartStudy() {
        if (this.currentDeck) {
            this.startStudy(this.currentDeck.id);
        }
    }

    exitStudy() {
        this.currentDeck = null;
        this.currentCards = [];
        this.showView('home');
    }

    // Utility functions
    showNotification(message, type = 'info') {
        // Simple notification - could be enhanced with a toast library
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    checkAllAnswers(userAnswer, currentCard) {
        // Get main answer
        const mainAnswer = currentCard.answerText || currentCard.answer;
        
        // Try main answer first
        let result = this.smartAnswerComparison(userAnswer, mainAnswer);
        if (result.isCorrect) {
            result.matchedAnswer = 'main';
            return result;
        }
        
        // Try alternative answers if they exist
        if (currentCard.alternativeAnswers && currentCard.alternativeAnswers.length > 0) {
            for (let i = 0; i < currentCard.alternativeAnswers.length; i++) {
                const altAnswer = currentCard.alternativeAnswers[i];
                const altResult = this.smartAnswerComparison(userAnswer, altAnswer);
                
                if (altResult.isCorrect) {
                    altResult.matchedAnswer = `alternative_${i + 1}`;
                    return altResult;
                }
                
                // Keep track of the best similarity score
                if (altResult.similarity && (!result.similarity || altResult.similarity > result.similarity)) {
                    result = altResult;
                }
            }
        }
        
        return result;
    }

    smartAnswerComparison(userAnswer, correctAnswer) {
        // Debug logging for troubleshooting
        console.log('🔍 Answer Comparison Debug:');
        console.log('User Answer:', `"${userAnswer}"`);
        console.log('Correct Answer:', `"${correctAnswer}"`);
        
        // First try exact match with just trimming and case normalization
        const simpleUser = userAnswer.toString().trim().toLowerCase();
        const simpleCorrect = correctAnswer.toString().trim().toLowerCase();
        
        console.log('Simple User:', `"${simpleUser}"`);
        console.log('Simple Correct:', `"${simpleCorrect}"`);
        
        if (simpleUser === simpleCorrect) {
            console.log('✅ EXACT MATCH (simple)');
            return { isCorrect: true, reason: 'exact_simple' };
        }
        
        // Clean both answers for comparison (more aggressive cleaning)
        const cleanUser = this.cleanAnswerForComparison(userAnswer);
        const cleanCorrect = this.cleanAnswerForComparison(correctAnswer);
        
        console.log('Clean User:', `"${cleanUser}"`);
        console.log('Clean Correct:', `"${cleanCorrect}"`);
        
        // Direct match after cleaning
        if (cleanUser === cleanCorrect) {
            console.log('✅ EXACT MATCH (cleaned)');
            return { isCorrect: true, reason: 'exact' };
        }
        
        // Extract key terms from both answers
        const userTerms = this.extractKeyTerms(cleanUser);
        const correctTerms = this.extractKeyTerms(cleanCorrect);
        
        // Check if user answer contains all essential terms
        const essentialTermsPresent = this.checkEssentialTerms(userTerms, correctTerms);
        
        // Calculate similarity score
        const similarityScore = this.calculateSimilarity(cleanUser, cleanCorrect);
        
        // Determine if answer is correct and why
        if (essentialTermsPresent && similarityScore >= 0.6) {
            return { isCorrect: true, reason: 'key_terms', similarity: similarityScore };
        } else if (similarityScore >= 0.8) {
            return { isCorrect: true, reason: 'high_similarity', similarity: similarityScore };
        } else if (similarityScore >= 0.6) {
            return { isCorrect: false, reason: 'close', similarity: similarityScore };
        } else {
            return { isCorrect: false, reason: 'different', similarity: similarityScore };
        }
    }
    
    cleanAnswerForComparison(answer) {
        return answer
            .toString()
            .toLowerCase()
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[""'']/g, '"') // Normalize quotes
            .replace(/[–—]/g, '-') // Normalize dashes
            .replace(/\s+/g, ' ') // Normalize whitespace
            .replace(/[^\w\s%$£€¥₹.,;:!?()[\]{}/"'-]/g, '') // Keep important punctuation
            .trim();
    }
    
    extractKeyTerms(text) {
        // Common words to ignore
        const stopWords = new Set([
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
            'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did',
            'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must', 'shall',
            'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
            'my', 'your', 'his', 'her', 'its', 'our', 'their', 'me', 'him', 'her', 'us', 'them'
        ]);
        
        return text
            .split(' ')
            .filter(word => word.length > 2 && !stopWords.has(word))
            .filter(word => /[a-zA-Z]/.test(word)); // Must contain at least one letter
    }
    
    checkEssentialTerms(userTerms, correctTerms) {
        if (correctTerms.length === 0) return true;
        
        // For short answers (1-2 key terms), require all terms
        // For longer answers, require majority of terms
        const requiredRatio = correctTerms.length <= 2 ? 1.0 : 0.7;
        const requiredTerms = Math.ceil(correctTerms.length * requiredRatio);
        
        let matchedTerms = 0;
        for (const correctTerm of correctTerms) {
            // Check for exact matches or close matches (allowing for minor typos)
            const hasMatch = userTerms.some(userTerm => 
                userTerm === correctTerm || 
                this.isCloseMatch(userTerm, correctTerm)
            );
            if (hasMatch) matchedTerms++;
        }
        
        return matchedTerms >= requiredTerms;
    }
    
    isCloseMatch(word1, word2) {
        // Allow for single character differences for words longer than 3 characters
        if (word1.length < 4 || word2.length < 4) return false;
        if (Math.abs(word1.length - word2.length) > 1) return false;
        
        const maxDistance = Math.floor(Math.max(word1.length, word2.length) * 0.2);
        return this.levenshteinDistance(word1, word2) <= maxDistance;
    }
    
    calculateSimilarity(str1, str2) {
        const maxLen = Math.max(str1.length, str2.length);
        if (maxLen === 0) return 1.0;
        
        const distance = this.levenshteinDistance(str1, str2);
        return (maxLen - distance) / maxLen;
    }
    
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // =================== AI DECK GENERATION BASED ON USER STATISTICS ===================
    
    async generateAIDeck(options = {}) {
        console.log('🤖 Starting AI deck generation with 20 cards and full deck creator features...');
        
        try {
            // Set default options for comprehensive deck generation
            const deckOptions = {
                cardCount: options.cardCount || 20, // Always generate 20 cards
                subject: options.subject || 'Mathematics', // Default subject
                difficulty: options.difficulty || 'intermediate',
                includeExplanations: true,
                includeMultipleAnswers: true,
                includeTitleCards: true,
                ...options
            };
            
            console.log('📚 Generating deck with options:', deckOptions);
            
            // Load user learning profile or use defaults
            const profile = JSON.parse(localStorage.getItem('ai-learning-profile') || '{}');
            
            // Create comprehensive AI prompt for full deck generation
            const fullDeckPrompt = this.buildComprehensiveDeckPrompt(deckOptions, profile);
            console.log('📊 Generated comprehensive deck prompt');
            
            // Generate cards using comprehensive AI system with fallback
            let cards = [];
            let aiResponse = null;
            
            // Try AI Manager first (uses WebLLM, Ollama, etc.)
            if (this.aiManagerReady && this.aiManager) {
                try {
                    console.log('🤖 Using AI Manager for deck generation...');
                    
                    // Load user profile
                    const profile = JSON.parse(localStorage.getItem('ai-learning-profile') || '{}');
                    
                    const deckResult = await this.aiManager.generateDeck(
                        deckOptions.subject,
                        deckOptions.difficulty,
                        deckOptions.cardCount,
                        profile
                    );
                    
                    if (deckResult && deckResult.cards) {
                        console.log('✅ AI Manager generated deck successfully');
                        cards = deckResult.cards;
                    } else if (deckResult && typeof deckResult === 'string') {
                        console.log('✅ AI Manager generated content successfully');
                        cards = this.parseAICardResponse(deckResult, deckOptions.cardCount);
                    }
                } catch (error) {
                    console.log('AI Manager failed, trying Hugging Face fallback:', error.message);
                }
            }
            
            // Fallback to Hugging Face if AI Manager failed
            if (!aiResponse && cards.length === 0) {
                try {
                    console.log('🔄 Trying Hugging Face fallback...');
                    aiResponse = await this.getHuggingFaceResponse(fullDeckPrompt);
                    if (aiResponse) {
                        cards = this.parseAICardResponse(aiResponse, deckOptions.cardCount);
                    }
                } catch (error) {
                    console.log('All AI methods failed:', error.message);
                }
            }
            
            // If AI completely failed, show error and abort
            if (cards.length === 0) {
                this.showNotification('AI unavailable, good luck!', 'error');
                console.error('All AI systems failed - cannot generate deck without AI');
                return null;
            }
            
            // Ensure we have the requested number of cards (only from AI)
            cards = cards.slice(0, deckOptions.cardCount);
            
            // Generate title cards for the deck
            const titleCards = this.generateDeckTitleCards(deckOptions);
            
            // Create comprehensive deck structure (like user would with deck creator)
            const deckId = 'ai_comprehensive_' + Date.now();
            const aiDeck = {
                id: deckId,
                name: this.generateComprehensiveDeckTitle(deckOptions),
                subject: deckOptions.subject,
                difficulty: deckOptions.difficulty,
                cards: cards,
                titleCards: titleCards, // Include title cards
                dateCreated: Date.now(),
                lastStudied: null,
                stats: {
                    totalStudied: 0,
                    correctAnswers: 0,
                    averageTime: 0
                },
                style: 'classic', // Default style
                color: 'blue', // Default color
                generationType: 'ai-comprehensive',
                isAIGenerated: true,
                aiMetadata: {
                    cardCount: cards.length,
                    subject: deckOptions.subject,
                    difficulty: deckOptions.difficulty,
                    generationDate: new Date().toISOString(),
                    includesExplanations: true,
                    includesMultipleAnswers: true
                }
            };
            
            console.log('Generated comprehensive AI deck with', cards.length, 'cards:', aiDeck);
            
            // Save the generated deck to the generated decks list
            this.saveGeneratedDeck(aiDeck);
            
            // Also add to user's personal collection immediately
            this.decks.push(aiDeck);
            this.saveDecks();
            
            // Show success notification
            this.showNotification(`AI Generated "${aiDeck.name}" with ${cards.length} cards!`, 'success');
            
            // Update deck display
            this.renderDecks();
            this.updateGeneratedDecksDisplay();
            
            // Show success notification
            this.showNotification(
                'AI Deck Generated!', 
                `Created "${aiDeck.title}" with ${cards.length} personalized cards based on your study patterns`,
                'success'
            );
            
            // Update last generation timestamp
            localStorage.setItem('last-ai-generation', Date.now().toString());
            
            return aiDeck;
            
        } catch (error) {
            console.error('❌ AI deck generation failed:', error);
            this.showNotification(
                'AI Generation Failed', 
                error.message || 'Unable to generate AI deck. Please try again later.',
                'error'
            );
            throw error;
        }
    }
    
    buildUserStatsPrompt(profile, options = {}) {
        const trends = profile.preferences.accuracyTrends;
        const recentTrends = trends.slice(-10);
        
        // Advanced user performance analysis
        const performanceAnalysis = this.analyzeUserPerformance(profile);
        const learningPatterns = this.identifyLearningPatterns(profile);
        const adaptiveDifficulty = this.calculateAdaptiveDifficulty(profile);
        
        // Dynamic card count based on performance
        const dynamicCardCount = this.calculateOptimalCardCount(profile, options);
        
        // Build intelligent, personalized prompt
        let prompt = '';
        
        if (performanceAnalysis.strugglingAreas.length > 0) {
            // Focus on remedial content
            prompt = `Create targeted remedial flashcards for a student who needs help with:
${performanceAnalysis.strugglingAreas.map(area => `- ${area.subject}: ${area.accuracy}% accuracy (needs improvement)`).join('\n')}

LEARNING PROFILE:
- Overall accuracy: ${performanceAnalysis.overallAccuracy}%
- Study pattern: ${learningPatterns.studyPattern}
- Attention span: ${learningPatterns.optimalSessionLength} minutes
- Best performance time: ${learningPatterns.bestTimeOfDay}

CREATE ${dynamicCardCount} cards that:
1. Address the weakest areas first (${performanceAnalysis.strugglingAreas[0]?.subject})
2. Use ${adaptiveDifficulty.recommendedLevel} difficulty level
3. Include step-by-step explanations for complex concepts
4. Focus on fundamental understanding before advanced topics`;

        } else if (performanceAnalysis.overallAccuracy > 85) {
            // Create advanced/challenge content
            prompt = `Create advanced challenge flashcards for a high-performing student:

STRENGTHS TO BUILD ON:
${performanceAnalysis.strongAreas.map(area => `- ${area.subject}: ${area.accuracy}% accuracy`).join('\n')}

PERFORMANCE PROFILE:
- Mastery level: ${performanceAnalysis.overallAccuracy}%
- Ready for: ${adaptiveDifficulty.recommendedLevel} content
- Learning style: ${learningPatterns.preferredStyle}

CREATE ${dynamicCardCount} advanced cards that:
1. Challenge existing knowledge with complex scenarios
2. Connect concepts across different subjects
3. Include real-world applications and case studies
4. Prepare for higher-level examinations`;

        } else {
            // Balanced improvement approach
            prompt = `Create balanced flashcards for steady improvement:

CURRENT PERFORMANCE:
- Overall accuracy: ${performanceAnalysis.overallAccuracy}%
- Improving areas: ${performanceAnalysis.improvingAreas.map(a => a.subject).join(', ')}
- Areas needing attention: ${performanceAnalysis.strugglingAreas.map(a => a.subject).join(', ')}

LEARNING INSIGHTS:
- Study consistency: ${learningPatterns.consistencyScore}/10
- Preferred difficulty: ${adaptiveDifficulty.recommendedLevel}
- Response time: ${learningPatterns.averageResponseTime}s

CREATE ${dynamicCardCount} cards that:
1. 60% focus on improvement areas (${performanceAnalysis.strugglingAreas.map(a => a.subject).join(', ')})
2. 40% reinforcement of strong areas (${performanceAnalysis.strongAreas.map(a => a.subject).slice(0, 2).join(', ')})
3. Match ${adaptiveDifficulty.recommendedLevel} difficulty level
4. Include variety to maintain engagement`;
        }
        
        // Add subject-specific focus if requested
        if (options.subject) {
            prompt += `\n\nSPECIFIC SUBJECT FOCUS: ${options.subject}
- Tailor all cards to this subject area
- Use appropriate terminology and concepts
- Consider GCSE curriculum requirements`;
        }
        
        prompt += `\n\nYou are a helpful school tutor that is helping to create a deck of flash cards using these fields: QUESTION FIELD, ANSWER FIELD, only put simple answers in ANSWER FIELD and other acceptable answers related to the question in MULTIPLE ANSWER FIELD(S), for detailed explanations, use this field: EXPLANATION FIELD, you can format questions and explanations using these options: **bold text**, __underline text__, ~~strikethrough text~~, subscript₂, superscript², <span style="color: #FF0000">colored text</span>, and <span style="background-color: #FFFF00">highlighted text</span>.

FORMAT REQUIREMENTS:
Q: [Clear, specific question with formatting if helpful]
A: [Primary simple answer - keep it short and direct]
ALT: [Alternative acceptable answer 1] (if applicable)
ALT: [Alternative acceptable answer 2] (if applicable)
EXP: [Detailed explanation with formatting to enhance learning]

FORMATTING EXAMPLES:
- **Bold for emphasis**: **Important concept**
- __Underline for key terms__: __mitochondria__
- ~~Strikethrough for common mistakes~~: ~~incorrect assumption~~
- Subscript for chemistry: H₂O, CO₂
- Superscript for math: x², E=mc²
- <span style="color: #FF0000">Red for warnings or critical info</span>
- <span style="background-color: #FFFF00">Yellow highlight for key facts</span>

SAMPLE CARDS:
Q: What percentage of Earth's surface is covered by **water**?
A: 71%
ALT: 70%
ALT: approximately 71%
EXP: About __71% of Earth's surface__ is covered by water, with the vast majority being **ocean water**. This includes all oceans, seas, lakes, and other bodies of water. <span style="color: #0066CC">Fun fact</span>: Only about 3% of this water is freshwater!

Q: What is the chemical symbol for **gold**?
A: Au
EXP: The symbol __Au__ comes from the Latin word **"aurum"** meaning gold. Gold is element **79** on the periodic table and is a <span style="background-color: #FFFF00">precious metal</span> known for its resistance to corrosion.

Make cards educational, engaging, and perfectly matched to this student's learning level with appropriate formatting.`;

        return prompt;
    }
    
    analyzeUserPerformance(profile) {
        const trends = profile.preferences?.accuracyTrends || [];
        const recentTrends = trends.slice(-15); // Last 15 sessions
        
        const overallAccuracy = this.calculateAverageAccuracy(profile);
        
        // Identify struggling areas (below 70% accuracy)
        const strugglingAreas = this.identifyTopWeaknesses(profile)
            .filter(area => area.score < 70)
            .map(area => ({ subject: area.subject, accuracy: area.score }));
        
        // Identify strong areas (above 80% accuracy)
        const strongAreas = this.identifyTopStrengths(profile)
            .filter(area => area.score > 80)
            .map(area => ({ subject: area.subject, accuracy: area.score }));
        
        // Identify improving areas (positive trend)
        const improvingAreas = [];
        if (trends.length > 5) {
            const recent = trends.slice(-5);
            const earlier = trends.slice(-10, -5);
            
            const recentAvg = recent.reduce((sum, t) => sum + t.accuracy, 0) / recent.length;
            const earlierAvg = earlier.reduce((sum, t) => sum + t.accuracy, 0) / earlier.length;
            
            if (recentAvg > earlierAvg + 5) {
                improvingAreas.push({ subject: 'General', improvement: recentAvg - earlierAvg });
            }
        }
        
        return {
            overallAccuracy,
            strugglingAreas,
            strongAreas,
            improvingAreas,
            sessionCount: trends.length
        };
    }
    
    identifyLearningPatterns(profile) {
        const trends = profile.preferences?.accuracyTrends || [];
        
        // Calculate study consistency
        let consistencyScore = 5; // Default
        if (trends.length > 3) {
            const intervals = [];
            for (let i = 1; i < trends.length; i++) {
                intervals.push(trends[i].timestamp - trends[i-1].timestamp);
            }
            const avgInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
            const variance = intervals.reduce((sum, interval) => sum + Math.pow(interval - avgInterval, 2), 0) / intervals.length;
            consistencyScore = Math.max(1, Math.min(10, 10 - (variance / avgInterval) * 5));
        }
        
        // Determine optimal session length
        const optimalSessionLength = profile.studyHabits?.preferredSessionLength || 15;
        
        // Calculate average response time (estimated)
        const averageResponseTime = Math.round(optimalSessionLength / Math.max(1, trends.length) * 60);
        
        // Determine study pattern
        let studyPattern = 'Regular';
        if (consistencyScore > 7) studyPattern = 'Highly consistent';
        else if (consistencyScore < 4) studyPattern = 'Irregular';
        
        // Determine preferred learning style based on accuracy patterns
        const preferredStyle = profile.preferences?.accuracyTrends?.length > 10 ? 'Analytical' : 'Exploratory';
        
        return {
            consistencyScore: Math.round(consistencyScore),
            optimalSessionLength,
            averageResponseTime,
            studyPattern,
            preferredStyle,
            bestTimeOfDay: 'Variable' // Could be enhanced with timestamp analysis
        };
    }
    
    calculateAdaptiveDifficulty(profile) {
        const avgAccuracy = this.calculateAverageAccuracy(profile);
        const trends = profile.preferences?.accuracyTrends || [];
        
        let recommendedLevel = 'Intermediate';
        let confidenceLevel = 'Medium';
        
        if (avgAccuracy < 50) {
            recommendedLevel = 'Beginner';
            confidenceLevel = 'Building';
        } else if (avgAccuracy < 70) {
            recommendedLevel = 'Intermediate';
            confidenceLevel = 'Developing';
        } else if (avgAccuracy < 85) {
            recommendedLevel = 'Advanced';
            confidenceLevel = 'Strong';
        } else {
            recommendedLevel = 'Expert';
            confidenceLevel = 'Mastery';
        }
        
        // Adjust based on recent performance trend
        if (trends.length > 5) {
            const recentAvg = trends.slice(-5).reduce((sum, t) => sum + t.accuracy, 0) / 5;
            if (recentAvg > avgAccuracy + 10) {
                // User is improving rapidly, can handle higher difficulty
                if (recommendedLevel === 'Beginner') recommendedLevel = 'Intermediate';
                else if (recommendedLevel === 'Intermediate') recommendedLevel = 'Advanced';
            }
        }
        
        return {
            recommendedLevel,
            confidenceLevel,
            avgAccuracy
        };
    }
    
    calculateOptimalCardCount(profile, options) {
        const baseCount = options.cardCount || 8;
        const avgAccuracy = this.calculateAverageAccuracy(profile);
        const sessionCount = profile.preferences?.accuracyTrends?.length || 0;
        
        // Adjust based on performance and experience
        let multiplier = 1;
        
        if (avgAccuracy < 60) {
            multiplier = 0.75; // Fewer cards for struggling students
        } else if (avgAccuracy > 85) {
            multiplier = 1.25; // More cards for advanced students
        }
        
        // Adjust based on experience
        if (sessionCount > 20) {
            multiplier += 0.25; // More cards for experienced users
        }
        
        return Math.round(baseCount * multiplier);
    }
    
    parseAICardResponse(aiResponse) {
        const cards = [];
        const lines = aiResponse.split('\n');
        
        let currentQuestion = '';
        let currentAnswer = '';
        let currentAlternatives = [];
        let currentExplanation = '';
        let currentSection = '';
        
        for (const line of lines) {
            const trimmedLine = line.trim();
            
            if (trimmedLine.startsWith('Q:')) {
                // Save previous card if we have both question and answer
                if (currentQuestion && currentAnswer) {
                    const card = {
                        id: Date.now() + Math.random(),
                        question: currentQuestion.trim(),
                        answer: currentAnswer.trim(),
                        questionText: currentQuestion.trim(),
                        answerText: currentAnswer.trim()
                    };
                    
                    // Add alternatives if available
                    if (currentAlternatives.length > 0) {
                        card.alternativeAnswers = currentAlternatives;
                    }
                    
                    // Add explanation if available
                    if (currentExplanation) {
                        card.explanation = currentExplanation.trim();
                        card.explanationText = currentExplanation.trim();
                    }
                    
                    cards.push(card);
                }
                
                // Start new question
                currentQuestion = trimmedLine.substring(2).trim();
                currentAnswer = '';
                currentAlternatives = [];
                currentExplanation = '';
                currentSection = 'question';
                
            } else if (trimmedLine.startsWith('A:')) {
                currentAnswer = trimmedLine.substring(2).trim();
                currentSection = 'answer';
                
            } else if (trimmedLine.startsWith('ALT:')) {
                const altAnswer = trimmedLine.substring(4).trim();
                if (altAnswer) {
                    currentAlternatives.push(altAnswer);
                }
                currentSection = 'alternative';
                
            } else if (trimmedLine.startsWith('EXP:')) {
                currentExplanation = trimmedLine.substring(4).trim();
                currentSection = 'explanation';
                
            } else if (trimmedLine && currentSection === 'question') {
                // Continue building question
                currentQuestion += ' ' + trimmedLine;
                
            } else if (trimmedLine && currentSection === 'answer') {
                // Continue building answer
                currentAnswer += ' ' + trimmedLine;
                
            } else if (trimmedLine && currentSection === 'explanation') {
                // Continue building explanation
                currentExplanation += ' ' + trimmedLine;
            }
        }
        
        // Don't forget the last card
        if (currentQuestion && currentAnswer) {
            const card = {
                id: Date.now() + Math.random(),
                question: currentQuestion.trim(),
                answer: currentAnswer.trim(),
                questionText: currentQuestion.trim(),
                answerText: currentAnswer.trim()
            };
            
            // Add alternatives if available
            if (currentAlternatives.length > 0) {
                card.alternativeAnswers = currentAlternatives;
            }
            
            // Add explanation if available
            if (currentExplanation) {
                card.explanation = currentExplanation.trim();
                card.explanationText = currentExplanation.trim();
            }
            
            cards.push(card);
        }
        
        // Fallback parsing if the above didn't work
        if (cards.length === 0) {
            const fallbackCards = this.fallbackCardParsing(aiResponse);
            cards.push(...fallbackCards);
        }
        
        console.log(`📝 Parsed ${cards.length} cards from AI response`);
        return cards;
    }
    
    fallbackCardParsing(aiResponse) {
        // Try to extract question-answer pairs using different patterns
        const cards = [];
        
        // Enhanced pattern to capture Q:, A:, ALT:, EXP: format
        const enhancedPattern = /(?:Question|Q):\s*(.+?)(?:Answer|A):\s*(.+?)(?=(?:Question|Q):|$)/gis;
        const matches = aiResponse.matchAll(enhancedPattern);
        
        for (const match of matches) {
            if (match[1] && match[2]) {
                const fullAnswer = match[2];
                const card = {
                    id: Date.now() + Math.random(),
                    question: match[1].trim().replace(/^(Question|Q):\s*/i, ''),
                    questionText: match[1].trim().replace(/^(Question|Q):\s*/i, ''),
                    answer: '',
                    answerText: '',
                    alternativeAnswers: [],
                    explanation: '',
                    explanationText: ''
                };
                
                // Parse the answer section for ALT and EXP
                const answerLines = fullAnswer.split('\n');
                let mainAnswer = '';
                let explanation = '';
                const alternatives = [];
                
                for (const line of answerLines) {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('ALT:')) {
                        alternatives.push(trimmedLine.substring(4).trim());
                    } else if (trimmedLine.startsWith('EXP:')) {
                        explanation = trimmedLine.substring(4).trim();
                    } else if (!trimmedLine.startsWith('ALT:') && !trimmedLine.startsWith('EXP:') && trimmedLine) {
                        if (!mainAnswer) {
                            mainAnswer = trimmedLine;
                        } else {
                            mainAnswer += ' ' + trimmedLine;
                        }
                    }
                }
                
                card.answer = mainAnswer.trim() || fullAnswer.trim();
                card.answerText = card.answer;
                
                if (alternatives.length > 0) {
                    card.alternativeAnswers = alternatives;
                }
                
                if (explanation) {
                    card.explanation = explanation;
                    card.explanationText = explanation;
                }
                
                cards.push(card);
            }
        }
        
        // If still no cards, try simpler patterns
        if (cards.length === 0) {
            const simplePatterns = [
                /(\d+\.\s*.+?)\n(.+?)(?=\d+\.|$)/gis,
                /(.+\?)\s*(.+?)(?=.+\?|$)/gis
            ];
            
            for (const pattern of simplePatterns) {
                const matches = aiResponse.matchAll(pattern);
                for (const match of matches) {
                    if (match[1] && match[2]) {
                        cards.push({
                            id: Date.now() + Math.random(),
                            question: match[1].trim(),
                            answer: match[2].trim(),
                            questionText: match[1].trim(),
                            answerText: match[2].trim()
                        });
                    }
                }
                if (cards.length > 0) break;
            }
        }
        
        return cards;
    }
    
    generateAIDeckTitle(profile, options) {
        const weaknesses = this.identifyTopWeaknesses(profile);
        const avgAccuracy = this.calculateAverageAccuracy(profile);
        
        if (options.subject) {
            if (avgAccuracy < 60) {
                return `${options.subject} - Remedial Practice`;
            } else if (avgAccuracy > 80) {
                return `${options.subject} - Advanced Challenge`;
            } else {
                return `${options.subject} - Skill Building`;
            }
        }
        
        if (weaknesses.length > 0) {
            return `Focus on ${weaknesses[0].subject} - Personalized Practice`;
        }
        
        const subject = this.determineSubjectFromProfile(profile);
        return `${subject} - AI Personalized Deck`;
    }
    
    determineSubjectFromProfile(profile) {
        if (!profile.preferences || !profile.preferences.favoriteSubjects) {
            return 'General Studies';
        }
        
        const subjects = Object.entries(profile.preferences.favoriteSubjects);
        if (subjects.length === 0) return 'General Studies';
        
        subjects.sort((a, b) => b[1] - a[1]); // Sort by frequency
        return subjects[0][0];
    }
    
    determineDifficultyFromProfile(profile) {
        const avgAccuracy = this.calculateAverageAccuracy(profile);
        
        if (avgAccuracy < 50) return 'Beginner';
        if (avgAccuracy < 70) return 'Intermediate';
        if (avgAccuracy < 85) return 'Advanced';
        return 'Expert';
    }
    
    calculateAverageAccuracy(profile) {
        if (!profile.preferences || !profile.preferences.accuracyTrends || profile.preferences.accuracyTrends.length === 0) {
            return 0;
        }
        
        const trends = profile.preferences.accuracyTrends;
        const sum = trends.reduce((total, trend) => total + trend.accuracy, 0);
        return Math.round(sum / trends.length);
    }
    
    identifyTopWeaknesses(profile) {
        if (!profile.weaknesses) return [];
        
        return Object.entries(profile.weaknesses)
            .map(([subject, count]) => ({
                subject,
                count,
                score: this.getSubjectAverageAccuracy(profile, subject)
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 3);
    }
    
    identifyTopStrengths(profile) {
        if (!profile.strengths) return [];
        
        return Object.entries(profile.strengths)
            .map(([subject, count]) => ({
                subject,
                count,
                score: this.getSubjectAverageAccuracy(profile, subject)
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 3);
    }
    
    getSubjectAverageAccuracy(profile, subject) {
        if (!profile.preferences || !profile.preferences.accuracyTrends) return 0;
        
        const subjectTrends = profile.preferences.accuracyTrends.filter(t => t.subject === subject);
        if (subjectTrends.length === 0) return 0;
        
        const sum = subjectTrends.reduce((total, trend) => total + trend.accuracy, 0);
        return Math.round(sum / subjectTrends.length);
    }
    
    calculateAIConfidence(profile) {
        const sessionCount = profile.preferences?.accuracyTrends?.length || 0;
        
        if (sessionCount < 3) return 'Low';
        if (sessionCount < 8) return 'Medium';
        if (sessionCount < 15) return 'High';
        return 'Very High';
    }
    
    saveGeneratedDeck(deck) {
        const generatedDecks = this.loadGeneratedDecks();
        generatedDecks.push(deck);
        localStorage.setItem('generated-decks', JSON.stringify(generatedDecks));
        
        // Trigger UI refresh
        if (this.currentView === 'decks') {
            this.showDecks();
        }
    }
    
    async getHuggingFaceResponse(prompt) {
        try {
            console.log('🤖 Sending request to Hugging Face AI...');
            
            const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 500,
                        temperature: 0.7,
                        top_p: 0.9,
                        do_sample: true
                    }
                })
            });
            
            if (!response.ok) {
                console.warn('Hugging Face API response not OK, trying alternative approach...');
                return this.getFallbackAIResponse(prompt);
            }
            
            const data = await response.json();
            console.log('✅ Received Hugging Face response:', data);
            
            if (data.generated_text || (data[0] && data[0].generated_text)) {
                return data.generated_text || data[0].generated_text;
            }
            
            // If no generated text, try fallback
            return this.getFallbackAIResponse(prompt);
            
        } catch (error) {
            console.error('❌ Hugging Face API error:', error);
            return this.getFallbackAIResponse(prompt);
        }
    }
    
    getFallbackAIResponse(prompt) {
        console.log('🔄 Using fallback AI response generation...');
        
        // Extract key information from prompt to generate relevant cards
        const subjectMatch = prompt.match(/focus on ([^.\n]+)/i);
        const subject = subjectMatch ? subjectMatch[1] : 'General Studies';
        
        const accuracyMatch = prompt.match(/Average accuracy: (\d+)%/);
        const accuracy = accuracyMatch ? parseInt(accuracyMatch[1]) : 60;
        
        // Generate cards based on accuracy level and subject
        const cards = [];
        const cardCount = 6;
        
        for (let i = 1; i <= cardCount; i++) {
            if (accuracy < 60) {
                // Remedial level cards
                cards.push(`Q: What is a fundamental concept in ${subject}?
A: This is a basic principle that forms the foundation of understanding in ${subject}.`);
            } else if (accuracy > 80) {
                // Advanced level cards
                cards.push(`Q: How would you apply advanced ${subject} concepts to solve complex problems?
A: Advanced applications require deep understanding and creative problem-solving approaches.`);
            } else {
                // Intermediate level cards
                cards.push(`Q: Explain an important ${subject} concept and its applications.
A: This concept is significant because it helps bridge basic understanding with practical applications.`);
            }
        }
        
        return cards.join('\n\n');
    }
    
    // =================== COMPREHENSIVE AI DECK GENERATION ===================
    
    buildComprehensiveDeckPrompt(options, profile) {
        const { subject, difficulty, cardCount } = options;
        
        // Get user statistics for personalized deck generation
        const overallAccuracy = profile.preferences.accuracyTrends?.length > 0 
            ? profile.preferences.accuracyTrends.reduce((sum, acc) => sum + acc, 0) / profile.preferences.accuracyTrends.length 
            : 75;
        const yearGroup = profile.preferences?.yearGroup || 'General';
        const subjects = Object.keys(profile.deckStats || {}).join(', ') || 'Mixed subjects';
        const timeSpent = Math.round((profile.totalTimeSpent || 0) / 60); // Convert to minutes
        
        return `You are a helpful school tutor that is helping to create a deck of flash cards using these fields: QUESTION FIELD, ANSWER FIELD, only put simple answers in ANSWER FIELD and other acceptable answers related to the question in MULTIPLE ANSWER FIELD(S), for detailed explanations, use this field: EXPLANATION FIELD, you can format questions and explanations using these options: **bold text**, __underline text__, ~~strikethrough text~~, subscript₂, superscript², <span style="color: #FF0000">colored text</span>, and <span style="background-color: #FFFF00">highlighted text</span>, please can you create ${cardCount} cards using those fields, format options and user statistics: ${overallAccuracy.toFixed(1)}% accuracy, ${timeSpent} minutes study time, ${yearGroup} year group, studying ${subjects}.

Subject: ${subject}
Difficulty Level: ${difficulty}
Number of Cards Required: ${cardCount}

FORMAT REQUIREMENTS:
Q: [Clear, specific question with formatting if helpful]
A: [Primary simple answer - keep it short and direct]
ALT: [Alternative acceptable answer 1] (if applicable)
ALT: [Alternative acceptable answer 2] (if applicable)  
EXP: [Detailed explanation with formatting to enhance learning - this should provide comprehensive understanding]

FORMATTING EXAMPLES:
- **Bold for emphasis**: **Important concept**
- __Underline for key terms__: __mitochondria__
- ~~Strikethrough for common mistakes~~: ~~incorrect assumption~~
- Subscript for chemistry: H₂O, CO₂
- Superscript for math: x², E=mc²
- <span style="color: #FF0000">Red for warnings or critical info</span>
- <span style="background-color: #FFFF00">Yellow highlight for key facts</span>

SAMPLE CARDS:
Q: What is the chemical formula for **water**?
A: H₂O
ALT: H2O
EXP: Water consists of __two hydrogen atoms__ and __one oxygen atom__ bonded together. The subscript numbers show how many of each atom: H₂O means 2 hydrogen + 1 oxygen. This is a **covalent compound** essential for all life.

Q: Solve: 3x + 5 = **14**
A: x = 3
ALT: 3
EXP: To solve this equation: **Step 1**: Subtract 5 from both sides → 3x = 9. **Step 2**: Divide both sides by 3 → x = 3. Always <span style="color: #FF0000">check your answer</span>: 3(3) + 5 = 9 + 5 = 14 ✓

Generate exactly ${cardCount} cards following this format, tailored to ${yearGroup} level students studying ${subject}.`;
    }
    
    generateTemplateBasedCards(options, count) {
        const { subject, difficulty } = options;
        const cards = [];
        
        // Get subject-specific templates
        const templates = this.getSubjectTemplates(subject);
        
        for (let i = 0; i < count; i++) {
            const template = templates[i % templates.length];
            const card = this.generateCardFromTemplate(template, difficulty, i + 1);
            cards.push(card);
        }
        
        return cards;
    }
    
    getSubjectTemplates(subject) {
        const subjectLower = subject.toLowerCase();
        
        if (subjectLower.includes('math') || subjectLower.includes('algebra')) {
            return [
                { type: 'algebra', template: 'Simplify: {a}x + {b}x', answer: '{sum}x', explanation: 'Add coefficients: {a} + {b} = {sum}, keep variable x' },
                { type: 'equation', template: 'Solve: x + {a} = {b}', answer: 'x = {diff}', explanation: 'Subtract {a} from both sides: x = {b} - {a} = {diff}' },
                { type: 'fraction', template: 'What is {a}/{b} + {c}/{d}?', answer: '{result}', explanation: 'Find common denominator and add numerators' },
                { type: 'geometry', template: 'Area of rectangle: length {l}, width {w}', answer: '{area}', explanation: 'Area = length × width = {l} × {w} = {area}' },
                { type: 'percentage', template: 'What is {percent}% of {number}?', answer: '{result}', explanation: 'Multiply: {number} × {percent}/100 = {result}' }
            ];
        } else if (subjectLower.includes('science') || subjectLower.includes('biology')) {
            return [
                { type: 'definition', template: 'What is photosynthesis?', answer: 'Plants making food from sunlight', explanation: 'Process where plants convert light energy into chemical energy (glucose)' },
                { type: 'process', template: 'What is respiration?', answer: 'Breaking down glucose for energy', explanation: 'Cellular process that releases energy from glucose: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy' },
                { type: 'structure', template: 'What controls cell activities?', answer: 'Nucleus', explanation: 'The nucleus contains DNA and controls all cell functions and reproduction' },
                { type: 'classification', template: 'What are mammals?', answer: 'Warm-blooded animals with hair', explanation: 'Vertebrates that regulate body temperature, have hair/fur, and feed milk to offspring' }
            ];
        } else if (subjectLower.includes('history')) {
            return [
                { type: 'date', template: 'When did World War II end?', answer: '1945', explanation: 'World War II ended on September 2, 1945, with Japan\'s surrender after atomic bombs' },
                { type: 'person', template: 'Who was the first US President?', answer: 'George Washington', explanation: 'George Washington (1732-1799) led the Continental Army and became first President (1789-1797)' },
                { type: 'event', template: 'What started the American Revolution?', answer: 'Boston Tea Party', explanation: 'Colonists dumped British tea in Boston Harbor (1773) to protest taxation without representation' }
            ];
        } else {
            return [
                { type: 'general', template: 'What is the main concept in {subject}?', answer: 'Core principle', explanation: 'This fundamental idea forms the basis of understanding in this subject area' },
                { type: 'application', template: 'How is {subject} used in real life?', answer: 'Practical applications', explanation: 'This subject has many real-world uses and applications in daily life and careers' }
            ];
        }
    }
    
    generateCardFromTemplate(template, difficulty, cardNumber) {
        const { type, template: questionTemplate, answer: answerTemplate, explanation: explanationTemplate } = template;
        
        // Generate random values for placeholders
        const values = this.generateTemplateValues(type, difficulty);
        
        // Replace placeholders in template
        let question = questionTemplate;
        let answer = answerTemplate;
        let explanation = explanationTemplate;
        
        Object.keys(values).forEach(key => {
            const placeholder = `{${key}}`;
            question = question.replace(new RegExp(placeholder, 'g'), values[key]);
            answer = answer.replace(new RegExp(placeholder, 'g'), values[key]);
            explanation = explanation.replace(new RegExp(placeholder, 'g'), values[key]);
        });
        
        return {
            front: question,
            back: answer,
            explanation: explanation,
            cardNumber: cardNumber,
            difficulty: difficulty,
            type: type
        };
    }
    
    generateTemplateValues(type, difficulty) {
        const values = {};
        
        switch (type) {
            case 'algebra':
                values.a = Math.floor(Math.random() * 10) + 1;
                values.b = Math.floor(Math.random() * 10) + 1;
                values.sum = values.a + values.b;
                break;
            case 'equation':
                values.a = Math.floor(Math.random() * 20) + 1;
                values.b = values.a + Math.floor(Math.random() * 20) + 1;
                values.diff = values.b - values.a;
                break;
            case 'geometry':
                values.l = Math.floor(Math.random() * 10) + 2;
                values.w = Math.floor(Math.random() * 8) + 2;
                values.area = values.l * values.w;
                break;
            case 'percentage':
                values.percent = [10, 20, 25, 50, 75][Math.floor(Math.random() * 5)];
                values.number = Math.floor(Math.random() * 100) + 10;
                values.result = (values.number * values.percent) / 100;
                break;
            default:
                values.subject = 'this topic';
                break;
        }
        
        return values;
    }
    
    parseAICardResponse(response, expectedCount = 20) {
        console.log('🔍 Parsing AI response for cards...');
        
        const cards = [];
        
        // Try multiple parsing methods
        
        // Method 1: Look for Q: ... | A: ... | E: ... format
        const formatMatches = response.match(/Q:\s*([^|]+)\s*\|\s*A:\s*([^|]+)\s*\|\s*E:\s*([^|Q]+)/gi);
        if (formatMatches) {
            formatMatches.forEach(match => {
                const parts = match.split('|');
                if (parts.length >= 3) {
                    const question = parts[0].replace(/^Q:\s*/i, '').trim();
                    const answer = parts[1].replace(/^A:\s*/i, '').trim();
                    const explanation = parts[2].replace(/^E:\s*/i, '').trim();
                    
                    if (question && answer) {
                        cards.push({
                            front: question,
                            back: answer,
                            explanation: explanation || 'Additional explanation for this concept.'
                        });
                    }
                }
            });
        }
        
        // Method 2: Look for Q: ... A: ... format (fallback)
        if (cards.length < expectedCount / 2) {
            const simpleMatches = response.match(/Q:\s*([^\n]+)\s*A:\s*([^\n]+)/gi);
            if (simpleMatches) {
                simpleMatches.forEach(match => {
                    const qMatch = match.match(/Q:\s*([^\n]+)/i);
                    const aMatch = match.match(/A:\s*([^\n]+)/i);
                    
                    if (qMatch && aMatch) {
                        const question = qMatch[1].trim();
                        const answer = aMatch[1].trim();
                        
                        // Don't add duplicates
                        if (!cards.some(card => card.front === question)) {
                            cards.push({
                                front: question,
                                back: answer,
                                explanation: `This answer relates to the concept being tested in the question.`
                            });
                        }
                    }
                });
            }
        }
        
        console.log(`✅ Parsed ${cards.length} cards from AI response`);
        return cards.slice(0, expectedCount); // Limit to expected count
    }
    
    generateDeckTitleCards(options) {
        const { subject, difficulty } = options;
        
        return [
            {
                title: `📚 ${subject} Study Deck`,
                content: `Welcome to your AI-generated ${subject} study deck! This deck contains carefully crafted questions to help you master key concepts.`,
                type: 'intro'
            },
            {
                title: `🎯 Learning Objectives`,
                content: `By completing this deck, you will:
• Understand core ${subject} concepts
• Practice problem-solving skills
• Build confidence in ${difficulty} level material
• Prepare for assessments and exams`,
                type: 'objectives'
            },
            {
                title: `💡 Study Tips`,
                content: `For best results:
• Read each question carefully
• Think through your answer before revealing
• Pay attention to explanations
• Review incorrect answers
• Practice regularly for retention`,
                type: 'tips'
            }
        ];
    }
    
    generateComprehensiveDeckTitle(options) {
        const { subject, difficulty, cardCount } = options;
        const difficultyEmoji = {
            'beginner': '🌱',
            'intermediate': '📈',
            'advanced': '🚀',
            'expert': '🎯'
        };
        
        return `${difficultyEmoji[difficulty] || '📚'} ${subject} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} (${cardCount} Cards)`;
    }
    
    // =================== END COMPREHENSIVE AI GENERATION ===================
    
    flipCard() {
        const flipCard = document.getElementById('flip-card');
        const cardAnswer = document.getElementById('card-answer');
        const answerResult = document.getElementById('answer-result');
        
        if (!flipCard || !cardAnswer || !answerResult) return;
        
        // Set the answer on the back of the card
        const currentCard = this.currentAnswerResult.currentCard;
        cardAnswer.innerHTML = currentCard.answer || currentCard.answerText;
        
        // Set the explanation if available
        const cardExplanation = document.getElementById('card-explanation');
        if (cardExplanation) {
            if (currentCard.explanation && currentCard.explanationText) {
                cardExplanation.innerHTML = currentCard.explanation;
                cardExplanation.style.display = 'block';
            } else {
                cardExplanation.innerHTML = '';
                cardExplanation.style.display = 'none';
            }
        }
        
        // Show result (correct/incorrect)
        const isCorrect = this.currentAnswerResult.isCorrect;
        const answerResultData = this.currentAnswerResult.answerResult;
        
        if (isCorrect) {
            let resultText = '✅ Correct! Well done!';
            
            // Add coin reward
            const difficulty = this.currentDeck.difficulty || 'Intermediate';
            const streakCount = this.getCorrectStreakCount();
            const responseTime = Date.now() - this.sessionStartTime;
            const coinReward = this.calculateCoinReward(difficulty, streakCount, responseTime);
            
            resultText += ` (+${coinReward} 💰)`;
            answerResult.innerHTML = resultText;
            answerResult.className = 'answer-result correct';
            
            // Award coins
            this.earnCoins(coinReward, 'Correct answer!');
            this.incrementStreak();
            
        } else {
            let resultText = '❌ Incorrect - Better luck next time!';
            if (answerResultData.reason === 'close') {
                resultText = '❌ Close! You were on the right track.';
            } else if (answerResultData.reason === 'dont_know') {
                resultText = '💭 No worries! Learning is a process.';
            }
            
            // Add coin penalty
            const difficulty = this.currentDeck.difficulty || 'Intermediate';
            const coinPenalty = this.calculateCoinPenalty(difficulty);
            
            if (coinPenalty > 0) {
                resultText += ` (-${coinPenalty} 💰)`;
                this.loseCoins(coinPenalty, 'Incorrect answer');
            }
            
            answerResult.innerHTML = resultText;
            answerResult.className = 'answer-result incorrect';
            this.resetStreak();
        }
        
        // Add flipped class to trigger animation
        flipCard.classList.add('flipped');
        
        // Clear input
        document.getElementById('answer-input').value = '';
    }
    
    continueToNext() {
        const flipCard = document.getElementById('flip-card');
        if (!flipCard) return;
        
        const isCorrect = this.currentAnswerResult.isCorrect;
        const currentCard = this.currentAnswerResult.currentCard;
        const cardIndex = this.currentAnswerResult.cardIndex;
        
        if (isCorrect) {
            // Track unique card completion
            const cardOriginalIndex = currentCard.originalIndex;
            if (cardOriginalIndex !== undefined && !this.completedCards.has(cardOriginalIndex)) {
                this.completedCards.add(cardOriginalIndex);
                this.score = this.completedCards.size;
            }
            
            // Remove correct card from deck
            this.currentCards.splice(this.currentCardIndex, 1);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        } else {
            // For adaptive learning: keep difficult cards in rotation longer
            const incorrectCard = this.currentCards.splice(this.currentCardIndex, 1)[0];
            
            // Add the card back multiple times based on difficulty
            const cardData = this.getCardLearningData(this.currentDeck.id, cardIndex);
            const repetitions = Math.min(3, Math.ceil(cardData.difficultyScore));
            
            for (let i = 0; i < repetitions; i++) {
                // Insert at random positions in the latter half of the deck
                const insertPos = Math.floor(this.currentCards.length * 0.5) + 
                                Math.floor(Math.random() * Math.ceil(this.currentCards.length * 0.5));
                this.currentCards.splice(insertPos, 0, { ...incorrectCard });
            }
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        }

        // Remove flipped class and update display
        flipCard.classList.remove('flipped');
        
        // Update display with next card or finish study
        if (this.currentCards.length === 0) {
            this.finishStudy();
        } else {
            setTimeout(() => {
                this.displayCard();
                this.sessionStartTime = Date.now(); // Reset timer for next card
            }, 300); // Small delay for smooth transition
        }
    }
    
    // Alias for compatibility
    displayCard() {
        this.showCurrentCard();
    }
}

// All global functions are now defined at the top of the file

// ========================= AUTHENTICATION SYSTEM =========================

// User session management
let currentUser = null;
let userDatabase = {}; // Simple user database

// Load user database from localStorage
function loadUserDatabase() {
    const savedDatabase = localStorage.getItem('userDatabase');
    userDatabase = savedDatabase ? JSON.parse(savedDatabase) : {};
}

// Save user database to localStorage
function saveUserDatabase() {
    localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
}

// Check if username exists
function usernameExists(username) {
    return userDatabase.hasOwnProperty(username.toLowerCase());
}

// Test function to create a sample user (for debugging)
// Close account settings modal
window.closeAccountSettings = function() {
    const accountSettingsOverlay = document.getElementById('account-settings-overlay');
    if (accountSettingsOverlay) {
        accountSettingsOverlay.style.display = 'none';
    }
};

// Global functions for profile management
window.saveProfile = function() {
    if (!currentUser) {
        showNotification('Please sign in first', 'error');
        return;
    }
    
    const displayName = document.getElementById('display-name').value.trim();
    const title = document.getElementById('profile-title').value;
    const bio = document.getElementById('profile-bio').value.trim();
    const selectedColor = document.querySelector('.color-option.selected')?.dataset.color || 'blue';
    
    // Update current user data
    currentUser.displayName = displayName || currentUser.username;
    currentUser.profileData = {
        displayName: displayName || currentUser.username,
        title: title,
        bio: bio,
        profileColor: selectedColor,
        profilePicture: currentUser.profileData?.profilePicture || null
    };
    
    // Update database
    const userKey = currentUser.username.toLowerCase();
    if (userDatabase[userKey]) {
        userDatabase[userKey].displayName = currentUser.displayName;
        userDatabase[userKey].profileData = currentUser.profileData;
        saveUserDatabase();
    }
    
    // Update localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    updateAccountButton();
    showNotification('Profile updated successfully!', 'success');
};

window.removeProfilePicture = function() {
    if (!currentUser) return;
    
    const preview = document.getElementById('profile-pic-preview');
    const initial = document.getElementById('profile-initial-large');
    
    if (preview && initial) {
        preview.style.display = 'none';
        initial.style.display = 'flex';
    }
    
    // Update user data
    if (currentUser.profileData) {
        currentUser.profileData.profilePicture = null;
    }
    
    showNotification('Profile picture removed', 'success');
};

window.changePassword = function() {
    showNotification('Password change functionality coming soon!', 'info');
};

window.deleteAccount = function() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        if (currentUser) {
            const userKey = currentUser.username.toLowerCase();
            delete userDatabase[userKey];
            saveUserDatabase();
            
            // Sign out
            handleSignOut();
            showNotification('Account deleted successfully', 'success');
        }
    }
};

window.exportData = function() {
    showNotification('Data export functionality coming soon!', 'info');
};

window.importData = function() {
    showNotification('Data import functionality coming soon!', 'info');
};

window.syncData = function() {
    showNotification('Data sync functionality coming soon!', 'info');
};



// Test function to test registration (for debugging)
window.testRegistration = function() {
    console.log('Testing registration form...');
    
    // Switch to register tab and show account view
    showView('account');
    setTimeout(() => {
        switchAuthTab('register');
        
        // Fill out the registration form programmatically
        const usernameInput = document.getElementById('register-username');
        const emailInput = document.getElementById('register-email');
        const passwordInput = document.getElementById('register-password');
        const confirmPasswordInput = document.getElementById('register-password-confirm');
        const termsCheckbox = document.getElementById('agree-terms');
        
        if (usernameInput) usernameInput.value = 'TestUser' + Math.floor(Math.random() * 1000);
        if (emailInput) emailInput.value = 'test@example.com';
        if (passwordInput) passwordInput.value = 'password123';
        if (confirmPasswordInput) confirmPasswordInput.value = 'password123';
        if (termsCheckbox) termsCheckbox.checked = true;
        
        console.log('Form filled with test data - ready to click Create Account');
    }, 100);
    
    return 'Registration form ready for testing';
};

window.createTestUser = function() {
    const testUser = {
        username: 'TestUser',
        displayName: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        joinDate: new Date().toISOString(),
        studySessions: 0,
        preferences: {
            theme: 'light',
            autoPlay: false,
            studyMode: 'cards',
            notifications: true
        },
        profileData: {
            displayName: 'Test User',
            title: '',
            bio: 'This is a test user account',
            profileColor: 'blue',
            profilePicture: null
        }
    };
    
    // Save to database
    userDatabase['testuser'] = testUser;
    saveUserDatabase();
    
    // Set as current user
    currentUser = {
        username: testUser.username,
        displayName: testUser.displayName,
        email: testUser.email,
        joinDate: testUser.joinDate,
        totalDecks: app ? app.decks.length : 0,
        studySessions: testUser.studySessions,
        preferences: testUser.preferences,
        profileData: testUser.profileData
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAccountButton();
    
    console.log('Test user created and signed in:', currentUser);
    return currentUser;
};



function setupAuthEventListeners() {
    // Account button click
    const accountBtn = document.getElementById('account-btn');
    if (accountBtn) {
        accountBtn.addEventListener('click', toggleAccountSection);
    }
    
    // Auth tabs
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            switchAuthTab(e.target.dataset.tab);
        });
    });
    
    // Settings tabs
    const settingsTabs = document.querySelectorAll('.settings-tab');
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            switchSettingsTab(e.target.dataset.tab);
        });
    });
    
    // Form submissions
    const signInForm = document.getElementById('signin-form-element');
    const registerForm = document.getElementById('register-form-element');
    
    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    } else {
        console.error('Sign in form not found');
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    } else {
        console.error('Register form not found');
    }
    
    // Account settings forms
    setupSettingsHandlers();
}

// Toggle account section visibility
function toggleAccountSection() {
    if (currentUser) {
        // User is signed in, show account settings modal
        showAccountSettings();
    } else {
        // User is not signed in, show the account view with auth forms
        showView('account');
    }
}

// Switch between auth tabs (signin/register)
function switchAuthTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Show corresponding form
    document.querySelectorAll('.auth-form').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(`${tabName}-form`).style.display = 'block';
}

// Switch between settings tabs
function switchSettingsTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.settings-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Show corresponding content
    document.querySelectorAll('.settings-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Handle sign in
async function handleSignIn(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const username = formData.get('username').trim();
    const password = formData.get('password');
    const rememberMe = formData.get('remember') === 'on';
    
    // Validation
    if (!username || !password) {
        showNotification('Please enter both username and password', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.auth-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-loading">Signing in...</span>';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await simulateAuthRequest();
        
        // Check if user exists and password matches
        const userKey = username.toLowerCase();
        if (!userDatabase[userKey]) {
            throw new Error('Username not found. Please register first.');
        }
        
        if (userDatabase[userKey].password !== password) {
            throw new Error('Incorrect password. Please try again.');
        }
        
        // Get user data
        const userData = userDatabase[userKey];
        const user = {
            username: userData.username,
            displayName: userData.displayName || userData.username,
            email: userData.email,
            joinDate: userData.joinDate,
            totalDecks: app ? app.decks.length : 0,
            studySessions: userData.studySessions || 0,
            preferences: userData.preferences || {
                theme: localStorage.getItem('theme') || 'light',
                autoPlay: false,
                studyMode: 'cards',
                notifications: true
            },
            profileData: userData.profileData || {}
        };
        
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        if (rememberMe) {
            localStorage.setItem('rememberUser', 'true');
        }
        
        // Special handling for developer account
        if (username.toLowerCase() === 'aquacheese') {
            // Enable developer title
            const devOption = document.getElementById('dev-title-option');
            if (devOption) {
                devOption.style.display = 'block';
            }
            
            // Auto-set developer title if not already set
            if (!user.profileData.title) {
                user.profileData.title = '👑 Developer';
                userDatabase[userKey].profileData = user.profileData;
                saveUserDatabase();
            }
        }
        
        updateAccountButton();
        showAccountSettings();
        
        // Profile display removed for cleaner interface
        
        showNotification(`Welcome back, ${user.displayName || user.username}!`, 'success');
        
    } catch (error) {
        console.error('Sign in error:', error);
        showNotification(error.message || 'Sign in failed. Please try again.', 'error');
    } finally {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Handle registration
async function handleRegister(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const username = formData.get('username').trim();
    const email = formData.get('email').trim();
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const agreeTerms = formData.get('terms') === 'on';
    
    // Validation
    if (!username || !email || !password || !confirmPassword) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (username.length < 3) {
        showNotification('Username must be at least 3 characters long', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showNotification('Please agree to the terms and conditions.', 'error');
        return;
    }
    
    // Check if username already exists
    if (usernameExists(username)) {
        showNotification('Username already taken. Please choose a different one.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.auth-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-loading">Creating account...</span>';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await simulateAuthRequest();
        
        // Create user account
        const joinDate = new Date().toISOString();
        const userData = {
            username: username,
            displayName: username, // Default display name to username
            email: email,
            password: password, // In real app, this would be hashed
            joinDate: joinDate,
            studySessions: 0,
            preferences: {
                theme: localStorage.getItem('theme') || 'light',
                autoPlay: false,
                studyMode: 'cards',
                notifications: true
            },
            profileData: {
                displayName: username,
                title: '',
                bio: '',
                profileColor: 'blue',
                profilePicture: null
            }
        };
        
        // Save to database
        userDatabase[username.toLowerCase()] = userData;
        saveUserDatabase();
        
        // Create current user session
        const user = {
            username: username,
            displayName: username,
            email: email,
            joinDate: joinDate,
            totalDecks: app ? app.decks.length : 0,
            studySessions: 0,
            preferences: userData.preferences,
            profileData: userData.profileData
        };
        
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        updateAccountButton();
        showAccountSettings();
        
        // Load profile settings into form
        if (typeof loadProfileSettingsIntoForm === 'function') {
            loadProfileSettingsIntoForm();
        }
        
        // Profile display removed for cleaner interface
        
        showNotification(`Welcome to FlashCards, ${username}!`, 'success');
        
    } catch (error) {
        console.error('Registration error:', error);
        showNotification('Registration failed. Please try again.', 'error');
    } finally {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Update account button based on login state
function updateAccountButton() {
    const accountBtn = document.getElementById('account-btn');
    if (!accountBtn) {
        console.log('Account button not found');
        return;
    }
    
    console.log('Updating account button, currentUser:', currentUser);
    
    if (currentUser) {
        const displayName = currentUser.displayName || currentUser.username || 'User';
        console.log('Setting account button to show user:', displayName);
        accountBtn.innerHTML = `
            <span class="account-icon">👤</span>
            <span class="account-text">${displayName}</span>
        `;
        accountBtn.title = `Signed in as ${displayName}`;
    } else {
        console.log('Setting account button to show Account (no user)');
        accountBtn.innerHTML = `
            <span class="account-icon">👤</span>
            <span class="account-text">Account</span>
        `;
        accountBtn.title = 'Sign in or create account';
    }
}

// Show authentication forms
function showAuthForms() {
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('account-settings').style.display = 'none';
}

// Show account settings
function showAccountSettings() {
    if (!currentUser) {
        showAuthForms();
        return;
    }
    
    console.log('Showing account settings for user:', currentUser);
    
    // Show account settings modal overlay
    const accountSettingsOverlay = document.getElementById('account-settings-overlay');
    const accountSettings = document.getElementById('account-settings');
    
    if (accountSettingsOverlay) {
        accountSettingsOverlay.style.display = 'flex';
        console.log('Account settings modal overlay shown');
    } else {
        console.error('Account settings modal overlay not found');
        return;
    }
    
    // Update user info in the header
    const displayName = currentUser.displayName || currentUser.username || 'User';
    const userDisplayName = document.getElementById('user-display-name');
    const userJoinDate = document.getElementById('user-join-date');
    const userLevelDisplay = document.getElementById('user-level-display');
    const userTotalCoins = document.getElementById('user-total-coins');
    const settingsAvatarInitial = document.getElementById('settings-avatar-initial');
    
    if (userDisplayName) userDisplayName.textContent = displayName;
    if (userJoinDate) userJoinDate.textContent = `Joined ${new Date(currentUser.joinDate).toLocaleDateString()}`;
    if (userLevelDisplay) userLevelDisplay.textContent = `Level ${calculateLevelFromXP(getUserXP())}`;
    if (userTotalCoins) userTotalCoins.textContent = `${app?.coins || 0} coins`;
    if (settingsAvatarInitial) settingsAvatarInitial.textContent = displayName.charAt(0).toUpperCase();
    
    // Profile display removed for cleaner interface
    
    // Load preferences
    if (typeof loadUserPreferences === 'function') {
        loadUserPreferences();
    }
}

// Update data statistics
function updateDataStats() {
    if (!app) return;
    
    const totalDecks = app.decks.length;
    const totalCards = app.decks.reduce((sum, deck) => sum + deck.cards.length, 0);
    const studySessions = currentUser.studySessions || 0;
    
    document.getElementById('total-decks').textContent = totalDecks;
    document.getElementById('total-cards').textContent = totalCards;
    document.getElementById('study-sessions').textContent = studySessions;
    document.getElementById('data-size').textContent = `${Math.round((JSON.stringify(app.decks).length + JSON.stringify(currentUser).length) / 1024)} KB`;
}

// Load user preferences into settings
function loadUserPreferences() {
    if (!currentUser.preferences) return;
    
    const prefs = currentUser.preferences;
    
    // Theme preference
    const themeSelect = document.getElementById('theme-preference');
    if (themeSelect) {
        themeSelect.value = prefs.theme || 'light';
    }
    
    // Other preferences
    const autoPlayCheck = document.getElementById('auto-play');
    if (autoPlayCheck) {
        autoPlayCheck.checked = prefs.autoPlay || false;
    }
    
    const studyModeSelect = document.getElementById('study-mode');
    if (studyModeSelect) {
        studyModeSelect.value = prefs.studyMode || 'cards';
    }
    
    const notificationsCheck = document.getElementById('notifications');
    if (notificationsCheck) {
        notificationsCheck.checked = prefs.notifications !== false;
    }
}

// Setup settings form handlers
function setupSettingsHandlers() {
    // Theme change
    const themeSelect = document.getElementById('theme-preference');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            const newTheme = e.target.value;
            document.body.className = newTheme + '-theme';
            localStorage.setItem('theme', newTheme);
            
            if (currentUser) {
                currentUser.preferences.theme = newTheme;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
            
            showNotification('Theme updated!', 'success');
        });
    }
    
    // Profile color selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // Bio character count
    const bioTextarea = document.getElementById('profile-bio');
    const bioCount = document.getElementById('bio-count');
    if (bioTextarea && bioCount) {
        bioTextarea.addEventListener('input', () => {
            bioCount.textContent = bioTextarea.value.length;
        });
    }
    
    // Profile picture upload
    const profilePicUpload = document.getElementById('profile-pic-upload');
    if (profilePicUpload) {
        profilePicUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const preview = document.getElementById('profile-pic-preview');
                    const initial = document.getElementById('profile-initial-large');
                    
                    if (preview && initial) {
                        preview.src = e.target.result;
                        preview.style.display = 'block';
                        initial.style.display = 'none';
                    }
                    
                    // Update user data
                    if (currentUser && currentUser.profileData) {
                        currentUser.profileData.profilePicture = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Sign out button
    const signOutBtn = document.getElementById('sign-out-btn');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', handleSignOut);
    }
    
    // Export data
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportUserData);
    }
    
    // Delete account
    const deleteBtn = document.getElementById('delete-account-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', handleDeleteAccount);
    }
}

// Handle sign out
function handleSignOut() {
    if (!currentUser) {
        return;
    }
    
    if (confirm('Are you sure you want to sign out?')) {
        // Clear current user data
        currentUser = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberUser');
        
        // Update UI to show signed out state
        updateAccountButton();
        
        // Hide account settings if open
        const accountSettingsOverlay = document.getElementById('account-settings-overlay');
        if (accountSettingsOverlay) {
            accountSettingsOverlay.style.display = 'none';
        }
        
        const accountSection = document.getElementById('account-section');
        if (accountSection) {
            accountSection.style.display = 'none';
        }
        
        // Reset profile display elements
        const profileAvatar = document.querySelector('.profile-avatar');
        if (profileAvatar) {
            profileAvatar.textContent = '👤';
            profileAvatar.style.backgroundImage = '';
        }
        
        // Clear any profile form data
        const displayNameInput = document.getElementById('displayName');
        const bioInput = document.getElementById('bio');
        const profileColorSelect = document.getElementById('profileColor');
        
        if (displayNameInput) displayNameInput.value = '';
        if (bioInput) bioInput.value = '';
        if (profileColorSelect) profileColorSelect.value = 'blue';
        
        // Reset title display
        const titleSelect = document.getElementById('titleSelect');
        if (titleSelect) {
            titleSelect.value = '';
            // Remove developer option if it exists
            const developerOption = titleSelect.querySelector('option[value="Developer"]');
            if (developerOption) {
                developerOption.remove();
            }
        }
        
        showNotification('Successfully signed out!', 'success');
    }
}

// Export user data
function exportUserData() {
    const userData = {
        user: currentUser,
        decks: app ? app.decks : [],
        settings: {
            theme: localStorage.getItem('theme'),
            powerUps: JSON.parse(localStorage.getItem('powerUps') || '{}')
        },
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `flashcards-data-${currentUser.username}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    showNotification('Data exported successfully!', 'success');
}

// Handle account deletion
function handleDeleteAccount() {
    const confirmText = prompt('This will permanently delete your account and all data. Type "DELETE" to confirm:');
    
    if (confirmText === 'DELETE') {
        // Clear all user data
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberUser');
        localStorage.removeItem('decks');
        localStorage.removeItem('powerUps');
        
        currentUser = null;
        
        // Reset app
        if (app) {
            app.decks = [];
            app.saveDecks();
        }
        
        updateAccountButton();
        document.getElementById('account-section').style.display = 'none';
        showNotification('Account deleted successfully.', 'success');
        
        // Reload page to reset everything
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

// Simulate authentication request (replace with actual API calls)
function simulateAuthRequest() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000 + Math.random() * 1000);
    });
}

// ========================= LEVEL & XP SYSTEM =========================

// XP and Level Management
let userXP = 0;
let userLevel = 1;
let userProfile = {};

// XP Values for different actions
const XP_VALUES = {
    correctAnswer: 10,
    wrongAnswer: 2, // Small XP for effort
    deckCompletion: 50,
    perfectCompletion: 100,
    streakBonus: 5, // per streak level
    createDeck: 25,
    studySession: 15,
    dailyLogin: 20,
    achievementUnlock: 100
};

// Level thresholds (XP required for each level)
const LEVEL_THRESHOLDS = [
    0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700, 3250, // Levels 1-11
    3850, 4500, 5200, 5950, 6750, 7600, 8500, 9450, 10450, 11500, // Levels 12-21
    12600, 13750, 14950, 16200, 17500, 18850, 20250, 21700, 23200, 24750, // Levels 22-31
    26350, 28000, 29700, 31450, 33250, 35100, 37000, 38950, 40950, 43000, // Levels 32-41
    45100, 47250, 49450, 51700, 54000, 56350, 58750, 61200, 63700, 66250, // Levels 42-51
    68850, 71500, 74200, 76950, 79750, 82600, 85500, 88450, 91450, 94500, // Levels 52-61
    97600, 100750, 103950, 107200, 110500, 113850, 117250, 120700, 124200, 127750, // Levels 62-71
    131350, 135000, 138700, 142450, 146250, 150100, 154000, 157950, 161950, 166000, // Levels 72-81
    170100, 174250, 178450, 182700, 187000, 191350, 195750, 200200, 204700, 209250, // Levels 82-91
    213850, 218500, 223200, 227950, 232750, 237600, 242500, 247450, 252450, 257500 // Levels 92-101
];

// Achievement definitions
const ACHIEVEMENTS = {
    firstStep: { icon: '👶', name: 'First Steps', desc: 'Answer your first question', xp: 0, unlocked: false },
    streak5: { icon: '🔥', name: 'On Fire', desc: 'Get 5 answers in a row', xp: 25, unlocked: false },
    streak10: { icon: '🌡️', name: 'Hot Streak', desc: 'Get 10 answers in a row', xp: 50, unlocked: false },
    streak25: { icon: '💥', name: 'Unstoppable', desc: 'Get 25 answers in a row', xp: 100, unlocked: false },
    perfectDeck: { icon: '💯', name: 'Perfectionist', desc: 'Complete a deck with 100% accuracy', xp: 50, unlocked: false },
    speed10: { icon: '⚡', name: 'Lightning Fast', desc: 'Answer 10 questions in under 30 seconds', xp: 75, unlocked: false },
    creator: { icon: '📚', name: 'Deck Creator', desc: 'Create your first deck', xp: 25, unlocked: false },
    prolific: { icon: '📖', name: 'Prolific Creator', desc: 'Create 10 decks', xp: 100, unlocked: false },
    scholar: { icon: '🎓', name: 'Scholar', desc: 'Reach level 10', xp: 100, unlocked: false },
    master: { icon: '👑', name: 'Master Student', desc: 'Reach level 25', xp: 250, unlocked: false },
    legend: { icon: '🏆', name: 'Legend', desc: 'Reach level 50', xp: 500, unlocked: false },
    coinCollector: { icon: '💰', name: 'Coin Collector', desc: 'Earn 1000 coins', xp: 50, unlocked: false },
    wealthy: { icon: '💎', name: 'Wealthy', desc: 'Earn 5000 coins', xp: 150, unlocked: false },
    millionaire: { icon: '🏦', name: 'Millionaire', desc: 'Earn 10000 coins', xp: 300, unlocked: false }
};

// Initialize XP and Profile system
function initializeXPSystem() {
    loadUserXP();
    loadUserProfile();
    setupProfileEventListeners();
    updateLevelDisplay();
    updateAchievements();
    
    // Make sure functions are globally accessible
    window.initializeXPSystem = initializeXPSystem;
    window.loadUserXP = loadUserXP;
    window.updateLevelDisplay = updateLevelDisplay;
    window.userXP = userXP;
    window.userLevel = userLevel;
    window.LEVEL_THRESHOLDS = LEVEL_THRESHOLDS;
    window.getXPForNextLevel = getXPForNextLevel;
    
    console.log('Level system globals set:', { userLevel, userXP });
    
    // For testing: if user has no XP, give them some starting XP to see the system work
    if (userXP === 0) {
        // Give 50 XP as a welcome bonus
        userXP = 50;
        userLevel = calculateLevelFromXP(userXP);
        saveUserXP();
        saveUserLevel();
        console.log('Applied welcome bonus: 50 XP');
    }
    
    // Force update the display after initialization
    setTimeout(() => {
        updateLevelDisplay();
    }, 200);
    
    // Add debug function for testing
    window.testLevelSystem = function() {
        console.log('Testing level system...');
        awardXP(25, 'Test XP');
        updateLevelDisplay();
    };
    
    window.resetLevelSystem = function() {
        userXP = 0;
        userLevel = 1;
        saveUserXP();
        saveUserLevel();
        updateLevelDisplay();
        console.log('Level system reset');
    };
}

// Load user XP and level from storage
function loadUserXP() {
    const savedXP = localStorage.getItem('userXP');
    const savedLevel = localStorage.getItem('userLevel');
    
    userXP = savedXP ? parseInt(savedXP) : 0;
    userLevel = savedLevel ? parseInt(savedLevel) : 1;
    
    // Recalculate level based on XP (in case thresholds changed)
    const calculatedLevel = calculateLevelFromXP(userXP);
    if (calculatedLevel !== userLevel) {
        userLevel = calculatedLevel;
        saveUserLevel();
    }
}

// Load user profile from storage
function loadUserProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    userProfile = savedProfile ? JSON.parse(savedProfile) : {
        displayName: '',
        title: '',
        bio: '',
        profileColor: 'blue',
        profilePicture: null,
        achievements: { ...ACHIEVEMENTS }
    };
    
    // Merge with default achievements if new ones were added
    userProfile.achievements = { ...ACHIEVEMENTS, ...userProfile.achievements };
}

// Save user XP and level
function saveUserXP() {
    localStorage.setItem('userXP', userXP.toString());
    // Auto-update level display when XP changes
    if (typeof immediatelyUpdateLevelDisplay === 'function') {
        setTimeout(() => {
            immediatelyUpdateLevelDisplay();
        }, 50);
    }
}

function saveUserLevel() {
    localStorage.setItem('userLevel', userLevel.toString());
    // Auto-update level display when level changes
    if (typeof immediatelyUpdateLevelDisplay === 'function') {
        setTimeout(() => {
            immediatelyUpdateLevelDisplay();
        }, 50);
    }
}

function saveUserProfile() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

// Calculate level from XP
function calculateLevelFromXP(xp) {
    for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
        if (xp >= LEVEL_THRESHOLDS[i]) {
            return i + 1;
        }
    }
    return 1;
}

// Get current user XP
function getUserXP() {
    return userXP || 0;
}

// Get XP required for next level
function getXPForNextLevel(level) {
    return LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
}

// Award XP for actions
function awardXP(amount, reason = 'Great job!') {
    const previousLevel = userLevel;
    userXP += amount;
    userLevel = calculateLevelFromXP(userXP);
    
    saveUserXP();
    saveUserLevel();
    
    // Show XP gain animation
    showXPGain(amount, reason);
    
    // Check for level up
    if (userLevel > previousLevel) {
        handleLevelUp(previousLevel, userLevel);
    }
    
    // Update displays
    updateLevelDisplay();
    updateAchievements();
    
    // Also call our working immediate update function
    if (typeof immediatelyUpdateLevelDisplay === 'function') {
        immediatelyUpdateLevelDisplay();
    }
    
    console.log(`🌟 Gained ${amount} XP! Total: ${userXP} (Level ${userLevel}) - ${reason}`);
}

// ========================= LEVELING & UNLOCKS SYSTEM =========================

// Define unlockable content by level
const LEVEL_UNLOCKS = {
    1: {
        themes: ['classic'],
        cardStyles: ['standard'],
        colors: ['blue', 'green'],
        powerUps: [],
        titles: ['Beginner']
    },
    2: {
        colors: ['red'],
        titles: ['Student']
    },
    3: {
        colors: ['purple'],
        powerUps: ['hints']
    },
    5: {
        themes: ['dark'],
        cardStyles: ['modern'],
        titles: ['Scholar']
    },
    7: {
        colors: ['orange', 'pink'],
        powerUps: ['skipCards']
    },
    10: {
        themes: ['neon'],
        cardStyles: ['animated'],
        titles: ['Dedicated Learner'],
        features: ['statistics']
    },
    15: {
        colors: ['gold', 'silver'],
        powerUps: ['doubleCoins'],
        titles: ['Knowledge Seeker']
    },
    20: {
        themes: ['galaxy', 'forest'],
        cardStyles: ['gradient'],
        titles: ['Wisdom Gatherer']
    },
    25: {
        powerUps: ['streakShields'],
        titles: ['Master Student'],
        features: ['advanced_stats']
    },
    30: {
        themes: ['ocean', 'sunset'],
        cardStyles: ['holographic'],
        titles: ['Learning Expert']
    },
    40: {
        colors: ['rainbow', 'cosmic'],
        titles: ['Study Legend']
    },
    50: {
        themes: ['legendary'],
        cardStyles: ['legendary'],
        titles: ['Ultimate Scholar'],
        features: ['all']
    }
};

// Available themes, colors, and styles
const CUSTOMIZATION_OPTIONS = {
    themes: {
        classic: { name: 'Classic', desc: 'The original clean look', colors: ['#667eea', '#764ba2'] },
        dark: { name: 'Dark Mode', desc: 'Easy on the eyes', colors: ['#2c3e50', '#34495e'] },
        neon: { name: 'Neon Lights', desc: 'Bright and energetic', colors: ['#ff006e', '#8338ec'] },
        galaxy: { name: 'Galaxy', desc: 'Cosmic and mysterious', colors: ['#000428', '#004e92'] },
        forest: { name: 'Forest', desc: 'Natural and calming', colors: ['#134e5e', '#71b280'] },
        ocean: { name: 'Ocean Depths', desc: 'Deep blue serenity', colors: ['#2e3192', '#1bffff'] },
        sunset: { name: 'Sunset Glow', desc: 'Warm and inviting', colors: ['#ff7e5f', '#feb47b'] },
        legendary: { name: 'Legendary', desc: 'For true masters only', colors: ['#ffd700', '#ff6b35'] }
    },
    cardStyles: {
        standard: { name: 'Standard', desc: 'Clean and simple' },
        modern: { name: 'Modern', desc: 'Sleek with subtle shadows' },
        animated: { name: 'Animated', desc: 'Cards with smooth animations' },
        gradient: { name: 'Gradient', desc: 'Beautiful gradient backgrounds' },
        holographic: { name: 'Holographic', desc: 'Shimmering holographic effect' },
        legendary: { name: 'Legendary', desc: 'The ultimate card style' }
    },
    colors: {
        blue: { name: 'Ocean Blue', hex: '#3182ce' },
        green: { name: 'Forest Green', hex: '#38a169' },
        red: { name: 'Crimson Red', hex: '#e53e3e' },
        purple: { name: 'Royal Purple', hex: '#805ad5' },
        orange: { name: 'Sunset Orange', hex: '#dd6b20' },
        pink: { name: 'Cherry Blossom', hex: '#d53f8c' },
        gold: { name: 'Golden Glory', hex: '#d69e2e' },
        silver: { name: 'Silver Shine', hex: '#718096' },
        rainbow: { name: 'Rainbow Magic', hex: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)' },
        cosmic: { name: 'Cosmic Energy', hex: 'linear-gradient(45deg, #667eea, #764ba2, #ff006e)' }
    },
    titles: {
        'Beginner': { desc: 'Just starting the journey' },
        'Student': { desc: 'Eager to learn' },
        'Scholar': { desc: 'Dedicated to knowledge' },
        'Dedicated Learner': { desc: 'Never stops studying' },
        'Knowledge Seeker': { desc: 'Always hungry for more' },
        'Wisdom Gatherer': { desc: 'Collecting insights' },
        'Master Student': { desc: 'Mastered the art of learning' },
        'Learning Expert': { desc: 'Expert in the field of learning' },
        'Study Legend': { desc: 'A legendary student' },
        'Ultimate Scholar': { desc: 'The pinnacle of academic achievement' }
    }
};

// Get unlocked content for user's current level
function getUnlockedContent() {
    const unlocked = {
        themes: [],
        cardStyles: [],
        colors: [],
        powerUps: [],
        titles: [],
        features: []
    };
    
    // Go through each level up to user's current level
    for (let level = 1; level <= userLevel; level++) {
        const levelUnlocks = LEVEL_UNLOCKS[level];
        if (levelUnlocks) {
            Object.keys(levelUnlocks).forEach(category => {
                if (unlocked[category]) {
                    unlocked[category].push(...levelUnlocks[category]);
                }
            });
        }
    }
    
    return unlocked;
}

// Update level display in header
function updateLevelDisplay() {
    const levelElement = document.getElementById('user-level');
    const xpElement = document.getElementById('user-xp');
    const progressElement = document.getElementById('xp-progress');
    
    console.log('updateLevelDisplay called with:', { userLevel, userXP });
    
    if (levelElement) {
        levelElement.textContent = userLevel;
        console.log('Updated level element to:', userLevel);
    }
    
    if (xpElement) {
        const nextLevelXP = getXPForNextLevel(userLevel);
        const currentLevelXP = userLevel > 1 ? LEVEL_THRESHOLDS[userLevel - 1] : 0;
        const progressXP = userXP - currentLevelXP;
        const neededXP = nextLevelXP - currentLevelXP;
        
        // Update compact display text (remove "XP" to save space)
        xpElement.textContent = `${Math.max(0, progressXP)}/${neededXP}`;
        console.log('Updated XP text to:', `${Math.max(0, progressXP)}/${neededXP}`);
        
        if (progressElement) {
            const percentage = Math.max(0, Math.min(100, (progressXP / neededXP) * 100));
            progressElement.style.width = `${percentage}%`;
            console.log('Updated progress bar to:', `${percentage}%`);
        }
    }
}

// Update level display in header
function updateLevelDisplay() {
    const levelElement = document.getElementById('user-level');
    const xpElement = document.getElementById('user-xp');
    const progressElement = document.getElementById('xp-progress');
    
    console.log('updateLevelDisplay called with:', { userLevel, userXP });
    
    if (levelElement) {
        levelElement.textContent = userLevel;
        console.log('Updated level element to:', userLevel);
    }
    
    if (xpElement) {
        const nextLevelXP = getXPForNextLevel(userLevel);
        const currentLevelXP = userLevel > 1 ? LEVEL_THRESHOLDS[userLevel - 1] : 0;
        const progressXP = userXP - currentLevelXP;
        const neededXP = nextLevelXP - currentLevelXP;
        
        // Update compact display text (remove "XP" to save space)
        xpElement.textContent = `${Math.max(0, progressXP)}/${neededXP}`;
        console.log('Updated XP text to:', `${Math.max(0, progressXP)}/${neededXP}`);
        
        if (progressElement) {
            const percentage = Math.max(0, Math.min(100, (progressXP / neededXP) * 100));
            progressElement.style.width = `${percentage}%`;
            console.log('Updated progress bar to:', `${percentage}%`);
        }
    }
}

// Show XP gain animation
function showXPGain(amount, reason) {
    const xpGain = document.createElement('div');
    xpGain.className = 'xp-gain-animation';
    xpGain.innerHTML = `
        <div class="xp-popup">
            <div class="xp-amount">+${amount} XP</div>
            <div class="xp-reason">${reason}</div>
        </div>
    `;
    
    document.body.appendChild(xpGain);
    
    // Remove after animation
    setTimeout(() => {
        if (xpGain.parentNode) {
            xpGain.parentNode.removeChild(xpGain);
        }
    }, 3000);
}

// Show level up modal with unlocks
function showLevelUpModal(oldLevel, newLevel, unlocks) {
    const modal = document.createElement('div');
    modal.className = 'level-up-modal';
    
    let unlocksHTML = '';
    Object.entries(unlocks).forEach(([category, items]) => {
        if (items && items.length > 0) {
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            unlocksHTML += `
                <div class="unlock-category">
                    <h4>${categoryName} Unlocked:</h4>
                    <div class="unlock-items">
                        ${items.map(item => `
                            <div class="unlock-item">
                                ${getUnlockItemDisplay(category, item)}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    modal.innerHTML = `
        <div class="level-up-content">
            <div class="level-up-header">
                <h2>🎉 Level Up!</h2>
                <div class="level-change">
                    <span class="old-level">${oldLevel}</span>
                    <span class="arrow">→</span>
                    <span class="new-level">${newLevel}</span>
                </div>
            </div>
            <div class="level-up-unlocks">
                ${unlocksHTML}
            </div>
            <div class="level-up-actions">
                <button class="btn btn-primary" onclick="closeLevelUpModal()">Awesome!</button>
                <button class="btn btn-secondary" onclick="showView('shop')">Visit Shop</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 10000);
}

// Show basic level up notification
function showBasicLevelUpNotification(oldLevel, newLevel) {
    const notification = document.createElement('div');
    notification.className = 'level-up-notification';
    notification.innerHTML = `
        <div class="level-up-simple">
            <h3>🎉 Level Up!</h3>
            <div class="level-change">Level ${oldLevel} → ${newLevel}</div>
            <p>Keep studying to unlock more features!</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

// Helper function to display unlock items
function getUnlockItemDisplay(category, item) {
    switch (category) {
        case 'themes':
            const theme = CUSTOMIZATION_OPTIONS.themes[item];
            return `<span class="theme-unlock">${theme ? theme.name : item}</span>`;
        case 'cardStyles':
            const style = CUSTOMIZATION_OPTIONS.cardStyles[item];
            return `<span class="style-unlock">${style ? style.name : item}</span>`;
        case 'colors':
            const color = CUSTOMIZATION_OPTIONS.colors[item];
            return `<span class="color-unlock" style="color: ${color ? color.hex : '#333'}">${color ? color.name : item}</span>`;
        case 'powerUps':
            return `<span class="powerup-unlock">${item.charAt(0).toUpperCase() + item.slice(1)}</span>`;
        case 'titles':
            return `<span class="title-unlock">"${item}"</span>`;
        case 'features':
            return `<span class="feature-unlock">${item.replace('_', ' ').toUpperCase()}</span>`;
        default:
            return `<span>${item}</span>`;
    }
}

// Global functions for modal interactions
window.closeLevelUpModal = function() {
    const modal = document.querySelector('.level-up-modal');
    if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
    }
};

window.showLevelInfo = function() {
    if (app && app.showLevelInfo) {
        app.showLevelInfo();
    }
};

window.openCustomization = function() {
    window.closeLevelUpModal();
    showCustomizationPanel();
};

// Show customization panel
function showCustomizationPanel() {
    const unlocked = getUnlockedContent();
    const nextUnlocks = getNextUnlocks();
    
    const modal = document.createElement('div');
    modal.className = 'customization-modal';
    
    modal.innerHTML = `
        <div class="customization-content">
            <div class="customization-header">
                <h2>🎨 Customization</h2>
                <button class="close-btn" onclick="closeCustomizationPanel()">×</button>
            </div>
            
            <div class="customization-sections">
                <div class="customization-section">
                    <h3>🎭 Themes</h3>
                    <div class="customization-options">
                        ${Object.entries(CUSTOMIZATION_OPTIONS.themes).map(([key, theme]) => {
                            const isUnlocked = unlocked.themes.includes(key);
                            return `
                                <div class="customization-option ${isUnlocked ? 'unlocked' : 'locked'}" 
                                     data-type="theme" data-value="${key}">
                                    <div class="option-preview" style="background: linear-gradient(45deg, ${theme.colors[0]}, ${theme.colors[1]})"></div>
                                    <div class="option-info">
                                        <div class="option-name">${theme.name}</div>
                                        <div class="option-desc">${theme.desc}</div>
                                        ${!isUnlocked ? '<div class="option-locked">🔒 Locked</div>' : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="customization-section">
                    <h3>🎴 Card Styles</h3>
                    <div class="customization-options">
                        ${Object.entries(CUSTOMIZATION_OPTIONS.cardStyles).map(([key, style]) => {
                            const isUnlocked = unlocked.cardStyles.includes(key);
                            return `
                                <div class="customization-option ${isUnlocked ? 'unlocked' : 'locked'}" 
                                     data-type="cardStyle" data-value="${key}">
                                    <div class="option-preview card-style-preview ${key}"></div>
                                    <div class="option-info">
                                        <div class="option-name">${style.name}</div>
                                        <div class="option-desc">${style.desc}</div>
                                        ${!isUnlocked ? '<div class="option-locked">🔒 Locked</div>' : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="customization-section">
                    <h3>🌈 Colors</h3>
                    <div class="customization-options colors-grid">
                        ${Object.entries(CUSTOMIZATION_OPTIONS.colors).map(([key, color]) => {
                            const isUnlocked = unlocked.colors.includes(key);
                            return `
                                <div class="customization-option color-option ${isUnlocked ? 'unlocked' : 'locked'}" 
                                     data-type="color" data-value="${key}">
                                    <div class="color-preview" style="background: ${color.hex}"></div>
                                    <div class="color-name">${color.name}</div>
                                    ${!isUnlocked ? '<div class="option-locked">🔒</div>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="customization-section">
                    <h3>🏆 Titles</h3>
                    <div class="customization-options">
                        ${Object.entries(CUSTOMIZATION_OPTIONS.titles).map(([key, title]) => {
                            const isUnlocked = unlocked.titles.includes(key);
                            return `
                                <div class="customization-option title-option ${isUnlocked ? 'unlocked' : 'locked'}" 
                                     data-type="title" data-value="${key}">
                                    <div class="option-info">
                                        <div class="option-name">"${key}"</div>
                                        <div class="option-desc">${title.desc}</div>
                                        ${!isUnlocked ? '<div class="option-locked">🔒 Locked</div>' : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <div class="next-unlocks">
                <h3>🔮 Coming Soon</h3>
                <div class="unlock-previews">
                    ${nextUnlocks.slice(0, 3).map(preview => `
                        <div class="unlock-preview">
                            <div class="unlock-level">Level ${preview.level}</div>
                            <div class="unlock-items">
                                ${Object.entries(preview.unlocks).map(([category, items]) => 
                                    items.length > 0 ? `<span class="unlock-item">${items.join(', ')}</span>` : ''
                                ).filter(Boolean).join(' • ')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners for customization options
    setupCustomizationListeners();
}

// Setup customization option listeners
function setupCustomizationListeners() {
    document.querySelectorAll('.customization-option.unlocked').forEach(option => {
        option.addEventListener('click', () => {
            const type = option.dataset.type;
            const value = option.dataset.value;
            applyCustomization(type, value);
            
            // Update selection visuals
            document.querySelectorAll(`[data-type="${type}"]`).forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

// Apply customization
function applyCustomization(type, value) {
    switch (type) {
        case 'theme':
            applyTheme(value);
            break;
        case 'cardStyle':
            applyCardStyle(value);
            break;
        case 'color':
            applyColor(value);
            break;
        case 'title':
            applyTitle(value);
            break;
    }
    
    // Save customization
    saveCustomization(type, value);
}

// Save customization to localStorage
function saveCustomization(type, value) {
    const customizations = JSON.parse(localStorage.getItem('user-customizations') || '{}');
    customizations[type] = value;
    localStorage.setItem('user-customizations', JSON.stringify(customizations));
}

// Load and apply saved customizations
function loadCustomizations() {
    const customizations = JSON.parse(localStorage.getItem('user-customizations') || '{}');
    
    Object.entries(customizations).forEach(([type, value]) => {
        applyCustomization(type, value);
    });
}

// Apply theme
function applyTheme(theme) {
    const themeData = CUSTOMIZATION_OPTIONS.themes[theme];
    if (themeData) {
        document.documentElement.style.setProperty('--primary-gradient', `linear-gradient(45deg, ${themeData.colors[0]}, ${themeData.colors[1]})`);
        document.body.className = `theme-${theme}`;
    }
}

// Apply card style
function applyCardStyle(style) {
    document.body.classList.remove('card-standard', 'card-modern', 'card-animated', 'card-gradient', 'card-holographic', 'card-legendary');
    document.body.classList.add(`card-${style}`);
}

// Apply color
function applyColor(color) {
    const colorData = CUSTOMIZATION_OPTIONS.colors[color];
    if (colorData) {
        document.documentElement.style.setProperty('--accent-color', colorData.hex);
    }
}

// Apply title
function applyTitle(title) {
    const titleElement = document.getElementById('user-title');
    if (titleElement) {
        titleElement.textContent = title;
    }
}

// Close customization panel
window.closeCustomizationPanel = function() {
    const modal = document.querySelector('.customization-modal');
    if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
    }
};

// Handle level up
function handleLevelUp(oldLevel, newLevel) {
    // Play level up animation
    const levelBadge = document.getElementById('user-level');
    if (levelBadge) {
        levelBadge.parentElement.classList.add('level-up-animation');
        setTimeout(() => {
            levelBadge.parentElement.classList.remove('level-up-animation');
        }, 600);
    }
    
    // Show notification
    showNotification(`🎉 Level Up! You reached Level ${newLevel}!`, 'success');
    
    // Award bonus XP for level up
    const bonusXP = newLevel * 10;
    setTimeout(() => {
        awardXP(bonusXP, `Level ${newLevel} bonus!`);
    }, 1000);
    
    // Check for level-based achievements
    checkLevelAchievements(newLevel);
}

// Show XP gain animation
function showXPGain(amount, reason) {
    const popup = document.createElement('div');
    popup.className = 'xp-gain-popup';
    popup.textContent = `+${amount} XP`;
    popup.title = reason;
    
    // Position near level display
    const levelDisplay = document.querySelector('.level-display');
    if (levelDisplay) {
        const rect = levelDisplay.getBoundingClientRect();
        popup.style.left = `${rect.right - 100}px`;
        popup.style.top = `${rect.top + 10}px`;
    } else {
        popup.style.left = '50%';
        popup.style.top = '20%';
        popup.style.transform = 'translateX(-50%)';
    }
    
    document.body.appendChild(popup);
    
    // Remove after animation
    setTimeout(() => {
        if (popup.parentNode) {
            popup.parentNode.removeChild(popup);
        }
    }, 2000);
}

// Update level display
function updateLevelDisplay() {
    const levelElement = document.getElementById('user-level');
    const currentXPElement = document.getElementById('current-xp');
    const nextLevelXPElement = document.getElementById('next-level-xp');
    const xpProgressBar = document.getElementById('xp-progress-bar');
    
    if (levelElement) {
        levelElement.textContent = userLevel;
    }
    
    if (currentXPElement && nextLevelXPElement && xpProgressBar) {
        const currentLevelXP = LEVEL_THRESHOLDS[userLevel - 1] || 0;
        const nextLevelXP = LEVEL_THRESHOLDS[userLevel] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
        const xpInCurrentLevel = userXP - currentLevelXP;
        const xpNeededForNextLevel = nextLevelXP - currentLevelXP;
        const progressPercent = Math.min((xpInCurrentLevel / xpNeededForNextLevel) * 100, 100);
        
        currentXPElement.textContent = xpInCurrentLevel;
        nextLevelXPElement.textContent = xpNeededForNextLevel;
        xpProgressBar.style.width = `${progressPercent}%`;
    }
}

// Setup profile event listeners
function setupProfileEventListeners() {
    // Profile picture upload
    const profilePicUpload = document.getElementById('profile-pic-upload');
    if (profilePicUpload) {
        profilePicUpload.addEventListener('change', handleProfilePictureUpload);
    }
    
    // Bio character counter
    const profileBio = document.getElementById('profile-bio');
    const bioCount = document.getElementById('bio-count');
    if (profileBio && bioCount) {
        profileBio.addEventListener('input', (e) => {
            bioCount.textContent = e.target.value.length;
        });
    }
    
    // Color picker
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            // Remove previous selection
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selection to clicked option
            e.target.classList.add('selected');
            
            // Update profile color
            const color = e.target.dataset.color;
            userProfile.profileColor = color;
            updateAvatarColor(color);
        });
    });
}

// Handle profile picture upload
function handleProfilePictureUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        showNotification('Profile picture must be less than 2MB', 'error');
        return;
    }
    
    // Check file type
    if (!file.type.startsWith('image/')) {
        showNotification('Please select an image file', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const imageData = e.target.result;
        userProfile.profilePicture = imageData;
        
        // Update preview
        const preview = document.getElementById('profile-pic-preview');
        const initial = document.getElementById('profile-initial-large');
        
        if (preview && initial) {
            preview.src = imageData;
            preview.style.display = 'block';
            initial.style.display = 'none';
        }
        
        showNotification('Profile picture updated!', 'success');
    };
    
    reader.readAsDataURL(file);
}

// Remove profile picture
function removeProfilePicture() {
    userProfile.profilePicture = null;
    
    const preview = document.getElementById('profile-pic-preview');
    const initial = document.getElementById('profile-initial-large');
    
    if (preview && initial) {
        preview.style.display = 'none';
        initial.style.display = 'flex';
    }
    
    showNotification('Profile picture removed', 'success');
}

// Update avatar color
function updateAvatarColor(color) {
    const colorMap = {
        blue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        green: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        purple: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        red: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        orange: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        pink: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        teal: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
        indigo: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
    };
    
    const avatar = document.getElementById('profile-avatar-large');
    if (avatar && colorMap[color]) {
        avatar.style.background = colorMap[color];
    }
}

// Save profile settings
function saveProfileSettings() {
    // Get form values
    const displayName = document.getElementById('display-name').value.trim();
    const title = document.getElementById('profile-title').value;
    const bio = document.getElementById('profile-bio').value.trim();
    
    // Validation
    if (displayName.length > 30) {
        showNotification('Display name must be 30 characters or less', 'error');
        return;
    }
    
    if (bio.length > 200) {
        showNotification('Bio must be 200 characters or less', 'error');
        return;
    }
    
    // Update profile
    userProfile.displayName = displayName;
    userProfile.title = title;
    userProfile.bio = bio;
    
    saveUserProfile();
    updateProfileDisplay();
    showNotification('Profile settings saved!', 'success');
}

// Reset profile settings
function resetProfileSettings() {
    if (confirm('Are you sure you want to reset your profile to default settings?')) {
        userProfile = {
            displayName: '',
            title: '',
            bio: '',
            profileColor: 'blue',
            profilePicture: null,
            achievements: userProfile.achievements // Keep achievements
        };
        
        saveUserProfile();
        loadProfileSettingsIntoForm();
        updateProfileDisplay();
        showNotification('Profile reset to defaults', 'success');
    }
}

// Load profile settings into form
function loadProfileSettingsIntoForm() {
    const displayNameInput = document.getElementById('display-name');
    const titleSelect = document.getElementById('profile-title');
    const bioTextarea = document.getElementById('profile-bio');
    const bioCount = document.getElementById('bio-count');
    
    if (displayNameInput && currentUser) {
        displayNameInput.value = (currentUser.profileData && currentUser.profileData.displayName) || currentUser.displayName || currentUser.username || '';
    }
    
    // Add developer option if user is AquaCheese
    if (titleSelect && currentUser && currentUser.username === 'AquaCheese') {
        const developerOption = titleSelect.querySelector('option[value="Developer"]');
        if (!developerOption) {
            const option = document.createElement('option');
            option.value = 'Developer';
            option.textContent = 'Developer';
            titleSelect.appendChild(option);
        }
    }
    
    if (titleSelect && currentUser && currentUser.profileData) {
        titleSelect.value = currentUser.profileData.title || '';
    }
    
    if (bioTextarea && currentUser && currentUser.profileData) {
        bioTextarea.value = currentUser.profileData.bio || '';
        if (bioCount) bioCount.textContent = (currentUser.profileData.bio || '').length;
    }
    
    // Set color selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.classList.toggle('selected', option.dataset.color === userProfile.profileColor);
    });
    
    // Update avatar
    updateAvatarColor(userProfile.profileColor);
    
    // Load profile picture
    if (userProfile.profilePicture) {
        const preview = document.getElementById('profile-pic-preview');
        const initial = document.getElementById('profile-initial-large');
        
        if (preview && initial) {
            preview.src = userProfile.profilePicture;
            preview.style.display = 'block';
            initial.style.display = 'none';
        }
    }
}

// Update profile stats display
function updateProfileDisplay() {
    // Update stats
    const coinsElement = document.getElementById('profile-coins');
    const joinDateElement = document.getElementById('profile-join-date');
    const totalDecksElement = document.getElementById('profile-total-decks');
    const accuracyElement = document.getElementById('profile-accuracy');
    
    if (coinsElement && app) {
        coinsElement.textContent = app.coins.toLocaleString();
    }
    
    if (joinDateElement && currentUser) {
        const joinDate = new Date(currentUser.joinDate);
        joinDateElement.textContent = joinDate.toLocaleDateString();
    }
    
    if (totalDecksElement && app) {
        totalDecksElement.textContent = app.decks.length;
    }
    
    if (accuracyElement) {
        const accuracy = calculateUserAccuracy();
        accuracyElement.textContent = `${accuracy}%`;
    }
    
    // Update avatar initial
    const initialElement = document.getElementById('profile-initial-large');
    if (initialElement && currentUser) {
        const displayName = userProfile.displayName || currentUser.username;
        initialElement.textContent = displayName.charAt(0).toUpperCase();
    }
}

// Update achievements display
function updateAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;
    
    achievementsGrid.innerHTML = '';
    
    Object.entries(userProfile.achievements).forEach(([key, achievement]) => {
        const achievementDiv = document.createElement('div');
        achievementDiv.className = `achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`;
        
        achievementDiv.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
            ${achievement.progress !== undefined ? `
                <div class="achievement-progress">
                    <div class="achievement-progress-fill" style="width: ${Math.min(achievement.progress, 100)}%"></div>
                </div>
            ` : ''}
        `;
        
        achievementsGrid.appendChild(achievementDiv);
    });
}

// Check for new achievements
function checkAchievements(action, data = {}) {
    let newAchievements = [];
    
    switch (action) {
        case 'firstAnswer':
            if (!userProfile.achievements.firstStep.unlocked) {
                unlockAchievement('firstStep');
                newAchievements.push('firstStep');
            }
            break;
            
        case 'streak':
            const streak = data.streak || 0;
            // Check all streak achievements (not else if, so all can be unlocked)
            if (streak >= 5 && !userProfile.achievements.streak5.unlocked) {
                unlockAchievement('streak5');
                newAchievements.push('streak5');
            }
            if (streak >= 10 && !userProfile.achievements.streak10.unlocked) {
                unlockAchievement('streak10');
                newAchievements.push('streak10');
            }
            if (streak >= 25 && !userProfile.achievements.streak25.unlocked) {
                unlockAchievement('streak25');
                newAchievements.push('streak25');
            }
            break;
            
        case 'perfectDeck':
            if (!userProfile.achievements.perfectDeck.unlocked) {
                unlockAchievement('perfectDeck');
                newAchievements.push('perfectDeck');
            }
            break;
            
        case 'createDeck':
            const totalDecks = data.totalDecks || 0;
            if (!userProfile.achievements.creator.unlocked) {
                unlockAchievement('creator');
                newAchievements.push('creator');
            }
            if (totalDecks >= 10 && !userProfile.achievements.prolific.unlocked) {
                unlockAchievement('prolific');
                newAchievements.push('prolific');
            }
            break;
            
        case 'coinsEarned':
            const totalCoins = data.totalCoins || 0;
            // Check all coin achievements (not else if, so all can be unlocked)
            if (totalCoins >= 1000 && !userProfile.achievements.coinCollector.unlocked) {
                unlockAchievement('coinCollector');
                newAchievements.push('coinCollector');
            }
            if (totalCoins >= 5000 && !userProfile.achievements.wealthy.unlocked) {
                unlockAchievement('wealthy');
                newAchievements.push('wealthy');
            }
            if (totalCoins >= 10000 && !userProfile.achievements.millionaire.unlocked) {
                unlockAchievement('millionaire');
                newAchievements.push('millionaire');
            }
            break;
            
        case 'speedAnswering':
            const timePerQuestion = data.timePerQuestion || 0;
            if (timePerQuestion <= 3 && data.questionCount >= 10 && !userProfile.achievements.speed10.unlocked) {
                unlockAchievement('speed10');
                newAchievements.push('speed10');
            }
            break;
    }
    
    return newAchievements;
}

// Check level-based achievements
function checkLevelAchievements(level) {
    let newAchievements = [];
    
    // Check all level achievements (not else if, so all can be unlocked)
    if (level >= 10 && !userProfile.achievements.scholar.unlocked) {
        unlockAchievement('scholar');
        newAchievements.push('scholar');
    }
    if (level >= 25 && !userProfile.achievements.master.unlocked) {
        unlockAchievement('master');
        newAchievements.push('master');
    }
    if (level >= 50 && !userProfile.achievements.legend.unlocked) {
        unlockAchievement('legend');
        newAchievements.push('legend');
    }
    
    return newAchievements;
}

// Unlock achievement
function unlockAchievement(achievementKey) {
    if (userProfile.achievements[achievementKey]) {
        userProfile.achievements[achievementKey].unlocked = true;
        saveUserProfile();
        
        const achievement = userProfile.achievements[achievementKey];
        showNotification(`🏆 Achievement Unlocked: ${achievement.name}!`, 'success');
        
        // Award bonus XP
        if (achievement.xp > 0) {
            setTimeout(() => {
                awardXP(achievement.xp, `Achievement: ${achievement.name}`);
            }, 500);
        }
        
        updateAchievements();
    }
}

// ========================= LEADERBOARD SYSTEM =========================

// Leaderboard data and management
let leaderboardData = {};
let currentLeaderboard = 'coins';
let userStats = null;

// Initialize leaderboard system
function initializeLeaderboard() {
    setupLeaderboardEventListeners();
    generateRealLeaderboardData();
    updateUserStats();
    switchLeaderboard('coins');
}

// Setup leaderboard event listeners
function setupLeaderboardEventListeners() {
    // Leaderboard tab switching
    const leaderboardTabs = document.querySelectorAll('.leaderboard-tab');
    leaderboardTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            switchLeaderboard(e.target.dataset.board);
        });
    });
}

// Switch between different leaderboards
function switchLeaderboard(boardType) {
    currentLeaderboard = boardType;
    
    // Update tab buttons
    document.querySelectorAll('.leaderboard-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-board="${boardType}"]`).classList.add('active');
    
    // Show corresponding leaderboard
    document.querySelectorAll('.leaderboard-list').forEach(list => {
        list.classList.remove('active');
    });
    document.getElementById(`${boardType}-leaderboard`).classList.add('active');
    
    // Update current user rank display
    updateCurrentUserRank(boardType);
    
    // Load leaderboard data
    loadLeaderboardData(boardType);
}

// Generate sample leaderboard data (replace with actual API calls)
function generateRealLeaderboardData() {
    const realUsers = [];
    
    // Get all registered users from the database
    Object.keys(userDatabase).forEach(username => {
        const user = userDatabase[username];
        const userData = {
            username: user.displayName || user.username,
            coins: 100, // Default starting coins
            accuracy: 85.0, // Default accuracy
            studyTime: 0,
            streak: 0,
            decks: 0,
            cards: 0,
            isCurrentUser: false
        };
        
        // If this is the current user, get their actual stats
        if (currentUser && user.username === currentUser.username) {
            userData.coins = app ? app.coins : 100;
            userData.accuracy = calculateUserAccuracy();
            userData.studyTime = calculateUserStudyTime();
            userData.streak = calculateUserStreak();
            userData.decks = app ? app.decks.length : 0;
            userData.cards = calculateMasteredCards();
            userData.isCurrentUser = true;
            userStats = userData;
        }
        
        realUsers.push(userData);
    });
    
    // If no users are registered yet, just show current user if logged in
    if (realUsers.length === 0 && currentUser) {
        userStats = {
            username: currentUser.displayName || currentUser.username,
            coins: app ? app.coins : 100,
            accuracy: calculateUserAccuracy(),
            studyTime: calculateUserStudyTime(),
            streak: calculateUserStreak(),
            decks: app ? app.decks.length : 0,
            cards: calculateMasteredCards(),
            isCurrentUser: true
        };
        realUsers.push(userStats);
    }
    
    // Sort and organize data by different criteria
    leaderboardData = {
        coins: [...realUsers].sort((a, b) => b.coins - a.coins),
        accuracy: [...realUsers].sort((a, b) => b.accuracy - a.accuracy),
        studytime: [...realUsers].sort((a, b) => b.studyTime - a.studyTime),
        streak: [...realUsers].sort((a, b) => b.streak - a.streak),
        decks: [...realUsers].sort((a, b) => b.decks - a.decks),
        cards: [...realUsers].sort((a, b) => b.cards - a.cards)
    };
}

// Calculate user statistics
function calculateUserAccuracy() {
    if (!app || !app.decks.length) return 85.0 + Math.random() * 10;
    
    let totalAnswers = 0;
    let correctAnswers = 0;
    
    app.decks.forEach(deck => {
        deck.cards.forEach(card => {
            if (card.stats) {
                totalAnswers += card.stats.attempts || 0;
                correctAnswers += card.stats.correct || 0;
            }
        });
    });
    
    return totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100 * 10) / 10 : 85.0;
}

function calculateUserStudyTime() {
    // Simulate study time based on deck usage
    const baseTime = app ? app.decks.length * 5.2 : 0;
    const randomTime = Math.random() * 30;
    return Math.round((baseTime + randomTime) * 10) / 10;
}

function calculateUserStreak() {
    // Get current or best streak from app data
    if (app && app.currentStreak !== undefined) {
        return Math.max(app.currentStreak, app.bestStreak || 0);
    }
    return Math.floor(Math.random() * 50) + 10;
}

function calculateMasteredCards() {
    if (!app || !app.decks.length) return 0;
    
    let masteredCount = 0;
    app.decks.forEach(deck => {
        deck.cards.forEach(card => {
            if (card.stats && card.stats.mastery > 0.8) {
                masteredCount++;
            }
        });
    });
    
    return masteredCount;
}

// Update current user rank display
function updateCurrentUserRank(boardType) {
    const rankDisplay = document.getElementById('user-current-rank');
    const nameDisplay = document.getElementById('user-rank-name');
    const scoreDisplay = document.getElementById('user-rank-score');
    const progressText = document.getElementById('rank-progress-text');
    const progressFill = document.getElementById('rank-progress-fill');
    
    if (!currentUser || !userStats) {
        rankDisplay.textContent = '-';
        nameDisplay.textContent = 'Sign in to compete!';
        scoreDisplay.textContent = '';
        progressText.textContent = 'Sign in to see your progress';
        progressFill.style.width = '0%';
        return;
    }
    
    const leaderboard = leaderboardData[boardType];
    const userRank = leaderboard.findIndex(user => user.isCurrentUser) + 1;
    const userScore = getUserScore(userStats, boardType);
    const scoreUnit = getScoreUnit(boardType);
    
    rankDisplay.textContent = userRank || '-';
    nameDisplay.textContent = currentUser.username;
    scoreDisplay.textContent = `${userScore}${scoreUnit}`;
    
    // Calculate progress to next rank
    if (userRank > 1) {
        const nextUser = leaderboard[userRank - 2];
        const nextScore = getUserScore(nextUser, boardType);
        const progressPercent = Math.min((userScore / nextScore) * 100, 100);
        
        progressText.textContent = `${nextScore - userScore}${scoreUnit} to rank #${userRank - 1}`;
        progressFill.style.width = `${progressPercent}%`;
    } else {
        progressText.textContent = 'You\'re #1! 👑';
        progressFill.style.width = '100%';
    }
}

// Get user score for specific leaderboard type
function getUserScore(user, boardType) {
    switch (boardType) {
        case 'coins': return user.coins;
        case 'accuracy': return user.accuracy;
        case 'studytime': return user.studyTime;
        case 'streak': return user.streak;
        case 'decks': return user.decks;
        case 'cards': return user.cards;
        default: return 0;
    }
}

// Get score unit for display
function getScoreUnit(boardType) {
    switch (boardType) {
        case 'coins': return ' coins';
        case 'accuracy': return '%';
        case 'studytime': return 'h';
        case 'streak': return ' streak';
        case 'decks': return ' decks';
        case 'cards': return ' cards';
        default: return '';
    }
}

// Load and display leaderboard data
function loadLeaderboardData(boardType) {
    const leaderboard = leaderboardData[boardType];
    if (!leaderboard) return;
    
    // Update podium (top 3)
    updatePodium(boardType, leaderboard.slice(0, 3));
    
    // Update entries (4th place and below)
    updateLeaderboardEntries(boardType, leaderboard.slice(3));
}

// Update podium display
function updatePodium(boardType, topThree) {
    const positions = ['1st', '2nd', '3rd'];
    const scoreUnit = getScoreUnit(boardType);
    
    positions.forEach((pos, index) => {
        const nameElement = document.getElementById(`${boardType}-${pos}`);
        const scoreElement = document.getElementById(`${boardType}-${pos}-score`);
        
        if (topThree[index]) {
            const user = topThree[index];
            const score = getUserScore(user, boardType);
            
            nameElement.textContent = user.username;
            scoreElement.textContent = `${score}${scoreUnit}`;
            
            // Highlight current user
            const podiumPlace = nameElement.closest('.podium-place');
            if (user.isCurrentUser) {
                podiumPlace.style.border = '3px solid #10b981';
                podiumPlace.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                nameElement.style.color = 'white';
                scoreElement.style.color = 'rgba(255, 255, 255, 0.9)';
            }
        } else {
            nameElement.textContent = '-';
            scoreElement.textContent = '-';
        }
    });
}

// Update leaderboard entries
function updateLeaderboardEntries(boardType, entries) {
    const entriesContainer = document.getElementById(`${boardType}-entries`);
    const scoreUnit = getScoreUnit(boardType);
    
    entriesContainer.innerHTML = '';
    
    entries.forEach((user, index) => {
        const rank = index + 4; // Starting from 4th place
        const score = getUserScore(user, boardType);
        
        const entryDiv = document.createElement('div');
        entryDiv.className = `leaderboard-entry ${user.isCurrentUser ? 'current-user' : ''}`;
        
        entryDiv.innerHTML = `
            <div class="entry-rank">${rank}</div>
            <div class="entry-avatar">${user.username.charAt(0).toUpperCase()}</div>
            <div class="entry-details">
                <div class="entry-name">
                    ${user.username}
                    ${user.isCurrentUser ? '<span class="achievement-badge">YOU</span>' : ''}
                </div>
                <div class="entry-subtitle">
                    ${getSubtitleText(user, boardType)}
                </div>
            </div>
            <div class="entry-score">
                ${score}${scoreUnit}
                <span class="entry-trend trend-${getTrendDirection()}">
                    ${getTrendIcon()}
                </span>
            </div>
        `;
        
        entriesContainer.appendChild(entryDiv);
    });
}

// Get subtitle text for leaderboard entries
function getSubtitleText(user, boardType) {
    switch (boardType) {
        case 'coins':
            return `${user.accuracy}% accuracy • ${user.streak} streak`;
        case 'accuracy':
            return `${user.coins} coins • ${user.studyTime}h studied`;
        case 'studytime':
            return `${user.accuracy}% accuracy • ${user.decks} decks`;
        case 'streak':
            return `${user.coins} coins • ${user.accuracy}% accuracy`;
        case 'decks':
            return `${user.cards} cards mastered • ${user.studyTime}h`;
        case 'cards':
            return `${user.decks} decks • ${user.studyTime}h studied`;
        default:
            return `${user.coins} coins`;
    }
}

// Get trend direction (simulate trending)
function getTrendDirection() {
    const trends = ['up', 'down', 'same'];
    return trends[Math.floor(Math.random() * trends.length)];
}

// Get trend icon
function getTrendIcon() {
    const direction = getTrendDirection();
    switch (direction) {
        case 'up': return '📈';
        case 'down': return '📉';
        case 'same': return '➡️';
        default: return '➡️';
    }
}

// Refresh leaderboard data
function refreshLeaderboard() {
    showNotification('Refreshing leaderboard...', 'info');
    
    // Simulate API refresh
    setTimeout(() => {
        generateRealLeaderboardData();
        updateUserStats();
        switchLeaderboard(currentLeaderboard);
        showNotification('Leaderboard updated!', 'success');
    }, 1000);
}

// Share user rank
function shareRank() {
    if (!currentUser || !userStats) {
        showNotification('Please sign in to share your rank!', 'error');
        return;
    }
    
    const leaderboard = leaderboardData[currentLeaderboard];
    const userRank = leaderboard.findIndex(user => user.isCurrentUser) + 1;
    const score = getUserScore(userStats, currentLeaderboard);
    const scoreUnit = getScoreUnit(currentLeaderboard);
    const boardName = getBoardDisplayName(currentLeaderboard);
    
    const shareText = `🏆 I'm ranked #${userRank} on the ${boardName} leaderboard with ${score}${scoreUnit}! 📚 Challenge me on FlashCards! 🎓`;
    
    if (navigator.share) {
        navigator.share({
            title: 'FlashCards Leaderboard',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Rank copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Unable to share rank', 'error');
        });
    }
}

// Get display name for board type
function getBoardDisplayName(boardType) {
    switch (boardType) {
        case 'coins': return 'Most Coins';
        case 'accuracy': return 'Most Accurate';
        case 'studytime': return 'Study Time';
        case 'streak': return 'Longest Streak';
        case 'decks': return 'Most Decks';
        case 'cards': return 'Cards Mastered';
        default: return 'Leaderboard';
    }
}

// View all-time statistics
function viewAllTimeStats() {
    showNotification('All-time stats feature coming soon!', 'info');
}

// Toggle privacy mode
function togglePrivateMode() {
    const isPrivate = localStorage.getItem('leaderboardPrivate') === 'true';
    const newPrivate = !isPrivate;
    
    localStorage.setItem('leaderboardPrivate', newPrivate.toString());
    
    if (newPrivate) {
        showNotification('Your profile is now private on leaderboards', 'success');
    } else {
        showNotification('Your profile is now public on leaderboards', 'success');
    }
    
    // Update display
    refreshLeaderboard();
}

// Update user stats when achievements change
function updateUserStats() {
    if (!currentUser) return;
    
    userStats = {
        username: currentUser.username,
        coins: app ? (JSON.parse(localStorage.getItem('coins')) || 100) : 100,
        accuracy: calculateUserAccuracy(),
        studyTime: calculateUserStudyTime(),
        streak: calculateUserStreak(),
        decks: app ? app.decks.length : 0,
        cards: calculateMasteredCards(),
        isCurrentUser: true
    };
}

// CSS for notifications
const notificationStyles = `
@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing FlashCards app...');
    try {
        app = new FlashCardsApp();
        console.log('FlashCards app initialized successfully!');
        
        // Initialize XP and profile system
        initializeXPSystem();
        console.log('XP and profile system initialized');
        
        // Make app globally available for debugging
        window.flashCardsApp = app;
        
        // Debug: Test if functions are accessible
        console.log('Testing function accessibility:');
        console.log('window.addCard:', typeof window.addCard);
        console.log('window.showView:', typeof window.showView);
        console.log('window.startStudy:', typeof window.startStudy);
        console.log('app instance:', !!app);
        
        console.log('FlashCards app initialized and functions are available on window object');
        console.log('App initialization completed successfully');
    } catch (error) {
        console.error('Error initializing FlashCards app:', error);
    }
});
