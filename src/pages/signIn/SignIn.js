import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./signin.module.css";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashBoared");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <Navbar />
        <form onSubmit={handleSubmit} className="hero">
          <span>Log In!</span>
          <div className="errorMassage">{error}</div>
          <input placeholder="e-mail" type="email" ref={emailRef} required />
          <input
            placeholder="Password"
            type="password"
            ref={passwordRef}
            required
          />
          <div className="link">
            Need an account?{" "}
            <Link className="inside" to="/signup">
              Sign Up
            </Link>
            <br></br>
            <Link className="link" to="/restPassWord">
              Forgot Password?
            </Link>
          </div>
          <button className="sign">Log In</button>
        </form>
        <div></div>
      </div>
    </>
  );
}

export default SignIn;
