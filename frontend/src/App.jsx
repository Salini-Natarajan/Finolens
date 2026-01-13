import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runFinolens = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        "http://localhost:5678/webhook/finolens-invest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Failed to reach Finolens Agent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <h1>Finolens – AI Investment Advisor</h1>
      <p>Agentic portfolio allocation using adaptive intelligence</p>

      <button
        onClick={runFinolens}
        disabled={loading}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Running Agents..." : "Run Finolens Advisor"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
      )}

      {result && (
        <div
          style={{
            marginTop: "30px",
            textAlign: "left",
            maxWidth: "400px",
            width: "100%",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Recommended Allocation</h3>
          <ul>
            <li>
              <strong>Equity:</strong>{" "}
              {result.allocation?.equity * 100}% → Growth assets
            </li>
            <li>
              <strong>Debt:</strong>{" "}
              {result.allocation?.debt * 100}% → Stability & lower risk
            </li>
            <li>
              <strong>Gold:</strong>{" "}
              {result.allocation?.gold * 100}% → Hedge against volatility
            </li>
          </ul>

          <h3>Explanation</h3>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
