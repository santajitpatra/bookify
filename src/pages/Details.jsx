import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const Details = () => {
  const params = useParams();
  const firebase = useFirebase();

  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);

  console.log(data);

  useEffect(() => {
    firebase
      .getBookById(params.bookId)
      .then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);

  const placeOrder = async () => {
const result = await firebase.placeOrder(params.bookId, qty)
console.log("place order" , result);
  }


  if (data == null) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container mt-5">
      <h2>{data.name}</h2>
      <img
        src={url}
        width={"50%"}
        style={{ borderRadius: "10px" }}
        alt="Thumbnal"
      />
      <h3>Details</h3>
      <p>Price: Rs. {data.price}</p>
      <p>ISBN Number: {data.isbn}</p>
      <h2>Owner Details</h2>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          type="number"
          placeholder="Enter Qty"
        />
      </Form.Group>
      <Button onClick={placeOrder} variant="info">
        Buy Now
      </Button>
    </div>
  );
};

export default Details;
