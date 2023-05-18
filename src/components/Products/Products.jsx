import React, { useEffect, useState } from "react";
import Product from "./ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the backend API
    // Example:
    fetch("http://localhost:8800/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });

    // Mock data for testing purposes
  }, []);
  return (
    <>

      <div className="Productcards">
      {products.map(product => (
        <Product key={product._id} getproduct={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
