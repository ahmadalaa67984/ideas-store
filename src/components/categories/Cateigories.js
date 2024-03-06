import React from "react";
import "../../pages/bussinePlan/bussinePlan.css";

const Cateigories = ({ categories, filterItems }) => {
  return (
    <div>
      {" "}
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Cateigories;
