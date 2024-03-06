import React from "react";
import "./cartItem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartContext } from "../../contexts/CardContext";

const CartItem = ({ img, title, desc, price, amount, id }) => {
  const { decrease, increase } = useCartContext();
  return (
    <>
      <div className="cart-item">
        <div className="img-container">
          <img src={img}></img>
        </div>
        <div className="info-container">
          {title}
          <span>{desc}</span>
          <span className="price"> ${price}</span>
          <div className="b-container">
            <div className="add-icon">
              <AddIcon
                onClick={() => {
                  increase(id);
                }}
              />
            </div>
            <div className="amount">{amount}</div>
            <div className="remove-icon">
              <RemoveIcon
                onClick={() => {
                  decrease(id);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
