import React from "react";
import { useTranslation } from "react-i18next/hooks";
import Carla from "../assets/img/team/carla.jpg";
import Martina from "../assets/img/team/martina.jpg";

export default () => {
  const [t] = useTranslation(["equipo"]);
  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              {t("equipo:titulo")}
            </h2>
            {/* <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3> */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={Carla} alt="" />
              <h4>Carla Rocca</h4>
              <p className="text-muted">{t("equipo:member")}</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={Martina} alt="" />
              <h4>Martina Canevari</h4>
              <p className="text-muted">{t("equipo:member")}</p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
