import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ image, name, quote, link }) => {
  return (
    <>
      <Link className="link-card" to={link}>
        <div className="card">
          <div className="photo">
            <img src={image} />
          </div>
          <h3>{name}</h3>
          <span className="quote">{quote}</span>
        </div>
      </Link>
    </>
  );
};

export default Card;
