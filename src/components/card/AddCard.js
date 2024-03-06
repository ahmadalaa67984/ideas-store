import React from "react";
import "./card.css";
import AddIcon from "@mui/icons-material/Add";

function AddCard() {
  return (
    <>
      <div className="card card-add">
        <AddIcon fontSize="large" />
        <h3 className="col">Sell Your Idea $</h3>
      </div>
    </>
  );
}

export default AddCard;
