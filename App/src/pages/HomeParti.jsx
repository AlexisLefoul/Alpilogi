import React from "react";
import { FeuilleDeSoinFor } from "./FeuilleDeSoinFor";
import { MenuBar } from "./MenuBar";
import { Message } from "./Message";
import { Patient } from "./Patient";
import "./style.css";

export const ElementHomeParticulier = () => {
  return (
    <div className="element-home-particulier">
      <div className="div">
        <div className="body">
          <div className="anciennes-feuilles">
            <div className="text-wrapper-2">Voir plus</div>
            <div className="list">
              <FeuilleDeSoinFor rectangle="image.png" text="Vendredi 2 juin" />
              <FeuilleDeSoinFor rectangle="rectangle-179-2.png" text="Mercredi 31 mai" />
              <FeuilleDeSoinFor rectangle="rectangle-179-3.png" text="Vendredi 26 mai" />
              <FeuilleDeSoinFor rectangle="rectangle-179-4.png" text="Mercredi 24 mai" />
              <FeuilleDeSoinFor rectangle="rectangle-179-5.png" text="Vendredi 19 mai" />
            </div>
            <div className="titre">
              <img className="line" alt="Line" src="image.svg" />
              <p className="text-wrapper-3">Les anciennes feuilles de soins</p>
            </div>
          </div>
          <div className="derniers-messages">
            <div className="groupe-messages">
              <Message className="message-instance" ellipse="ellipse-16-2.png" />
            </div>
            <div className="titre">
              <img className="line" alt="Line" src="line-3.svg" />
              <div className="text-wrapper-3">Derniers messages</div>
            </div>
          </div>
          <div className="vos-proches">
            <div className="patient-wrapper">
              <Patient className="patient-instance" ellipse="ellipse-9-2.png" text="Micheline" />
            </div>
            <div className="titre">
              <img className="line" alt="Line" src="line-1.svg" />
              <div className="text-wrapper-4">Vos proches</div>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="profil" />
          <header className="header">
            <p className="p">Mercredi 7 juin 2023, 13h44</p>
            <h1 className="bonjour-alexandra">
              <span className="span">Bonjour, </span>
              <span className="text-wrapper-5">Alexandra</span>
            </h1>
          </header>
        </div>
        <MenuBar className="menu-bar-instance" />
      </div>
    </div>
  );
};
