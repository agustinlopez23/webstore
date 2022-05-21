import React, { useState, createContext } from "react";

export const CartContexto = createContext();

export default function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  console.log(carrito);
  const agregarCarrito = (item) => {
    setCarrito([...carrito, item]);
  };
  const removerCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const isInCart = (id) => {
    return carrito.some((producto) => producto.id === id);
  };
  const totalCompra = () => {
    return carrito.reduce(
      (acc, producto) => acc + producto.price * producto.cantidad,
      0
    );
  };
  const totalCantidad = () => {
    return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  };
  return (
    <CartContexto.Provider
      value={{
        carrito,
        agregarCarrito,
        removerCarrito,
        vaciarCarrito,
        isInCart,
        totalCantidad,
        totalCompra,
      }}
    >
      {children}
    </CartContexto.Provider>
  );
}
