import React from "react";
//import { useTranslation } from "react-i18next/hooks";
//import { Link, NavLink } from "react-router-dom";
//import Logo from "./logo_new.png";
import i18n from "./../i18n";
import "./navBar.css";

const NavBar = () => {
  //const [t] = useTranslation(["botones", "navbar"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <p class="nombre">RoccaCanevari</p>
          <p class="desc">Traducciones</p>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="botones">
        <button
          className="btnEs"
          type="button"
          onClick={() => changeLanguage("es")}
        />
        <button
          className="btnEn"
          type="button"
          onClick={() => changeLanguage("en")}
        />
      </div>
    </nav>
  );
};

export default NavBar;
