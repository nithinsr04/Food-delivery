import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://food-delivery-backend-sg39.onrender.com";
  const [token,setToken] = useState("");
  const [food_list,setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    // Add item to cart
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}});
    }
  };

  const removeFromCart = async (itemId) => {
    // Remove item from cart
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}});
    }
  };

  const totalItems = () => {
    let totalItems = 0;
    for(const item in cartItems){
        if(cartItems[item] > 0){
            totalItems += cartItems[item];
        }
    }
    return totalItems;
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
        }
      }
    loadData();
  },[])

  const fetchFoodList = async() =>{
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalItems,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
