import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

export default () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted"></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11">
            <span class="fa-stack fa-4x" style={{ color: "#FFF" }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="emailc">ROCCACANEVARI@INFO.COM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
