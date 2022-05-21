import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnimatedText from "react-animated-text-content";
import CarouselHome from "../components/CarouselHome";
import "../assets/css/Home.css";
export default function Home() {
  return (
    <div className="homeContainer">
      <CarouselHome />
      <AnimatedText
        type="words"
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
        style={{ textAlign: "center", fontSize: "25px" }}
      >
        Bienvenidos a la tienda!
      </AnimatedText>
      ;
      <div className="btn-productos-container">
        <Link to="/productos/men's clothing" className="productosButtom">
          <Button className="btnprimary">Ropa de Hombre</Button>
        </Link>
        <Link to="/productos/women's clothing" className="productosButtom">
          <Button className="btnprimary">Ropa de Mujer</Button>
        </Link>
        <Link to="/productos/jewelery" className="productosButtom">
          <Button className="btnprimary">Joyas</Button>
        </Link>
        <Link to="/productos/electronics" className="productosButtom">
          <Button className="btnprimary">Electronica</Button>
        </Link>
      </div>
      <div>
        <Link to="/productos" className="productosButtom">
          <Button variant="outline-dark">Ver todos los productos</Button>
        </Link>
      </div>
    </div>
  );
}
