import React from "react";
//import { useTranslation } from "react-i18next/hooks";
import Trados from "../assets/img/trados.jpg";
import Colegio from "../assets/img/logo_colegio.jpg";

const Partners = () => {
  return (
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 my-6">
            <a href="#!">
              <img class="img-fluid d-block mx-auto" src={Colegio} alt="" />
            </a>
          </div>
          <div class="col-md-6 col-sm-6 my-6">
            <a href="#!">
              <img class="img-fluid d-block mx-auto" src={Trados} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
