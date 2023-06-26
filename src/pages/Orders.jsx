import React, { useEffect } from "react";
import { useFirebase } from "../context/Firebase";

const Orders = () => {
  const firebase = useFirebase();

  useEffect(() => {
    firebase.fetchMyOrders();
  }, []);

  return <div>Orders</div>;
};

export default Orders;
