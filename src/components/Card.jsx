import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useFirebase } from "../context/Firebase";

export const BookCard = (props) => {
  const firebase = useFirebase();
    const [url, setUrl] = useState(null);

useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setUrl(url));
},[])

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has a title {props.name} and this book is sold by
          {props.displayName} and this book costs Rs.{props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

