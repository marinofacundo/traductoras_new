import React from "react";
import { useTranslation } from "react-i18next/hooks";

const Footer = () => {
  const [t] = useTranslation(["footer"]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <span className="copyright">
              Copyright &copy; RoccaCanevari 2020
            </span>
          </div>
          <div className="col-md-6">{t("footer:ubicacion")}</div>
          <div className="col-md-3">Buenos Aires - Argentina</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
