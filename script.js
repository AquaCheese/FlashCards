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
        } else if (viewName === 'create' && !this.isEditMode) {
            // Reset to create mode if not already in edit mode
            this.updateUIForEditMode(false);
        } else if (viewName === 'stats') {
            // Initialize stats page with a small delay to ensure DOM is ready
            setTimeout(() => {
                this.initializeStatsPage();
            }, 100);
        }
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
            } : {})
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
                <h3>🎉 Welcome to FlashCards AI!</h3>
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
            
            if (questionText && answerText) {
                cards.push({ 
                    question: questionHTML.trim(), 
                    answer: answerHTML.trim(),
                    questionText: questionText,
                    answerText: answerText
                });
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
        
        // Update DOM
        document.getElementById('overall-accuracy-stat').textContent = `${overallAccuracy}%`;
        document.getElementById('total-cards-studied').textContent = totalCards.toLocaleString();
        document.getElementById('avg-response-time-stat').textContent = `${avgResponseTime}s`;
        document.getElementById('study-streak').textContent = studyStreak;
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

    generateAIDecks() {
        const analysis = this.analyzeUserPatterns();
        
        if (!analysis) {
            return []; // Not enough data
        }
        
        const generatedDecks = [];
        
        // Generate different types of decks based on user patterns
        
        // 1. Improvement Deck - Focus on weak areas
        if (analysis.improvementAreas.length > 0) {
            generatedDecks.push(this.generateImprovementDeck(analysis));
        }
        
        // 2. Challenge Deck - Harder content for growth
        if (analysis.challengeLevel !== 'challenging') {
            generatedDecks.push(this.generateChallengeDeck(analysis));
        }
        
        // 3. Review Deck - Reinforce strengths
        if (analysis.strengths.length > 0) {
            generatedDecks.push(this.generateReviewDeck(analysis));
        }
        
        // 4. Mixed Subject Deck - Combine preferred subjects
        if (Object.keys(analysis.preferredSubjects).length > 1) {
            generatedDecks.push(this.generateMixedDeck(analysis));
        }
        
        // 5. Quick Practice Deck - Short session based on study time preference
        generatedDecks.push(this.generateQuickPracticeDeck(analysis));
        
        return generatedDecks.slice(0, 4); // Limit to 4 decks
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
        setTimeout(() => {
            const generatedDecks = this.generateAIDecks();
            
            if (generatedDecks.length > 0) {
                statusElement.style.display = 'none';
                this.renderGeneratedDecks(generatedDecks);
            } else {
                statusElement.innerHTML = `
                    <div class="status-icon">🤖</div>
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
                    </div>
                </div>
            </div>
        `;
        
        cardsList.insertAdjacentHTML('beforeend', cardHtml);
        
        // Set up formatting toolbar events for the new card
        this.setupFormattingToolbar(cardsList.lastElementChild);
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
        } else {
            deck = this.decks.find(d => d.id === deckId);
        }
        
        if (!deck || deck.cards.length === 0) {
            alert('This deck has no cards to study');
            return;
        }
        
        // Mark if this is a generated deck for analytics
        deck.isGeneratedStudy = isGenerated;

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
        
        this.showCurrentTitleCard();
    }

    showCurrentTitleCard() {
        const titleCards = this.currentDeck.titleCards;
        const currentTitleCard = titleCards[this.currentTitleCardIndex];
        
        // Update counter
        document.getElementById('title-card-counter').textContent = 
            `${this.currentTitleCardIndex + 1} / ${titleCards.length}`;
        
        // Update content
        const titleElement = document.getElementById('display-title-card-title');
        const contentElement = document.getElementById('display-title-card-content');
        
        // Handle formatted content
        if (currentTitleCard.title && currentTitleCard.title.indexOf('<') === -1) {
            titleElement.textContent = currentTitleCard.title;
        } else {
            titleElement.innerHTML = currentTitleCard.title || '';
        }
        
        if (currentTitleCard.content && currentTitleCard.content.indexOf('<') === -1) {
            contentElement.textContent = currentTitleCard.content;
        } else {
            contentElement.innerHTML = currentTitleCard.content || '';
        }
        
        // Update navigation buttons
        const prevBtn = document.getElementById('title-prev-btn');
        const nextBtn = document.getElementById('title-next-btn');
        
        prevBtn.style.visibility = this.currentTitleCardIndex === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = this.currentTitleCardIndex === titleCards.length - 1 ? 'hidden' : 'visible';
    }

    previousTitleCard() {
        if (this.currentTitleCardIndex > 0) {
            this.currentTitleCardIndex--;
            this.showCurrentTitleCard();
        }
    }

    nextTitleCard() {
        const titleCards = this.currentDeck.titleCards;
        if (this.currentTitleCardIndex < titleCards.length - 1) {
            this.currentTitleCardIndex++;
            this.showCurrentTitleCard();
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

    showCurrentCard() {
        if (this.currentCards.length === 0) {
            this.showStudyComplete();
            return;
        }

        const card = this.currentCards[this.currentCardIndex];
        const questionElement = document.getElementById('card-question');
        
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
        studyCard.classList.add(deckStyle, deckColor);
        
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
        // Use answerText for comparison (plain text) but answer for display (formatted HTML)
        const correctAnswerText = (currentCard.answerText || currentCard.answer);
        const answerResult = this.smartAnswerComparison(userAnswer, correctAnswerText);
        const isCorrect = answerResult.isCorrect;

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
        
        if (isCorrect) {
            // Track unique card completion
            const cardOriginalIndex = currentCard.originalIndex;
            if (cardOriginalIndex !== undefined && !this.completedCards.has(cardOriginalIndex)) {
                this.completedCards.add(cardOriginalIndex);
                this.score = this.completedCards.size; // Score = number of unique cards completed
            }
            
            // Provide encouraging feedback based on how they got it right
            let feedbackMessage = 'Correct! Well done! 🎉';
            if (answerResult.reason === 'key_terms') {
                feedbackMessage = 'Correct! You got the key points! 🎯';
            } else if (answerResult.reason === 'high_similarity') {
                feedbackMessage = 'Correct! Close enough - great understanding! ✨';
            }
            this.showFeedback(feedbackMessage, 'correct');
            
            // Trigger fall animation for correct answer
            this.animateCorrectAnswer();
            
            // Remove correct card from deck
            this.currentCards.splice(this.currentCardIndex, 1);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        } else {
            // Provide helpful feedback based on how close they were
            let feedbackMessage = `Incorrect. The correct answer is: "${currentCard.answerText || currentCard.answer}"`;
            if (answerResult.reason === 'close') {
                feedbackMessage = `Close! You were on the right track. The correct answer is: "${currentCard.answerText || currentCard.answer}"`;
            }
            this.showFeedback(feedbackMessage, 'incorrect', currentCard.answer);
            
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

    smartAnswerComparison(userAnswer, correctAnswer) {
        // Clean both answers for comparison
        const cleanUser = this.cleanAnswerForComparison(userAnswer);
        const cleanCorrect = this.cleanAnswerForComparison(correctAnswer);
        
        // Direct match - fastest check
        if (cleanUser === cleanCorrect) {
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
            .toLowerCase()
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
            .replace(/\s+/g, ' ') // Normalize whitespace
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
