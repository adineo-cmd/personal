# Local LLMs & AI Resources

Run AI models locally for privacy, cost savings, and offline capability. No API keys or usage limits.

## Why Run Local LLMs?

- ✅ **Privacy** – Data never leaves your machine
- ✅ **Cost** – No per-token fees after hardware investment
- ✅ **Offline** – Works without internet
- ✅ **Customization** – Fine-tune for specific use cases
- ✅ **No Rate Limits** – Run as many requests as hardware allows

## Hardware Requirements

| Model Size | Minimum RAM | Recommended GPU | Use Case |
|------------|-------------|-----------------|----------|
| 7B | 8GB | GTX 1660 (6GB) | Chat, simple tasks |
| 13B | 16GB | RTX 3060 (12GB) | Coding, analysis |
| 30B+ | 32GB+ | RTX 4090 (24GB) | Complex reasoning |
| 70B | 64GB+ | Dual GPU / Mac M2 | Production workloads |

## Tools & Platforms

### Text-Generation-WebUI


git clone https://github.com/oobabooga/text-generation-webui

cd text-generation-webui

pip install -r requirements.txt

python server.py


- Most popular local LLM interface
- Supports multiple model formats (GGUF, GPTQ, AWQ)
- Web-based UI with extensions

## LM Studio

User-friendly desktop app
One-click model downloads
Built-in chat interface
API server for 
integrations

## Ollama

curl -fsSL https://ollama.com/install.sh | sh

ollama run llama3.2


- Simple CLI interface
- Easy model management
Great for development integration
