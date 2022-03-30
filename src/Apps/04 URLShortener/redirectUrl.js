import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const RedirectUrl = () => {
  const [links, setLinks] = useLocalStorage("urlshortener", []);
  const [url, setUrl] = useState("");

  let { hash } = useParams();

  useEffect(() => {
    let temp = [];
    links.map((link) =>
      link.urlShort === `${window.location.origin}/redirect/${hash}`
        ? temp.push({ ...link, times: link.times + 1 })
        : temp.push({ ...link })
    );
    links.map(
      (link) =>
        link.urlShort === `${window.location.origin}/redirect/${hash}` &&
        setUrl(link.url)
    );
    setLinks(temp);
  }, [hash]);

  window.location.href = url;

  return <></>;
};
