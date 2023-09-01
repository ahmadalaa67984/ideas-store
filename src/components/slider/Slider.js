import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { people, reviews } from "../../data";
import "./slider.css";

function Slider() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(reviews);
  const { name, image, text, rate } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon"></span>
        </div>
        <h4 className="author">{name}</h4>
        <div className="star-container">
          <Rating
            name="text-feedback"
            value={rate}
            readOnly
            precision={0.5}
            fontSize="small"
          />
        </div>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <i class="fa fa-caret-left" aria-hidden="true"></i>
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </button>
        </div>
      </article>
    </>
  );
}

export default Slider;
