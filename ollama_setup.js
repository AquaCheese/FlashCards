// Ollama Setup and Management
// This file helps users set up Ollama locally for unlimited free AI

class OllamaSetup {
    constructor() {
        this.endpoint = 'http://localhost:11434';
        this.available = false;
        this.models = [];
        this.recommendedModels = [
            {
                name: 'llama2:7b',
                size: '3.8GB',
                description: 'Llama 2 7B - Good balance of performance and size',
                command: 'ollama pull llama2:7b'
            },
            {
                name: 'mistral:7b',
                size: '4.1GB',
                description: 'Mistral 7B - Excellent for educational content',
                command: 'ollama pull mistral:7b'
            },
            {
                name: 'codellama:7b',
                size: '3.8GB',
                description: 'CodeLlama 7B - Great for programming questions',
                command: 'ollama pull codellama:7b'
            },
            {
                name: 'llama2:13b',
                size: '7.3GB',
                description: 'Llama 2 13B - Higher quality, needs more RAM',
                command: 'ollama pull llama2:13b'
            },
            {
                name: 'phi:2.7b',
                size: '1.7GB',
                description: 'Microsoft Phi - Smaller, faster model',
                command: 'ollama pull phi'
            }
        ];
    }

    async checkAvailability() {
        try {
            const response = await fetch(`${this.endpoint}/api/tags`, {
                method: 'GET',
                signal: AbortSignal.timeout(3000)
            });

            if (response.ok) {
                const data = await response.json();
                this.models = data.models || [];
                this.available = true;
                console.log('✅ Ollama is running with models:', this.models.map(m => m.name));
                return true;
            }
        } catch (error) {
            console.log('❌ Ollama not available:', error.message);
            this.available = false;
            return false;
        }
    }

    async generate(modelName, prompt, options = {}) {
        if (!this.available) {
            throw new Error('Ollama not available');
        }

        const defaultOptions = {
            temperature: 0.7,
            top_p: 0.9,
            top_k: 40,
            ...options
        };

        try {
            const response = await fetch(`${this.endpoint}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: modelName,
                    prompt: prompt,
                    stream: false,
                    options: defaultOptions
                }),
                signal: AbortSignal.timeout(30000)
            });

            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Ollama generation error:', error);
            throw error;
        }
    }

    async chat(modelName, messages, options = {}) {
        if (!this.available) {
            throw new Error('Ollama not available');
        }

        const defaultOptions = {
            temperature: 0.7,
            ...options
        };

        try {
            const response = await fetch(`${this.endpoint}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: modelName,
                    messages: messages,
                    stream: false,
                    options: defaultOptions
                })
            });

            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.status}`);
            }

            const data = await response.json();
            return data.message.content;
        } catch (error) {
            console.error('Ollama chat error:', error);
            throw error;
        }
    }

    getAvailableModels() {
        return this.models;
    }

    getRecommendedModels() {
        return this.recommendedModels;
    }

    getBestAvailableModel() {
        if (!this.available || this.models.length === 0) {
            return null;
        }

        // Prefer models in this order
        const preferences = ['mistral:7b', 'llama2:7b', 'codellama:7b', 'phi'];
        
        for (const pref of preferences) {
            const found = this.models.find(m => m.name.includes(pref));
            if (found) {
                return found.name;
            }
        }

        // Return first available model
        return this.models[0].name;
    }

    generateSetupInstructions() {
        const isWindows = navigator.platform.toLowerCase().includes('win');
        const isMac = navigator.platform.toLowerCase().includes('mac');
        const isLinux = !isWindows && !isMac;

        let instructions = `
# 🦙 Ollama Setup Instructions

Ollama lets you run AI models locally on your computer for FREE and UNLIMITED usage!

## Step 1: Install Ollama

`;

        if (isWindows) {
            instructions += `
### Windows Installation:
1. Go to https://ollama.ai/download
2. Download "Ollama for Windows"
3. Run the installer
4. Open Command Prompt or PowerShell
5. Verify installation: \`ollama --version\`
`;
        } else if (isMac) {
            instructions += `
### macOS Installation:
1. Go to https://ollama.ai/download
2. Download "Ollama for macOS"
3. Run the installer
4. Open Terminal
5. Verify installation: \`ollama --version\`

### Alternative (Homebrew):
\`\`\`bash
brew install ollama
\`\`\`
`;
        } else if (isLinux) {
            instructions += `
### Linux Installation:
\`\`\`bash
curl -fsSL https://ollama.ai/install.sh | sh
\`\`\`

### Verify installation:
\`\`\`bash
ollama --version
\`\`\`
`;
        }

        instructions += `
## Step 2: Download AI Models

Choose one or more models based on your computer's capabilities:

### Recommended for most users:
\`\`\`bash
ollama pull mistral:7b
\`\`\`
*Size: 4.1GB, excellent for educational content*

### Alternative options:
\`\`\`bash
# Smaller, faster (good for older computers)
ollama pull phi

# Popular, well-tested
ollama pull llama2:7b

# Great for programming questions
ollama pull codellama:7b

# Higher quality (needs 16GB+ RAM)
ollama pull llama2:13b
\`\`\`

## Step 3: Start Ollama Service

### Start the service:
\`\`\`bash
ollama serve
\`\`\`

### Test it's working:
\`\`\`bash
ollama list
\`\`\`

## Step 4: Test in FlashCards App

1. Refresh this page
2. The app will automatically detect Ollama
3. Look for "✅ Ollama available" in the browser console

## System Requirements:

- **RAM**: 8GB minimum (16GB+ for larger models)
- **Storage**: 4-8GB per model
- **CPU**: Any modern processor (GPU optional but faster)

## Troubleshooting:

### Ollama not detected:
- Make sure \`ollama serve\` is running
- Check if port 11434 is available
- Restart Ollama service

### Model download fails:
- Check internet connection
- Ensure sufficient disk space
- Try a smaller model first (phi)

### Out of memory errors:
- Try smaller models (phi, llama2:7b)
- Close other applications
- Consider upgrading RAM

## Performance Tips:

1. **Use SSD storage** for better model loading
2. **Close unnecessary apps** to free RAM
3. **Use GPU acceleration** if available (automatic in Ollama)
4. **Start with smaller models** and upgrade if needed

Once set up, you'll have UNLIMITED, FREE AI generation with NO rate limits!
`;

        return instructions;
    }

    showSetupDialog() {
        const instructions = this.generateSetupInstructions();
        
        // Create and show setup modal
        const modal = document.createElement('div');
        modal.className = 'ollama-setup-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🦙 Set Up Unlimited Free AI with Ollama</h2>
                    <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="setup-instructions">
                        ${this.markdownToHtml(instructions)}
                    </div>
                    <div class="setup-actions">
                        <button class="btn btn-primary" onclick="window.open('https://ollama.ai/download', '_blank')">
                            📥 Download Ollama
                        </button>
                        <button class="btn btn-secondary" onclick="window.location.reload()">
                            🔄 Check Again
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .ollama-setup-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            }
            
            .ollama-setup-modal .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 800px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            
            .ollama-setup-modal .modal-header {
                padding: 20px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .ollama-setup-modal .modal-body {
                padding: 20px;
            }
            
            .ollama-setup-modal .setup-instructions {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
            }
            
            .ollama-setup-modal .setup-instructions h1,
            .ollama-setup-modal .setup-instructions h2,
            .ollama-setup-modal .setup-instructions h3 {
                color: #333;
                margin-top: 1.5em;
                margin-bottom: 0.5em;
            }
            
            .ollama-setup-modal .setup-instructions code {
                background: #f5f5f5;
                padding: 2px 4px;
                border-radius: 3px;
                font-family: 'Monaco', 'Consolas', monospace;
            }
            
            .ollama-setup-modal .setup-instructions pre {
                background: #f8f8f8;
                padding: 15px;
                border-radius: 6px;
                overflow-x: auto;
                border-left: 4px solid #007acc;
            }
            
            .ollama-setup-modal .setup-actions {
                margin-top: 20px;
                text-align: center;
            }
            
            .ollama-setup-modal .btn {
                margin: 0 10px;
                padding: 10px 20px;
                border: none;
                border-radius: 6px;
                font-size: 16px;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
            }
            
            .ollama-setup-modal .btn-primary {
                background: #007acc;
                color: white;
            }
            
            .ollama-setup-modal .btn-secondary {
                background: #6c757d;
                color: white;
            }
            
            .ollama-setup-modal .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #999;
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(modal);
    }

    markdownToHtml(markdown) {
        return markdown
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/```bash\n([\s\S]*?)\n```/g, '<pre><code>$1</code></pre>')
            .replace(/```\n([\s\S]*?)\n```/g, '<pre><code>$1</code></pre>')
            .replace(/\n/g, '<br>');
    }

    async pullModel(modelName) {
        // This would typically be done via command line
        // We can show instructions to the user
        console.log(`To download ${modelName}, run: ollama pull ${modelName}`);
        
        // We can't directly pull models from the browser, but we can check if it succeeded
        setTimeout(async () => {
            await this.checkAvailability();
        }, 1000);
    }

    getStatus() {
        return {
            available: this.available,
            models: this.models.length,
            endpoint: this.endpoint,
            bestModel: this.getBestAvailableModel()
        };
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OllamaSetup;
} else {
    window.OllamaSetup = OllamaSetup;
}