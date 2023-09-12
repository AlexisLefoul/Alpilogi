import React from "react";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";
import "../style/index.css";

function ChoiseProfilPage() {
  return (
    <div className="element-choise-profil">
      <div className="div">
        <div className="top">
          <Link to="/home">
            <div className="icon-back">
              <img className="icon-back" alt="Vector" src="icon-back.svg" />
            </div>
          </Link>
          <h1 className="text-wrapper">Vous êtes :</h1>
        </div>
        <div className="body">
          <div className="btns">
            <BtnPrimary
              className="btn-primary-instance"
              property1="btn-primary-light"
              text="Un particulier"
            />
            <BtnPrimary
              className="design-component-instance-node"
              property1="btn-primary-light"
              text="Un professionnel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiseProfilPage;
