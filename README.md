# 📊 Finolens – AI Investment Advisor  
**Agentic Portfolio Allocation using Adaptive Intelligence**

Finolens is an **agent-based decision-support system** that helps Indian retail investors make **adaptive and explainable portfolio allocation decisions** across **Equity, Debt, and Gold** based on changing market conditions.

> Finolens does **not execute trades**.  
> It provides **intelligent, explainable investment recommendations**.

---

## 🚨 Problem Statement
95% of Indian retail investors rely on gut feeling or social media tips instead of structured financial strategies.  
Existing robo-advisors offer **static, generic allocations** that fail to adapt to market volatility, leading to suboptimal long-term outcomes.

---

## 💡 Solution
Finolens acts as an **agentic AI advisor** that:
- Observes market signals (e.g., volatility)
- Classifies market conditions dynamically
- Recommends adaptive portfolio allocation
- Explains *why* each decision is made

---

## 🧠 System Architecture

Frontend → n8n (Agent Orchestrator) → FastAPI (Decision Engine) → n8n → Frontend


- **Frontend**: User interaction & visualization  
- **n8n**: Agent orchestration & decision packaging  
- **FastAPI**: Market reasoning & allocation logic  

---

## 🤖 Why It Is Agentic
Finolens follows the **agent loop**:
Observe → Decide → Act → Explain


| Stage | Component |
|------|----------|
Observe | Webhook + HTTP Request |
Analyze | FastAPI decision engine |
Decide | n8n Edit Fields (Set node) |
Explain | Natural-language output |

The agent is **distributed**, with the **Set node acting as the policy & decision layer**.

---

## 📈 Asset Allocation Logic
- **Equity**: Growth-focused, higher risk  
- **Debt**: Stability and predictable returns  
- **Gold**: Hedge and risk protection  

Allocation dynamically adapts based on market volatility.

---

## 📡 Live API Example
```bash
curl -X POST http://localhost:5678/webhook/finolens-invest
{
  "market_condition": "volatile",
  "allocation": { "equity": 0.5, "debt": 0.3, "gold": 0.2 },
  "explanation": "Equity exposure reduced due to high volatility."
}
```

🔮 Future Scope

    Real-time market APIs (VIX, indices, gold prices)

    News & sentiment analysis

    Personalized investor profiles

    ML / LLM-based decision models

🏆 Key Highlights

    Agentic decision-making (not static rules)

    Explainable AI recommendations

    Modular, production-style architecture

    extensible





