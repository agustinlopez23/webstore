import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/css/Checkout.css";
import { CartContexto } from "../Context/CartProvider";
import { Form } from "react-bootstrap";
import { validarDatos } from "../helpers/validarDatos";
import { Navigate } from "react-router-dom";
import {
  addDoc,
  collection,
  Timestamp,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../firebase/config";
import Swal from "sweetalert2";

export default function Checkout() {
  const { carrito, totalCompra, vaciarCarrito } = useContext(CartContexto);

  const [values, setValues] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailConfirm: "",
  });
  const handleInputChange = (e) => {
    console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarDatos(values)) {
      return;
    }
    const order = {
      buyer: {
        ...values,
      },
      items: carrito,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const orderRef = collection(db, "Orders");
    const productosRef = collection(db, "Productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        carrito.map((el) => el.id)
      )
    );
    const outOfStock = [];
    const productos = await getDocs(q);
    console.log(carrito);
    // console.log(productos.docs.map((doc) => doc.data()));
    productos.docs.forEach((doc) => {
      const itemToUpdate = carrito.find((producto) => producto.id === doc.id);
      if (doc.data().stock >= itemToUpdate.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.cantidad,
        });
      } else {
        outOfStock.push(itemToUpdate);
      }
    });
    if (outOfStock.length === 0) {
      addDoc(orderRef, order).then((res) => {
        batch.commit();
        Swal.fire({
          icon: "success",
          title: "Su orden ha sido Registrada",
          text: `Su numero de orden es :${res.id}`,
        });
        vaciarCarrito();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No hay Stock de los Siguientes Productos",
        text: outOfStock.map((el) => el.title).join(" , "),
      });
    }
  };

  return (
    <>
      {carrito.length === 0 && <Navigate to="/" />}
      <div className="checkout-container">
        <section>
          <h2 className="resumen-compra">Resumen de compra</h2>
          <hr />
        </section>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInputChange}
            name="nombre"
            value={values.nombre}
            placeholder="Nombre y Apellido"
          />

          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            value={values.email}
            placeholder="Email"
          />

          <input
            type="email"
            onChange={handleInputChange}
            name="emailConfirm"
            value={values.emailConfirm}
            placeholder="Repita su Email"
          />
          {values.emailConfirm !== values.email && (
            <small>Email no coincide</small>
          )}
          <input
            type="number"
            onChange={handleInputChange}
            name="telefono"
            value={values.telefono}
            placeholder="Telefono"
          />

          <Button type="submit" variant="success">
            Finalizar compra
          </Button>
        </Form>
      </div>
    </>
  );
}
