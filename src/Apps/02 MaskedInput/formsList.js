import React, { useEffect, useState } from "react";

export const FormsList = ({ data }) => {

  const [forms, setForms] = useState([])

  useEffect(() => {

    Object.keys(data).forEach((i) => {
      setForms(prev => [...prev, data[i] ])
    })

   
  }, [data])
  

  return (
    <>
      <div className="maskedInput-container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apelllidos</th>
              <th>Fecha nacimiento</th>
              <th>Email</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Pasaporte</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => 
              <tr>
                <td>{form.nombre}</td>
                <td>{form.primerapellido} {form.segundoapellido}</td>
                <td>{form.fechanacimiento}</td>
                <td>{form.email}</td>
                <td>{form.direccion}</td>
                <td>{form.telefono}</td>
                <td>{form.pasaporte}</td>
                {/* <td><button className="button is-success">+</button></td> */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
