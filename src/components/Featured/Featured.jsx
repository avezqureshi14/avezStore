import React, { useEffect, useState } from 'react'
import Product from '../Products/ProductCard';
import axios from 'axios'

const Featured = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8800/api/products/")
    .then((response)=>{
      setProducts(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);
  return (
    <>
    <div className="head">
        <h2>Featured Products</h2>
    </div>
    <div id="card-container">
    { products.map((product)=>(
      <Product product={product} />
    )) }
    </div>
    </>
  )
}

export default Featured