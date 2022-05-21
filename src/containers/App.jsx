import React from "react";
import "../assets/css/App.css";
import NavBar from "../components/NavBar";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartView from "../components/CartView";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";
import CartProvider from "../Context/CartProvider";
import Checkout from "../components/Checkout";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productos" element={<ItemListContainer />}></Route>
          <Route
            path="/productos/:catId"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/detail/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/cartview" element={<CartView />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
