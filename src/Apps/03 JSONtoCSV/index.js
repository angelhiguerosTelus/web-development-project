import React, { useRef, useState } from "react";
import "./styles.css";

function JSONtoCSVApp() {
  const [jsonTxt, setJsonTxt] = useState("");
  const [csvText, setCsvText] = useState("");

  const addExample = () => {
    setJsonTxt(`[
      {
         "id": 1,
         "name": "Johnson, Smith, and Jones Co.",
         "amount": 345.33,
         "comment": "Pays on time"
      },
      {
         "id": 2,
         "name": "Sam Mad Dog Smith",
         "amount": 993.44,
         "comment": ""
      },
      {
         "id": 3,
         "name": "Barney & Company",
         "amount": 0,
         "comment": "Great to work with and always pays with cash."
      },
      {
         "id": 4,
         "name": "Johnson's Automotive",
         "amount": 2344,
         "comment": ""
      }
   ]`);
  };

  const cleanInputs = () => {
    setJsonTxt("");
    setCsvText("");
  };

  const handleFormatJSON = () => {
    let txt = JSON.parse(jsonTxt);
    setJsonTxt(JSON.stringify(txt, undefined, 4));
  };

  const handleJSONToCSV = () => {
    setCsvText("");
    try {
      JSON.parse(jsonTxt).map((row) => {
        let temp = [];
        for (let prop in row) {
          temp.push(row[prop]);
        }
        setCsvText((prev) => `${prev} ${temp.join(";")}\n`);
      });
    } catch (error) {
      try {
        for (let prop in JSON.parse(jsonTxt)) {
          [...JSON.parse(jsonTxt)[prop]].map((row) => {
            let temp = [];
            for (let prop in row) {
              temp.push(row[prop]);
            }
            setCsvText((prev) => `${prev} ${temp.join(";")}\n`);
          });
        }
      } catch (error) {
        let temp = [];
        for (let prop in JSON.parse(jsonTxt)) {
          temp.push(JSON.parse(jsonTxt)[prop]);
          setCsvText(`${temp.join(";")}\n`);
        }
      }
    }
  };

  return (
    <div className="App box">
      <span className="subtitle is-3">JSON to CSV App</span>

      <div className="columns is-centered">
        <div className="column is-5">
          <div className="buttons">
            <button onClick={handleJSONToCSV} className="button is-dark">
              JSON a CSV
            </button>
            <button onClick={handleFormatJSON} className="button is-dark">
              Formatear JSON
            </button>
            <button onClick={cleanInputs} className="button is-dark">
              Limpiar
            </button>
            <button onClick={addExample} className="button is-dark">
              Ejemplo
            </button>
          </div>
        </div>
      </div>

      <div className="columns is-centered">
        <div className="column is-5">
          <textarea
            name="jsonTxt"
            id="jsonTxt"
            cols="30"
            rows="10"
            placeholder="JSON"
            className="textarea"
            onChange={(e) => setJsonTxt(e.target.value)}
            value={jsonTxt}
          ></textarea>
        </div>
        <div className="column is-5">
          <textarea
            name="csvTxt"
            id="csvTxt"
            cols="30"
            rows="10"
            placeholder="CSV"
            className="textarea"
            onChange={(e) => setCsvText(e.target.value)}
            value={csvText}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default JSONtoCSVApp;
