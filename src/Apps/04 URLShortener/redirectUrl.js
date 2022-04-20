import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

export const RedirectUrl = () => {
  const [url, setUrl] = useState();
  const [linksAsync, setLinks] = useState(async () => await api.getUrls());

  const setUrls = async (data) => {
    await api.setUrls({ url: data });
  };

  let { hash } = useParams();

  useEffect(() => {
    linksAsync.then((res) => {
      let links = res.data;
      let temp = [];
      links.map((link) =>
        link.urlShort === `${window.location.origin}/redirect/${hash}`
          ? temp.push({ ...link, times: link.times + 1 })
          : temp.push({ ...link })
      );
      links.map(
        (link) =>
          link.urlShort === `${window.location.origin}/redirect/${hash}` &&
          setUrl((prev) => {
            window.location.href = link.url;
            return link.url;
          })
      );

      setLinks(temp);
      setUrls(temp);
    });
  }, [url]);

  return <></>;
};
