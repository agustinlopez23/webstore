import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CardWidget from "./CardWidget";
import "../assets/css/NavBar.css";
export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Store</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavLink to="/productos/men's clothing" className="nav-link-d">
                Ropa de Hombre
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="/productos/women's clothing" className="nav-link-d">
                Ropa de mujer
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="/productos/jewelery" className="nav-link-d">
                Joyas
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="/productos/electronics" className="nav-link-d">
                Electronica
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="/productos" className="nav-link-d">
                Todos
              </NavLink>
            </NavDropdown>

            <NavLink to="/cartview" className="nav-link">
              <CardWidget />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
