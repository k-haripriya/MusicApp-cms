import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../Pages/HomePage/Dashboard/Dashboard";
import SongsManagement from "../Pages/HomePage/SongsMangagement/SongsManagement";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>}>
            <Route element={<Dashboard/>} index/>
            <Route path="songs" element={<SongsManagement/>}/>
        </Route>


      </Router>
    </BrowserRouter>
  );
};

export default Routes;
