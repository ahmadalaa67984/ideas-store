import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError("Passwords do not match !");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashBoared");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="hero">
        <span>Join us!</span>
        <div className="errorMassage">{error}</div>
        <input placeholder="e-mail" type="email" ref={emailRef} required />
        <input
          placeholder="Password"
          type="password"
          ref={passwordRef}
          required
        />
        <input
          placeholder="Confirm Password"
          type="password"
          ref={passwordConfRef}
          required
        />
        <a className="link">
          Already have an account?{" "}
          <Link className="inside" to="/">
            Log In
          </Link>
        </a>
        <button className="sign">Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;
