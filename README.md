# Finolens  
### Agentic Intelligent Investment Recommendation Engine (AIAG09)

## Problem Statement
95% of Indian retail investors rely on gut feeling or social media tips rather than structured financial strategies. Existing robo-advisors provide static allocations and fail to adapt to market conditions, user behavior, and life events.

---

## Solution Overview
**Finolens** is an **Agentic AI-powered investment advisor** that dynamically adjusts portfolio allocations using:

- Multi-agent orchestration
- Reinforcement Learning (DRL – PPO)
- Behavior-aware and risk-aware decision logic

---

## Agentic Architecture

### Agents Used
- Market Agent – tracks volatility and trends
- Risk Agent – evaluates downside exposure
- Behaviour Agent – models panic selling
- Goal Agent – aligns portfolio with financial goals
- DRL Policy Agent – outputs optimal allocations
- Explanation Agent – explains decisions using LLMs

### Orchestration
- **n8n** acts as the central agent coordinator
- Uses conditional logic and memory
- Calls DRL policy service for decisions

---

## Tech Stack

### Agentic AI Tool
- n8n

### Backend
- Python
- FastAPI
- Stable-Baselines3 (PPO)

### Frontend
- React.js

### AI / LLM
- OpenAI API or Ollama

---

## Project Structure

Finolens/
├── backend/
├── frontend/
├── n8n/
├── docs/
├── README.md
└── .gitignore


---

## Development Phases
- Phase 0: Project setup & GitHub
- Phase 1: DRL backend
- Phase 2: n8n agent orchestration
- Phase 3: Frontend MVP
- Phase 4: Hosting & demo

---

## Team
AIAG09 Hackathon  
Project: Finolens

