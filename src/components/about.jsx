import React from "react";
import { useTranslation } from "react-i18next/hooks";

const About = () => {
  const [t] = useTranslation(["quienes"]);

  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>{t("quienes:titulo")}</h1>
            <p>{t("quienes:parrafo1")}</p>
            <p>{t("quienes:parrafo2")}</p>
            <p>{t("quienes:parrafo3")}</p>
            <h3 className="OpenSans">{t("quienes:parrafo4")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
