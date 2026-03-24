// Global app instance
let app = null;

// FlashCards App - Adaptive-Enhanced Learning System
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

// Interactive Editor global functions
window.moveElementUp = function(elementId) {
    console.log('moveElementUp called with:', elementId, 'app:', !!app);
    if (app && app.moveElementUp) {
        app.moveElementUp(elementId);
    } else {
        console.log('App not ready or moveElementUp method missing');
    }
};

window.moveElementDown = function(elementId) {
    console.log('moveElementDown called with:', elementId, 'app:', !!app);
    if (app && app.moveElementDown) {
        app.moveElementDown(elementId);
    } else {
        console.log('App not ready or moveElementDown method missing');
    }
};

window.deleteElement = function(elementId) {
    console.log('deleteElement called with:', elementId, 'app:', !!app);
    if (app && app.deleteElement) {
        app.deleteElement(elementId);
    } else {
        console.log('App not ready or deleteElement method missing');
    }
};

window.switchToInteractiveEditor = function() {
    console.log('switchToInteractiveEditor called, app:', !!app);
    if (app && app.switchToInteractiveEditor) {
        app.switchToInteractiveEditor();
    } else {
        console.log('App not ready or switchToInteractiveEditor method missing');
    }
};

window.switchToSimpleEditor = function() {
    console.log('switchToSimpleEditor called, app:', !!app);
    if (app && app.switchToSimpleEditor) {
        app.switchToSimpleEditor();
    } else {
        console.log('App not ready or switchToSimpleEditor method missing');
    }
};

window.saveInteractiveDeck = function() {
    console.log('saveInteractiveDeck called, app:', !!app);
    if (app && app.saveInteractiveDeck) {
        app.saveInteractiveDeck();
    } else {
        console.log('App not ready or saveInteractiveDeck method missing');
    }
};

window.switchCanvasSide = function(side) {
    console.log('switchCanvasSide called with:', side, 'app:', !!app);
    if (app && app.switchCanvasSide) {
        app.switchCanvasSide(side);
    } else {
        console.log('App not ready or switchCanvasSide method missing');
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
        
        this.learningData = this.loadLearningData();
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
        
        // Initialize level system
        this.initializeLevelSystem();
        console.log('Level system initialized');
        
        // Ensure level display is updated after everything is loaded
        setTimeout(() => {
            this.forceUpdateLevelDisplay();
            console.log('Forced level display update completed');
        }, 500);
        
        this.showView('home');
        
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

        const backToHomeBtn = document.getElementById('back-to-home-btn');
        if (backToHomeBtn) {
            backToHomeBtn.addEventListener('click', () => this.showView('home'));
        }
    }

    // Removed generateStarterDecks - Adaptive now creates decks without preset content

    generateIntelligentTemplates(deckName, subject, count = 10) {
        // Analyze the deck name to understand what specific topic to focus on
        const topicAnalysis = this.analyzeDeckTopic(deckName, subject);
        
        // Generate contextually relevant questions based on the specific topic
        const templates = [];
        
        // Use Adaptive-driven template generation based on the actual topic
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
                        <span class="generated-badge">🤖 Generated</span>
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
        } else if (viewName === 'create') {
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

    // 💡 Adaptive Hint System
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
                // Adaptive failed - refund and show error
                this.powerUps.hints++;
                this.savePowerUps();
                this.updatePowerUpDisplay();
                return false;
            }
        } catch (error) {
            console.error('Hint generation failed:', error);
            this.showNotification('Hints are only available for cards with a custom hint.', 'info');
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
        // Check if card has a custom hint
        if (card.customHint && card.customHint.trim()) {
            return {
                type: 'custom',
                text: card.customHint,
                source: 'Custom hint from deck creator'
            };
        }
        return null;
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

        // Try multiple Adaptive models with the improved prompt
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
                console.log(`🤖 Trying Adaptive model: ${model.name}`);
                
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
                    
                    // Additional cleaning - remove common Adaptive artifacts
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
        
        // If all Adaptive models fail, try a simpler approach
        return await this.getSimpleAdaptiveHint(question, answer);
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
            'as an assistant', 'i\'m not sure', 'i apologize', 'sorry,',
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

    async getSimpleAdaptiveHint(question, answer) {
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
            console.log('Simple Adaptive hint failed:', error);
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
        
        const aiDisclaimer = '';
        
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
        
        // Look up the deck
        let deck = this.decks.find(d => d.id === deckId);
        const isGeneratedDeck = false;
        
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
            // Enhanced Adaptive learning data
            deckType: isGeneratedDeck ? 'generated' : 'custom',
            subject: deck?.subject || 'Unknown',
            difficulty: deck?.difficulty || 'Unknown',
            // Additional Adaptive metadata for generated decks
            ...(isGeneratedDeck && deck.generatedMetadata ? {
                generationType: deck.generationType,
                generatedConfidence: deck.confidence,
                targetWeakness: deck.generatedMetadata.targetWeakness
            } : {}),
            // Power-up usage tracking
            powerUpsUsed: this.currentSession?.powerUpsUsed || {}
        };
        
        sessions.push(session);
        this.saveSessionData(sessions);
        
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
                        <small class="hint-help">This hint will be shown when users use the hint power-up. If empty, a hint will be generated.</small>
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
    startStudy(deckId) {
        let deck = this.decks.find(d => d.id === deckId);
        
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
            // Show Next/Prev buttons for multi-card navigation + Skip to Cards
            const prevDisabled = this.currentTitleCardIndex === 0 ? 'disabled' : '';
            const nextDisabled = isLastCard ? 'disabled' : '';
            
            titleCardActions.innerHTML = `
                <button class="btn btn-secondary" onclick="previousTitleCard()" ${prevDisabled}>
                    ← Previous
                </button>
                <button class="btn btn-primary" onclick="nextTitleCard()" ${nextDisabled}>
                    Next →
                </button>
                <button class="btn btn-outline" onclick="skipToStudy()" title="Skip all title cards and go directly to flashcards">
                    Skip to Cards
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

    // Professional Card Editor Methods
    initInteractiveEditor() {
        console.log('Initializing Professional Card Editor...');
        
        this.professionalEditor = {
            elements: [],
            selectedElement: null,
            isDragging: false,
            dragOffset: { x: 0, y: 0 },
            isResizing: false,
            currentTool: 'select',
            currentCard: 1,
            currentSide: 'front',
            selectedStyle: 'neon',
            selectedTheme: 'blue',
            zoom: 1,
            history: [{ action: 'Document Created', timestamp: Date.now() }],
            historyIndex: 0,
            layers: [{ id: 'background', name: 'Background', visible: true, locked: true }]
        };
        
        this.setupProfessionalEditorEvents();
        this.initCardCanvas();
        console.log('Professional Card Editor initialized successfully');
    }
    
    setupProfessionalEditorEvents() {
        // Tool button events
        document.querySelectorAll('.tool-button[data-tool]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTool(e.target.dataset.tool);
            });
        });

        // Style selection events
        document.querySelectorAll('.style-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectCardStyle(e.target.dataset.style);
            });
        });

        // Theme selection events
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectTheme(e.target.dataset.theme);
            });
        });

        // Side tab events
        document.querySelectorAll('.side-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchSide(e.target.dataset.side);
            });
        });

        // Canvas events
        const canvas = document.getElementById('editing-surface');
        if (canvas) {
            canvas.addEventListener('mousedown', (e) => this.handleCanvasMouseDown(e));
            canvas.addEventListener('mousemove', (e) => this.handleCanvasMouseMove(e));
            canvas.addEventListener('mouseup', (e) => this.handleCanvasMouseUp(e));
            canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
            
            // Prevent context menu
            canvas.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.showContextMenu(e);
            });
        }

        // Format controls
        document.getElementById('font-family-select')?.addEventListener('change', (e) => {
            this.updateSelectedElementProperty('fontFamily', e.target.value);
        });

        document.getElementById('font-size-input')?.addEventListener('input', (e) => {
            this.updateSelectedElementProperty('fontSize', e.target.value + 'px');
        });

        document.getElementById('text-color-picker')?.addEventListener('change', (e) => {
            this.updateSelectedElementProperty('color', e.target.value);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));

        // Asset items
        document.querySelectorAll('.asset-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.dataset.shape) {
                    this.addShape(e.target.dataset.shape);
                } else if (e.target.dataset.icon) {
                    this.addIcon(e.target.dataset.icon);
                }
            });
        });

        // Layer controls
        document.querySelectorAll('.layer-control-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.textContent;
                if (action === '➕') this.addLayer();
                else if (action === '🗑️') this.deleteLayer();
                else if (action === '📄') this.duplicateLayer();
            });
        });

        console.log('Professional editor events set up successfully');
    }
    
    initCardCanvas() {
        const cardCanvas = document.getElementById('card-canvas');
        if (cardCanvas) {
            // Set initial style and theme
            cardCanvas.setAttribute('data-style', this.professionalEditor.selectedStyle);
            cardCanvas.setAttribute('data-theme', this.professionalEditor.selectedTheme);
            this.updateCanvasBackground();
        }
    }

    selectTool(tool) {
        this.professionalEditor.currentTool = tool;
        
        // Update UI
        document.querySelectorAll('.tool-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.tool-button[data-tool="${tool}"]`)?.classList.add('active');
        
        // Update cursor
        const editingSurface = document.getElementById('editing-surface');
        if (editingSurface) {
            switch (tool) {
                case 'select':
                    editingSurface.style.cursor = 'default';
                    break;
                case 'text':
                    editingSurface.style.cursor = 'text';
                    break;
                default:
                    editingSurface.style.cursor = 'crosshair';
            }
        }
        
        console.log('Selected tool:', tool);
    }

    selectCardStyle(style) {
        this.professionalEditor.selectedStyle = style;
        
        // Update UI
        document.querySelectorAll('.style-option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector(`.style-option[data-style="${style}"]`)?.classList.add('active');
        
        // Update canvas
        const cardCanvas = document.getElementById('card-canvas');
        if (cardCanvas) {
            cardCanvas.setAttribute('data-style', style);
            this.updateCanvasBackground();
        }
        
        console.log('Selected style:', style);
    }

    selectTheme(theme) {
        this.professionalEditor.selectedTheme = theme;
        
        // Update UI
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector(`.theme-option[data-theme="${theme}"]`)?.classList.add('active');
        
        // Update canvas
        const cardCanvas = document.getElementById('card-canvas');
        if (cardCanvas) {
            cardCanvas.setAttribute('data-theme', theme);
        }
        
        console.log('Selected theme:', theme);
    }

    switchSide(side) {
        this.professionalEditor.currentSide = side;
        
        // Update UI
        document.querySelectorAll('.side-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`.side-tab[data-side="${side}"]`)?.classList.add('active');
        
        // Load elements for this side
        this.loadSideElements();
        
        console.log('Switched to side:', side);
    }

    updateCanvasBackground() {
        // This method updates the visual appearance of the canvas based on selected style
        const cardCanvas = document.getElementById('card-canvas');
        if (!cardCanvas) return;
        
        // The CSS handles the visual styling based on data attributes
        // We just need to ensure the canvas reflects the current state
        this.rerenderElements();
    }

    loadSideElements() {
        // Clear current display and show elements for current side
        const editingSurface = document.getElementById('editing-surface');
        if (!editingSurface) return;
        
        // Clear existing elements
        editingSurface.innerHTML = '';
        
        // Add elements for current side
        const sideElements = this.professionalEditor.elements.filter(
            el => el.side === this.professionalEditor.currentSide && 
                  el.card === this.professionalEditor.currentCard
        );
        
        sideElements.forEach(element => {
            this.renderElement(element);
        });
        
        this.updateLayersPanel();
    }

    editorAction(action) {
        switch (action) {
            case 'new':
                this.newDocument();
                break;
            case 'save':
                this.saveDocument();
                break;
            case 'export':
                this.exportDocument();
                break;
            case 'undo':
                this.undo();
                break;
            case 'redo':
                this.redo();
                break;
            default:
                console.log('Unknown editor action:', action);
        }
    }

    zoomCanvas(zoomLevel) {
        this.professionalEditor.zoom = zoomLevel;
        
        // Update zoom UI
        document.querySelectorAll('.zoom-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.zoom-btn[onclick*="${zoomLevel}"]`)?.classList.add('active');
        
        // Apply zoom to canvas wrapper
        const canvasWrapper = document.getElementById('canvas-wrapper');
        if (canvasWrapper) {
            canvasWrapper.style.transform = `scale(${zoomLevel})`;
        }
        
        console.log('Zoom level set to:', zoomLevel);
    }
    
    handleCanvasMouseDown(e) {
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.professionalEditor.zoom;
        const y = (e.clientY - rect.top) / this.professionalEditor.zoom;
        
        if (this.professionalEditor.currentTool === 'select') {
            const element = this.getElementAt(x, y);
            if (element) {
                this.selectElement(element);
                this.professionalEditor.isDragging = true;
                this.professionalEditor.dragOffset = {
                    x: x - element.x,
                    y: y - element.y
                };
            } else {
                this.selectElement(null);
            }
        } else {
            this.createElement(x, y);
        }
    }

    handleCanvasMouseMove(e) {
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.professionalEditor.zoom;
        const y = (e.clientY - rect.top) / this.professionalEditor.zoom;
        
        // Update cursor position display
        document.getElementById('cursor-position').textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;
        
        if (this.professionalEditor.isDragging && this.professionalEditor.selectedElement) {
            const element = this.professionalEditor.selectedElement;
            element.x = Math.max(0, x - this.professionalEditor.dragOffset.x);
            element.y = Math.max(0, y - this.professionalEditor.dragOffset.y);
            
            this.updateElementPosition(element);
            this.updatePropertiesPanel();
        }
    }

    handleCanvasMouseUp(e) {
        if (this.professionalEditor.isDragging) {
            this.addToHistory('Move Element');
        }
        
        this.professionalEditor.isDragging = false;
        this.professionalEditor.isResizing = false;
    }

    handleCanvasClick(e) {
        // Handle tool-specific click actions
    }

    getElementAt(x, y) {
        const elements = this.professionalEditor.elements.filter(
            el => el.side === this.professionalEditor.currentSide && 
                  el.card === this.professionalEditor.currentCard
        );
        
        for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            if (x >= element.x && x <= element.x + element.width &&
                y >= element.y && y <= element.y + element.height) {
                return element;
            }
        }
        return null;
    }

    createElement(x, y) {
        const tool = this.professionalEditor.currentTool;
        const element = {
            id: `element_${Date.now()}`,
            type: tool,
            side: this.professionalEditor.currentSide,
            card: this.professionalEditor.currentCard,
            x: x,
            y: y,
            width: tool === 'text' ? 200 : 100,
            height: tool === 'text' ? 50 : 100,
            zIndex: this.professionalEditor.elements.length,
            style: {
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#000000',
                backgroundColor: tool === 'shape' ? '#e2e8f0' : 'transparent',
                borderColor: '#d1d5db',
                borderWidth: '1px',
                borderRadius: '4px'
            }
        };

        if (tool === 'text') {
            element.content = 'Enter text here';
            element.editable = true;
        } else if (tool === 'image') {
            this.handleImageUpload(element);
            return;
        } else if (tool === 'shape') {
            element.shapeType = 'rectangle';
        }

        this.professionalEditor.elements.push(element);
        this.renderElement(element);
        this.selectElement(element);
        this.addToHistory(`Add ${tool} element`);
        this.updateLayersPanel();
        
        console.log('Created element:', element);
    }

    renderElement(element) {
        const editingSurface = document.getElementById('editing-surface');
        if (!editingSurface) return;

        const elementDiv = document.createElement('div');
        elementDiv.className = `editor-element ${element.type}-element`;
        elementDiv.id = element.id;
        elementDiv.style.cssText = `
            left: ${element.x}px;
            top: ${element.y}px;
            width: ${element.width}px;
            height: ${element.height}px;
            z-index: ${element.zIndex};
            font-family: ${element.style.fontFamily};
            font-size: ${element.style.fontSize};
            color: ${element.style.color};
            background-color: ${element.style.backgroundColor};
            border: ${element.style.borderWidth} solid ${element.style.borderColor};
            border-radius: ${element.style.borderRadius};
        `;

        if (element.type === 'text') {
            elementDiv.innerHTML = `<div contenteditable="true" style="width: 100%; height: 100%; outline: none; padding: 8px;">${element.content}</div>`;
            const textContent = elementDiv.querySelector('[contenteditable]');
            textContent.addEventListener('blur', () => {
                element.content = textContent.innerHTML;
                this.addToHistory('Edit text');
            });
        } else if (element.type === 'image' && element.imageData) {
            elementDiv.innerHTML = `<img src="${element.imageData}" style="width: 100%; height: 100%; object-fit: cover;" alt="Image">`;
        } else if (element.type === 'shape') {
            // Shape styling is handled by CSS
        }

        elementDiv.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            this.selectElement(element);
        });

        editingSurface.appendChild(elementDiv);
    }

    selectElement(element) {
        // Remove selection from all elements
        document.querySelectorAll('.editor-element').forEach(el => {
            el.classList.remove('selected');
        });

        this.professionalEditor.selectedElement = element;

        if (element) {
            // Add selection to current element
            document.getElementById(element.id)?.classList.add('selected');
            this.addResizeHandles(element);
            document.getElementById('selection-info').textContent = `Selected: ${element.type} element`;
        } else {
            document.getElementById('selection-info').textContent = 'No selection';
        }

        this.updatePropertiesPanel();
        this.updateLayersPanel();
    }

    addResizeHandles(element) {
        // Remove existing handles
        document.querySelectorAll('.resize-handle').forEach(handle => handle.remove());

        const elementDiv = document.getElementById(element.id);
        if (!elementDiv) return;

        const positions = ['nw', 'ne', 'sw', 'se', 'n', 's', 'w', 'e'];
        positions.forEach(pos => {
            const handle = document.createElement('div');
            handle.className = `resize-handle ${pos}`;
            handle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.startResize(element, pos, e);
            });
            elementDiv.appendChild(handle);
        });
    }

    updateElementPosition(element) {
        const elementDiv = document.getElementById(element.id);
        if (elementDiv) {
            elementDiv.style.left = element.x + 'px';
            elementDiv.style.top = element.y + 'px';
        }
    }

    handleKeyboardShortcuts(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'z':
                    e.preventDefault();
                    if (e.shiftKey) {
                        this.redo();
                    } else {
                        this.undo();
                    }
                    break;
                case 's':
                    e.preventDefault();
                    this.saveDocument();
                    break;
                case 'c':
                    e.preventDefault();
                    this.copyElement();
                    break;
                case 'v':
                    e.preventDefault();
                    this.pasteElement();
                    break;
                case 'Delete':
                case 'Backspace':
                    e.preventDefault();
                    this.deleteSelectedElement();
                    break;
            }
        }

        // Tool shortcuts
        switch (e.key) {
            case 'v':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('select');
                break;
            case 't':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('text');
                break;
            case 'u':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('shape');
                break;
            case 'i':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('image');
                break;
        }
    }
    
    updatePropertiesPanel() {
        const propertiesContainer = document.getElementById('element-properties');
        if (!propertiesContainer) return;

        const element = this.professionalEditor.selectedElement;
        
        if (!element) {
            propertiesContainer.innerHTML = `
                <div class="no-selection">
                    <span class="no-selection-icon">👆</span>
                    <p>Select an element to edit its properties</p>
                </div>
            `;
            return;
        }

        propertiesContainer.innerHTML = `
            <div class="property-group">
                <label>Position</label>
                <div class="property-row">
                    <input type="number" id="element-x" value="${Math.round(element.x)}" placeholder="X">
                    <input type="number" id="element-y" value="${Math.round(element.y)}" placeholder="Y">
                </div>
            </div>
            <div class="property-group">
                <label>Size</label>
                <div class="property-row">
                    <input type="number" id="element-width" value="${element.width}" placeholder="Width">
                    <input type="number" id="element-height" value="${element.height}" placeholder="Height">
                </div>
            </div>
            ${element.type === 'text' ? `
                <div class="property-group">
                    <label>Text Content</label>
                    <textarea id="element-text" rows="3">${element.content}</textarea>
                </div>
                <div class="property-group">
                    <label>Font Family</label>
                    <select id="element-font-family">
                        <option value="Inter" ${element.style.fontFamily === 'Inter' ? 'selected' : ''}>Inter</option>
                        <option value="Arial" ${element.style.fontFamily === 'Arial' ? 'selected' : ''}>Arial</option>
                        <option value="Helvetica" ${element.style.fontFamily === 'Helvetica' ? 'selected' : ''}>Helvetica</option>
                        <option value="Times New Roman" ${element.style.fontFamily === 'Times New Roman' ? 'selected' : ''}>Times New Roman</option>
                    </select>
                </div>
                <div class="property-group">
                    <label>Font Size</label>
                    <input type="number" id="element-font-size" value="${parseInt(element.style.fontSize)}" min="8" max="128">
                </div>
            ` : ''}
            <div class="property-group">
                <label>Colors</label>
                <div class="property-row">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                        <label style="font-size: 0.7rem;">Text</label>
                        <input type="color" id="element-color" value="${element.style.color}">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                        <label style="font-size: 0.7rem;">Background</label>
                        <input type="color" id="element-bg-color" value="${element.style.backgroundColor}">
                    </div>
                </div>
            </div>
            <div class="property-group">
                <label>Border</label>
                <div class="property-row">
                    <input type="color" id="element-border-color" value="${element.style.borderColor}">
                    <input type="number" id="element-border-width" value="${parseInt(element.style.borderWidth)}" min="0" max="10">
                </div>
            </div>
        `;

        // Add event listeners for property changes
        ['element-x', 'element-y', 'element-width', 'element-height'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', () => this.updateElementFromProperties());
            }
        });

        if (element.type === 'text') {
            ['element-text', 'element-font-family', 'element-font-size'].forEach(id => {
                const input = document.getElementById(id);
                if (input) {
                    input.addEventListener('input', () => this.updateElementFromProperties());
                }
            });
        }

        ['element-color', 'element-bg-color', 'element-border-color', 'element-border-width'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', () => this.updateElementFromProperties());
            }
        });
    }

    updateElementFromProperties() {
        const element = this.professionalEditor.selectedElement;
        if (!element) return;

        // Update position and size
        const x = document.getElementById('element-x')?.value;
        const y = document.getElementById('element-y')?.value;
        const width = document.getElementById('element-width')?.value;
        const height = document.getElementById('element-height')?.value;

        if (x !== undefined) element.x = parseFloat(x);
        if (y !== undefined) element.y = parseFloat(y);
        if (width !== undefined) element.width = parseFloat(width);
        if (height !== undefined) element.height = parseFloat(height);

        // Update text properties
        if (element.type === 'text') {
            const text = document.getElementById('element-text')?.value;
            const fontFamily = document.getElementById('element-font-family')?.value;
            const fontSize = document.getElementById('element-font-size')?.value;

            if (text !== undefined) element.content = text;
            if (fontFamily) element.style.fontFamily = fontFamily;
            if (fontSize) element.style.fontSize = fontSize + 'px';
        }

        // Update colors and border
        const color = document.getElementById('element-color')?.value;
        const bgColor = document.getElementById('element-bg-color')?.value;
        const borderColor = document.getElementById('element-border-color')?.value;
        const borderWidth = document.getElementById('element-border-width')?.value;

        if (color) element.style.color = color;
        if (bgColor) element.style.backgroundColor = bgColor;
        if (borderColor) element.style.borderColor = borderColor;
        if (borderWidth !== undefined) element.style.borderWidth = borderWidth + 'px';

        // Re-render the element
        this.rerenderElement(element);
    }

    rerenderElement(element) {
        const elementDiv = document.getElementById(element.id);
        if (!elementDiv) return;

        elementDiv.style.cssText = `
            left: ${element.x}px;
            top: ${element.y}px;
            width: ${element.width}px;
            height: ${element.height}px;
            z-index: ${element.zIndex};
            font-family: ${element.style.fontFamily};
            font-size: ${element.style.fontSize};
            color: ${element.style.color};
            background-color: ${element.style.backgroundColor};
            border: ${element.style.borderWidth} solid ${element.style.borderColor};
            border-radius: ${element.style.borderRadius};
        `;

        if (element.type === 'text') {
            const textContent = elementDiv.querySelector('[contenteditable]');
            if (textContent) {
                textContent.innerHTML = element.content;
            }
        }
    }

    updateLayersPanel() {
        const layersList = document.getElementById('editor-layers-list');
        if (!layersList) return;

        const currentElements = this.professionalEditor.elements.filter(
            el => el.side === this.professionalEditor.currentSide && 
                  el.card === this.professionalEditor.currentCard
        );

        layersList.innerHTML = `
            <div class="layer-item">
                <span class="layer-visibility">👁️</span>
                <span class="layer-name">Background</span>
                <span class="layer-lock">🔒</span>
            </div>
        `;

        currentElements.reverse().forEach(element => {
            const layerItem = document.createElement('div');
            layerItem.className = `layer-item ${element === this.professionalEditor.selectedElement ? 'active' : ''}`;
            layerItem.innerHTML = `
                <span class="layer-visibility">👁️</span>
                <span class="layer-name">${element.type} ${element.id.split('_')[1]}</span>
                <span class="layer-lock"></span>
            `;
            layerItem.addEventListener('click', () => this.selectElement(element));
            layersList.appendChild(layerItem);
        });
    }

    addToHistory(action) {
        this.professionalEditor.history.push({
            action: action,
            timestamp: Date.now(),
            state: JSON.parse(JSON.stringify(this.professionalEditor.elements))
        });

        // Update history panel
        this.updateHistoryPanel();
    }

    updateHistoryPanel() {
        const historyContainer = document.querySelector('.history-container');
        if (!historyContainer) return;

        historyContainer.innerHTML = '';
        this.professionalEditor.history.slice(-10).forEach((item, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = `history-item ${index === this.professionalEditor.history.length - 1 ? 'active' : ''}`;
            historyItem.innerHTML = `
                <span class="history-icon">📝</span>
                <span class="history-action">${item.action}</span>
            `;
            historyContainer.appendChild(historyItem);
        });
    }

    handleImageUpload(element) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    element.imageData = event.target.result;
                    this.professionalEditor.elements.push(element);
                    this.renderElement(element);
                    this.selectElement(element);
                    this.addToHistory('Add image');
                    this.updateLayersPanel();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }

    rerenderElements() {
        const editingSurface = document.getElementById('editing-surface');
        if (!editingSurface) return;

        editingSurface.innerHTML = '';
        this.loadSideElements();
    }

    // Placeholder methods for additional functionality
    newDocument() { console.log('New document'); }
    saveDocument() { console.log('Save document'); }
    exportDocument() { console.log('Export document'); }
    undo() { console.log('Undo'); }
    redo() { console.log('Redo'); }
    copyElement() { console.log('Copy element'); }
    pasteElement() { console.log('Paste element'); }
    deleteSelectedElement() { 
        if (this.professionalEditor.selectedElement) {
            this.deleteElement(this.professionalEditor.selectedElement);
        }
    }
    deleteElement(element) {
        const index = this.professionalEditor.elements.indexOf(element);
        if (index > -1) {
            this.professionalEditor.elements.splice(index, 1);
            document.getElementById(element.id)?.remove();
            this.selectElement(null);
            this.addToHistory('Delete element');
            this.updateLayersPanel();
        }
    }
    showContextMenu(e) { console.log('Show context menu'); }
    addShape(shape) { console.log('Add shape:', shape); }
    addIcon(icon) { console.log('Add icon:', icon); }
    addLayer() { console.log('Add layer'); }
    deleteLayer() { console.log('Delete layer'); }
    duplicateLayer() { console.log('Duplicate layer'); }
    
    switchCanvasSide(side) {
        this.switchCard(side);
    }
    
    initCanvas() {
        const canvas = this.interactiveEditor.canvas;
        console.log('initCanvas called, canvas:', canvas);
        if (!canvas) {
            console.error('Canvas not found!');
            return;
        }
        
        // Set canvas size
        canvas.width = 800;
        canvas.height = 600;
        console.log('Canvas initialized with size:', canvas.width, 'x', canvas.height);
        
        // Clear canvas
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw card background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#e0e0e0';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        // Load current card elements
        this.loadCardElements(this.interactiveEditor.currentCard);
    }
    
    loadCardElements(card) {
        // Clear current elements
        this.interactiveEditor.elements = this.interactiveEditor.elements.filter(el => el.card === card);
        
        // Redraw canvas
        this.redrawCanvas();
        
        // Update layers panel
        this.updateLayersPanel();
    }
    
    handleCanvasMouseDown(e) {
        console.log('Canvas mouse down event');
        const rect = this.interactiveEditor.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.interactiveEditor.zoom;
        const y = (e.clientY - rect.top) / this.interactiveEditor.zoom;
        console.log('Mouse position:', x, y, 'Current tool:', this.interactiveEditor.currentTool);
        
        if (this.interactiveEditor.currentTool === 'select') {
            // Check if clicking on an element
            const element = this.getElementAt(x, y);
            if (element) {
                this.selectElement(element);
                this.interactiveEditor.isDragging = true;
                this.interactiveEditor.dragOffset = {
                    x: x - element.x,
                    y: y - element.y
                };
            } else {
                this.selectElement(null);
            }
        } else {
            // Create new element
            this.createElementAt(x, y);
        }
    }
    
    handleCanvasMouseMove(e) {
        const rect = this.interactiveEditor.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.interactiveEditor.zoom;
        const y = (e.clientY - rect.top) / this.interactiveEditor.zoom;
        
        if (this.interactiveEditor.isDragging && this.interactiveEditor.selectedElement) {
            // Move selected element
            this.interactiveEditor.selectedElement.x = x - this.interactiveEditor.dragOffset.x;
            this.interactiveEditor.selectedElement.y = y - this.interactiveEditor.dragOffset.y;
            this.redrawCanvas();
            this.updatePropertyPanel();
        }
    }
    
    handleCanvasMouseUp(e) {
        this.interactiveEditor.isDragging = false;
        this.interactiveEditor.isResizing = false;
    }
    
    handleCanvasClick(e) {
        // Handle click events for tools
    }
    
    getElementAt(x, y) {
        // Return the topmost element at the given coordinates
        for (let i = this.interactiveEditor.elements.length - 1; i >= 0; i--) {
            const element = this.interactiveEditor.elements[i];
            if (element.card !== this.interactiveEditor.currentCard) continue;
            
            if (x >= element.x && x <= element.x + element.width &&
                y >= element.y && y <= element.y + element.height) {
                return element;
            }
        }
        return null;
    }
    
    selectElement(element) {
        this.interactiveEditor.selectedElement = element;
        this.redrawCanvas();
        this.updatePropertyPanel();
        this.updateLayersPanel();
    }
    
    createElementAt(x, y) {
        const tool = this.interactiveEditor.currentTool;
        console.log('Creating element at:', x, y, 'with tool:', tool);
        const element = {
            id: Date.now(),
            type: tool,
            card: this.interactiveEditor.currentCard,
            x: x,
            y: y,
            width: 100,
            height: 50,
            text: tool === 'text' ? 'Text' : '',
            fontSize: 16,
            fontFamily: 'Arial',
            color: '#000000',
            backgroundColor: tool === 'shape' ? '#ffffff' : 'transparent',
            borderColor: '#000000',
            borderWidth: 1,
            rotation: 0,
            zIndex: this.interactiveEditor.elements.length
        };
        
        if (tool === 'image') {
            // Handle image upload
            this.uploadImage(element);
        } else {
            this.interactiveEditor.elements.push(element);
            this.selectElement(element);
            this.redrawCanvas();
            this.updateLayersPanel();
        }
    }
    
    uploadImage(element) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    element.imageData = e.target.result;
                    this.interactiveEditor.elements.push(element);
                    this.selectElement(element);
                    this.redrawCanvas();
                    this.updateLayersPanel();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }
    
    redrawCanvas() {
        const canvas = this.interactiveEditor.canvas;
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#e0e0e0';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        // Sort elements by z-index
        const elements = this.interactiveEditor.elements
            .filter(el => el.card === this.interactiveEditor.currentCard)
            .sort((a, b) => a.zIndex - b.zIndex);
        
        // Draw elements
        elements.forEach(element => {
            this.drawElement(ctx, element);
        });
        
        // Draw selection handles
        if (this.interactiveEditor.selectedElement) {
            this.drawSelectionHandles(ctx, this.interactiveEditor.selectedElement);
        }
    }
    
    drawElement(ctx, element) {
        ctx.save();
        
        // Apply transformations
        const centerX = element.x + element.width / 2;
        const centerY = element.y + element.height / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate(element.rotation * Math.PI / 180);
        ctx.translate(-centerX, -centerY);
        
        // Draw based on element type
        switch (element.type) {
            case 'text':
                this.drawTextElement(ctx, element);
                break;
            case 'image':
                this.drawImageElement(ctx, element);
                break;
            case 'shape':
                this.drawShapeElement(ctx, element);
                break;
            case 'answer-zone':
                this.drawAnswerZoneElement(ctx, element);
                break;
        }
        
        ctx.restore();
    }
    
    drawTextElement(ctx, element) {
        ctx.font = `${element.fontSize}px ${element.fontFamily}`;
        ctx.fillStyle = element.color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Word wrap text
        const words = element.text.split(' ');
        const lines = [];
        let currentLine = '';
        
        words.forEach(word => {
            const testLine = currentLine + (currentLine ? ' ' : '') + word;
            const metrics = ctx.measureText(testLine);
            if (metrics.width > element.width && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) lines.push(currentLine);
        
        // Draw lines
        lines.forEach((line, index) => {
            ctx.fillText(line, element.x, element.y + index * element.fontSize * 1.2);
        });
    }
    
    drawImageElement(ctx, element) {
        if (element.imageData) {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, element.x, element.y, element.width, element.height);
            };
            img.src = element.imageData;
        } else {
            // Draw placeholder
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(element.x, element.y, element.width, element.height);
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(element.x, element.y, element.width, element.height);
            ctx.fillStyle = '#999';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Image', element.x + element.width/2, element.y + element.height/2);
        }
    }
    
    drawShapeElement(ctx, element) {
        ctx.fillStyle = element.backgroundColor;
        ctx.fillRect(element.x, element.y, element.width, element.height);
        
        if (element.borderWidth > 0) {
            ctx.strokeStyle = element.borderColor;
            ctx.lineWidth = element.borderWidth;
            ctx.strokeRect(element.x, element.y, element.width, element.height);
        }
    }
    
    drawAnswerZoneElement(ctx, element) {
        // Draw dashed border for answer zone
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.strokeRect(element.x, element.y, element.width, element.height);
        ctx.setLineDash([]);
        
        // Draw label
        ctx.fillStyle = '#007bff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Answer Zone', element.x + 5, element.y + 15);
    }
    
    drawSelectionHandles(ctx, element) {
        const handleSize = 8;
        const handles = [
            { x: element.x - handleSize/2, y: element.y - handleSize/2 }, // top-left
            { x: element.x + element.width - handleSize/2, y: element.y - handleSize/2 }, // top-right
            { x: element.x - handleSize/2, y: element.y + element.height - handleSize/2 }, // bottom-left
            { x: element.x + element.width - handleSize/2, y: element.y + element.height - handleSize/2 } // bottom-right
        ];
        
        ctx.fillStyle = '#007bff';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        
        handles.forEach(handle => {
            ctx.fillRect(handle.x, handle.y, handleSize, handleSize);
            ctx.strokeRect(handle.x, handle.y, handleSize, handleSize);
        });
    }
    
    setupPropertyPanelEvents() {
        // Property input event listeners will be added here
        const propertyInputs = document.querySelectorAll('.ie-property-input');
        propertyInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateElementProperty(e.target.dataset.property, e.target.value);
            });
        });
    }
    
    setupLayerPanelEvents() {
        // Layer panel event listeners will be added here
    }
    
    updatePropertyPanel() {
        const element = this.interactiveEditor.selectedElement;
        const panel = document.getElementById('element-properties');
        
        if (!panel) return;
        
        if (!element) {
            panel.innerHTML = '<p>Select an element to edit its properties</p>';
            return;
        }
        
        // Create property form based on element type
        let propertiesHTML = `
            <div class="property-group">
                <label>Position</label>
                <div class="property-row">
                    <input type="number" data-property="x" value="${Math.round(element.x)}" placeholder="X">
                    <input type="number" data-property="y" value="${Math.round(element.y)}" placeholder="Y">
                </div>
            </div>
            <div class="property-group">
                <label>Size</label>
                <div class="property-row">
                    <input type="number" data-property="width" value="${Math.round(element.width)}" placeholder="Width">
                    <input type="number" data-property="height" value="${Math.round(element.height)}" placeholder="Height">
                </div>
            </div>
        `;
        
        if (element.type === 'text') {
            propertiesHTML += `
                <div class="property-group">
                    <label>Text</label>
                    <textarea data-property="text" placeholder="Enter text">${element.text || ''}</textarea>
                </div>
                <div class="property-group">
                    <label>Font Size</label>
                    <input type="number" data-property="fontSize" value="${element.fontSize}" min="8" max="72">
                </div>
                <div class="property-group">
                    <label>Color</label>
                    <input type="color" data-property="color" value="${element.color}">
                </div>
            `;
        }
        
        if (element.type === 'shape') {
            propertiesHTML += `
                <div class="property-group">
                    <label>Background Color</label>
                    <input type="color" data-property="backgroundColor" value="${element.backgroundColor}">
                </div>
                <div class="property-group">
                    <label>Border Color</label>
                    <input type="color" data-property="borderColor" value="${element.borderColor}">
                </div>
                <div class="property-group">
                    <label>Border Width</label>
                    <input type="number" data-property="borderWidth" value="${element.borderWidth}" min="0" max="10">
                </div>
            `;
        }
        
        panel.innerHTML = propertiesHTML;
        
        // Add event listeners to new inputs
        panel.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateElementProperty(e.target.dataset.property, e.target.value);
            });
        });
    }
    
    updateElementProperty(property, value) {
        const element = this.interactiveEditor.selectedElement;
        if (!element) return;
        
        // Convert value to appropriate type
        if (['x', 'y', 'width', 'height', 'fontSize', 'borderWidth', 'rotation', 'zIndex'].includes(property)) {
            value = parseFloat(value) || 0;
        }
        
        element[property] = value;
        this.redrawCanvas();
        this.updateLayersPanel();
    }
    
    updateLayersPanel() {
        const panel = document.getElementById('layers-list');
        if (!panel) return;
        
        // Clear current layers
        panel.innerHTML = '';
        
        // Get elements for current card, sorted by z-index (reverse for UI)
        const elements = this.interactiveEditor.elements
            .filter(el => el.card === this.interactiveEditor.currentCard)
            .sort((a, b) => b.zIndex - a.zIndex);
        
        // Create layer items
        elements.forEach(element => {
            const layerItem = document.createElement('div');
            layerItem.className = 'ie-layer-item';
            if (element === this.interactiveEditor.selectedElement) {
                layerItem.classList.add('selected');
            }
            
            const icon = this.getElementIcon(element.type);
            const name = element.text || element.type.charAt(0).toUpperCase() + element.type.slice(1);
            
            layerItem.innerHTML = `
                <span class="layer-icon">${icon}</span>
                <span class="layer-name">${name}</span>
                <div class="layer-actions">
                    <button class="layer-btn" onclick="app.moveElementUp('${element.id}')">↑</button>
                    <button class="layer-btn" onclick="app.moveElementDown('${element.id}')">↓</button>
                    <button class="layer-btn" onclick="app.deleteElement('${element.id}')">×</button>
                </div>
            `;
            
            layerItem.addEventListener('click', () => {
                this.selectElement(element);
            });
            
            panel.appendChild(layerItem);
        });
    }
    
    getElementIcon(type) {
        const icons = {
            text: '📝',
            image: '🖼️',
            shape: '⬜',
            'answer-zone': '💭'
        };
        return icons[type] || '❓';
    }
    
    moveElementUp(elementId) {
        const element = this.interactiveEditor.elements.find(el => el.id == elementId);
        if (element) {
            element.zIndex += 1;
            this.redrawCanvas();
            this.updateLayersPanel();
        }
    }
    
    moveElementDown(elementId) {
        const element = this.interactiveEditor.elements.find(el => el.id == elementId);
        if (element && element.zIndex > 0) {
            element.zIndex -= 1;
            this.redrawCanvas();
            this.updateLayersPanel();
        }
    }
    
    deleteElement(elementId) {
        const index = this.interactiveEditor.elements.findIndex(el => el.id == elementId);
        if (index > -1) {
            this.interactiveEditor.elements.splice(index, 1);
            if (this.interactiveEditor.selectedElement?.id == elementId) {
                this.interactiveEditor.selectedElement = null;
            }
            this.redrawCanvas();
            this.updateLayersPanel();
            this.updatePropertyPanel();
        }
    }
    
    // Global functions for onclick handlers
    moveElementUp(elementId) {
        return this.moveElementUp(elementId);
    }
    
    moveElementDown(elementId) {
        return this.moveElementDown(elementId);
    }
    
    deleteElement(elementId) {
        return this.deleteElement(elementId);
    }
    
    // Interactive Editor View Management
    switchToInteractiveEditor() {
        console.log('Switching to Professional Card Editor');
        
        // Hide all views first
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        // Show the interactive editor view
        const interactiveView = document.getElementById('interactive-create-view');
        if (interactiveView) {
            interactiveView.classList.add('active');
        }
        
        // Initialize the professional editor if not already done
        if (!this.professionalEditor) {
            this.initInteractiveEditor();
        }
        
        // Set up the editor after DOM is ready
        setTimeout(() => {
            this.setupProfessionalEditorEvents(); // Re-setup events for newly visible elements
            this.initCardCanvas();
        }, 200); // Longer delay to ensure DOM is ready
        
        // Set up back button for interactive editor
        const backBtn = document.getElementById('back-to-home-from-interactive');
        if (backBtn) {
            backBtn.onclick = () => this.showView('home');
        }
    }
    
    switchToSimpleEditor() {
        console.log('Switching to Simple Editor');
        
        // Hide interactive editor
        const interactiveView = document.getElementById('interactive-create-view');
        if (interactiveView) {
            interactiveView.classList.remove('active');
        }
        
        // Show the create view properly
        this.showView('create');
    }
    
    saveInteractiveDeck() {
        console.log('Saving Interactive Deck');
        
        const deckName = document.getElementById('interactive-deck-name')?.value;
        const deckSubject = document.getElementById('interactive-deck-subject')?.value;
        
        if (!deckName || !deckSubject) {
            this.showNotification('Missing Information', 'Please enter deck name and subject', 'warning');
            return;
        }
        
        // Create deck from interactive editor elements
        const frontElements = this.interactiveEditor.elements.filter(el => el.card === 'front');
        const backElements = this.interactiveEditor.elements.filter(el => el.card === 'back');
        
        // Convert interactive elements to standard cards
        const cards = this.convertInteractiveElementsToCards(frontElements, backElements);
        
        if (cards.length === 0) {
            this.showNotification('No Content', 'Please add some elements to create cards', 'warning');
            return;
        }
        
        // Create the deck
        const deck = {
            id: Date.now(),
            name: deckName,
            subject: deckSubject,
            cards: cards,
            style: 'modern', // Interactive decks use modern style
            color: 'blue',
            createdAt: new Date().toISOString(),
            interactiveElements: {
                front: frontElements,
                back: backElements
            }
        };
        
        // Save deck
        this.decks.push(deck);
        this.saveDecks();
        
        // Clear interactive editor
        this.clearInteractiveEditor();
        
        // Show success and return to home
        this.showNotification('Deck Created!', `"${deckName}" has been saved successfully`, 'success');
        this.showView('home');
    }
    
    convertInteractiveElementsToCards(frontElements, backElements) {
        // For now, create a single card from the elements
        // In a more advanced version, this could create multiple cards based on answer zones
        
        const cards = [];
        
        // Find text elements to use as question/answer
        const frontTexts = frontElements.filter(el => el.type === 'text');
        const backTexts = backElements.filter(el => el.type === 'text');
        const answerZones = [...frontElements, ...backElements].filter(el => el.type === 'answer-zone');
        
        if (frontTexts.length > 0 && backTexts.length > 0) {
            const card = {
                question: frontTexts.map(el => el.text).join(' '),
                answer: backTexts.map(el => el.text).join(' '),
                explanation: answerZones.length > 0 ? 'Interactive card with answer zones' : '',
                hint: 'Use the interactive elements to help you answer'
            };
            cards.push(card);
        }
        
        return cards;
    }
    
    clearInteractiveEditor() {
        if (this.interactiveEditor) {
            this.interactiveEditor.elements = [];
            this.interactiveEditor.selectedElement = null;
            this.redrawCanvas();
            this.updateLayersPanel();
            this.updatePropertyPanel();
        }
        
        // Clear form fields
        document.getElementById('interactive-deck-name').value = '';
        document.getElementById('interactive-deck-subject').value = '';
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
        
        // Apply deck style and color to all study card elements
        const studyCards = document.querySelectorAll('.study-card');
        
        // Get deck's style and color (with fallbacks for older decks)
        const deckStyle = this.currentDeck.style || 'classic';
        const deckColor = this.currentDeck.color || 'blue';
        
        console.log('Applying card styles:', { deckStyle, deckColor, cardCount: studyCards.length });
        
        studyCards.forEach(studyCard => {
            // Remove existing style and animation classes
            studyCard.classList.remove('classic', 'modern', 'vintage', 'neon');
            studyCard.classList.remove('blue', 'green', 'purple', 'red', 'orange', 'teal');
            studyCard.classList.remove('fall-correct', 'slide-incorrect', 'slide-out', 'slide-in', 'bounce-in', 'slide-in-top');
            
            // Apply deck's style and color
            studyCard.classList.add(deckStyle, deckColor);
            
            // Reset any inline styles from animations
            studyCard.style.transform = '';
            studyCard.style.opacity = '1';
        });
        
        // Double-check that the classes were applied
        setTimeout(() => {
            studyCards.forEach(studyCard => {
                if (!studyCard.classList.contains(deckStyle) || !studyCard.classList.contains(deckColor)) {
                    console.warn('Card styles not applied properly, retrying...');
                    studyCard.classList.add(deckStyle, deckColor);
                }
            });
        }, 10);
        
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
        const studyCard = document.getElementById('flip-card');
        
        // Clear any existing animation classes
        studyCard.classList.remove('slide-out', 'slide-in', 'slide-incorrect', 'fall-correct', 'bounce-in');
        
        // Add fall animation
        studyCard.classList.add('fall-correct');
        
        // Prepare next card preview
        this.prepareNextCardPreview();
    }

    animateIncorrectAnswer() {
        const studyCard = document.getElementById('flip-card');
        
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
            const isIncorrectAnswer = document.getElementById('flip-card').classList.contains('slide-incorrect');
            
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
        const studyCard = document.getElementById('flip-card');
        
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
            // Update Adaptive lock status in case user just unlocked it
            
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
                        <span class="generated-badge">🤖 Generated</span>
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
        } else if (viewName === 'create') {
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

    // 💡 Adaptive Hint System
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
                // Adaptive failed - refund and show error
                this.powerUps.hints++;
                this.savePowerUps();
                this.updatePowerUpDisplay();
                return false;
            }
        } catch (error) {
            console.error('Hint generation failed:', error);
            this.showNotification('Hints are only available for cards with a custom hint.', 'info');
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
        // Check if card has a custom hint
        if (card.customHint && card.customHint.trim()) {
            return {
                type: 'custom',
                text: card.customHint,
                source: 'Custom hint from deck creator'
            };
        }
        return null;
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

        // Try multiple Adaptive models with the improved prompt
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
                console.log(`🤖 Trying Adaptive model: ${model.name}`);
                
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
                    
                    // Additional cleaning - remove common Adaptive artifacts
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
        
        // If all Adaptive models fail, try a simpler approach
        return await this.getSimpleAdaptiveHint(question, answer);
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
            'as an assistant', 'i\'m not sure', 'i apologize', 'sorry,',
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

    async getSimpleAdaptiveHint(question, answer) {
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
            console.log('Simple Adaptive hint failed:', error);
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
        
        const aiDisclaimer = '';
        
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
        
        // Look up the deck
        let deck = this.decks.find(d => d.id === deckId);
        const isGeneratedDeck = false;
        
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
            // Enhanced Adaptive learning data
            deckType: isGeneratedDeck ? 'generated' : 'custom',
            subject: deck?.subject || 'Unknown',
            difficulty: deck?.difficulty || 'Unknown',
            // Additional Adaptive metadata for generated decks
            ...(isGeneratedDeck && deck.generatedMetadata ? {
                generationType: deck.generationType,
                generatedConfidence: deck.confidence,
                targetWeakness: deck.generatedMetadata.targetWeakness
            } : {}),
            // Power-up usage tracking
            powerUpsUsed: this.currentSession?.powerUpsUsed || {}
        };
        
        sessions.push(session);
        this.saveSessionData(sessions);
        
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
                        <small class="hint-help">This hint will be shown when users use the hint power-up. If empty, a hint will be generated.</small>
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
    startStudy(deckId) {
        let deck = this.decks.find(d => d.id === deckId);
        
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
            // Show Next/Prev buttons for multi-card navigation + Skip to Cards
            const prevDisabled = this.currentTitleCardIndex === 0 ? 'disabled' : '';
            const nextDisabled = isLastCard ? 'disabled' : '';
            
            titleCardActions.innerHTML = `
                <button class="btn btn-secondary" onclick="previousTitleCard()" ${prevDisabled}>
                    ← Previous
                </button>
                <button class="btn btn-primary" onclick="nextTitleCard()" ${nextDisabled}>
                    Next →
                </button>
                <button class="btn btn-outline" onclick="skipToStudy()" title="Skip all title cards and go directly to flashcards">
                    Skip to Cards
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

    // Professional Card Editor Methods
    initInteractiveEditor() {
        console.log('Initializing Professional Card Editor...');
        
        this.professionalEditor = {
            elements: [],
            selectedElement: null,
            isDragging: false,
            dragOffset: { x: 0, y: 0 },
            isResizing: false,
            currentTool: 'select',
            currentCard: 1,
            currentSide: 'front',
            selectedStyle: 'neon',
            selectedTheme: 'blue',
            zoom: 1,
            history: [{ action: 'Document Created', timestamp: Date.now() }],
            historyIndex: 0,
            layers: [{ id: 'background', name: 'Background', visible: true, locked: true }]
        };
        
        this.setupProfessionalEditorEvents();
        this.initCardCanvas();
        console.log('Professional Card Editor initialized successfully');
    }
    
    setupProfessionalEditorEvents() {
        // Tool button events
        document.querySelectorAll('.tool-button[data-tool]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTool(e.target.dataset.tool);
            });
        });

        // Style selection events
        document.querySelectorAll('.style-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectCardStyle(e.target.dataset.style);
            });
        });

        // Theme selection events
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectTheme(e.target.dataset.theme);
            });
        });

        // Side tab events
        document.querySelectorAll('.side-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchSide(e.target.dataset.side);
            });
        });

        // Canvas events
        const canvas = document.getElementById('editing-surface');
        if (canvas) {
            canvas.addEventListener('mousedown', (e) => this.handleCanvasMouseDown(e));
            canvas.addEventListener('mousemove', (e) => this.handleCanvasMouseMove(e));
            canvas.addEventListener('mouseup', (e) => this.handleCanvasMouseUp(e));
            canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
            
            // Prevent context menu
            canvas.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.showContextMenu(e);
            });
        }

        // Format controls
        document.getElementById('font-family-select')?.addEventListener('change', (e) => {
            this.updateSelectedElementProperty('fontFamily', e.target.value);
        });

        document.getElementById('font-size-input')?.addEventListener('input', (e) => {
            this.updateSelectedElementProperty('fontSize', e.target.value + 'px');
        });

        document.getElementById('text-color-picker')?.addEventListener('change', (e) => {
            this.updateSelectedElementProperty('color', e.target.value);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));

        // Asset items
        document.querySelectorAll('.asset-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.dataset.shape) {
                    this.addShape(e.target.dataset.shape);
                } else if (e.target.dataset.icon) {
                    this.addIcon(e.target.dataset.icon);
                }
            });
        });

        // Layer controls
        document.querySelectorAll('.layer-control-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.textContent;
                if (action === '➕') this.addLayer();
                else if (action === '🗑️') this.deleteLayer();
                else if (action === '📄') this.duplicateLayer();
            });
        });

        console.log('Professional editor events set up successfully');
    }
    
    initCardCanvas() {
        const cardCanvas = document.getElementById('card-canvas');
        if (cardCanvas) {
            // Set initial style and theme
            cardCanvas.setAttribute('data-style', this.professionalEditor.selectedStyle);
            cardCanvas.setAttribute('data-theme', this.professionalEditor.selectedTheme);
            this.updateCanvasBackground();
        }
    }

    selectTool(tool) {
        this.professionalEditor.currentTool = tool;
        
        // Update UI
        document.querySelectorAll('.tool-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.tool-button[data-tool="${tool}"]`)?.classList.add('active');
        
        // Update cursor
        const editingSurface = document.getElementById('editing-surface');
        if (editingSurface) {
            switch (tool) {
                case 'select':
                    editingSurface.style.cursor = 'default';
                    break;
                case 'text':
                    editingSurface.style.cursor = 'text';
                    break;
                default:
                    editingSurface.style.cursor = 'crosshair';
            }
        }
        
        console.log('Selected tool:', tool);
    }

    selectCardStyle(style) {
        this.professionalEditor.selectedStyle = style;
        
        // Update UI
        document.querySelectorAll('.style-option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector(`.style-option[data-style="${style}"]`)?.classList.add('active');
        
        // Update canvas
        const cardCanvas = document.getElementById('card-canvas');
        if (cardCanvas) {
            cardCanvas.setAttribute('data-style', style);
            this.updateCanvasBackground();
        }
        
        console.log('Selected style:', style);
    }

    selectTheme(theme) {
        this.professionalEditor.selectedTheme = theme;
        
        // Update UI
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
        });
        document.querySelector(`.theme-option[data-theme="${theme}"]`)?.classList.add('active');
        
        // Update canvas
        const cardCanvas = document.getElementById('card-canvas');
        if (cardCanvas) {
            cardCanvas.setAttribute('data-theme', theme);
        }
        
        console.log('Selected theme:', theme);
    }

    switchSide(side) {
        this.professionalEditor.currentSide = side;
        
        // Update UI
        document.querySelectorAll('.side-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`.side-tab[data-side="${side}"]`)?.classList.add('active');
        
        // Load elements for this side
        this.loadSideElements();
        
        console.log('Switched to side:', side);
    }

    updateCanvasBackground() {
        // This method updates the visual appearance of the canvas based on selected style
        const cardCanvas = document.getElementById('card-canvas');
        if (!cardCanvas) return;
        
        // The CSS handles the visual styling based on data attributes
        // We just need to ensure the canvas reflects the current state
        this.rerenderElements();
    }

    loadSideElements() {
        // Clear current display and show elements for current side
        const editingSurface = document.getElementById('editing-surface');
        if (!editingSurface) return;
        
        // Clear existing elements
        editingSurface.innerHTML = '';
        
        // Add elements for current side
        const sideElements = this.professionalEditor.elements.filter(
            el => el.side === this.professionalEditor.currentSide && 
                  el.card === this.professionalEditor.currentCard
        );
        
        sideElements.forEach(element => {
            this.renderElement(element);
        });
        
        this.updateLayersPanel();
    }

    editorAction(action) {
        switch (action) {
            case 'new':
                this.newDocument();
                break;
            case 'save':
                this.saveDocument();
                break;
            case 'export':
                this.exportDocument();
                break;
            case 'undo':
                this.undo();
                break;
            case 'redo':
                this.redo();
                break;
            default:
                console.log('Unknown editor action:', action);
        }
    }

    zoomCanvas(zoomLevel) {
        this.professionalEditor.zoom = zoomLevel;
        
        // Update zoom UI
        document.querySelectorAll('.zoom-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.zoom-btn[onclick*="${zoomLevel}"]`)?.classList.add('active');
        
        // Apply zoom to canvas wrapper
        const canvasWrapper = document.getElementById('canvas-wrapper');
        if (canvasWrapper) {
            canvasWrapper.style.transform = `scale(${zoomLevel})`;
        }
        
        console.log('Zoom level set to:', zoomLevel);
    }
    
    handleCanvasMouseDown(e) {
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.professionalEditor.zoom;
        const y = (e.clientY - rect.top) / this.professionalEditor.zoom;
        
        if (this.professionalEditor.currentTool === 'select') {
            const element = this.getElementAt(x, y);
            if (element) {
                this.selectElement(element);
                this.professionalEditor.isDragging = true;
                this.professionalEditor.dragOffset = {
                    x: x - element.x,
                    y: y - element.y
                };
            } else {
                this.selectElement(null);
            }
        } else {
            this.createElement(x, y);
        }
    }

    handleCanvasMouseMove(e) {
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.professionalEditor.zoom;
        const y = (e.clientY - rect.top) / this.professionalEditor.zoom;
        
        // Update cursor position display
        document.getElementById('cursor-position').textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;
        
        if (this.professionalEditor.isDragging && this.professionalEditor.selectedElement) {
            const element = this.professionalEditor.selectedElement;
            element.x = Math.max(0, x - this.professionalEditor.dragOffset.x);
            element.y = Math.max(0, y - this.professionalEditor.dragOffset.y);
            
            this.updateElementPosition(element);
            this.updatePropertiesPanel();
        }
    }

    handleCanvasMouseUp(e) {
        if (this.professionalEditor.isDragging) {
            this.addToHistory('Move Element');
        }
        
        this.professionalEditor.isDragging = false;
        this.professionalEditor.isResizing = false;
    }

    handleCanvasClick(e) {
        // Handle tool-specific click actions
    }

    getElementAt(x, y) {
        const elements = this.professionalEditor.elements.filter(
            el => el.side === this.professionalEditor.currentSide && 
                  el.card === this.professionalEditor.currentCard
        );
        
        for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            if (x >= element.x && x <= element.x + element.width &&
                y >= element.y && y <= element.y + element.height) {
                return element;
            }
        }
        return null;
    }

    createElement(x, y) {
        const tool = this.professionalEditor.currentTool;
        const element = {
            id: `element_${Date.now()}`,
            type: tool,
            side: this.professionalEditor.currentSide,
            card: this.professionalEditor.currentCard,
            x: x,
            y: y,
            width: tool === 'text' ? 200 : 100,
            height: tool === 'text' ? 50 : 100,
            zIndex: this.professionalEditor.elements.length,
            style: {
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#000000',
                backgroundColor: tool === 'shape' ? '#e2e8f0' : 'transparent',
                borderColor: '#d1d5db',
                borderWidth: '1px',
                borderRadius: '4px'
            }
        };

        if (tool === 'text') {
            element.content = 'Enter text here';
            element.editable = true;
        } else if (tool === 'image') {
            this.handleImageUpload(element);
            return;
        } else if (tool === 'shape') {
            element.shapeType = 'rectangle';
        }

        this.professionalEditor.elements.push(element);
        this.renderElement(element);
        this.selectElement(element);
        this.addToHistory(`Add ${tool} element`);
        this.updateLayersPanel();
        
        console.log('Created element:', element);
    }

    renderElement(element) {
        const editingSurface = document.getElementById('editing-surface');
        if (!editingSurface) return;

        const elementDiv = document.createElement('div');
        elementDiv.className = `editor-element ${element.type}-element`;
        elementDiv.id = element.id;
        elementDiv.style.cssText = `
            left: ${element.x}px;
            top: ${element.y}px;
            width: ${element.width}px;
            height: ${element.height}px;
            z-index: ${element.zIndex};
            font-family: ${element.style.fontFamily};
            font-size: ${element.style.fontSize};
            color: ${element.style.color};
            background-color: ${element.style.backgroundColor};
            border: ${element.style.borderWidth} solid ${element.style.borderColor};
            border-radius: ${element.style.borderRadius};
        `;

        if (element.type === 'text') {
            elementDiv.innerHTML = `<div contenteditable="true" style="width: 100%; height: 100%; outline: none; padding: 8px;">${element.content}</div>`;
            const textContent = elementDiv.querySelector('[contenteditable]');
            textContent.addEventListener('blur', () => {
                element.content = textContent.innerHTML;
                this.addToHistory('Edit text');
            });
        } else if (element.type === 'image' && element.imageData) {
            elementDiv.innerHTML = `<img src="${element.imageData}" style="width: 100%; height: 100%; object-fit: cover;" alt="Image">`;
        } else if (element.type === 'shape') {
            // Shape styling is handled by CSS
        }

        elementDiv.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            this.selectElement(element);
        });

        editingSurface.appendChild(elementDiv);
    }

    selectElement(element) {
        // Remove selection from all elements
        document.querySelectorAll('.editor-element').forEach(el => {
            el.classList.remove('selected');
        });

        this.professionalEditor.selectedElement = element;

        if (element) {
            // Add selection to current element
            document.getElementById(element.id)?.classList.add('selected');
            this.addResizeHandles(element);
            document.getElementById('selection-info').textContent = `Selected: ${element.type} element`;
        } else {
            document.getElementById('selection-info').textContent = 'No selection';
        }

        this.updatePropertiesPanel();
        this.updateLayersPanel();
    }

    addResizeHandles(element) {
        // Remove existing handles
        document.querySelectorAll('.resize-handle').forEach(handle => handle.remove());

        const elementDiv = document.getElementById(element.id);
        if (!elementDiv) return;

        const positions = ['nw', 'ne', 'sw', 'se', 'n', 's', 'w', 'e'];
        positions.forEach(pos => {
            const handle = document.createElement('div');
            handle.className = `resize-handle ${pos}`;
            handle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.startResize(element, pos, e);
            });
            elementDiv.appendChild(handle);
        });
    }

    updateElementPosition(element) {
        const elementDiv = document.getElementById(element.id);
        if (elementDiv) {
            elementDiv.style.left = element.x + 'px';
            elementDiv.style.top = element.y + 'px';
        }
    }

    handleKeyboardShortcuts(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'z':
                    e.preventDefault();
                    if (e.shiftKey) {
                        this.redo();
                    } else {
                        this.undo();
                    }
                    break;
                case 's':
                    e.preventDefault();
                    this.saveDocument();
                    break;
                case 'c':
                    e.preventDefault();
                    this.copyElement();
                    break;
                case 'v':
                    e.preventDefault();
                    this.pasteElement();
                    break;
                case 'Delete':
                case 'Backspace':
                    e.preventDefault();
                    this.deleteSelectedElement();
                    break;
            }
        }

        // Tool shortcuts
        switch (e.key) {
            case 'v':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('select');
                break;
            case 't':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('text');
                break;
            case 'u':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('shape');
                break;
            case 'i':
                if (!e.ctrlKey && !e.metaKey) this.selectTool('image');
                break;
        }
    }
    
    updatePropertiesPanel() {
        const propertiesContainer = document.getElementById('element-properties');
        if (!propertiesContainer) return;

        const element = this.professionalEditor.selectedElement;
        
        if (!element) {
            propertiesContainer.innerHTML = `
                <div class="no-selection">
                    <span class="no-selection-icon">👆</span>
                    <p>Select an element to edit its properties</p>
                </div>
            `;
            return;
        }

        propertiesContainer.innerHTML = `
            <div class="property-group">
                <label>Position</label>
                <div class="property-row">
                    <input type="number" id="element-x" value="${Math.round(element.x)}" placeholder="X">
                    <input type="number" id="element-y" value="${Math.round(element.y)}" placeholder="Y">
                </div>
            </div>
            <div class="property-group">
                <label>Size</label>
                <div class="property-row">
                    <input type="number" id="element-width" value="${element.width}" placeholder="Width">
                    <input type="number" id="element-height" value="${element.height}" placeholder="Height">
                </div>
            </div>
            ${element.type === 'text' ? `
                <div class="property-group">
                    <label>Text Content</label>
                    <textarea id="element-text" rows="3">${element.content}</textarea>
                </div>
                <div class="property-group">
                    <label>Font Family</label>
                    <select id="element-font-family">
                        <option value="Inter" ${element.style.fontFamily === 'Inter' ? 'selected' : ''}>Inter</option>
                        <option value="Arial" ${element.style.fontFamily === 'Arial' ? 'selected' : ''}>Arial</option>
                        <option value="Helvetica" ${element.style.fontFamily === 'Helvetica' ? 'selected' : ''}>Helvetica</option>
                        <option value="Times New Roman" ${element.style.fontFamily === 'Times New Roman' ? 'selected' : ''}>Times New Roman</option>
                    </select>
                </div>
                <div class="property-group">
                    <label>Font Size</label>
                    <input type="number" id="element-font-size" value="${parseInt(element.style.fontSize)}" min="8" max="128">
                </div>
            ` : ''}
            <div class="property-group">
                <label>Colors</label>
                <div class="property-row">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                        <label style="font-size: 0.7rem;">Text</label>
                        <input type="color" id="element-color" value="${element.style.color}">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                        <label style="font-size: 0.7rem;">Background</label>
                        <input type="color" id="element-bg-color" value="${element.style.backgroundColor}">
                    </div>
                </div>
            </div>
            <div class="property-group">
                <label>Border</label>
                <div class="property-row">
                    <input type="color" id="element-border-color" value="${element.style.borderColor}">
                    <input type="number" id="element-border-width" value="${parseInt(element.style.borderWidth)}" min="0" max="10">
                </div>
            </div>
        `;

        // Add event listeners for property changes
        ['element-x', 'element-y', 'element-width', 'element-height'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', () => this.updateElementFromProperties());
            }
        });

        if (element.type === 'text') {
            ['element-text', 'element-font-family', 'element-font-size'].forEach(id => {
                const input = document.getElementById(id);
                if (input) {
                    input.addEventListener('input', () => this.updateElementFromProperties());
                }
            });
        }

        ['element-color', 'element-bg-color', 'element-border-color', 'element-border-width'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', () => this.updateElementFromProperties());
            }
        });
    }

    updateElementFromProperties() {
        const element = this.professionalEditor.selectedElement;
        if (!element) return;

        // Update position and size
        const x = document.getElementById('element-x')?.value;
        const y = document.getElementById('element-y')?.value;
        const width = document.getElementById('element-width')?.value;
        const height = document.getElementById('element-height')?.value;

        if (x !== undefined) element.x = parseFloat(x);
        if (y !== undefined) element.y = parseFloat(y);
        if (width !== undefined) element.width = parseFloat(width);
        if (height !== undefined) element.height = parseFloat(height);

        // Update text properties
        if (element.type === 'text') {
            const text = document.getElementById('element-text')?.value;
            const fontFamily = document.getElementById('element-font-family')?.value;
            const fontSize = document.getElementById('element-font-size')?.value;

            if (text !== undefined) element.content = text;
            if (fontFamily) element.style.fontFamily = fontFamily;
            if (fontSize) element.style.fontSize = fontSize + 'px';
        }

        // Update colors and border
        const color = document.getElementById('element-color')?.value;
        const bgColor = document.getElementById('element-bg-color')?.value;
        const borderColor = document.getElementById('element-border-color')?.value;
        const borderWidth = document.getElementById('element-border-width')?.value;

        if (color) element.style.color = color;
        if (bgColor) element.style.backgroundColor = bgColor;
        if (borderColor) element.style.borderColor = borderColor;
        if (borderWidth !== undefined) element.style.borderWidth = borderWidth + 'px';

        // Re-render the element
        this.rerenderElement(element);
    }

    rerenderElement(element) {
        const elementDiv = document.getElementById(element.id);
        if (!elementDiv) return;

        elementDiv.style.cssText = `
            left: ${element.x}px;
            top: ${element.y}px;
            width: ${element.width}px;
            height: ${element.height}px;
            z-index: ${element.zIndex};
            font-family: ${element.style.fontFamily};
            font-size: ${element.style.fontSize};
            color: ${element.style.color};
            background-color: ${element.style.backgroundColor};
            border: ${element.style.borderWidth} solid ${element.style.borderColor};
            border-radius: ${element.style.borderRadius};
        `;

        if (element.type === 'text') {
            const textContent = elementDiv.querySelector('[contenteditable]');
            if (textContent) {
                textContent.innerHTML = element.content;
            }
        }
    }

    updateLayersPanel() {
        const layersList = document.getElementById('editor-layers-list');
        if (!layersList) return;

        const currentElements = this.professionalEditor.elements.filter(
            el => el.side === this.professionalEditor.currentSide && 
                  el.card === this.professionalEditor.currentCard
        );

        layersList.innerHTML = `
            <div class="layer-item">
                <span class="layer-visibility">👁️</span>
                <span class="layer-name">Background</span>
                <span class="layer-lock">🔒</span>
            </div>
        `;

        currentElements.reverse().forEach(element => {
            const layerItem = document.createElement('div');
            layerItem.className = `layer-item ${element === this.professionalEditor.selectedElement ? 'active' : ''}`;
            layerItem.innerHTML = `
                <span class="layer-visibility">👁️</span>
                <span class="layer-name">${element.type} ${element.id.split('_')[1]}</span>
                <span class="layer-lock"></span>
            `;
            layerItem.addEventListener('click', () => this.selectElement(element));
            layersList.appendChild(layerItem);
        });
    }

    addToHistory(action) {
        this.professionalEditor.history.push({
            action: action,
            timestamp: Date.now(),
            state: JSON.parse(JSON.stringify(this.professionalEditor.elements))
        });

        // Update history panel
        this.updateHistoryPanel();
    }

    updateHistoryPanel() {
        const historyContainer = document.querySelector('.history-container');
        if (!historyContainer) return;

        historyContainer.innerHTML = '';
        this.professionalEditor.history.slice(-10).forEach((item, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = `history-item ${index === this.professionalEditor.history.length - 1 ? 'active' : ''}`;
            historyItem.innerHTML = `
                <span class="history-icon">📝</span>
                <span class="history-action">${item.action}</span>
            `;
            historyContainer.appendChild(historyItem);
        });
    }

    handleImageUpload(element) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    element.imageData = event.target.result;
                    this.professionalEditor.elements.push(element);
                    this.renderElement(element);
                    this.selectElement(element);
                    this.addToHistory('Add image');
                    this.updateLayersPanel();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }

    rerenderElements() {
        const editingSurface = document.getElementById('editing-surface');
        if (!editingSurface) return;

        editingSurface.innerHTML = '';
        this.loadSideElements();
    }

    // Placeholder methods for additional functionality
    newDocument() { console.log('New document'); }
    saveDocument() { console.log('Save document'); }
    exportDocument() { console.log('Export document'); }
    undo() { console.log('Undo'); }
    redo() { console.log('Redo'); }
    copyElement() { console.log('Copy element'); }
    pasteElement() { console.log('Paste element'); }
    deleteSelectedElement() { 
        if (this.professionalEditor.selectedElement) {
            this.deleteElement(this.professionalEditor.selectedElement);
        }
    }
    deleteElement(element) {
        const index = this.professionalEditor.elements.indexOf(element);
        if (index > -1) {
            this.professionalEditor.elements.splice(index, 1);
            document.getElementById(element.id)?.remove();
            this.selectElement(null);
            this.addToHistory('Delete element');
            this.updateLayersPanel();
        }
    }
    showContextMenu(e) { console.log('Show context menu'); }
    addShape(shape) { console.log('Add shape:', shape); }
    addIcon(icon) { console.log('Add icon:', icon); }
    addLayer() { console.log('Add layer'); }
    deleteLayer() { console.log('Delete layer'); }
    duplicateLayer() { console.log('Duplicate layer'); }
    
    switchCanvasSide(side) {
        this.switchCard(side);
    }
    
    initCanvas() {
        const canvas = this.interactiveEditor.canvas;
        console.log('initCanvas called, canvas:', canvas);
        if (!canvas) {
            console.error('Canvas not found!');
            return;
        }
        
        // Set canvas size
        canvas.width = 800;
        canvas.height = 600;
        console.log('Canvas initialized with size:', canvas.width, 'x', canvas.height);
        
        // Clear canvas
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw card background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#e0e0e0';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        // Load current card elements
        this.loadCardElements(this.interactiveEditor.currentCard);
    }
    
    loadCardElements(card) {
        // Clear current elements
        this.interactiveEditor.elements = this.interactiveEditor.elements.filter(el => el.card === card);
        
        // Redraw canvas
        this.redrawCanvas();
        
        // Update layers panel
        this.updateLayersPanel();
    }
    
    handleCanvasMouseDown(e) {
        console.log('Canvas mouse down event');
        const rect = this.interactiveEditor.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.interactiveEditor.zoom;
        const y = (e.clientY - rect.top) / this.interactiveEditor.zoom;
        console.log('Mouse position:', x, y, 'Current tool:', this.interactiveEditor.currentTool);
        
        if (this.interactiveEditor.currentTool === 'select') {
            // Check if clicking on an element
            const element = this.getElementAt(x, y);
            if (element) {
                this.selectElement(element);
                this.interactiveEditor.isDragging = true;
                this.interactiveEditor.dragOffset = {
                    x: x - element.x,
                    y: y - element.y
                };
            } else {
                this.selectElement(null);
            }
        } else {
            // Create new element
            this.createElementAt(x, y);
        }
    }
    
    handleCanvasMouseMove(e) {
        const rect = this.interactiveEditor.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.interactiveEditor.zoom;
        const y = (e.clientY - rect.top) / this.interactiveEditor.zoom;
        
        if (this.interactiveEditor.isDragging && this.interactiveEditor.selectedElement) {
            // Move selected element
            this.interactiveEditor.selectedElement.x = x - this.interactiveEditor.dragOffset.x;
            this.interactiveEditor.selectedElement.y = y - this.interactiveEditor.dragOffset.y;
            this.redrawCanvas();
            this.updatePropertyPanel();
        }
    }
    
    handleCanvasMouseUp(e) {
        this.interactiveEditor.isDragging = false;
        this.interactiveEditor.isResizing = false;
    }
    
    handleCanvasClick(e) {
        // Handle click events for tools
    }
    
    getElementAt(x, y) {
        // Return the topmost element at the given coordinates
        for (let i = this.interactiveEditor.elements.length - 1; i >= 0; i--) {
            const element = this.interactiveEditor.elements[i];
            if (element.card !== this.interactiveEditor.currentCard) continue;
            
            if (x >= element.x && x <= element.x + element.width &&
                y >= element.y && y <= element.y + element.height) {
                return element;
            }
        }
        return null;
    }
    
    selectElement(element) {
        this.interactiveEditor.selectedElement = element;
        this.redrawCanvas();
        this.updatePropertyPanel();
        this.updateLayersPanel();
    }
    
    createElementAt(x, y) {
        const tool = this.interactiveEditor.currentTool;
        console.log('Creating element at:', x, y, 'with tool:', tool);
        const element = {
            id: Date.now(),
            type: tool,
            card: this.interactiveEditor.currentCard,
            x: x,
            y: y,
            width: 100,
            height: 50,
            text: tool === 'text' ? 'Text' : '',
            fontSize: 16,
            fontFamily: 'Arial',
            color: '#000000',
            backgroundColor: tool === 'shape' ? '#ffffff' : 'transparent',
            borderColor: '#000000',
            borderWidth: 1,
            rotation: 0,
            zIndex: this.interactiveEditor.elements.length
        };
        
        if (tool === 'image') {
            // Handle image upload
            this.uploadImage(element);
        } else {
            this.interactiveEditor.elements.push(element);
            this.selectElement(element);
            this.redrawCanvas();
            this.updateLayersPanel();
        }
    }
    
    uploadImage(element) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    element.imageData = e.target.result;
                    this.interactiveEditor.elements.push(element);
                    this.selectElement(element);
                    this.redrawCanvas();
                    this.updateLayersPanel();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }
    
    redrawCanvas() {
        const canvas = this.interactiveEditor.canvas;
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#e0e0e0';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        // Sort elements by z-index
        const elements = this.interactiveEditor.elements
            .filter(el => el.card === this.interactiveEditor.currentCard)
            .sort((a, b) => a.zIndex - b.zIndex);
        
        // Draw elements
        elements.forEach(element => {
            this.drawElement(ctx, element);
        });
        
        // Draw selection handles
        if (this.interactiveEditor.selectedElement) {
            this.drawSelectionHandles(ctx, this.interactiveEditor.selectedElement);
        }
    }
    
    drawElement(ctx, element) {
        ctx.save();
        
        // Apply transformations
        const centerX = element.x + element.width / 2;
        const centerY = element.y + element.height / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate(element.rotation * Math.PI / 180);
        ctx.translate(-centerX, -centerY);
        
        // Draw based on element type
        switch (element.type) {
            case 'text':
                this.drawTextElement(ctx, element);
                break;
            case 'image':
                this.drawImageElement(ctx, element);
                break;
            case 'shape':
                this.drawShapeElement(ctx, element);
                break;
            case 'answer-zone':
                this.drawAnswerZoneElement(ctx, element);
                break;
        }
        
        ctx.restore();
    }
    
    drawTextElement(ctx, element) {
        ctx.font = `${element.fontSize}px ${element.fontFamily}`;
        ctx.fillStyle = element.color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Word wrap text
        const words = element.text.split(' ');
        const lines = [];
        let currentLine = '';
        
        words.forEach(word => {
            const testLine = currentLine + (currentLine ? ' ' : '') + word;
            const metrics = ctx.measureText(testLine);
            if (metrics.width > element.width && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) lines.push(currentLine);
        
        // Draw lines
        lines.forEach((line, index) => {
            ctx.fillText(line, element.x, element.y + index * element.fontSize * 1.2);
        });
    }
    
    drawImageElement(ctx, element) {
        if (element.imageData) {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, element.x, element.y, element.width, element.height);
            };
            img.src = element.imageData;
        } else {
            // Draw placeholder
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(element.x, element.y, element.width, element.height);
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(element.x, element.y, element.width, element.height);
            ctx.fillStyle = '#999';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Image', element.x + element.width/2, element.y + element.height/2);
        }
    }
    
    drawShapeElement(ctx, element) {
        ctx.fillStyle = element.backgroundColor;
        ctx.fillRect(element.x, element.y, element.width, element.height);
        
        if (element.borderWidth > 0) {
            ctx.strokeStyle = element.borderColor;
            ctx.lineWidth = element.borderWidth;
            ctx.strokeRect(element.x, element.y, element.width, element.height);
        }
    }
    
    drawAnswerZoneElement(ctx, element) {
        // Draw dashed border for answer zone
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.strokeRect(element.x, element.y, element.width, element.height);
        ctx.setLineDash([]);
        
        // Draw label
        ctx.fillStyle = '#007bff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Answer Zone', element.x + 5, element.y + 15);
    }
    
    drawSelectionHandles(ctx, element) {
        const handleSize = 8;
        const handles = [
            { x: element.x - handleSize/2, y: element.y - handleSize/2 }, // top-left
            { x: element.x + element.width - handleSize/2, y: element.y - handleSize/2 }, // top-right
            { x: element.x - handleSize/2, y: element.y + element.height - handleSize/2 }, // bottom-left
            { x: element.x + element.width - handleSize/2, y: element.y + element.height - handleSize/2 } // bottom-right
        ];
        
        ctx.fillStyle = '#007bff';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        
        handles.forEach(handle => {
            ctx.fillRect(handle.x, handle.y, handleSize, handleSize);
            ctx.strokeRect(handle.x, handle.y, handleSize, handleSize);
        });
    }
    
    setupPropertyPanelEvents() {
        // Property input event listeners will be added here
        const propertyInputs = document.querySelectorAll('.ie-property-input');
        propertyInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateElementProperty(e.target.dataset.property, e.target.value);
            });
        });
    }
    
    setupLayerPanelEvents() {
        // Layer panel event listeners will be added here
    }
    
    updatePropertyPanel() {
        const element = this.interactiveEditor.selectedElement;
        const panel = document.getElementById('element-properties');
        
        if (!panel) return;
        
        if (!element) {
            panel.innerHTML = '<p>Select an element to edit its properties</p>';
            return;
        }
        
        // Create property form based on element type
        let propertiesHTML = `
            <div class="property-group">
                <label>Position</label>
                <div class="property-row">
                    <input type="number" data-property="x" value="${Math.round(element.x)}" placeholder="X">
                    <input type="number" data-property="y" value="${Math.round(element.y)}" placeholder="Y">
                </div>
            </div>
            <div class="property-group">
                <label>Size</label>
                <div class="property-row">
                    <input type="number" data-property="width" value="${Math.round(element.width)}" placeholder="Width">
                    <input type="number" data-property="height" value="${Math.round(element.height)}" placeholder="Height">
                </div>
            </div>
        `;
        
        if (element.type === 'text') {
            propertiesHTML += `
                <div class="property-group">
                    <label>Text</label>
                    <textarea data-property="text" placeholder="Enter text">${element.text || ''}</textarea>
                </div>
                <div class="property-group">
                    <label>Font Size</label>
                    <input type="number" data-property="fontSize" value="${element.fontSize}" min="8" max="72">
                </div>
                <div class="property-group">
                    <label>Color</label>
                    <input type="color" data-property="color" value="${element.color}">
                </div>
            `;
        }
        
        if (element.type === 'shape') {
            propertiesHTML += `
                <div class="property-group">
                    <label>Background Color</label>
                    <input type="color" data-property="backgroundColor" value="${element.backgroundColor}">
                </div>
                <div class="property-group">
                    <label>Border Color</label>
                    <input type="color" data-property="borderColor" value="${element.borderColor}">
                </div>
                <div class="property-group">
                    <label>Border Width</label>
                    <input type="number" data-property="borderWidth" value="${element.borderWidth}" min="0" max="10">
                </div>
            `;
        }
        
        panel.innerHTML = propertiesHTML;
        
        // Add event listeners to new inputs
        panel.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateElementProperty(e.target.dataset.property, e.target.value);
            });
        });
    }
    
    updateElementProperty(property, value) {
        const element = this.interactiveEditor.selectedElement;
        if (!element) return;
        
        // Convert value to appropriate type
        if (['x', 'y', 'width', 'height', 'fontSize', 'borderWidth', 'rotation', 'zIndex'].includes(property)) {
            value = parseFloat(value) || 0;
        }
        
        element[property] = value;
        this.redrawCanvas();
        this.updateLayersPanel();
    }
    
    updateLayersPanel() {
        const panel = document.getElementById('layers-list');
        if (!panel) return;
        
        // Clear current layers
        panel.innerHTML = '';
        
        // Get elements for current card, sorted by z-index (reverse for UI)
        const elements = this.interactiveEditor.elements
            .filter(el => el.card === this.interactiveEditor.currentCard)
            .sort((a, b) => b.zIndex - a.zIndex);
        
        // Create layer items
        elements.forEach(element => {
            const layerItem = document.createElement('div');
            layerItem.className = 'ie-layer-item';
            if (element === this.interactiveEditor.selectedElement) {
                layerItem.classList.add('selected');
            }
            
            const icon = this.getElementIcon(element.type);
            const name = element.text || element.type.charAt(0).toUpperCase() + element.type.slice(1);
            
            layerItem.innerHTML = `
                <span class="layer-icon">${icon}</span>
                <span class="layer-name">${name}</span>
                <div class="layer-actions">
                    <button class="layer-btn" onclick="app.moveElementUp('${element.id}')">↑</button>
                    <button class="layer-btn" onclick="app.moveElementDown('${element.id}')">↓</button>
                    <button class="layer-btn" onclick="app.deleteElement('${element.id}')">×</button>
                </div>
            `;
            
            layerItem.addEventListener('click', () => {
                this.selectElement(element);
            });
            
            panel.appendChild(layerItem);
        });
    }
    
    getElementIcon(type) {
        const icons = {
            text: '📝',
            image: '🖼️',
            shape: '⬜',
            'answer-zone': '💭'
        };
        return icons[type] || '❓';
    }
    
    moveElementUp(elementId) {
        const element = this.interactiveEditor.elements.find(el => el.id == elementId);
        if (element) {
            element.zIndex += 1;
            this.redrawCanvas();
            this.updateLayersPanel();
        }
    }
    
    moveElementDown(elementId) {
        const element = this.interactiveEditor.elements.find(el => el.id == elementId);
        if (element && element.zIndex > 0) {
            element.zIndex -= 1;
            this.redrawCanvas();
            this.updateLayersPanel();
        }
    }
    
    deleteElement(elementId) {
        const index = this.interactiveEditor.elements.findIndex(el => el.id == elementId);
        if (index > -1) {
            this.interactiveEditor.elements.splice(index, 1);
            if (this.interactiveEditor.selectedElement?.id == elementId) {
                this.interactiveEditor.selectedElement = null;
            }
            this.redrawCanvas();
            this.updateLayersPanel();
            this.updatePropertyPanel();
        }
    }
    
    // Global functions for onclick handlers
    moveElementUp(elementId) {
        return this.moveElementUp(elementId);
    }
    
    moveElementDown(elementId) {
        return this.moveElementDown(elementId);
    }
    
    deleteElement(elementId) {
        return this.deleteElement(elementId);
    }
    
    // Interactive Editor View Management
    switchToInteractiveEditor() {
        console.log('Switching to Professional Card Editor');
        
        // Hide all views first
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        // Show the interactive editor view
        const interactiveView = document.getElementById('interactive-create-view');
        if (interactiveView) {
            interactiveView.classList.add('active');
        }
        
        // Initialize the professional editor if not already done
        if (!this.professionalEditor) {
            this.initInteractiveEditor();
        }
        
        // Set up the editor after DOM is ready
        setTimeout(() => {
            this.setupProfessionalEditorEvents(); // Re-setup events for newly visible elements
            this.initCardCanvas();
        }, 200); // Longer delay to ensure DOM is ready
        
        // Set up back button for interactive editor
        const backBtn = document.getElementById('back-to-home-from-interactive');
        if (backBtn) {
            backBtn.onclick = () => this.showView('home');
        }
    }
    
    switchToSimpleEditor() {
        console.log('Switching to Simple Editor');
        
        // Hide interactive editor
        const interactiveView = document.getElementById('interactive-create-view');
        if (interactiveView) {
            interactiveView.classList.remove('active');
        }
        
        // Show the create view properly
        this.showView('create');
    }
    
    saveInteractiveDeck() {
        console.log('Saving Interactive Deck');
        
        const deckName = document.getElementById('interactive-deck-name')?.value;
        const deckSubject = document.getElementById('interactive-deck-subject')?.value;
        
        if (!deckName || !deckSubject) {
            this.showNotification('Missing Information', 'Please enter deck name and subject', 'warning');
            return;
        }
        
        // Create deck from interactive editor elements
        const frontElements = this.interactiveEditor.elements.filter(el => el.card === 'front');
        const backElements = this.interactiveEditor.elements.filter(el => el.card === 'back');
        
        // Convert interactive elements to standard cards
        const cards = this.convertInteractiveElementsToCards(frontElements, backElements);
        
        if (cards.length === 0) {
            this.showNotification('No Content', 'Please add some elements to create cards', 'warning');
            return;
        }
        
        // Create the deck
        const deck = {
            id: Date.now(),
            name: deckName,
            subject: deckSubject,
            cards: cards,
            style: 'modern', // Interactive decks use modern style
            color: 'blue',
            createdAt: new Date().toISOString(),
            interactiveElements: {
                front: frontElements,
                back: backElements
            }
        };
        
        // Save deck
        this.decks.push(deck);
        this.saveDecks();
        
        // Clear interactive editor
        this.clearInteractiveEditor();
        
        // Show success and return to home
        this.showNotification('Deck Created!', `"${deckName}" has been saved successfully`, 'success');
        this.showView('home');
    }
    
    convertInteractiveElementsToCards(frontElements, backElements) {
        // For now, create a single card from the elements
        // In a more advanced version, this could create multiple cards based on answer zones
        
        const cards = [];
        
        // Find text elements to use as question/answer
        const frontTexts = frontElements.filter(el => el.type === 'text');
        const backTexts = backElements.filter(el => el.type === 'text');
        const answerZones = [...frontElements, ...backElements].filter(el => el.type === 'answer-zone');
        
        if (frontTexts.length > 0 && backTexts.length > 0) {
            const card = {
                question: frontTexts.map(el => el.text).join(' '),
                answer: backTexts.map(el => el.text).join(' '),
                explanation: answerZones.length > 0 ? 'Interactive card with answer zones' : '',
                hint: 'Use the interactive elements to help you answer'
            };
            cards.push(card);
        }
        
        return cards;
    }
    
    clearInteractiveEditor() {
        if (this.interactiveEditor) {
            this.interactiveEditor.elements = [];
            this.interactiveEditor.selectedElement = null;
            this.redrawCanvas();
            this.updateLayersPanel();
            this.updatePropertyPanel();
        }
        
        // Clear form fields
        document.getElementById('interactive-deck-name').value = '';
        document.getElementById('interactive-deck-subject').value = '';
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
        
        // Apply deck style and color to all study card elements
        const studyCards = document.querySelectorAll('.study-card');
        
        // Get deck's style and color (with fallbacks for older decks)
        const deckStyle = this.currentDeck.style || 'classic';
        const deckColor = this.currentDeck.color || 'blue';
        
        console.log('Applying card styles:', { deckStyle, deckColor, cardCount: studyCards.length });
        
        studyCards.forEach(studyCard => {
            // Remove existing style and animation classes
            studyCard.classList.remove('classic', 'modern', 'vintage', 'neon');
            studyCard.classList.remove('blue', 'green', 'purple', 'red', 'orange', 'teal');
            studyCard.classList.remove('fall-correct', 'slide-incorrect', 'slide-out', 'slide-in', 'bounce-in', 'slide-in-top');
            
            // Apply deck's style and color
            studyCard.classList.add(deckStyle, deckColor);
            
            // Reset any inline styles from animations
            studyCard.style.transform = '';
            studyCard.style.opacity = '1';
        });
        
        // Double-check that the classes were applied
        setTimeout(() => {
            studyCards.forEach(studyCard => {
                if (!studyCard.classList.contains(deckStyle) || !studyCard.classList.contains(deckColor)) {
                    console.warn('Card styles not applied properly, retrying...');
                    studyCard.classList.add(deckStyle, deckColor);
                }
            });
        }, 10);
        
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
        const studyCard = document.getElementById('flip-card');
        
        // Clear any existing animation classes
        studyCard.classList.remove('slide-out', 'slide-in', 'slide-incorrect', 'fall-correct', 'bounce-in');
        
        // Add fall animation
        studyCard.classList.add('fall-correct');
        
        // Prepare next card preview
        this.prepareNextCardPreview();
    }

    animateIncorrectAnswer() {
        const studyCard = document.getElementById('flip-card');
        
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
            const isIncorrectAnswer = document.getElementById('flip-card').classList.contains('slide-incorrect');
            
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
        const studyCard = document.getElementById('flip-card');
        
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
            // Update Adaptive lock status in case user just unlocked it
            
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
        // Initialize Interactive Editor
        this.initInteractiveEditor();
        
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
