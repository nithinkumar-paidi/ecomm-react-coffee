import React, { useContext } from "react";
import { AppContext } from "../../context/appContext.js";
import "./Product.css"
import Products from "./Products.js";
import AddButton from "./AddButton.js";
import products from './products.json'

export default function Product1() {
  const { cartItems, setCartItems,nithin,setNithin } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH
  // const addtoCart = (id) => {
  //   setCartItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  // };

  return (
    <div className="Product-container">
      
          <div key={products[nithin].id} className="Product-items">
           
            <div><img className="Product-img" src={products[nithin].image} alt={products[nithin].name}/></div>
            <h3>{products[nithin].name}</h3>
            <p style={{textAlign:"justify",padding:"10px"}}>{products[nithin].desc}</p>
            <div className="priceBtn">
            <div className="priceTxt">₹{products[nithin].price}</div>
            <div className="product-button"><AddButton id={products[nithin].id}/></div>
            {/* <button className="Product-button" onClick={() => addtoCart(Products[nithin].id)}>Add</button> */}
            </div>
          </div>
    
    </div>
  );
}
