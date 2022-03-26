import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Timer = () => {
  const [state, setstate] = useState(false);
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    setMinutes(parseInt((time / 60) % 60));
    setSeconds(parseInt(time % 60));
  }, [time]);

  const handleStartTimer = () => {
    if (time > 0) {
      setstate(true);
      let id = setInterval(() => {
        setTime((prev) => (prev - 1 > 0 ? prev - 1 : 0));
      }, 1000);
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
              onClick={() => setTime(0.2 * 60)}
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
