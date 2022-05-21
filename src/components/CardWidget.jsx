import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import "../assets/css/CardWidget.css";
import { CartContexto } from "../Context/CartProvider";
export default function CardWidget() {
  const { totalCantidad } = useContext(CartContexto);
  return (
    <>
      <BsCart2 className="cardWidget" />
      <span style={{ padding: "5px", fontSize: "12px", fontWeight: "700" }}>
        {totalCantidad(0)}
      </span>
    </>
  );
}
