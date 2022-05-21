import React, { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({ nombre: "", telefono: "", email: "" });
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          name="nombre"
          value={values.nombre}
          placeholder="Nombre y Apellido"
        />
        {values.nombre.length < 4 && <small>Nombre Invalido</small>}
        <input
          type="email"
          onChange={handleInputChange}
          name="email"
          value={values.email}
          placeholder="Email"
        />
        {values.email.length < 4 && <small>Nombre Invalido</small>}
        <input
          type="number"
          onChange={handleInputChange}
          name="telefono"
          value={values.telefono}
          placeholder="Telefono"
        />
        {values.telefono.length < 11 && <small>Nombre Invalido</small>}
      </Form>
    </div>
  );
}
