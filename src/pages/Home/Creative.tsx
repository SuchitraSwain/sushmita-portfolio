import React from "react";
import genea from "../../assets/genea.png";
import detrack from "../../assets/detrack.png";
import kornFerry from "../../assets/kornferry.png";
import cheylesmore from "../../assets/cheylesmore.png";
import localPocket from "../../assets/localpocket.png";
import buildryt from "../../assets/buildryt.png";
import { Link } from "react-router-dom";

const Creative = () => {
  return (
    <section className="creative__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="text-light text-center text-uppercase">
              Crafted my creative
            </h3>
          </div>
          <div className="col-md-10 mt-5 creative__logo">
            <div className="row align-items-center">
              <div className="col-md-2">
                <Link to="https://www.getgenea.com/" target="_blank">
                  <img
                    src={genea}
                    alt="genea"
                    className="img-fluid img__custome"
                  />
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="https://www.detrack.com/" target="_blank">
                  <img
                    src={detrack}
                    alt="detrack"
                    className="img-fluid img__custome"
                  />
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="https://www.kornferry.com/" target="_blank">
                  <img src={kornFerry} alt="kornFerry" className="img-fluid" />
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="https://www.cheylesmore.com/" target="_blank">
                  <img
                    src={cheylesmore}
                    alt="cheylesmore"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="https://localpocket.com/" target="_blank">
                  <img
                    src={localPocket}
                    alt="localPocket"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="https://www.buildryt.com/" target="_blank">
                  <img
                    src={buildryt}
                    alt="buildryt"
                    className="img-fluid img__custome"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
