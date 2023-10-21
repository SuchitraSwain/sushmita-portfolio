import React from "react";
import underline from "../assets/underline.png";

const Story = () => {
  return (
    <section className="story__section mt-4 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-light text-center fw-bold">STORY</h1>
            <img
              src={underline}
              alt="underline"
              className="img-fluid d-block mx-auto mt-4"
              width={500}
            />
          </div>
          <div className="col-md-12">
            <h2>
              <span className="text__gradient">Coming Soon</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
