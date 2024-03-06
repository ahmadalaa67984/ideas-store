import React, { useState } from "react";
import Cateigories from "../../components/categories/Cateigories";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import { items } from "../../data";
import "./bussinePlan.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function BussinePlan() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <main>
          <section className="menu section">
            <Cateigories categories={categories} filterItems={filterItems} />
            <div className="card-container">
              <Menu items={menuItems} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default BussinePlan;
