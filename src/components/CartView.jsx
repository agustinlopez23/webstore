import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContexto } from "../Context/CartProvider";
import "../assets/css/CartView.css";
import CartItem from "./CartItem";

export default function CartView() {
  const { carrito, vaciarCarrito, totalCompra } = useContext(CartContexto);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {carrito.length > 0 ? (
        <>
          <h2 style={{ display: "flex", justifyContent: "center" }}>Carrito</h2>
          <hr />
          <section>
            {carrito.map((producto) => (
              <CartItem {...producto} key={producto.id} />
            ))}
          </section>
          <span style={{ textAlign: "center" }}>
            Total de la compra: $ {totalCompra()}
          </span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="danger"
              onClick={vaciarCarrito}
              className="button-cartview"
            >
              Vaciar carrito
            </Button>
            <Link to="/checkout">
              <Button variant="primary" className="button-cartview">
                Terminar compra
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="noproductos">
          <h2>No agregaste nada al carrito Aun</h2>
          <hr />
          <Link to="/productos">
            <Button variant="secondary">Volver</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
