import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>}/>

      </Router>
    </BrowserRouter>
  );
};

export default Routes;
