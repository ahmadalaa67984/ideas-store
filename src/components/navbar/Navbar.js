import React, { useState } from "react";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "@mui/material/Badge/Badge";
import { IconButton } from "@mui/material";
import { useCartContext } from "../../contexts/CardContext";

function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { amount } = useCartContext();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i> IdeaStore
        </div>
        <div
          style={currentUser ? { display: "flex" } : { display: "none" }}
          className="right"
        >
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={amount} color="error">
                <ShoppingCartIcon style={{ color: "var(--main-color)" }} />
              </StyledBadge>
            </IconButton>
          </Link>
          <div onClick={handleLogout}>Sign Out</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
