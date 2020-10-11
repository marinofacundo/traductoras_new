import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faFileContract,
  faAnchor,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <section className="page-section" id="services">
      <div class="container text-center">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
          <h3 class="section-subheading text-muted">
            Our main services include:
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faPlane} />
            </span>
            <h4 class="my-3">Migration Law</h4>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faFileContract} />
            </span>
            <h4 class="my-3">Contract Law</h4>
            <p class="text-muted"></p>
          </div>
          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faAnchor} />
            </span>
            <h4 class="my-3">Maritime Law</h4>
            <p class="text-muted"></p>
          </div>

          <div class="col-lg-3">
            <span class="fa-stack fa-4x">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
            <h4 class="my-3">Website translations</h4>
            <p class="text-muted"></p>
          </div>
        </div>
      </div>
    </section>
  );
};
