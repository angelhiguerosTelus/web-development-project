import React from "react";
import { BiRefresh } from "react-icons/bi";

export const Logs = ({ links }) => {
  const handleRefreshPage = () => {
    window.location.href = '';
  };

  return (
    <>
      <div className="container mt-5">
        <button
          onClick={handleRefreshPage}
          className="button is-small is-success"
        >
          <BiRefresh />
        </button>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>URL</th>
              <th>URL acortado</th>
              <th>Veces utilizado</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr>
                <td>
                  <a target="_blank" href={link.url}>{link.url}</a>
                </td>
                <td>
                  <a target="_blank" href={link.urlShort}>{link.urlShort}</a>
                </td>
                <td>{link.times}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
