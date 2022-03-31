import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const Secret = () => {
  const [links, setLinks] = useLocalStorage("onetimesecret", []);
  const [secret, setSecret] = useState("");

  let { hash } = useParams();

  useEffect(() => {
    let temp = [];
    links.map((link) =>
      link.urlSecret === `${window.location.origin}/secret/${hash}`
        ? temp.push({ ...link, times: parseInt(link.times) - 1 })
        : temp.push({ ...link })
    );
    links.map((link) =>
      link.urlSecret === `${window.location.origin}/secret/${hash}` &&
      parseInt(link.times) > 0
        ? setSecret(link.secret)
        : setSecret("Este secreto ya no esta disponible.")
    );
    setLinks(temp);
  }, [hash]);

  return (
    <>
      <div className="container">
        <div className="App box">
          <div className="mb-3">
            <span className="title is-5">Tu secreto es</span>
          </div>
          <div>
            <span className="subtitle is-3">{secret}</span>
          </div>
        </div>
      </div>
    </>
  );
};
