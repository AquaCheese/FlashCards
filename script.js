// FlashCards Application
class FlashCardsApp {
    constructor() {
        this.decks = this.loadDecks();
        this.currentDeck = null;
        this.currentCards = [];
        this.currentCardIndex = 0;
        this.score = 0;
        this.cardCount = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
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

        const deck = {
            id: Date.now().toString(),
            name,
            subject,
            cards,
            createdAt: new Date().toISOString()
        };

        this.decks.push(deck);
        this.saveDecks();
        this.clearForm();
        this.showView('home');
        
        // Show success message
        this.showNotification('Deck saved successfully!', 'success');
    }

    collectCards() {
        const cards = [];
        const cardItems = document.querySelectorAll('.card-item');
        
        cardItems.forEach(item => {
            const question = item.querySelector('.card-question').value.trim();
            const answer = item.querySelector('.card-answer').value.trim();
            
            if (question && answer) {
                cards.push({ question, answer });
            }
        });
        
        return cards;
    }

    clearForm() {
        document.getElementById('deck-form').reset();
        document.getElementById('cards-list').innerHTML = '';
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
        
        grid.innerHTML = this.decks.map(deck => `
            <div class="deck-card" onclick="app.startStudy('${deck.id}')">
                <div class="deck-header">
                    <div>
                        <div class="deck-name">${this.escapeHtml(deck.name)}</div>
                        <div class="deck-subject">${this.escapeHtml(deck.subject)}</div>
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
                </div>
            </div>
        `).join('');
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
                <div class="card-inputs">
                    <div class="card-input-group">
                        <label>Question (Front)</label>
                        <input type="text" class="card-question" placeholder="Enter question..." required>
                    </div>
                    <div class="card-input-group">
                        <label>Answer (Back)</label>
                        <input type="text" class="card-answer" placeholder="Enter answer..." required>
                    </div>
                </div>
            </div>
        `;
        
        cardsList.insertAdjacentHTML('beforeend', cardHtml);
    }

    updateCardNumbers() {
        document.querySelectorAll('.card-item').forEach((item, index) => {
            item.querySelector('.card-number').textContent = `Card ${index + 1}`;
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
        document.getElementById('card-question').textContent = card.question;
        document.getElementById('answer-input').value = '';
        this.hideFeedback();
        
        // Animate card entrance
        const studyCard = document.getElementById('study-card');
        studyCard.classList.remove('slide-out');
        studyCard.classList.add('slide-in');
    }

    checkAnswer() {
        const userAnswer = document.getElementById('answer-input').value.trim();
        if (!userAnswer) {
            alert('Please enter an answer');
            return;
        }

        const currentCard = this.currentCards[this.currentCardIndex];
        const correctAnswer = currentCard.answer.toLowerCase();
        const isCorrect = userAnswer.toLowerCase() === correctAnswer;

        this.cardCount++;
        
        if (isCorrect) {
            this.score++;
            this.showFeedback('Correct! Well done! 🎉', 'correct');
            
            // Remove correct card from deck
            this.currentCards.splice(this.currentCardIndex, 1);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        } else {
            this.showFeedback(`Incorrect. The correct answer is: "${currentCard.answer}"`, 'incorrect', currentCard.answer);
            
            // Move incorrect card to back of deck
            const incorrectCard = this.currentCards.splice(this.currentCardIndex, 1)[0];
            this.currentCards.push(incorrectCard);
            
            // Adjust index if needed
            if (this.currentCardIndex >= this.currentCards.length) {
                this.currentCardIndex = 0;
            }
        }

        this.updateStudyHeader();
        
        // Show next card after delay
        setTimeout(() => {
            this.nextCard();
        }, 2000);
    }

    nextCard() {
        if (this.currentCards.length === 0) {
            this.showStudyComplete();
            return;
        }

        // Animate card exit
        const studyCard = document.getElementById('study-card');
        studyCard.classList.add('slide-out');
        
        setTimeout(() => {
            this.showCurrentCard();
        }, 300);
    }

    showFeedback(message, type, correctAnswer = null) {
        const feedback = document.getElementById('answer-feedback');
        
        let content = message;
        if (correctAnswer && type === 'incorrect') {
            content += `<div class="correct-answer">Correct answer: ${correctAnswer}</div>`;
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
