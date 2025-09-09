import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">All Products</h2>
      <div class="row">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;