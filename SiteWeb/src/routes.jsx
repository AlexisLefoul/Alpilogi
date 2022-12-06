import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import MainList from "./pages/MainList";
import MainMap from "./pages/MainMap";
import Profil from "./pages/Profil";

function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainList />}></Route>
        <Route path="mainlist" element={<MainList />} />
        <Route path="mainmap" element={<MainMap />} />
        <Route path="profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPages;
