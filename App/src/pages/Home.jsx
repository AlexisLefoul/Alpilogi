import React from "react";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";
import "../style/index.css";

function Home() {
  return (
    <div className="element-home">
      <div className="top">
        <img alt="Top" src="home_infirmiere.png" />
      </div>
      <div className="body">
        <h1 className="digitalisez-vos">
          <span className="text-wrapper">Digitalisez</span>
          <span className="text-wrapper-2">&nbsp; vos soins à domicile</span>
        </h1>
        <div className="btns">
          <Link to="/choiceprofil">
            <BtnPrimary
              className="btn-primary-instance"
              property1="btn-primary-light"
              text="S&#39;inscrire"
            />
          </Link>
          <Link to="/choiceprofil">
            <BtnPrimary
              className="btn-primary-instance"
              property1="btn-primary"
              text="Se connecter"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
