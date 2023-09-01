import React from "react";
import CartItem from "../../components/cartItem/CartItem";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./cart.css";
import { useCartContext } from "../../contexts/CardContext";

const Cart = () => {
  const { cart, total } = useCartContext();

  return (
    <>
      <div className="cart-container">
        <Navbar />
        <div className="center">
          {cart.length === 0 ? (
            <div className="cart-item-container">Empty cart</div>
          ) : (
            <>
              <div className="cart-item-container">
                {cart.map((cartItem) => {
                  return <CartItem key={cartItem.id} {...cartItem} />;
                })}
                <div className="total-price">Total: {total} $</div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
