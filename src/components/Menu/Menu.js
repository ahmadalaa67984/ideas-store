import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CardContext";

const Menu = ({ items }) => {
  const { cart, totalall, increase, addIU } = useCartContext();
  // const handleAdd = (menuItem) => {
  //   totalall();
  //   let index = cart.indexOf(menuItem);
  //   if (index >= 0) {
  //     console.log("inc");
  //     increase(menuItem.id);
  //   } else {
  //     console.log("add");
  //    add(menuItem);
  //   }
  //   console.log(cart);
  //   console.log(index);
  // };

  return (
    <>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;

        return (
          <div key={id} className="card">
            <div className="photo">
              <img src={img} />
            </div>
            <h3>{title}</h3>
            <span className="price">${price}</span>
            <span className="desc">${desc}</span>
            <IconButton variant="solid" onClick={() => addIU(menuItem)}>
              <FavoriteBorder color="warning" />
            </IconButton>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
