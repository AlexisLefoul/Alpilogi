import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import { Logo } from "./components/Logo";

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
      <div className="container">
        <div className="left">
          <Logo className="logo" />
        </div>
        <div className="right">
          <h1>Dome Of Help !</h1>
          <p className="slogan">
            L'application qui révolutionnera bientôt ton <br /> garde-manger !
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
