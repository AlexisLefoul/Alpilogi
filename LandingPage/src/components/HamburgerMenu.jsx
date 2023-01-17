import React, { useState } from "react";
import styled from "styled-components";

const COLORS = {
  secondary: "#C67430",
  primary: "#497174",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primary};
  position: ${(props) => (props.clicked ? "fixed" : "relative")};
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-color: #d6e4e5;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 2.5rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 2.5rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  overflow: ${(props) => (props.clicked ? "hidden" : "")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding: 0;
`;
const ItemLink = styled.div`
  font-size: 3rem;
  font-family: "DIN Alternate", sans-serif;
  text-decoration: none;
  color: ${COLORS.secondary};
  margin: 1rem 2rem;
  height: 65px;
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel
        htmlFor="navi-toggle"
        onClick={handleClick}
        clicked={click}
        className="menu-burger"
      >
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Concept
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              Contact
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
