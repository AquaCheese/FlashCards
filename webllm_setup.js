// WebLLM Setup and Management
// This file handles the setup and management of WebLLM for browser-based AI

class WebLLMSetup {
    constructor() {
        this.engine = null;
        this.initialized = false;
        this.models = [
            {
                name: 'Llama-2-7b-chat-hf-q4f32_1',
                size: '4.0GB',
                description: 'Llama 2 7B Chat (Quantized)',
                recommended: true
            },
            {
                name: 'TinyLlama-1.1B-Chat-v0.4-q4f32_1',
                size: '0.6GB',
                description: 'TinyLlama 1.1B (Fast, smaller model)',
                recommended: false
            },
            {
                name: 'Mistral-7B-Instruct-v0.1-q4f32_1',
                size: '4.0GB',
                description: 'Mistral 7B Instruct',
                recommended: false
            }
        ];
    }

    async checkWebLLMSupport() {
        // Check if browser supports WebLLM
        const checks = {
            webgpu: await this.checkWebGPU(),
            wasmThreads: this.checkWasmThreads(),
            sharedArrayBuffer: this.checkSharedArrayBuffer(),
            bigInt64Array: this.checkBigInt64Array()
        };

        console.log('WebLLM Support Check:', checks);
        
        return Object.values(checks).every(Boolean);
    }

    async checkWebGPU() {
        if (!navigator.gpu) {
            console.log('❌ WebGPU not supported');
            return false;
        }

        try {
            const adapter = await navigator.gpu.requestAdapter();
            if (!adapter) {
                console.log('❌ WebGPU adapter not available');
                return false;
            }
            console.log('✅ WebGPU supported');
            return true;
        } catch (error) {
            console.log('❌ WebGPU error:', error);
            return false;
        }
    }

    checkWasmThreads() {
        try {
            return typeof SharedArrayBuffer !== 'undefined' && 
                   typeof WebAssembly.Memory !== 'undefined';
        } catch (error) {
            return false;
        }
    }

    checkSharedArrayBuffer() {
        return typeof SharedArrayBuffer !== 'undefined';
    }

    checkBigInt64Array() {
        return typeof BigInt64Array !== 'undefined';
    }

    async initialize(modelName = null, onProgress = null) {
        if (this.initialized) {
            return this.engine;
        }

        const isSupported = await this.checkWebLLMSupport();
        if (!isSupported) {
            throw new Error('WebLLM not supported in this browser');
        }

        try {
            // Use the recommended model if none specified
            const selectedModel = modelName || this.getRecommendedModel();
            
            console.log(`🧠 Initializing WebLLM with model: ${selectedModel}`);

            // Import WebLLM
            if (typeof window.webllm === 'undefined') {
                await this.loadWebLLMScript();
            }

            const { CreateWebWorkerMLCEngine } = window.webllm;

            // Create the engine
            this.engine = await CreateWebWorkerMLCEngine(
                new Worker(this.createWorkerBlob()),
                selectedModel,
                {
                    initProgressCallback: (progress) => {
                        const percent = Math.round(progress.progress * 100);
                        console.log(`WebLLM Loading: ${percent}% - ${progress.text}`);
                        if (onProgress) {
                            onProgress(percent, progress.text);
                        }
                    }
                }
            );

            this.initialized = true;
            console.log('✅ WebLLM initialized successfully');
            return this.engine;

        } catch (error) {
            console.error('❌ WebLLM initialization failed:', error);
            throw error;
        }
    }

    async loadWebLLMScript() {
        return new Promise((resolve, reject) => {
            if (typeof window.webllm !== 'undefined') {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.19/lib/index.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load WebLLM script'));
            document.head.appendChild(script);
        });
    }

    createWorkerBlob() {
        const workerCode = `
            importScripts('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.19/lib/webllm.min.js');
            
            let engine;
            
            self.addEventListener('message', async (event) => {
                const { type, data } = event.data;
                
                try {
                    switch (type) {
                        case 'init':
                            engine = new self.webllm.WebWorkerMLCEngine();
                            await engine.reload(data.modelId, data.chatConfig);
                            self.postMessage({ type: 'init_complete' });
                            break;
                            
                        case 'chat':
                            if (!engine) {
                                throw new Error('Engine not initialized');
                            }
                            const response = await engine.chat.completions.create(data.messages);
                            self.postMessage({ type: 'chat_response', data: response });
                            break;
                            
                        case 'generate':
                            if (!engine) {
                                throw new Error('Engine not initialized');
                            }
                            const generation = await engine.generate(data.prompt, data.options);
                            self.postMessage({ type: 'generate_response', data: generation });
                            break;
                            
                        default:
                            throw new Error('Unknown message type: ' + type);
                    }
                } catch (error) {
                    self.postMessage({ type: 'error', error: error.message });
                }
            });
        `;

        const blob = new Blob([workerCode], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }

    getRecommendedModel() {
        const recommended = this.models.find(m => m.recommended);
        return recommended ? recommended.name : this.models[0].name;
    }

    getAvailableModels() {
        return this.models;
    }

    async generateText(prompt, options = {}) {
        if (!this.engine) {
            throw new Error('WebLLM not initialized');
        }

        const defaultOptions = {
            max_tokens: 200,
            temperature: 0.7,
            top_p: 0.9,
            ...options
        };

        try {
            const response = await this.engine.chat.completions.create({
                messages: [
                    { role: 'user', content: prompt }
                ],
                ...defaultOptions
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error('WebLLM generation error:', error);
            throw error;
        }
    }

    async generateChat(messages, options = {}) {
        if (!this.engine) {
            throw new Error('WebLLM not initialized');
        }

        const defaultOptions = {
            max_tokens: 200,
            temperature: 0.7,
            ...options
        };

        try {
            const response = await this.engine.chat.completions.create({
                messages,
                ...defaultOptions
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error('WebLLM chat error:', error);
            throw error;
        }
    }

    getStatus() {
        return {
            initialized: this.initialized,
            engine: !!this.engine,
            supported: true // We check this during initialization
        };
    }

    async unload() {
        if (this.engine) {
            try {
                await this.engine.unload();
                this.engine = null;
                this.initialized = false;
                console.log('✅ WebLLM unloaded successfully');
            } catch (error) {
                console.error('❌ WebLLM unload error:', error);
            }
        }
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebLLMSetup;
} else {
    window.WebLLMSetup = WebLLMSetup;
}