from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

# ---------- INPUT MODEL ----------
class MarketInput(BaseModel):
    volatility: float | None = None


# ---------- MARKET OBSERVATION ----------
def observe_market(volatility: float):
    """
    Observes market conditions based on volatility.
    """
    if volatility < 0.4:
        return "stable"
    elif volatility < 0.7:
        return "volatile"
    else:
        return "bearish"


# ---------- ALLOCATION LOGIC ----------
def decide_allocation(market_condition: str):
    """
    Rule-based dynamic portfolio allocation.
    """

    if market_condition == "stable":
        return {
            "equity": 0.65,
            "debt": 0.25,
            "gold": 0.10
        }

    if market_condition == "volatile":
        return {
            "equity": 0.50,
            "debt": 0.30,
            "gold": 0.20
        }

    # bearish
    return {
        "equity": 0.35,
        "debt": 0.40,
        "gold": 0.25
    }


# ---------- EXPLANATION ----------
def generate_explanation(market_condition: str):
    if market_condition == "stable":
        return (
            "The market is stable, so the portfolio focuses more on equity "
            "to support long-term growth."
        )

    if market_condition == "volatile":
        return (
            "Market volatility is high, so equity exposure is reduced and "
            "allocation is shifted towards debt and gold for stability."
        )

    return (
        "The market is bearish, so the portfolio prioritizes capital protection "
        "by increasing debt and gold allocation."
    )


# ---------- API ENDPOINT ----------
@app.post("/predict")
def predict(input: MarketInput):
    # Step 1: Get volatility (simulate if not provided)
    volatility = input.volatility if input.volatility is not None else round(random.uniform(0.2, 0.9), 2)

    # Step 2: Observe market
    market_condition = observe_market(volatility)

    # Step 3: Decide allocation
    allocation = decide_allocation(market_condition)

    # Step 4: Explanation
    explanation = generate_explanation(market_condition)

    return {
        "market_condition": market_condition,
        "volatility": volatility,
        "allocation": allocation,
        "explanation": explanation
    }
