import React from "react";
import { BtnPrimary } from "./BtnPrimary";
import "./style.css";

export const ElementRegister = () => {
  return (
    <div className="element-register">
      <div className="div">
        <div className="body">
          <div className="form-login">
            <BtnPrimary className="btn-primary-instance" property1="btn-primary" text="S’inscrire" />
            <div className="inputs">
              <div className="nom-utilisateur">
                <div className="overlap-group">
                  <div className="text-wrapper">Saisissez votre nom d'utilisateur</div>
                </div>
                <div className="text-wrapper-2">Nom d'utilisateur</div>
              </div>
              <div className="nom-utilisateur-2">
                <div className="overlap-group">
                  <div className="text-wrapper">Saisissez votre adresse postale</div>
                </div>
                <div className="text-wrapper-2">Adresse postale</div>
              </div>
              <div className="nom-utilisateur-3">
                <div className="overlap-group">
                  <div className="text-wrapper">Saisissez votre adresse mail</div>
                </div>
                <div className="text-wrapper-2">Adresse mail</div>
              </div>
              <div className="nom-utilisateur-4">
                <div className="overlap-group">
                  <img className="eye-off" alt="Eye off" src="eye-off.svg" />
                  <p className="text-wrapper">Saisissez votre mot de passe</p>
                </div>
                <div className="text-wrapper-2">Mot de passe</div>
              </div>
              <div className="nom-utilisateur-5">
                <div className="overlap-group">
                  <p className="text-wrapper">Saisissez&nbsp;&nbsp;l’organisme de rattachement</p>
                </div>
                <p className="text-wrapper-2">Organisme de rattachement du proche</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group">
          <p className="p">Vous avez déjà un compte ?</p>
          <div className="text-wrapper-3">Se connecter</div>
        </div>
        <div className="top">
          <div className="flex-container">
            <div className="span-wrapper">
              <span className="span">
                Créer
                <br />
              </span>
            </div>
            <div className="text-2">
              <span className="text-wrapper-4">votre compte particulier !</span>
            </div>
          </div>
          <div className="vector">
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
