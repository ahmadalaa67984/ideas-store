import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./restPassWord.css";

export default function RestPassWord() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
  }
  return (
    <>
      <div className="container">
        <Navbar />
        <form onSubmit={handleSubmit} className="hero">
          <span>Rest Password!</span>
          <div className="errorMassage">{error}</div>
          <div className="successMassage">{message}</div>
          <input placeholder="e-mail" type="email" ref={emailRef} required />

          <a className="link">
            Already have an account?{" "}
            <Link className="inside" to="/">
              Log In
            </Link>
          </a>
          <a className="link">
            Need an account?{" "}
            <Link className="inside" to="/signup">
              Sign Up
            </Link>
          </a>
          <button className="sign">Send mail</button>
        </form>
        <div></div>
      </div>
    </>
  );
}
