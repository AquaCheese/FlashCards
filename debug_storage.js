// Storage diagnostic and recovery script
console.log('=== FLASHCARDS STORAGE DIAGNOSTIC ===');

// Check all localStorage keys
console.log('\n1. All localStorage keys:');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`   ${key}: ${localStorage.getItem(key)?.substring(0, 100)}...`);
}

// Check specific FlashCards data
console.log('\n2. FlashCards-specific data:');
const flashcardKeys = [
    'flashcards-decks',
    'flashcards-learning-data', 
    'flashcards-sessions',
    'flashcards-coins',
    'flashcards-coin-history',
    'flashcards-powerups',
    'flashcards-first-visit',
    'userXP',
    'userLevel',
    'ai-learning-profile'
];

flashcardKeys.forEach(key => {
    const value = localStorage.getItem(key);
    if (value) {
        try {
            const parsed = JSON.parse(value);
            console.log(`   ✅ ${key}:`, parsed);
        } catch (e) {
            console.log(`   ✅ ${key}:`, value);
        }
    } else {
        console.log(`   ❌ ${key}: NOT FOUND`);
    }
});

// Recovery function
window.recoverData = function() {
    console.log('\n=== ATTEMPTING DATA RECOVERY ===');
    
    // Set minimum default values
    if (!localStorage.getItem('userXP')) {
        localStorage.setItem('userXP', '50');
        console.log('✅ Restored userXP to 50');
    }
    
    if (!localStorage.getItem('userLevel')) {
        localStorage.setItem('userLevel', '1');
        console.log('✅ Restored userLevel to 1');
    }
    
    if (!localStorage.getItem('flashcards-coins')) {
        localStorage.setItem('flashcards-coins', '100');
        console.log('✅ Restored coins to 100');
    }
    
    if (!localStorage.getItem('flashcards-decks')) {
        // Create a basic starter deck
        const starterDeck = [{
            id: 'recovery_' + Date.now(),
            name: 'Recovery Deck',
            cards: [
                { front: 'Welcome back!', back: 'Your progress was restored.' },
                { front: 'FlashCards', back: 'An awesome study tool!' }
            ],
            dateCreated: Date.now(),
            lastStudied: null
        }];
        localStorage.setItem('flashcards-decks', JSON.stringify(starterDeck));
        console.log('✅ Created recovery deck');
    }
    
    console.log('Recovery complete! Refresh the page to see changes.');
};

console.log('\n=== RUN recoverData() TO RESTORE MINIMAL DATA ===');