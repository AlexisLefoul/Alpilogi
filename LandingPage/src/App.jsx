import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import { Logo } from "./components/Logo";
import MenuBurger from "./components/MenuBurger";
import imgAideSoignante from "./assets/aidesoignante.png";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import logo_insta from "./assets/insta.png";
import logo_facebook from "./assets/facebook.png";
import logo_linkedin from "./assets/linkedin.png";
import logo_burger from "./assets/charm_menu-hamburger.svg";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vyjnvjelalkakihhnxto.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5am52amVsYWxrYWtpaGhueHRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MzQ3MDg0OSwiZXhwIjoxOTg5MDQ2ODQ5fQ.lh4kVqFzJJaefh5QzbPp--etwnCTHx_YgzXvHbL4kzo"
);

function App() {
  let deadline = "June, 15, 2023";
  const [isShowingAlert, setShowingAlert] = useState(false);
  const [data, setData] = useState();
  const [email, setEmail] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function addNewlatters(email) {
    const status = (await supabase.from("newsletters").insert({ email: email })).status;
    if(status === 201) {
      setEmail("");
    }
    console.log(status);
  }

  /*const submit = async () => {
    setShowingAlert(true);
    await axios
      .post("https://api.ostava.fibeer.fr/newsletter", { email })
      .then((response) => {
        setData(response) && setShowingAlert(true);
      })
      .catch((error) => {
        setData(error.response) && setShowingAlert(true);
      });
  };

  useEffect(() => {
    if (isShowingAlert === true) {
      setTimeout(() => {
        setShowingAlert(false);
      }, 6000);
    }
  }, [isShowingAlert]);*/

  return (
    <>
      <div className="container-top">
        <div className="header">
          <Logo className="logo"></Logo>
          <div className="nav">
            <h2>Concept</h2>
            <div className="nav-contact">
              <h2 className="title-contact">Contact</h2>
            </div>
          </div>
          <div className="menu-burger" onClick={() => handleOpen()}>
            <img src={logo_burger} />
          </div>
          <MenuBurger
            idModal="menu-burger"
            isOpen={open}
            handleClose={handleClose}
          ></MenuBurger>
        </div>

        <div className="container-text-img">
          <div className="container-text">
            <h1>
              La <a>solution</a> digitale pour faciliter les{" "}
              <a>soins à domicile</a>
            </h1>
            <p>
              Alpilogi est un logiciel de digitalisation des feuilles de soin
              utilisées par les professionnels de la santé. Pour les familles,
              il est également possible d’être tenu informé à distance et
              facilement des services apportés à vos proches.
            </p>
            <h3>Soyez informés de la sortie de l’application !</h3>
            <div className="container-input">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Entrez votre adresse mail"
                type="mail"
              />
              <button className="btn-input" onClick={() => addNewlatters(email)}>S'inscrire</button>
            </div>
            <Timer deadline={deadline} />
          </div>
          <div>
            <div className="container-img-rond">
              <div className="rond-img"></div>
              <img src={imgAideSoignante} className="img-aidesoignante" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-parts">
        <div className="container-textwithimgs">
          <h1 style={{ color: "#497174" }}>
            Pourquoi faire appel à <a>Alpilogi</a> ?
          </h1>
          <div className="imgs-parts">
            <div className="img-and-text">
              <img src={photo1} className="img-parts" />
              <h3>
                Pour les <a>organismes</a> <br /> d’aide à la personne
              </h3>
              <p>
                Suivez facilement vos salariés grâce à un tableau de bord
                recensant tout votre personnel, leurs missions et leurs patients
                à charge.
              </p>
            </div>
            <div className="img-and-text">
              <img src={photo2} className="img-parts" />
              <h3>
                Pour les <a>professionnels</a> d’aide à la personne
              </h3>
              <p>
                Remplissez les documents de vos patients facilement et plus
                rapidement ! Vous pouvez également bénéficier d’un suivi, d’une
                synthèse et de fiches patients.
              </p>
            </div>
            <div className="img-and-text">
              <img src={photo3} className="img-parts" />
              <h3>
                Pour les <a>familles</a>
              </h3>
              <p>
                Soyez avertis des soins apportés à vos proches en temps réel,
                communiquez avec l’auxiliaire de vie, et faites passer des
                messages grâce au tchat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container-footer-row">
          <div>
            <p className="p-title-footer">Informations légales</p>
            <div className="div-sous-title-footer">
              <p className="p-sous-title-footer">CGV</p>
              <p className="p-sous-title-footer">Mentions légales</p>
            </div>
          </div>
          <div>
            <p className="p-title-footer">Confidentialité</p>
            <div className="div-sous-title-footer">
              <p className="p-sous-title-footer">Cookies</p>
              <p className="p-sous-title-footer">RGPD</p>
            </div>
          </div>
          <div>
            <p className="p-title-footer">Aide</p>
            <div className="div-sous-title-footer">
              <p className="p-sous-title-footer">Nous contacter</p>
            </div>
          </div>
        </div>
        <div className="container-footer-logo">
          <div>
            <img src={logo_facebook}></img>
          </div>
          <div>
            <img src={logo_insta}></img>
          </div>
          <div>
            <img src={logo_linkedin}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*      {data?.status === 400 && isShowingAlert && (
        <>
          <div
            className={`toast ${
              isShowingAlert ? "alert-shown" : "alert-hidden"
            }`}
            onTransitionEnd={() => setShowingAlert(false)}
          >
            <p>{data?.data?.message}</p>
          </div>
        </>
      )}*/

/*<div className="container">
        <div className="left">
          <Logo className="logo" />
        </div>
        <div className="right">
          <h1>Dome Of Help !</h1>
          <p className="slogan">
            L'application pour gérer son personnel <br /> et rassurer la famille !
          </p>
          <Timer deadline={deadline} />
          <p className="notif" style={{ marginLeft: 50, marginTop: 50 }}>
            Soit notifié de son arrivée !
          </p>
          <div className="container-input">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Entrez votre adresse mail"
              type="mail"
            />
            <button className="btn-input">
              S'inscrire
            </button>
          </div>
        </div>
      </div>*/
