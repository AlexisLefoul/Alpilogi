import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import { Logo } from "./components/Logo";
import imgAideSoignante from "./assets/aidesoignante.png";
import imgAdmr from "./assets/admr.png";
import imgCcas from "./assets/ccas.png";
import imgO2 from "./assets/o2.png";

function App() {
  let deadline = "December, 31, 2022";
  const [isShowingAlert, setShowingAlert] = React.useState(false);
  const [data, setData] = useState();
  const [email, setEmail] = useState("");
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
        </div>

        <div className="container-text">
          <div>
            <h1>La solution digitale pour faciliter les soins à domicile</h1>
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
          <div style={{ marginLeft: 50 }}>
            <div className="rond-img"></div>
            <img src={imgAideSoignante} className="img-aidesoignante" />
          </div>
        </div>
      </div>
      <div className="container-parts">
        <h1>Nos partenaires</h1>
        <div className="imgs-parts">
          <img src={imgAdmr} className="img-parts" />
          <img src={imgCcas} className="img-parts" />
          <img src={imgO2} className="img-parts" />
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
