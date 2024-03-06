import React from "react";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import { PrivateRoute } from "./PrivateRoute";
import RestPassWord from "./pages/restPassWord/RestPassWord";
import BussinePlan from "./pages/bussinePlan/BussinePlan";
import Cart from "./pages/cart/Cart";
import { CartProvider } from "./contexts/CardContext";

function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<SignIn />}></Route>
                <Route path="/signUp" element={<Home />}></Route>
                <Route path="/dashBoared" element={<PrivateRoute />}>
                  <Route path="/dashBoared" element={<Dashboard />} />
                </Route>
                <Route path="/restPassWord" element={<RestPassWord />} />
                <Route path="/bussinsePlan" element={<BussinePlan />} />
                <Route path="/Cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
