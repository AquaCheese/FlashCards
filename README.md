# FlashCards - Interactive Study Tool

A modern, responsive flashcard application for creating custom study decks and testing your knowledge. Perfect for students, professionals, and anyone looking to improve their learning through spaced repetition.

## Features

- **🎯 Custom Decks**: Create decks for any subject with custom names and categories
- **📝 Easy Card Creation**: Add questions and answers with a simple, intuitive interface
- **🎲 Shuffled Study Mode**: Cards are randomly shuffled for better learning
- **✅ Smart Learning**: Correct answers are removed, incorrect answers cycle to the back
- **📊 Progress Tracking**: Real-time score and progress indicators
- **💾 Local Storage**: All data persists in your browser
- **📱 Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, animated interface with smooth transitions

## How to Use

### Creating a Deck
1. Click "Create Deck" or the "+" button
2. Enter a deck name and subject
3. Add cards by filling in questions and answers
4. Click "Add Card" for more cards
5. Save your deck

### Studying
1. Click the "Study" button on any deck
2. Read the question and type your answer
3. Press Enter or click "Check" to verify
4. Correct answers advance you forward, incorrect answers cycle to the back
5. Complete all cards to finish the deck

### Managing Decks
- View all your decks on the home screen
- Delete decks using the trash icon
- Track your progress with card counts and scores

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage
- **Responsive**: Mobile-first design with CSS Grid and Flexbox
- **Animations**: CSS transitions and transforms
- **No Dependencies**: Pure vanilla JavaScript

## Deployment

This application is designed to be deployed to GitHub Pages:

1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your app will be available at `https://username.github.io/repository-name`

## Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Local Development

Simply open `index.html` in your web browser or serve it using any local web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

## License

MIT License - feel free to use this project for personal or educational purposes.