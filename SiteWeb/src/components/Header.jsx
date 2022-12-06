import LOGO from "../assets/Logo v0.png";
import logo_user from "../assets/profile-user.svg";

function Header() {
  return (
    <div className="header">
      <a className="logo-position">
        <img src={LOGO} className="logo-taille" />
      </a>
      <div className="nav">
        <h1 onClick={() => (window.location.href = "/mainlist")}>Liste</h1>
        <h1 onClick={() => (window.location.href = "/mainmap")}>Carte</h1>
      </div>
      <a
        style={{ margin: "auto" }}
        onClick={() => (window.location.href = "/profil")}
      >
        <img src={logo_user} className="logo-user" />
      </a>
    </div>
  );
}

export default Header;
