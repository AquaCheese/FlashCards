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
        
        app.generateAIDeck({ subject: subject, cardCount: 8 });
    } else {
        console.log('App not ready or generateAIDeck method missing');
    }
};

window.devBonus = function() {
    if (app && app.earnCoins) {
        app.earnCoins(1000000, 'Dev bonus');
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
        app.generateAIDeck();
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
        
        // Advanced GCSE AI Learning System
        console.log('Initializing Advanced GCSE AI Engine...');
        this.aiEngine = new GCSEAIEngine();
        this.learningData = this.loadLearningData();
        console.log('GCSE AI Engine loaded');
        this.sessionStartTime = Date.now();
        
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
        return saved ? JSON.parse(saved) : [];
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
        return saved ? JSON.parse(saved) : [];
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
            this.showHint(hint);
            return true;
        } catch (error) {
            console.error('Hint generation failed:', error);
            this.showNotification('Failed to generate hint. Coins refunded.', 'error');
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

        // Try AI hint generation
        try {
            const aiHint = await this.generateAIHint(card.question, card.answer);
            return {
                type: 'ai',
                text: aiHint,
                source: 'AI-generated hint'
            };
        } catch (error) {
            // Fallback to smart hint
            return this.generateSmartHint(card.question, card.answer);
        }
    }

    async generateAIHint(question, answer) {
        console.log('🤖 Generating AI hint for:', question, 'Answer:', answer);
        
        try {
            // Show loading state to user
            this.showHintLoadingState();
            
            // Try AI hint generation
            const hint = await this.getHuggingFaceHint(question, answer);
            
            // Hide loading state
            this.hideHintLoadingState();
            
            console.log('✅ AI hint successful:', hint);
            return hint;
        } catch (error) {
            console.log('❌ AI hint generation failed, using smart fallback...', error);
            
            // Hide loading state and provide fallback
            this.hideHintLoadingState();
            
            const fallbackHint = this.generateMinimalSmartHint(question, answer);
            console.log('🧠 Using smart fallback hint:', fallbackHint);
            return fallbackHint;
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
        // Try multiple AI models with better prompts
        const models = [
            {
                name: 'microsoft/DialoGPT-medium',
                prompt: `Create a study hint for: "${question}" (Answer: ${answer})

Give a helpful clue about the context or topic without revealing the answer. Be specific to the subject matter.

Hint:`
            },
            {
                name: 'facebook/blenderbot-400M-distill',  
                prompt: `Help a student with this question: "${question}". The answer is "${answer}". Give them a contextual hint about what to think about, without giving away the answer.`
            },
            {
                name: 'huggingface/CodeBERTa-small-v1',
                prompt: `Educational hint needed for: ${question}\nAnswer: ${answer}\nHint:`
            },
            {
                name: 'distilbert-base-uncased-distilled-squad',
                prompt: `Question: ${question}\nAnswer: ${answer}\nProvide a study hint:`
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
                    card.customHint = customHi