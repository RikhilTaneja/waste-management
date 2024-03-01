import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Signup from "../Signup";
import Complaint from "../Complaint";
import SocietyRegister from "../SocietyRegister";
import Login from "../Login";
import Donation from "../Donation";
import Educational from "../Educational";
import Incentive from "../Incentive";
import CardDetail from "../CardDetail";
import PrivateAuthRoute from "./PrivateAuthRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/complaint"
        element={
          <PrivateAuthRoute>
            <Complaint />
          </PrivateAuthRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/society/signup" element={<SocietyRegister />} />
      <Route path="/donation" element={<PrivateAuthRoute><Donation /></PrivateAuthRoute>} />
      <Route path="/education" element={<Educational />} />
      <Route path="/incentive" element={
      <PrivateAuthRoute>
      <Incentive />
      </PrivateAuthRoute>}/>
      <Route path="/incentive/society/:id" element={<CardDetail />} />
    </Routes>
  );
};

export default AllRoutes;
