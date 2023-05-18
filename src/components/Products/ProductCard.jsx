import React, { useEffect, useState } from "react";
import { Button,Card } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios'

const Product = ({ getproduct }) => {
  const [cart, setCart] = useState([]);
  console.log( getproduct );

  const addToCart = async () => {
    try {
      const productToAdd = {
        quantity: 1, // Set the desired quantity
        product: getproduct._id, // Use the product's ID
        name: getproduct.name,
        price: getproduct.price.toString(), // Convert price to string if necessary
        stock: getproduct.stock.toString(), // Convert stock to string if necessary
        imageUrl: getproduct.imageUrl,
        description: getproduct.description,
        // Include any additional properties required by the backend
      };
  
      const response = await axios.post("http://localhost:8800/api/cart/", productToAdd);
      setCart(response.data);
      window.location.reload();
      console.log(cart);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };
  
 
  if (!getproduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card
        key={getproduct._id }
        hoverable
        style={{ width: 240, margin: "16px" }}
        cover={<img alt={getproduct.name} src={getproduct.imageUrl} />}
      >
        <Card.Meta title={getproduct.name} description={`$${getproduct.price}`} />
        <p className="desc">{getproduct.description}</p>
        <Button style={{backgroundColor:'#1677ff','margin':'1rem'}} onClick={addToCart} type="primary" >
          Add to Cart
        </Button>
      </Card>
    </>
  );
};

export default Product;
