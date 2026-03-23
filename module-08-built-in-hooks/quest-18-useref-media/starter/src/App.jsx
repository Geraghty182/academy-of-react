import { useState, useRef } from "react";
import "./App.css";

const BATTLE_EVENTS = [
  { time: 5, description: "Battle begins!" },
  { time: 12, description: "Fireball cast" },
  { time: 23, description: "Shield activated" },
  { time: 35, description: "Lightning strike" },
  { time: 48, description: "Healing potion used" },
  { time: 58, description: "Victory!" },
];

const MAX_TIME = 60;

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // TODO: Create a ref to store the interval ID
  // Hint: useRef(null)

  const play = () => {
    // TODO: If already playing, return early
    // TODO: Set isPlaying to true
    // TODO: Start a setInterval that increments currentTime every 1000ms
    // TODO: Store the interval ID in the ref
    // TODO: If time reaches MAX_TIME, call pause()
  };

  const pause = () => {
    // TODO: Clear the interval using the ref
    // TODO: Set the ref back to null
    // TODO: Set isPlaying to false
  };

  const restart = () => {
    // TODO: Call pause() and reset currentTime to 0
  };

  const progress = (currentTime / MAX_TIME) * 100;
  const activeEvents = BATTLE_EVENTS.filter(
    (event) => event.time <= currentTime,
  );

  return (
    <div className="app">
      <h1>Battle Replay</h1>
      <p>Relive the epic battle with timeline controls</p>

      <div className="timeline-display">
        <div className="time-counter">
          {currentTime}s / {MAX_TIME}s
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="controls">
        <button
          onClick={play}
          disabled={isPlaying || currentTime >= MAX_TIME}
          className="btn btn-play"
        >
          Play
        </button>
        <button onClick={pause} disabled={!isPlaying} className="btn btn-pause">
          Pause
        </button>
        <button onClick={restart} className="btn btn-restart">
          Restart
        </button>
      </div>

      <div className="events-section">
        <h3>Battle Events</h3>
        {activeEvents.length === 0 ? (
          <p className="empty-message">Press Play to start the replay</p>
        ) : (
          <ul className="events-list">
            {activeEvents.map((event, index) => (
              <li key={index} className="event-item">
                <span className="event-time">{event.time}s</span>
                <span className="event-description">{event.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="info-box">
        <h3>Your Task</h3>
        <ul>
          <li>Store the interval ID in a ref (not state!)</li>
          <li>Implement play, pause, and restart controls</li>
          <li>Clear the interval properly to avoid memory leaks</li>
          <li>Use state for values that affect rendering (currentTime, isPlaying)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
