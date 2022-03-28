import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const Logs = ({logs}) => {


  return (
    <>
      <div className="table-container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Description</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr>
                <td>{log.description}</td>
                <td>{log.time}</td>
                <td>{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
