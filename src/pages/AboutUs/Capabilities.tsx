import React from "react";

const Capabilities = () => {
  return (
    <section className="capabilities__section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-light text-center fw-bold text-uppercase">
              MY capabilities
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Product Design
          </div>
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Strategic Thinking
          </div>
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Design System
          </div>
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Team Building
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Troubleshooting
          </div>
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Interaction Design
          </div>
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            0 - 1 Project
          </div>
          <div className="col-md-2 col-5 my-2 mx-md-1 mx-1 capabilities__button">
            Fractional Leadership
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
