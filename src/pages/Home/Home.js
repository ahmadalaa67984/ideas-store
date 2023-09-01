import React from "react";
import SignUp from "../../components/form/SignUp";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <SignUp />
        <image src="cover.jpg" />
      </div>
    </>
  );
}

export default Home;
