import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/ItemDetail.css";
import Contador from "./Contador";
import { CartContexto } from "../Context/CartProvider";
export default function ItemDetail({
  id,
  image,
  description,
  title,
  price,
  rating,
  stock,
}) {
  const { agregarCarrito, isInCart } = useContext(CartContexto);

  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();
  const handleAtras = () => {
    navigate(-1);
  };
  const handleAgregar = () => {
    cantidad && agregarCarrito({ id, title, price, image, cantidad });
  };

  return (
    <>
      <div key={id} className="flex-detail">
        <Card className="m-3 flex card-detail">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text> {description}</Card.Text>
            <Card.Text> Precio: ${price}</Card.Text>
            <p style={{ fontSize: "12px" }}>{stock} unidades disponibles</p>
            {!isInCart(id) ? (
              <Contador
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={handleAgregar}
              />
            ) : (
              <>
                {stock === 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",

                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="success"
                      className="terminar-compra-btn"
                      disabled
                    >
                      Terminar mi compra
                    </Button>
                    <span style={{ fontSize: "10px" }}>
                      No hay mas {title} disponible
                    </span>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/cartview"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Button variant="success" className="terminar-compra-btn">
                        Terminar mi compra
                      </Button>
                    </Link>
                    <span style={{ fontSize: "10px" }}>
                      * Este Producto ya esta cargado en el carrito
                    </span>
                  </>
                )}
              </>
            )}
          </Card.Body>
        </Card>
        <Button onClick={handleAtras} className="btn-atras" variant="primary">
          Volver al Listado
        </Button>
      </div>
    </>
  );
}
