import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";

const CheckoutPage = () => {
  const [checkout, setCheckout] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCheckout();
    fetchItems();
  }, []);

  const fetchCheckout = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/checkout");
      setCheckout(response.data[0]); // Assuming the response is an array and we're only interested in the first item
    } catch (error) {
      console.error("Failed to fetch checkout details:", error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/cart");
      setItems(Object.values(response.data.items));
    } catch (error) {
      console.error("Failed to fetch item details:", error);
    }
  };

  return (
    <div  className="transaction" >
      <div className="checkout">
        <h1>Checkout Details</h1>
        {checkout && (
          <Card style={{ marginBottom: "16px" , height:'300px !important'}}>
            <h2>Address</h2>
            <p>Street: {checkout.address && checkout.address.street}</p>
            <p>City: {checkout.address && checkout.address.city}</p>
            <p>State: {checkout.address && checkout.address.state}</p>
            <p>Zip Code: {checkout.address && checkout.address.zipCode}</p>
            <p>Country: {checkout.address && checkout.address.country}</p>
            <h2>Card Details</h2>
            <p>
              Card Number:{" "}
              {checkout.cardDetails && checkout.cardDetails.cardNumber}
            </p>
            <p>
              Cardholder Name:{" "}
              {checkout.cardDetails && checkout.cardDetails.cardholderName}
            </p>
            <p>
              Expiration Date:{" "}
              {checkout.cardDetails && checkout.cardDetails.expirationDate}
            </p>
            <p>CVV: {checkout.cardDetails && checkout.cardDetails.cvv}</p>
          </Card>
        )}
      </div>
      <div className="items">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.map((item) => (

            <Card style={{height:'296px !important'}} >
              <h3>{item.name} </h3>
              <h3> {`$${item.price}`}</h3>
              <p> {item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
