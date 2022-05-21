import React from "react";
import { Card, Button } from "react-bootstrap";
import "../assets/css/CardItem.css";
import { Link } from "react-router-dom";
export default function CardItem({ id, image, description, title, price }) {
  return (
    <>
      <div key={id} className="flex">
        <Card className="m-3 flex" style={{ width: "17rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Link to={`/detail/${id}`} className="productoTituloDesc">
              <Card.Title> {title}</Card.Title>
            </Link>

            <Card.Text> Precio: ${price}</Card.Text>
            <Link to={`/detail/${id}`} className="productoTituloDesc">
              <Button variant="primary" className="m-3">
                Ver mas
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
