from fastapi import FastAPI
from ppo_policy import predict_portfolio

app = FastAPI(title="Finolens DRL Policy Service")

@app.post("/predict")
def predict(data: dict):
    allocation = predict_portfolio(data)

    return {
        "status": "success",
        "allocation": allocation
    }
