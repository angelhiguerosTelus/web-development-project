import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

export const Secret = () => {
  const [linksAsync, setLinks] = useState(async () => await api.getSecrets());
  const [secret, setSecret] = useState("");

  const setUrls = async (data) => {
    await api.setSecrets({ secret: data });
  };

  let { hash } = useParams();

  useEffect(() => {
    linksAsync.then((res) => {
      let links = res.data;
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
      setUrls(temp);
    });
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
