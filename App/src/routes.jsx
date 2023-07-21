import React from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/Home";
import ChoiceProfil from "./pages/ChoiceProfil";

function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />} />
        <Route path="choiceprofil" element={<ChoiceProfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPages;
