def predict_portfolio(state):
    """
    MVP DRL Policy Placeholder
    Later replace with trained PPO model
    """

    volatility = state.get("volatility", 0.2)
    risk_score = state.get("risk_score", 0.3)

    # Conservative regime
    if volatility > 0.3 or risk_score > 0.6:
        allocation = {
            "equity": 0.3,
            "debt": 0.5,
            "gold": 0.2
        }
    # Growth regime
    else:
        allocation = {
            "equity": 0.6,
            "debt": 0.3,
            "gold": 0.1
        }

    return allocation
