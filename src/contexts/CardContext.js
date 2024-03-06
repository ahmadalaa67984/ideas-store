import React, { useState, useContext, useReducer, useEffect } from "react";
import { cartmenu } from "./../data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();
const initialState = {
  loading: false,
  cart: cartmenu,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function clearItems() {
    dispatch({ type: "CLEAR_CART" });
  }
  const remove = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "increase", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "decrease", payload: id });
  };
  /*const totalall = () => {
    dispatch({ type: "GET_TOTALS" });
  };*/
  const addIU = (menuItem) => {
    dispatch({ type: "Add_item", payload: menuItem });
  };
  useEffect(() => {
    //totalall();
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        remove,
        increase,
        decrease,
        //totalall,
        addIU,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(AppContext);
};

export { AppContext, CartProvider };
