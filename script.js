// Global app instance
let app = null;

// Debug: Test if script is loading
console.log('FlashCards script loading...');
alert('FlashCards script loaded!');

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
    console.log('startStudy called with:', deckId, 'app:', !!app);
    alert('startStudy called with: ' + deckId); // Temporary debug
    if (app && app.startStudy) {
        app.startStudy(deckId);
    } else {
        console.log('App not ready or startStudy method missing');
        alert('startStudy - App not ready! app=' + !!app);
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
    console.log('deleteDeck called with:', deckId, 'app:', !!app);
    alert('deleteDeck called with: ' + deckId); // Temporary debug
    if (app && app.deleteDeck) {
        app.deleteDeck(deckId);
    } else {
        console.log('App not ready or deleteDeck method missing');
        alert('deleteDeck - App not ready! app=' + !!app);
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
    console.log('closeGenerationInsights called, app:', !!app);
    alert('closeGenerationInsights called!'); // Temporary debug
    if (app && app.closeGenerationInsights) {
        app.closeGenerationInsights();
    } else {
        console.log('App not ready or closeGenerationInsights method missing');
        alert('closeGenerationInsights - App not ready! app=' + !!app);
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

// FlashCards Application
class FlashCardsApp {
    constructor() {
        this.decks = this.loadDecks();
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
        
        // Adaptive Learning System
        this.learningData = this.loadLearningData();
        this.sessionStartTime = Date.now();
        
        // Chart instances for cleanup
        this.chartInstances = {};
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCustomizationListeners();
        this.renderDecks();
        this.updateAILockStatus();
        this.showView('home');
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
        const sessions = this.loadSessionData();
        const sessionCount = sessions.length;
        const requiredSessions = 3;
        const lockOverlay = document.getElementById('ai-lock-overlay');
        const regenerateBtn = document.getElementById('regenerate-btn');
        const progressFill = document.getElementById('unlock-progress');
        const progressText = document.getElementById('progress-text');
        const sessionsNeeded = document.getElementById('sessions-needed');

        if (sessionCount >= requiredSessions) {
            // AI is unlocked
            lockOverlay.style.display = 'none';
            regenerateBtn.disabled = false;
        } else {
            // AI is locked
            lockOverlay.style.display = 'block';
            regenerateBtn.disabled = true;
            
            // Update progress
            const progress = (sessionCount / requiredSessions) * 100;
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `${sessionCount} / ${requiredSessions} sessions completed`;
            sessionsNeeded.textContent = requiredSessions - sessionCount;

            // Add encouraging message based on progress
            const lockInfo = lockOverlay.querySelector('p');
            if (sessionCount === 0) {
                lockInfo.innerHTML = `Complete <strong>${requiredSessions}</strong> study sessions to unlock personalized AI-generated decks!`;
            } else if (sessionCount === 1) {
                lockInfo.innerHTML = `Great start! Complete <strong>${requiredSessions - sessionCount}</strong> more study sessions to unlock AI decks!`;
            } else if (sessionCount === 2) {
                lockInfo.innerHTML = `Almost there! Just <strong>1</strong> more study session to unlock your AI deck generator!`;
            }
        }
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
        const session = {
            id: Date.now().toString(),
            deckId: deckId,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
            timestamp: Date.now(),
            cardsStudied: cardsStudied,
            correctAnswers: correctAnswers,
            accuracy: cardsStudied > 0 ? Math.round((correctAnswers / cardsStudied) * 100) : 0,
            totalTime: totalTime,
            averageTimePerCard: cardsStudied > 0 ? Math.round(totalTime / cardsStudied) : 0
        };
        
        sessions.push(session);
        this.saveSessionData(sessions);
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
        
        if (!name || !subject) {
            alert('Please fill in deck name and subject');
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
        
        const baseTemplates = {
            'Languages': [
                { question: 'What does "Hello" mean in Spanish?', answer: 'Hola' },
                { question: 'Translate "Thank you" to French', answer: 'Merci' },
                { question: 'What is "Goodbye" in German?', answer: 'Auf Wiedersehen' },
                { question: 'How do you say "Yes" in Italian?', answer: 'Sì' },
                { question: 'What does "Por favor" mean?', answer: 'Please' },
                { question: 'Translate "Water" to Spanish', answer: 'Agua' },
                { question: 'What is "Book" in French?', answer: 'Livre' },
                { question: 'How do you say "Red" in German?', answer: 'Rot' }
            ],
            'Science': [
                { question: 'What is the chemical symbol for Gold?', answer: 'Au' },
                { question: 'How many bones are in the human body?', answer: '206' },
                { question: 'What is the speed of light?', answer: '299,792,458 m/s' },
                { question: 'What gas do plants absorb during photosynthesis?', answer: 'Carbon Dioxide' },
                { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
                { question: 'What is H2O commonly known as?', answer: 'Water' },
                { question: 'How many chambers does a human heart have?', answer: '4' },
                { question: 'What is the hardest natural substance?', answer: 'Diamond' }
            ],
            'History': [
                { question: 'In what year did World War II end?', answer: '1945' },
                { question: 'Who was the first President of the United States?', answer: 'George Washington' },
                { question: 'What ancient wonder was located in Alexandria?', answer: 'The Lighthouse of Alexandria' },
                { question: 'Which empire was ruled by Julius Caesar?', answer: 'Roman Empire' },
                { question: 'In what year did the Berlin Wall fall?', answer: '1989' },
                { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
                { question: 'What year did the Titanic sink?', answer: '1912' },
                { question: 'Which country gifted the Statue of Liberty to the US?', answer: 'France' }
            ],
            'Mathematics': [
                { question: 'What is 15 × 8?', answer: '120' },
                { question: 'What is the square root of 144?', answer: '12' },
                { question: 'What is π (pi) approximately equal to?', answer: '3.14159' },
                { question: 'What is 25% of 200?', answer: '50' },
                { question: 'What is the area of a circle with radius 5? (use π = 3.14)', answer: '78.5' },
                { question: 'What is 2³ (2 to the power of 3)?', answer: '8' },
                { question: 'What is the sum of angles in a triangle?', answer: '180 degrees' },
                { question: 'What is 144 ÷ 12?', answer: '12' }
            ]
        };
        
        // Get templates for the subject or use general knowledge
        let templates = baseTemplates[subject] || [
            { question: 'What is the capital of France?', answer: 'Paris' },
            { question: 'How many continents are there?', answer: '7' },
            { question: 'What is the largest ocean?', answer: 'Pacific Ocean' },
            { question: 'Who wrote Romeo and Juliet?', answer: 'William Shakespeare' },
            { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
            { question: 'In what year was the internet invented?', answer: '1969' }
        ];
        
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
        
        // Always show the section
        generatedSection.style.display = 'block';
        
        // Check if we have enough data for generation
        const sessions = this.loadSessionData();
        
        if (sessions.length < 3) {
            // Show lock overlay, hide generation content
            lockOverlay.style.display = 'block';
            if (statusElement) statusElement.style.display = 'none';
            if (gridElement) gridElement.style.display = 'none';
            return;
        }
        
        // Hide lock overlay, show generation content
        lockOverlay.style.display = 'none';
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
        
        grid.innerHTML = generatedDecks.map(deck => `
            <div class="generated-deck-card" onclick="app.startStudy('${deck.id}', true)">
                <div class="generated-deck-header">
                    <div class="generated-deck-name">
                        ${this.escapeHtml(deck.name)}
                        <span class="generation-badge">AI</span>
                    </div>
                    <div class="generated-deck-subject">${this.escapeHtml(deck.subject)}</div>
                </div>
                
                <div class="generation-reason">
                    <div class="reason-title">${deck.reason.title}</div>
                    <div class="reason-description">${deck.reason.description}</div>
                </div>
                
                <div class="generated-deck-info">
                    <span>${deck.cards.length} cards</span>
                    <div class="confidence-score">
                        <span>Match: ${Math.round(deck.confidence * 100)}%</span>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: ${deck.confidence * 100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="generated-deck-buttons">
                    <button class="btn btn-ai btn-small" onclick="event.stopPropagation(); window.flashCardsApp ? window.flashCardsApp.startStudy('${deck.id}', true) : console.log('App not ready')" title="Study this generated deck">
                        ▶️ Study
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); window.flashCardsApp ? window.flashCardsApp.saveGeneratedDeck('${deck.id}') : console.log('App not ready')" title="Add to your decks">
                        💾 Save
                    </button>
                    <button class="btn btn-info btn-small" onclick="event.stopPropagation(); window.flashCardsApp ? window.flashCardsApp.previewGeneratedDeck('${deck.id}') : console.log('App not ready')" title="Preview cards">
                        👁️ Preview
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
    
    previewGeneratedDeck(deckId) {
        const deck = this.generatedDecks?.find(d => d.id === deckId);
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
                        <div class="deck-subject">${this.escapeHtml(deck.subject)}</div>
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
            deck = this.generatedDecks?.find(d => d.id === deckId);
        } else {
            deck = this.decks.find(d => d.id === deckId);
        }
        
        if (!deck || deck.cards.length === 0) {
            alert('This deck has no cards to study');
            return;
        }

        this.currentDeck = deck;
        
        // Use adaptive learning to prioritize difficult cards
        this.currentCards = this.weightedShuffle([...deck.cards], deckId);
        
        this.currentCardIndex = 0;
        this.score = 0;
        this.cardCount = 0;
        this.currentTitleCardIndex = 0;
        this.sessionStartTime = Date.now();
        
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
        document.getElementById('card-counter').textContent = 
            `${this.cardCount} / ${this.currentDeck.cards.length}`;
        document.getElementById('score').textContent = `Score: ${this.score}`;
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
        const correctAnswerText = (currentCard.answerText || currentCard.answer).toLowerCase();
        const isCorrect = userAnswer.toLowerCase() === correctAnswerText;

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
            this.score++;
            this.showFeedback('Correct! Well done! 🎉', 'correct');
            
            // Trigger fall animation for correct answer
            this.animateCorrectAnswer();
            
            // Remove correct card from deck
            this.currentCards.splice(this.currentCardIndex, 1);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        } else {
            this.showFeedback(`Incorrect. The correct answer is: "${currentCard.answerText || currentCard.answer}"`, 'incorrect', currentCard.answer);
            
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
            `${this.score} / ${this.currentDeck.cards.length}`;

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
        console.log('addCard function:', typeof addCard);
        console.log('showView function:', typeof showView);
        console.log('startStudy function:', typeof startStudy);
        console.log('window.addCard:', typeof window.addCard);
        console.log('app instance:', !!app);
        
        console.log('FlashCards app initialized and functions are available on window object');
    } catch (error) {
        console.error('Error initializing FlashCards app:', error);
    }
});
