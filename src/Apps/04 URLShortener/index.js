import React, { useState } from "react";
import Swal from "sweetalert2";
import { Logs } from "./logs";
import "./styles.css";
import { useLocalStorage } from "./useLocalStorage";

function URLShortenerApp() {
  const [links, setLinks] = useLocalStorage("urlshortener", []);
  const [url, setUrl] = useState("");
  const [urlShort, setUrlShort] = useState("");

  const handleExample = () => {
    setUrl("https://google.com");
    setUrlShort("");
  };

  const handleClean = () => {
    setUrl("");
    setUrlShort("");
  };

  const handleURLShortener = async () => {
    if (url !== "") {
      try {
        new URL(url);

        // Check if the url is already shortener
        let isShortened = links.filter((link) => link.url === url);
        if (isShortened.length === 0) {
          let abc = "ABCDEFGHIJKLMNOPQRS1234567890abcdefghijklmnopqrs";
          let arr = [...Array(5)].map(() =>
            abc.charAt(Math.ceil(Math.random() * 47))
          );
          let hash = arr.join("");

          let urlShort = `${window.location.origin}/redirect/${hash}`;

          setUrlShort(urlShort);
          setLinks([
            ...links,
            {
              url,
              urlShort,
              times: 0,
            },
          ]);
        } else {
          setUrlShort(isShortened[0].urlShort);
        }
      } catch (_) {
        Swal.fire('URL no valida', 'Debe tener un formato válido. Ej. http://localhost', 'warning')
      }
    }
  };

  return (
    <div className="App box">
      <span className="subtitle is-3">URLShortener App</span>

      <div className="buttons is-centered">
        <button onClick={handleURLShortener} className="button is-dark">
          Obtener Link
        </button>
        <button onClick={handleExample} className="button is-dark">
          Ejemplo
        </button>
        <button onClick={handleClean} className="button is-dark">
          Limpiar
        </button>
      </div>

      <div className="columns is-centered">
        <div className="column is-5">
          <label className="label">URL</label>
          <input
            type="text"
            className="input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="column is-5">
          <label className="label">URL acortado</label>
          <a href="#" className="link">
            {urlShort}
          </a>
        </div>
      </div>
      <Logs links={links} />
    </div>
  );
}

export default URLShortenerApp;
