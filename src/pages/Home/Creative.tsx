import React from "react";
import genea from "../../assets/genea.png";
import detrack from "../../assets/detrack.png";
import kornFerry from "../../assets/kornferry.png";
import cheylesmore from "../../assets/cheylesmore.png";
import localPocket from "../../assets/localpocket.png";
import buildryt from "../../assets/buildryt.png";

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
                <img src={genea} alt="genea" className="img-fluid img__custome" />
              </div>
              <div className="col-md-2">
                <img src={detrack} alt="detrack" className="img-fluid img__custome" />
              </div>
              <div className="col-md-2">
                <img src={kornFerry} alt="kornFerry" className="img-fluid" />
              </div>
              <div className="col-md-2">
                <img
                  src={cheylesmore}
                  alt="cheylesmore"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-2">
                <img
                  src={localPocket}
                  alt="localPocket"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-2">
                <img
                  src={buildryt}
                  alt="buildryt"
                  className="img-fluid img__custome"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
