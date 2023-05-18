import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/cart");
        setItems(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8800/api/cart/${itemId}`);
      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="majorContainer">
      <Card className="cartCard">
        {items.map((item) => (
          <div className="containerCart" key={item._id}>
            <div className="imageContainer">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="contentContainer">
              <h3>{item.name}</h3>
              <h5>₹{item.price}</h5>
              <p>{item.description}</p>
              <Button onClick={() => handleDelete(item._id)} danger>
                Delete
              </Button>
            </div>
          </div>
        ))}

        <NavLink to='/checkout' >  
        <Button style={{backgroundColor:'blue',color:'#fff'}} >
        Checkout
        </Button>
        </NavLink>
      </Card>

      
    </div>
  );
};

export default Cart;
