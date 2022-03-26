import React from "react";
import { Timer } from "./timer";
import { Logs } from "./logs";
import "./styles.css";

function PomodoroApp() {
  return (
    <div className="App box">
      <span className="subtitle is-3">Pomodoro App</span>

      <div className="columns is-centered mt-5">
        <div className="column is-4">
          <Timer />
        </div>
        <div className="column is-4">
          <Logs />
        </div>
      </div>
    </div>
  );
}

export default PomodoroApp;
