import React from "react";
import profile from "../../assets/profile.png";
import RecentProject from "./RecentProject";
import Creative from "./Creative";

const Home = () => {
  return (
    <section className="home__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <img
              src={profile}
              alt="sushmita"
              className="img-fluid d-block mx-auto"
              style={{ width: "140px" }}
            />
          </div>
          <div className="col-md-10 mt-5">
            <h1 className="fw-bold text-center text-light">
              Bonjour,{" "}
              <span className="text__gradient">I&apos;m Sushmita Swain</span>
            </h1>
            <h2 className="text-center text-light">
              a Creative and Product Designer based in India
            </h2>
          </div>
          <div className="col-md-10 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 className="text-center mt-3 text-light">
                  I specialize in designing immersive digital products, where
                  storytelling and prototyping are my forte.
                </h5>
                <p className="text-center mt-3 text__pink">
                  “Crafting solutions that bridge the gap between technologies &
                  everyday life”
                </p>
                <p className="text-center text-light">
                  Product Design | Design System | Research | Micro-Interaction
                  | Illustrations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentProject />
      <Creative />
    </section>
  );
};

export default Home;
