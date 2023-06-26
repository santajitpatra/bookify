import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { BookCard } from "../components/Card";

const Orders = () => {
  const firebase = useFirebase();
const [books, setBooks] = useState([])

  useEffect(() => {
    if (firebase.isLoggedIn) 

    firebase.fetchMybooks(firebase.user.uid)?.then((books) => {
      setBooks(books.docs);
    });
  }, [firebase]);

  console.log(books);

  if (!firebase.isLoggedIn) {
    return (
      <div>
        <h1>You are not logged in</h1>
      </div>
    );
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          {...book.data()}
          link={`/book/orders/${book.id}`}
        />
      ))}
    </div>
  );
};

export default Orders;
