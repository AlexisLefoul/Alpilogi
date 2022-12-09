import React from "react";
import logo_close from "../assets/close.svg";
function MenuBurger(props) {
  return (
    <>
      <dialog
        id={props.idModal}
        open={props.isOpen}
        onClose={props.handleClose}
        className="container-modal-menu"
      >
        <article className="modal">
          <div style={{ height: 40, position: "absolute" }}>
            <img
              className="close"
              data-target={props.idModal}
              onClick={props.handleClose}
              src={logo_close}
            ></img>
          </div>
          <div className="container-title-nav">
            <h2>Concept</h2>
            <div className="nav-contact">
              <h2 className="title-contact">Contact</h2>
            </div>
          </div>
        </article>
      </dialog>
    </>
  );
}

export default MenuBurger;
