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
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Failed to reach Finolens Agent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Finolens – AI Investment Advisor</h1>
      <p>Agentic portfolio allocation using adaptive intelligence</p>

      <button onClick={runFinolens} disabled={loading}>
        {loading ? "Running Agents..." : "Run Finolens Advisor"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h3>Recommended Allocation</h3>
          <pre>{JSON.stringify(result.allocation, null, 2)}</pre>

          <h3>Explanation</h3>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;

