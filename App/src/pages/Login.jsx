import React from "react";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";
import "../style/index.css";

function Login() {
  return (
    <div className="element-log-in">
      <div className="div">
        <div className="top">
        <div className="icon-back">
            <img className="icon-back" alt="Icon-back" src="icon-back.svg" />
          </div>
          <div className="flex-container">
            <div className="span-wrapper">
              <span className="span">
                Connecter
                <br />
              </span>
            </div>
            <div className="text-2">
              <span className="text-wrapper-5">votre compte particulier !</span>
            </div>
          </div>
          
        </div>
        <div className="body">
          <div className="link-register">
            <p className="text-wrapper">Vous n'avez pas de compte ?</p>
            <div className="text-wrapper-2">S'inscrire</div>
          </div>
          <div className="form-login">
            <BtnPrimary
              className="btn-primary-instance"
              property1="btn-primary"
              text="Se connecter"
            />
            <div className="mot-de-passe-oubli">
              <p className="p">Mot de passe oublié ?</p>
            </div>
            <div className="inputs">
              <div className="mot-de-passe">
                <div className="overlap-group">
                  <img className="eye-off" alt="Eye off" src="eye-off.svg" />
                  <p className="text-wrapper-3">Saisissez votre mot de passe</p>
                </div>
                <div className="text-wrapper-4">Mot de passe</div>
              </div>
              <div className="nom-utilisateur">
                <div className="overlap-group">
                  <div className="text-wrapper-3">
                    Saisissez votre nom d'utilisateur
                  </div>
                </div>
                <div className="text-wrapper-4">Nom d'utilisateur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
