import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2></h2>
      <form>
        <label>Nombre de mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="mascota"
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre dueño de la mascota"
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />
        <label>Síntomas</label>
        <textarea className="u-full-width"
        name="síntomas"></textarea>
      </form>
      <button type="submit"
      className="u-full-width button-primary">Enviar</button>
    </Fragment>
  );
};

export default Formulario;
