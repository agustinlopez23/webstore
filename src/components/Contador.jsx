import React from "react";
import { Button } from "react-bootstrap";
import "../assets/css/Contador.css";

export default function Contador({ max, setCantidad, cantidad, onAdd, title }) {
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };
  return (
    <div className="my-3 contador">
      <div className="cantidad-container">
        {cantidad === 1 ? (
          <Button variant="secondary" onClick={handleRestar} disabled>
            -
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleRestar}>
            -
          </Button>
        )}

        <span className="mx-2">{cantidad}</span>
        {cantidad === max ? (
          <Button variant="secondary" onClick={handleSumar} disabled>
            +
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleSumar}>
            +
          </Button>
        )}
      </div>
      {max === 0 ? (
        <span style={{ fontSize: "15px" }}>No hay mas {title} disponible</span>
      ) : (
        <Button onClick={onAdd} className="my-3 agregar-carrito">
          Agregar al carrito
        </Button>
      )}
    </div>
  );
}
