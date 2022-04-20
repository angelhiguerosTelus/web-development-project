import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../api";
import "./styles.css";

function OneTimeSecret() {
  const [secret, setSecret] = useState("");
  const [urlSecret, setUrlSecret] = useState("");

  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      let res = await api.getSecrets();
      setLinks(res.data);
    };
    fetchUrls();
  }, []);

  const setUrls = async (data) => {
    await api.setSecrets({ secret: data });
  };

  const handleExample = () => {
    setSecret("Vivo en Guatemala.");
    setUrlSecret("");
  };

  const handleClean = () => {
    setSecret("");
    setUrlSecret("");
  };

  const handleSecret = async () => {
    if (secret !== "") {
      Swal.fire({
        title: "¿Cuantas veces deseas que se vea tu secreto?",
        input: "number",
        inputValue: 1,
        showCancelButton: true,
        confirmButtonText: "Crear",
      }).then((result) => {
        if (result.isConfirmed) {
          let abc = "ABCDEFGHIJKLMNOPQRS1234567890abcdefghijklmnopqrs";
          let arr = [...Array(5)].map(() =>
            abc.charAt(Math.ceil(Math.random() * 47))
          );
          let hash = arr.join("");

          let urlSecret = `${window.location.origin}/secret/${hash}`;
          setUrlSecret(urlSecret);
          setLinks((prev) => {
            let temp = [
              ...prev,
              {
                secret: secret,
                urlSecret,
                times: result.value,
              },
            ];
            setUrls(temp);
            return temp;
          });
        }
      });
    }
  };

  return (
    <div className="App box">
      <span className="subtitle is-3">One Time Secret</span>

      <div className="buttons is-centered">
        <button onClick={handleSecret} className="button is-dark">
          Generar secreto
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
          <label className="label">Ingresa aqui tu secreto</label>
          <textarea
            cols="30"
            rows="10"
            className="textarea"
            onChange={(e) => {
              setUrlSecret("");
              setSecret(e.target.value);
            }}
            value={secret}
          ></textarea>
        </div>
        <div className="column is-5">
          <label className="label">URL de tu secreto</label>

          <span className="subtitle is-5"> {urlSecret}</span>
          <br />
          <a target="_blank" href={urlSecret} className="link">
            {urlSecret}
          </a>
        </div>
      </div>
    </div>
  );
}

export default OneTimeSecret;
