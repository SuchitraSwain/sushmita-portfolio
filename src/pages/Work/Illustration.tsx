import React from "react";
import { Link } from "react-router-dom";
import illustration1 from "../../assets/illustration1.png";
import illustration2 from "../../assets/illustration2.png";
import illustration3 from "../../assets/illustration3.png";

import illustration4 from "../../assets/illustration4.png";
import illustration5 from "../../assets/illustration5.png";
import illustration6 from "../../assets/illustration6.png";

import illustration7 from "../../assets/illustration7.png";
import illustration8 from "../../assets/illustration8.png";
import illustration9 from "../../assets/illustration9.png";

function Illustration() {
  return (
    <section className="illustration__section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-5 pt-md-5">
            <h3 className="fw-light">
              I have a passion for creating and engaging in artistic endeavors,
              with a focus on digital illustration. Here are a selection of my
              curated digital illustrations.
            </h3>
          </div>
        </div>
        <div className="row mt-5 pt-4">
          <div className="col-md-12 d-md-flex">
            <div className="row flex-column">
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration1} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration2} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration3} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <div className="row flex-column">
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration4} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration5} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration6} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <div className="row flex-column">
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration7} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration8} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-md-11 mt-3 p-1">
                <img src={illustration9} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5 justify-content-center">
          <div className="col-md-10">
            <h2 className="text-light text-center">For More Illustrations</h2>
            <Link
              to="https://www.behance.net/sushmitadesign"
              target="_blank"
              className="text-decoration-none"
            >
              <h3 className="text__gradient">Behance</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Illustration;
