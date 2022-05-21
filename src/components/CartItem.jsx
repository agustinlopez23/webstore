import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { CartContexto } from "../Context/CartProvider";
import "../assets/css/CartItem.css";
export default function CartItem({ id, title, price, cantidad }) {
  const { removerCarrito } = useContext(CartContexto);
  return (
    <div>
      <div key={id} className="cartitem-container">
        <h3>{title}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad:{cantidad}</p>
        <Button variant="danger">
          <BsTrash
            onClick={() => {
              removerCarrito(id);
            }}
          />
        </Button>
      </div>
      <hr />
    </div>
  );
}
