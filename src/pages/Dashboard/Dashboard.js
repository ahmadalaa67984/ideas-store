import React from "react";
import AddCard from "../../components/card/AddCard";
import Card from "../../components/card/card";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboaerd.css";
import { people } from "../../data";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/Footer/Footer";

export default function Dashboard() {
  const { image, name, id, quote, link } = people;
  return (
    <>
      <Navbar />
      <div className="card-container">
        {people.map((person) => {
          return <Card key={person.id} {...person}></Card>;
        })}
        <AddCard />
      </div>
      <div className="slider-container">
        <Slider />
      </div>
      <Footer />
    </>
  );
}
