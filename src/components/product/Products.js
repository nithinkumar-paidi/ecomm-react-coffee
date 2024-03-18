import React, { useContext } from "react";
import { AppContext } from "../../context/appContext.js";
import products from "./products.json"
import "./Product.css"
import AddButton from "./AddButton.js";
import { Link } from "react-router-dom";

export default function Products() {
  const { cartItems, setCartItems,nithin,setNithin } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH
  // const addtoCart = (id) => {
  //   setCartItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  // };

  return (
    <div className="Product-container">
      {products &&
        products.map((value,index) => (
          <div key={value.id} className="Product-items">
            <div onClick={()=>setNithin(index)}>
            <Link to= {`${PATH}/Product1`}>
            <div><img className="Product-img" src={value.image} alt={value.name}/></div>
            </Link>
            </div>
            {/* <div><img className="Product-img" src={value.image} alt={value.name}/></div> */}
            <h3>{value.name}</h3>
            <p style={{textAlign:"justify",padding:"10px"}}>{value.desc}</p>
            <div className="priceBtn">
            <div className="priceTxt">₹{value.price}</div>
            <div className="Product-button"><AddButton id={value.id}/></div>
            {/* <button className="Product-button" onClick={() => addtoCart(value.id)}>Add</button> */}
            </div>
          </div>
        ))}
    </div>
  );
}
