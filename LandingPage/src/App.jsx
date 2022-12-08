import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import { Logo } from "./components/Logo";
import MenuBurger from "./components/MenuBurger";
import imgAideSoignante from "./assets/aidesoignante.png";
import imgAdmr from "./assets/admr.png";
import imgCcas from "./assets/ccas.png";
import imgO2 from "./assets/o2.png";
import logo_insta from "./assets/insta.png";
import logo_facebook from "./assets/facebook.png";
import logo_linkedin from "./assets/linkedin.png";
import logo_burger from "./assets/charm_menu-hamburger.svg";

function App() {
  let deadline = "June, 15, 2023";
  const [isShowingAlert, setShowingAlert] = useState(false);
  const [data, setData] = useState();
  const [email, setEmail] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <button className="btn-input">S'inscrire</button>
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
        <h1>Nos partenaires</h1>
        <div className="imgs-parts">
          <img src={imgCcas} className="img-parts" style={{ marginTop: 50 }} />
          <img src={imgAdmr} className="img-parts" />
          <img src={imgO2} className="img-parts" />
        </div>
      </div>

      <div className="footer">
        <div className="container-footer-row">
          <div>
            <p className="p-title-footer">Informations légales</p>
            <div style={{ marginTop: 40 }}>
              <p className="p-sous-title-footer">CGV</p>
              <p className="p-sous-title-footer">Mentions légales</p>
            </div>
          </div>
          <div>
            <p className="p-title-footer">Confidentialité</p>
            <div style={{ marginTop: 40 }}>
              <p className="p-sous-title-footer">Cookies</p>
              <p className="p-sous-title-footer">RGPD</p>
            </div>
          </div>
          <div>
            <p className="p-title-footer">Aide</p>
            <div style={{ marginTop: 40 }}>
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
