import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import "../assets/css/ItemDetailContainer.css";

import { collection, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";

export default function ItemDetailContainer() {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();
  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "Productos");

    const docRef = doc(productosRef, itemId);
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {loading ? (
        <div className="detailContainer">
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            className="spinnerHome"
          ></Spinner>
        </div>
      ) : (
        <ItemDetail {...item} />
      )}
    </div>
  );
}
