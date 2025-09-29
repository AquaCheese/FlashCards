# FlashCards - Study Smart Web App 🧠📚

A powerful web-based flashcard application designed for instant deployment with smart AI assistance that works in any browser!

## 🚀 New: Unlimited AI Features

- **🤖 Unlimited AI Hints**: Get intelligent, contextual hints for any question - completely free!
- **🧠 AI Deck Generation**: Create personalized study decks based on your learning patterns
- **� Multiple Free AI Sources**: Ollama (local), WebLLM (browser), and free API tiers
- **🔒 Privacy-First**: Run AI locally with Ollama or WebLLM - your data never leaves your device
- **⚡ No Rate Limits**: Unlike paid APIs, local AI gives you unlimited usage

## Core Features

- **�🎯 Custom Decks**: Create decks for any subject with custom names and categories
- **📝 Easy Card Creation**: Add questions and answers with a simple, intuitive interface
- **🎲 Shuffled Study Mode**: Cards are randomly shuffled for better learning
- **✅ Smart Learning**: Correct answers are removed, incorrect answers cycle to the back
- **📊 Progress Tracking**: Real-time score and progress indicators
- **💾 Local Storage**: All data persists in your browser - no accounts needed
- **📱 Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, animated interface with smooth transitions

## 🤖 AI Setup (Recommended)

### Option 1: Ollama (Best Experience)
1. Visit [ollama.ai/download](https://ollama.ai/download)
2. Download and install for your OS
3. Open terminal/command prompt
4. Run: `ollama pull mistral:7b` (downloads ~4GB AI model)
5. Start service: `ollama serve`
6. Refresh FlashCards - AI will be detected automatically!

### Option 2: WebLLM (No Installation)
1. Click "🤖 AI Setup" in FlashCards
2. Try WebLLM setup (requires modern browser with WebGPU)
3. Download will happen automatically (~4GB)

### Option 3: Free API Keys
1. Get free API keys from Cohere, Together AI, or Hugging Face
2. Click "🤖 AI Setup" → "Configure APIs"
3. Enter your keys for limited free usage

## How to Use

### Creating a Deck
1. Click "Create Deck" or the "+" button
2. Enter a deck name and subject
3. Add cards by filling in questions and answers
4. Click "Add Card" for more cards
5. Save your deck
6. **NEW**: Use AI generation for instant, personalized decks!

### Studying
1. Click the "Study" button on any deck
2. Read the question and type your answer
3. Press Enter or click "Check" to verify
4. **NEW**: Click the hint button (💡) for AI-powered hints!
5. Correct answers advance you forward, incorrect answers cycle to the back
6. Complete all cards to finish the deck

### Managing Decks
- View all your decks on the home screen
- Delete decks using the trash icon
- Track your progress with card counts and scores
- **NEW**: AI analyzes your performance and suggests improvements

## Technical Details

### Frontend & Core
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage (no accounts, fully local)
- **Responsive**: Mobile-first design with CSS Grid and Flexbox
- **Animations**: CSS transitions and transforms

### AI Integration
- **Local AI**: Ollama integration for unlimited local processing
- **Browser AI**: WebLLM for client-side AI (WebGPU required)
- **Cloud APIs**: Cohere, Together AI, Hugging Face integration
- **Fallback System**: Smart rule-based hints when AI unavailable
- **Privacy**: Local AI options keep all data on your device

### AI Models Supported
- **Ollama**: Mistral 7B, Llama 2 7B/13B, CodeLlama, Phi, and more
- **WebLLM**: Llama 2, TinyLlama, Mistral (browser-based)
- **APIs**: Various cloud models with free tiers

## System Requirements

### For Local AI (Ollama - Recommended)
- **RAM**: 8GB minimum (16GB+ for larger models)
- **Storage**: 4-8GB per AI model
- **OS**: Windows, macOS, or Linux
- **CPU**: Any modern processor (GPU acceleration automatic)

### For Browser AI (WebLLM)
- **Browser**: Chrome/Edge 113+, Firefox with WebGPU enabled
- **RAM**: 8GB minimum
- **GPU**: Modern GPU with WebGPU support

### For Cloud APIs
- **Internet**: Stable connection required
- **Limits**: Free tier limitations apply

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