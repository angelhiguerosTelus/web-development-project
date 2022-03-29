import moment from "moment";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const FormAdd = ({ data, setData }) => {
  const [userInfo, setUserInfo] = useState({});
  const {
    nombre,
    primerapellido,
    segundoapellido,
    fechanacimiento,
    email,
    direccion,
    codigo,
    telefono,
    telefonocasa,
    identificacion,
    pasaporte,
    numerotarjeta,
    mestarjeta,
    yeartarjeta,
    cvctarjeta,
    nombreemergencia,
    primerapellidoemergencia,
    segundoapellidoemergencia,
    fechanacimientoemergencia,
    emailemergencia,
    direccionemergencia,
    codigoemergencia,
    telefonoemergencia,
  } = userInfo;

  const [validationInput, setValidationInput] = useState({
    nombre: "",
    primerapellido: "",
    segundoapellido: "",
    fechanacimiento: "",
    email: "",
    direccion: "",
    codigo: "",
    telefono: "",
    telefonocasa: "",
    identificacion: "",
    pasaporte: "",
    numerotarjeta: "",
    mestarjeta: "",
    yeartarjeta: "",
    cvctarjeta: "",
    nombreemergencia: "",
    primerapellidoemergencia: "",
    segundoapellidoemergencia: "",
    fechanacimientoemergencia: "",
    emailemergencia: "",
    direccionemergencia: "",
    codigoemergencia: "",
    telefonoemergencia: "",
  });

  const handleInputChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    inputValidation(e.target.name, e.target.value)
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    let isVerify = false;

    Object.keys(validationInput).forEach((i) => {
      if (!validationInput[i]) {
        isVerify = false;
      }
    });

    if (isVerify) {
      setData({
        ...data,
        [email]: { ...userInfo },
      });

      Swal.fire("Información guardada", "", "success");
    } else {
      Swal.fire("Verifique que toda los campos esten correctos", "", "error");
    }
  };

  const inputValidation = (name, value) => {
    switch (name) {
      case "nombre":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El nombre es obligatorio' }))
        else if(value.length < 2 ) setValidationInput(prev => ({...prev, [name]: 'El nombre debe tener minimo 2 caracteres' }))
        else if(value.length > 30 ) setValidationInput(prev => ({...prev, [name]: 'El nombre debe tener menos de 30 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "primerapellido":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El apellido es obligatorio' }))
        else if(value.length < 2 ) setValidationInput(prev => ({...prev, [name]: 'El  apellido tener minimo 2 caracteres' }))
        else if(value.length > 30 ) setValidationInput(prev => ({...prev, [name]: 'El apellido debe tener menos de 30 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "segundoapellido":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El apellido es obligatorio' }))
        else if(value.length < 2 ) setValidationInput(prev => ({...prev, [name]: 'El  apellido tener minimo 2 caracteres' }))
        else if(value.length > 30 ) setValidationInput(prev => ({...prev, [name]: 'El apellido debe tener menos de 30 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "fechanacimiento":
        if(moment().diff(value, 'days') <= 0 ) setValidationInput(prev => ({...prev, [name]: 'Fecha de nacimiento no valida' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "email":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El email es obligatorio' }))
        else if(value.length < 5 ) setValidationInput(prev => ({...prev, [name]: 'El  email tener minimo 5 caracteres' }))
        else if(value.length > 40 ) setValidationInput(prev => ({...prev, [name]: 'El email debe tener menos de 40 caracteres' }))
        else if(!value.split('').includes('@') ) setValidationInput(prev => ({...prev, [name]: 'El email no tiene un formato valido (@)' }))
        else if(!value.split('').includes('.') ) setValidationInput(prev => ({...prev, [name]: 'El email no tiene un formato valido (.)' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break
      case "direccion":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'La dirección es obligatoria' }))
        else if(value.length < 7 ) setValidationInput(prev => ({...prev, [name]: 'La dirección debe tener minimo 7 caracteres' }))
        else if(value.length > 100 ) setValidationInput(prev => ({...prev, [name]: 'La dirección debe tener menos de 100 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "codigo":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El código es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El codigó debe ser numerico' }))
        else if(value.length < 1 ) setValidationInput(prev => ({...prev, [name]: 'El codigó debe tener minimo 1 número' }))
        else if(value.length > 4 ) setValidationInput(prev => ({...prev, [name]: 'El código debe tener menos de 5 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "telefono":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El número es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El número debe ser numerico' }))
        else if(value.length < 7 ) setValidationInput(prev => ({...prev, [name]: 'El número debe tener minimo 7 números' }))
        else if(value.length > 11 ) setValidationInput(prev => ({...prev, [name]: 'El número debe tener menos de 11 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "telefonocasa":
        if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El número debe ser numerico' }))
        else if(value.length > 11 ) setValidationInput(prev => ({...prev, [name]: 'El número debe tener menos de 11 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "identificacion":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El número de identificación es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El número de identificación debe ser numerico' }))
        else if(value.length < 10 ) setValidationInput(prev => ({...prev, [name]: 'El número de identificación debe tener minimo 10 números' }))
        else if(value.length > 21 ) setValidationInput(prev => ({...prev, [name]: 'El número de identificación debe tener menos de 20 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "pasaporte":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El número de pasaporte es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El número de pasaporte debe ser numerico' }))
        else if(value.length < 10 ) setValidationInput(prev => ({...prev, [name]: 'El número de pasaporte debe tener minimo 10 números' }))
        else if(value.length > 21 ) setValidationInput(prev => ({...prev, [name]: 'El número de pasaporte debe tener menos de 20 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "numerotarjeta":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El número de tarjeta es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El número de tarjeta debe ser numerico' }))
        else if(value.length < 16 || value.length > 16) setValidationInput(prev => ({...prev, [name]: 'El formato de tarjeta no es valido' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "mestarjeta":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El mes de la tarjeta es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El mes de la tarjeta debe ser numerico' }))
        else if(value.length < 2 || value.length > 2) setValidationInput(prev => ({...prev, [name]: 'El mes de la tarjeta no es valido' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "yeartarjeta":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El año de la tarjeta es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El año de la tarjeta debe ser numerico' }))
        else if(value.length < 4 || value.length > 4) setValidationInput(prev => ({...prev, [name]: 'El año de la tarjeta no es valido' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "cvctarjeta":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: 'El cvc de la tarjeta es obligatorio' }))
        else if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El cvc de la tarjeta debe ser numerico' }))
        else if(value.length < 3 || value.length > 3) setValidationInput(prev => ({...prev, [name]: 'El cvc de la tarjeta no es valido' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "nombreemergencia":
        if(value.length > 30 ) setValidationInput(prev => ({...prev, [name]: 'El nombre debe tener menos de 30 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "primerapellidoemergencia":
        if(value.length > 30 ) setValidationInput(prev => ({...prev, [name]: 'El apellido debe tener menos de 30 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "segundoapellidoemergencia":
        if(value.length > 30 ) setValidationInput(prev => ({...prev, [name]: 'El apellido debe tener menos de 30 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "fechanacimientoemergencia":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: '' }))
        else if(moment().diff(value, 'days') <= 0 ) setValidationInput(prev => ({...prev, [name]: 'Fecha de nacimiento no valida' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "emailemergencia":
        if(value.length === 0) setValidationInput(prev => ({...prev, [name]: '' }))
        else if(value.length > 40 ) setValidationInput(prev => ({...prev, [name]: 'El email debe tener menos de 40 caracteres' }))
        else if(!value.split('').includes('@') ) setValidationInput(prev => ({...prev, [name]: 'El email no tiene un formato valido (@)' }))
        else if(!value.split('').includes('.') ) setValidationInput(prev => ({...prev, [name]: 'El email no tiene un formato valido (.)' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break
      case "direccionemergencia":
        if(value.length > 100 ) setValidationInput(prev => ({...prev, [name]: 'La dirección debe tener menos de 100 caracteres' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "codigoemergencia":
        if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El codigó debe ser numerico' }))
        else if(value.length > 4 ) setValidationInput(prev => ({...prev, [name]: 'El código debe tener menos de 5 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      case "telefonoemergencia":
        if(isNaN(value)) setValidationInput(prev => ({...prev, [name]: 'El número debe ser numerico' }))
        else if(value.length > 11 ) setValidationInput(prev => ({...prev, [name]: 'El número debe tener menos de 11 números' }))
        else setValidationInput(prev => ({...prev, [name]: '' }))
        break;
      default:
        return false;
    }
  };

  return (
    <>
      <form action="" className="form mt-5 mb-5" onSubmit={handleSumbit}>
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="field">
              <label className="label">Nombres</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.nombre.length !== 0 && "is-danger"
                  }`}
                  name="nombre"
                  value={nombre}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.nombre.length !== 0 && (
                  <p class="help is-danger">{validationInput.nombre}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Primer apellido</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.primerapellido.length !== 0 && "is-danger"
                  }`}
                  name="primerapellido"
                  value={primerapellido}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.primerapellido.length !== 0 && (
                  <p class="help is-danger">{validationInput.primerapellido}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Segundo apellido</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.segundoapellido.length !== 0 && "is-danger"
                  }`}
                  name="segundoapellido"
                  value={segundoapellido}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.segundoapellido.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.segundoapellido}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Fecha nacimiento</label>
              <div className="control">
                <input
                  type="date"
                  className={`input is-small ${
                    validationInput.fechanacimiento.length !== 0 && "is-danger"
                  }`}
                  name="fechanacimiento"
                  value={fechanacimiento}
                  required
                  onChange={handleInputChange}
                />
                
                {validationInput.fechanacimiento.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.fechanacimiento}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className={`input is-small ${
                    validationInput.email.length !== 0 && "is-danger"
                  }`}
                  name="email"
                  value={email}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.email.length !== 0 && (
                  <p class="help is-danger">{validationInput.email}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Dirección</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.direccion.length !== 0 && "is-danger"
                  }`}
                  name="direccion"
                  value={direccion}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.direccion.length !== 0 && (
                  <p class="help is-danger">{validationInput.direccion}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-2">
            <div className="field">
              <label className="label">Codigo</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.codigo.length !== 0 && "is-danger"
                  }`}
                  name="codigo"
                  value={codigo}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. +502, +503, etc."
                />
                {validationInput.codigo.length !== 0 && (
                  <p class="help is-danger">{validationInput.codigo}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-4">
            <div className="field">
              <label className="label">Número de teléfono</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.telefono.length !== 0 && "is-danger"
                  }`}
                  name="telefono"
                  required
                  value={telefono}
                  onChange={handleInputChange}
                />
                {validationInput.telefono.length !== 0 && (
                  <p class="help is-danger">{validationInput.telefono}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Número casa (opcional)</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.telefonocasa.length !== 0 && "is-danger"
                  }`}
                  name="telefonocasa"
                  value={telefonocasa}
                  onChange={handleInputChange}
                />
                {validationInput.telefonocasa.length !== 0 && (
                  <p class="help is-danger">{validationInput.telefonocasa}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Número de identificación</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.identificacion.length !== 0 && "is-danger"
                  }`}
                  name="identificacion"
                  value={identificacion}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.identificacion.length !== 0 && (
                  <p class="help is-danger">{validationInput.identificacion}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Número de pasaporte</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.pasaporte.length !== 0 && "is-danger"
                  }`}
                  name="pasaporte"
                  value={pasaporte}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.pasaporte.length !== 0 && (
                  <p class="help is-danger">{validationInput.pasaporte}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Número de tarjeta de crédito</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.numerotarjeta.length !== 0 && "is-danger"
                  }`}
                  name="numerotarjeta"
                  value={numerotarjeta}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.numerotarjeta.length !== 0 && (
                  <p class="help is-danger">{validationInput.numerotarjeta}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-2">
            <div className="field">
              <label className="label">Mes</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.mestarjeta.length !== 0 && "is-danger"
                  }`}
                  name="mestarjeta"
                  value={mestarjeta}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.mestarjeta.length !== 0 && (
                  <p class="help is-danger">{validationInput.mestarjeta}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-2">
            <div className="field">
              <label className="label">Año</label>
              <div className="control">
                <input
                  type="number"
                  className={`input is-small ${
                    validationInput.yeartarjeta.length !== 0 && "is-danger"
                  }`}
                  name="yeartarjeta"
                  value={yeartarjeta}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.yeartarjeta.length !== 0 && (
                  <p class="help is-danger">{validationInput.yeartarjeta}</p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-2">
            <div className="field">
              <label className="label">CVC</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.cvctarjeta.length !== 0 && "is-danger"
                  }`}
                  name="cvctarjeta"
                  value={cvctarjeta}
                  required
                  onChange={handleInputChange}
                />
                {validationInput.cvctarjeta.length !== 0 && (
                  <p class="help is-danger">{validationInput.cvctarjeta}</p>
                )}
              </div>
            </div>
          </div>

          <hr className="hr" />
          <div className="column is-12">
            <span className="subtitle is-5">
              Datos de emergencia (opcional)
            </span>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Nombres</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.nombreemergencia.length !== 0 && "is-danger"
                  }`}
                  name="nombreemergencia"
                  value={nombreemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.nombreemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.nombreemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Primer apellido</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.primerapellidoemergencia.length !== 0 &&
                    "is-danger"
                  }`}
                  name="primerapellidoemergencia"
                  value={primerapellidoemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.primerapellidoemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.primerapellidoemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Segundo apellido</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.segundoapellidoemergencia.length !== 0 &&
                    "is-danger"
                  }`}
                  name="segundoapellidoemergencia"
                  value={segundoapellidoemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.segundoapellidoemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.segundoapellidoemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Fecha nacimiento</label>
              <div className="control">
                <input
                  type="date"
                  className={`input is-small ${
                    validationInput.fechanacimientoemergencia.length !== 0 &&
                    "is-danger"
                  }`}
                  name="fechanacimientoemergencia"
                  value={fechanacimientoemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.fechanacimientoemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.fechanacimientoemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className={`input is-small ${
                    validationInput.emailemergencia.length !== 0 && "is-danger"
                  }`}
                  name="emailemergencia"
                  value={emailemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.emailemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.emailemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field">
              <label className="label">Dirección</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.direccionemergencia.length !== 0 &&
                    "is-danger"
                  }`}
                  name="direccionemergencia"
                  value={direccionemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.direccionemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.direccionemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-2">
            <div className="field">
              <label className="label">Codigo</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.codigoemergencia.length !== 0 && "is-danger"
                  }`}
                  name="codigoemergencia"
                  onChange={handleInputChange}
                  value={codigoemergencia}
                  placeholder="Ej. +502, +503, etc."
                />
                {validationInput.codigoemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.codigoemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="column is-4">
            <div className="field">
              <label className="label">Número de teléfono</label>
              <div className="control">
                <input
                  type="text"
                  className={`input is-small ${
                    validationInput.telefonoemergencia.length !== 0 &&
                    "is-danger"
                  }`}
                  name="telefonoemergencia"
                  value={telefonoemergencia}
                  onChange={handleInputChange}
                />
                {validationInput.telefonoemergencia.length !== 0 && (
                  <p class="help is-danger">
                    {validationInput.telefonoemergencia}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <button className="button mb-5 is-success is-fullwidth">Guardar</button>
      </form>
    </>
  );
};
