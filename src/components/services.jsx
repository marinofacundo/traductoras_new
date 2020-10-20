import React from "react";
import { useTranslation } from "react-i18next/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faFileContract,
  faAnchor,
  faLaptopCode,
  faCoins,
  faHandshake,
  faCheck,
  faBriefcase,
  faGlobe,
  faBalanceScale,
  faBrain
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [t] = useTranslation(["servicios"]);

  return (
    <section className="page-section" id="services">
      <div class="container text-center">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            {t("servicios:titulo")}
          </h2>
          <h3 class="section-subheading text-muted">{t("servicios:areas")}</h3>
        </div>
        <div class="row text-center">
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faPlane} />
            </span>
            <h4 class="my-3">{t("servicios:li3")}</h4>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faFileContract} />
            </span>
            <h4 class="my-3">{t("servicios:li1")}</h4>
            <p class="text-muted"></p>
          </div>
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faAnchor} />
            </span>
            <h4 class="my-3">{t("servicios:li6")}</h4>
            <p class="text-muted"></p>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
            <h4 class="my-3">{t("servicios:li12")}</h4>
            <p class="text-muted"></p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faCoins} />
            </span>
            <h4 class="my-3">{t("servicios:li7")}</h4>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faHandshake} />
            </span>
            <h4 class="my-3">{t("servicios:li8")}</h4>
            <p class="text-muted"></p>
          </div>
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <h4 class="my-3">{t("servicios:li9")}</h4>
            <p class="text-muted"></p>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faBalanceScale} />
            </span>
            <h4 class="my-3">{t("servicios:li10")}</h4>
            <p class="text-muted"></p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <h4 class="my-3">{t("servicios:li2")}</h4>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <h4 class="my-3">{t("servicios:li5")}</h4>
            <p class="text-muted"></p>
          </div>
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faBrain} />
            </span>
            <h4 class="my-3">{t("servicios:li11")}</h4>
            <p class="text-muted"></p>
          </div>
        </div>
      </div>
    </section>
  );
};
