import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home.jsx";
import Login from "../components/auth/Login.jsx";
import Signup from "../components/auth/Signup.jsx";
import Jobs from "../components/Jobs.jsx";
import Browse from "../components/Browse.jsx";
import Profile from "../components/profile.jsx";
import JobDescription from "../components/JobDescription.jsx";



const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs/description/:id" element={<JobDescription />} />
      </Routes>
    </div>
  );
};

export default Mainroute;
