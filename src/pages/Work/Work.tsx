import React from "react";
import underline from "../../assets/underline.png";
import CaseStudies from "./CaseStudies";
import Illustration from "./Illustration";
import Shots from "./Shots";
import Interactions from "./Interactions";

const Work = () => {
  return (
    <section className="work__section pt-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="text-light text-center fw-bold">WORK</h1>
            <img
              src={underline}
              alt="underline"
              className="img-fluid d-block mx-auto mt-4"
              width={500}
            />
          </div>
        </div>
        <div className="row justify-content-center work__tabs mt-5 pt-5">
          <div className="col-md-10">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="case-study-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#case__studies"
                  type="button"
                  role="tab"
                  aria-controls="case__studies"
                  aria-selected="true"
                >
                  CaseStudies
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="illustration-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#illustration"
                  type="button"
                  role="tab"
                  aria-controls="illustration"
                  aria-selected="false"
                >
                  Illustration
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="shots-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#shots"
                  type="button"
                  role="tab"
                  aria-controls="shots"
                  aria-selected="false"
                >
                  Shots
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="interactions-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#interactions"
                  type="button"
                  role="tab"
                  aria-controls="interactions"
                  aria-selected="false"
                >
                  Interactions
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="case__studies"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <CaseStudies />
              </div>
              <div
                className="tab-pane fade"
                id="illustration"
                role="tabpanel"
                aria-labelledby="illustration-tab"
              >
                <Illustration />
              </div>
              <div
                className="tab-pane fade"
                id="shots"
                role="tabpanel"
                aria-labelledby="shots-tab"
              >
                <Shots />
              </div>
              <div
                className="tab-pane fade"
                id="interactions"
                role="tabpanel"
                aria-labelledby="interactions-tab"
              >
                <Interactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
