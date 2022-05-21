import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebase/config";
export default function ItemListContainer() {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const { catId } = useParams();
  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "Productos");
    const q = catId
      ? query(productosRef, where("category", "==", catId))
      : productosRef;
    getDocs(q)
      .then((collection) => {
        const items = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(items);
        setProductos(items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            className="spinnerHome"
          ></Spinner>
        </div>
      ) : (
        <ItemList items={productos} />
      )}
    </>
  );
}
