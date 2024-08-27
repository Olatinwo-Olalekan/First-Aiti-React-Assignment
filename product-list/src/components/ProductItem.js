import React from "react";

function ProductItem({ product }) {
  return (
    <>
      <h2 style={{padding: '5px'}}>{product.name}</h2>
      <p style={{color: 'red'}}>Price: ${product.price} </p>
      {/* product.available ? (
        <p>Status: In stock</p>
      ) : ( 
        <p>Status: Out of Stock</p>
      ) */}

      <p style={{color: 'blue'}}>Status: {`${product.available ? "In stock" : "Out of stock"}`} </p>
    </>
  );
}
https://github.com/Olatinwo-Olalekan/First-Aiti-React-Assignment.git
export default ProductItem;
