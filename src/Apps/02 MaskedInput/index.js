import React, { useState } from "react";
import { useLocalStorage } from "../01 Pomodoro/useLocalStorage";
import { FormAdd } from "./formAdd";
import { FormsList } from "./formsList";
import "./styles.css";

function MaskedInputApp() {
  const [data, setData] = useLocalStorage("maskedinput", {});

  const [view, setView] = useState(1);

  return (
    <div className="App box">
      <div className="level">
        <div className="level-left">
          <span className="subtitle is-3">MaskedInput App</span>
        </div>
        <div className="level-rigth">
          <div className="buttons">
            <button onClick={() => setView(1)} className="button is-dark">
              Agregar formulario
            </button>
            <button onClick={() => setView(2)} className="button is-dark">
              Ver formularios
            </button>
          </div>
        </div>
      </div>

      {view === 1 ? (
        <FormAdd data={data} setData={setData} />
      ) : (
        <FormsList data={data} />
      )}
    </div>
  );
}

export default MaskedInputApp;
