# FlashCards - Study Smart Web App 📚

A web-based flashcard application designed for quick deployment and everyday studying in any modern browser.

## Core Features

- Custom decks for any subject
- Easy card creation with rich formatting
- Shuffled study mode for better recall
- Progress tracking and statistics
- Local storage with no required account
- Responsive layout for desktop and mobile

## How to Use

### Creating a Deck
1. Click Create Deck or the + button.
2. Enter a deck name and subject.
3. Add cards by filling in questions and answers.
4. Click Add Card for more cards.
5. Save your deck.

### Studying
1. Click Study on any deck.
2. Read the question and type your answer.
3. Press Enter or click Check.
4. Use hints if needed.
5. Correct answers advance you forward, incorrect answers cycle to the back.
6. Complete all cards to finish the deck.

### Managing Decks
- View all decks from the home screen.
- Delete decks using the trash icon.
- Track progress with card counts and score details.

## Technical Details

- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Storage: browser localStorage
- Responsive design: CSS Grid and Flexbox
- Charts: Chart.js

## Deployment

This application can be deployed to GitHub Pages:

1. Push all files to your GitHub repository.
2. Go to repository Settings -> Pages.
3. Select Deploy from a branch.
4. Choose main branch and / (root) folder.
5. Open the published GitHub Pages URL.

## Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Local Development

Open index.html directly, or run a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

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