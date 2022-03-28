import React from "react";
import { Timer } from "./timer";
import { Logs } from "./logs";
import "./styles.css";
import { useLocalStorage } from "./useLocalStorage";

function PomodoroApp() {
  const [logs, setLogs] = useLocalStorage("timer", []);


  return (
    <div className="App box">
      <span className="subtitle is-3">Pomodoro App</span>

      <div className="columns is-centered mt-5">
        <div className="column is-4">
          <Timer  logs={logs}  setLogs={setLogs}/>
        </div>
        <div className="column is-4">
          <Logs logs={logs}/>
        </div>
      </div>
    </div>
  );
}

export default PomodoroApp;
