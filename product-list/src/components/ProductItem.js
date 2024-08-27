import React from "react";

function ProductItem({ product, key= product.id }) {
  return (
   
    <>
     <div id={key} >
      <h2 style={{padding: '5px'}}>Product {key} </h2>
      <p style={{color: 'red'}}>Price: ${product.price} </p>
      <p style={{color: 'blue'}}>Status: {`${product.available ? "In stock" : "Out of stock"}`} </p>
      </div>
    </>
    
  );
}


export default ProductItem;
