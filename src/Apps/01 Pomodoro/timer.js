import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import { useLocalStorage } from "./useLocalStorage";

export const Timer = ({logs, setLogs}) => {
  const [state, setstate] = useState(false);
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    setMinutes(parseInt((time / 60) % 60));
    setSeconds(parseInt(time % 60));

    if (time === 0) {
      setTime(0);
      clearInterval(intervalId);
      setstate(false);
    }
  }, [time]);

  const saveTimer = (time) => {
    setLogs([
      ...logs,
      {
        description:
          time === 25 ? "Pomodoro" : time === 15 ? "Long break" : "Short break",
        time,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      },
    ]);
  };

  const handleStartTimer = () => {
    if (time > 0) {
      setstate(true);
      let id = setInterval(() => {
        setTime((prev) => (prev - 1 > 0 ? prev - 1 : 0));
      }, 1000);
      saveTimer((time / 60) % 60);
      setIntervalId(id);
    }
  };

  const handleStopTimer = () => {
    Swal.fire({
      title: "Are you sure to stop the timer?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        setTime(0);
        clearInterval(intervalId);
        setstate(false);
      }
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="buttons has-addons mb-5 is-centered">
            <button
              className="button is-success"
              onClick={() => setTime(25 * 60)}
            >
              Pomodoro
            </button>
            <button
              className="button is-warning"
              onClick={() => setTime(5 * 60)}
            >
              Short break
            </button>
            <button
              className="button is-danger"
              onClick={() => setTime(15 * 60)}
            >
              Long break
            </button>
          </div>
          <div className="content has-text-centered">
            <span className="title is-1">
              {minutes}:{seconds}
            </span>
          </div>
          <div className="buttons has-addons mt-5 is-centered">
            {!state ? (
              <button className="button is-dark" onClick={handleStartTimer}>
                Start
              </button>
            ) : (
              <button className="button is-info" onClick={handleStopTimer}>
                Stop
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
