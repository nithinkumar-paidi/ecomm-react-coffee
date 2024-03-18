import { createContext,useState } from "react";
import products from "../components/product/products.json";
export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [orders,setOrders] = useState([])
  const[nithin,setNithin]= useState(0)
  const val = { cartItems, setCartItems, products, orders,setOrders,nithin,setNithin };
  return <AppContext.Provider value={val}>{props.children}</AppContext.Provider>;
};
