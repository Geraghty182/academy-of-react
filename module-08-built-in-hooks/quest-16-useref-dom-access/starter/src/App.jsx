import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [spellInput, setSpellInput] = useState("");
  const [history, setHistory] = useState([]);

  // TODO: Create a ref for the input element using useRef(null)

  // TODO: Use useEffect to auto-focus the input on mount

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: If spellInput is not empty, add it to history,
    // clear the input, and refocus the input using the ref
  };

  const handleClearAndFocus = () => {
    // TODO: Clear the input, clear history, and refocus using the ref
  };

  return (
    <div className="app">
      <h1>Battle Command Prompt</h1>
      <p>Quick spell casting interface</p>

      <form onSubmit={handleSubmit} className="command-form">
        <input
          // TODO: Attach the ref here
          type="text"
          value={spellInput}
          onChange={(e) => setSpellInput(e.target.value)}
          placeholder="Enter spell name..."
          className="command-input"
        />
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Cast Spell
          </button>
          <button
            type="button"
            onClick={handleClearAndFocus}
            className="btn btn-secondary"
          >
            Clear & Focus
          </button>
        </div>
      </form>

      <div className="history-section">
        <h3>Command History ({history.length})</h3>
        {history.length === 0 ? (
          <p className="empty-message">No spells cast yet</p>
        ) : (
          <ul className="history-list">
            {history.map((spell, index) => (
              <li key={index}>
                <span className="history-number">#{index + 1}</span>
                <span className="spell-name">{spell}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
