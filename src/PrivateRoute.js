import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { currentUser } = useAuth(); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};
