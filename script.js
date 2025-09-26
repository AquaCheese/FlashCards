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
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCustomizationListeners();
        this.renderDecks();
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
        } else if (viewName === 'create' && !this.isEditMode) {
            // Reset to create mode if not already in edit mode
            this.updateUIForEditMode(false);
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

    saveDeck() {
        const name = document.getElementById('deck-name').value.trim();
        const subject = document.getElementById('deck-subject').value.trim();
        
        if (!name || !subject) {
            alert('Please fill in deck name and subject');
            return;
        }

        const cards = this.collectCards();
        if (cards.length === 0) {
            alert('Please add at least one card');
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

    clearForm() {
        document.getElementById('deck-form').reset();
        document.getElementById('cards-list').innerHTML = '';
        
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
        if (confirm('Are you sure you want to delete this deck?')) {
            this.decks = this.decks.filter(deck => deck.id !== deckId);
            this.saveDecks();
            this.renderDecks();
            this.showNotification('Deck deleted', 'info');
        }
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
        // Clear any existing cards first
        document.getElementById('cards-list').innerHTML = '';

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
        
        grid.innerHTML = this.decks.map(deck => {
            const style = deck.style || 'classic';
            const color = deck.color || 'blue';
            const styleIcon = {
                classic: '📄',
                modern: '✨',
                vintage: '📜',
                neon: '💠'
            }[style];
            
            return `
            <div class="deck-card deck-${style} deck-${color}" onclick="app.startStudy('${deck.id}')">
                <div class="deck-header">
                    <div>
                        <div class="deck-name">${this.escapeHtml(deck.name)}</div>
                        <div class="deck-subject">${this.escapeHtml(deck.subject)}</div>
                        <div class="deck-style-indicator">${styleIcon} ${style.charAt(0).toUpperCase() + style.slice(1)}</div>
                    </div>
                    <button class="deck-delete" onclick="event.stopPropagation(); app.deleteDeck('${deck.id}')" title="Delete deck">
                        🗑️
                    </button>
                </div>
                <div class="deck-info">${deck.cards.length} cards</div>
                <div class="deck-buttons">
                    <button class="btn btn-primary btn-small">
                        ▶️ Study
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); app.editDeck('${deck.id}')" title="Edit deck">
                        ✏️ Edit
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
                        </div>
                        <div class="color-picker-group">
                            <label>Highlight:</label>
                            <input type="color" class="highlight-color-picker" value="#ffff00" title="Highlight Color">
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
        const clearButton = toolbar.querySelector('.clear-format');

        // Format buttons (bold, italic, underline, strikethrough)
        formatButtons.forEach(button => {
            if (!button.classList.contains('clear-format')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const command = button.getAttribute('data-command');
                    this.applyFormat(command);
                });
            }
        });

        // Text color picker
        textColorPicker.addEventListener('change', (e) => {
            this.applyFormat('foreColor', e.target.value);
        });

        // Highlight color picker
        highlightColorPicker.addEventListener('change', (e) => {
            this.applyFormat('backColor', e.target.value);
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
        const deck = this.decks.find(d => d.id === deckId);
        if (!deck || deck.cards.length === 0) {
            alert('This deck has no cards to study');
            return;
        }

        this.currentDeck = deck;
        this.currentCards = [...deck.cards].sort(() => Math.random() - 0.5); // Shuffle
        this.currentCardIndex = 0;
        this.score = 0;
        this.cardCount = 0;
        
        this.showView('study');
        this.updateStudyHeader();
        this.showCurrentCard();
        this.hideStudyComplete();
        
        // Focus on answer input
        setTimeout(() => {
            document.getElementById('answer-input').focus();
        }, 100);
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
            
            // Move incorrect card to back of deck
            const incorrectCard = this.currentCards.splice(this.currentCardIndex, 1)[0];
            this.currentCards.push(incorrectCard);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        }

        this.updateStudyHeader();
        
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

// Global functions for HTML onclick handlers
function addCard() {
    app.addCard();
}

function showView(view) {
    app.showView(view);
}

function clearForm() {
    app.clearForm();
}

function checkAnswer() {
    app.checkAnswer();
}

function restartStudy() {
    app.restartStudy();
}

function exitStudy() {
    app.exitStudy();
}

function editDeck(deckId) {
    app.editDeck(deckId);
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
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new FlashCardsApp();
});
