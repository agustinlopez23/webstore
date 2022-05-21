import React from "react";
import { Container } from "react-bootstrap";
import CardItem from "./CardItem";
import "../assets/css/ItemList.css";

export default function ItemList({ items }) {
  return (
    <>
      <h2 className="productosTitulo">Productos</h2>

      <Container className="productos-container">
        {items.map((producto) => (
          <CardItem key={producto.id} {...producto} />
        ))}
      </Container>
    </>
  );
}
