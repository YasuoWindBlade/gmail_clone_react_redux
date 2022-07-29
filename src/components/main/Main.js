import React from "react";
import Feel from "./Feel";
import "./Main.css";
import Mail from "./Mail";
import RightBar from "./RightBar";
import SideBar from "./SideBar";
//react router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <SideBar />
      <Routes>
        <Route path="/mail" element={<Mail />} />
        <Route path="/" element={<Feel />} />
      </Routes>
      <RightBar />
    </div>
  );
}

export default Main;
