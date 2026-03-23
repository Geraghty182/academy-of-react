import { useRef } from "react";
import "./App.css";

const SPELLS = [
  { id: 1, name: "Fireball", animation: "shake" },
  { id: 2, name: "Ice Blast", animation: "spin" },
  { id: 3, name: "Lightning Strike", animation: "flash" },
  { id: 4, name: "Healing Wave", animation: "pulse" },
];

function App() {
  // TODO: Create a ref to store an array of DOM elements
  // Hint: useRef([])

  const triggerAnimation = (index, animationClass) => {
    // TODO: Get the element from the refs array at the given index
    // TODO: Add the animationClass to the element using classList.add()
    // TODO: Use setTimeout to remove the class after 600ms
  };

  return (
    <div className="app">
      <h1>Spell Animations</h1>
      <p>Click spells to trigger visual effects</p>

      <div className="spell-grid">
        {SPELLS.map((spell, index) => (
          <div
            key={spell.id}
            // TODO: Store a ref to each element using the callback ref pattern
            // Hint: ref={(el) => (refsArray.current[index] = el)}
            onClick={() => triggerAnimation(index, spell.animation)}
            className="spell-card"
          >
            <h3>{spell.name}</h3>
            <p className="animation-name">{spell.animation}</p>
          </div>
        ))}
      </div>

      <div className="info-box">
        <h3>Your Task</h3>
        <ul>
          <li>Create a ref to hold an array of DOM elements</li>
          <li>Use callback refs to populate the array</li>
          <li>
            Trigger CSS animations via <code>classList.add()</code>
          </li>
          <li>Reset animations with setTimeout</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
