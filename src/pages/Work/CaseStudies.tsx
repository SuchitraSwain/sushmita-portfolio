import React from "react";
import work from "../../utils/work";
import arrow from "../../assets/arrow.png";
import oldWork from "../../utils/oldWork";
import { Link } from "react-router-dom";

function CaseStudies() {
  return (
    <section className="case__study__section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-5 pt-md-5">
            <h2 className="fw-light">
              My professional journey has been enriched by my active involvement
              in a diverse range of projects, allowing me to gain valuable
              insights into both product development and user behavior.
              Presented here are select case studies from my experience.
            </h2>
            <div className="row mt-5 pt-md-5">
              {work.map((list) => (
                <div className="col-md-6 mt-4" key={list.title}>
                  <div className="card recentproject__cards">
                    <div className="card-body p-0">
                      <div className="row mt-3 align-items-baseline py-2 px-4">
                        <div className="col-6">
                          <img src={list.logo} alt="img-fluid" width={60} />
                        </div>
                        <div className="col-6 text-end d-flex justify-content-end">
                          <p className="text-light">{list.typeSecond}</p>
                          <p className="mb-0 ms-4 text-light">{list.type}</p>
                        </div>
                      </div>
                      <h5 className="text-light fw-bold fs-4 mt-3 px-4 mb-0">
                        {list.title}
                      </h5>
                      <h6 className="custom__gray px-4">{list.company}</h6>
                      <h6 className="custom__gray mt-3 px-4 mb-4">
                        {list.description}
                      </h6>
                      {list.link === "" ? (
                        <span className="text__gradient px-4 fw-bold">
                          {list.linkName}
                        </span>
                      ) : (
                        <Link to={list.link} className="text-decoration-none">
                          <span className="text__gradient px-4 fw-bold">
                            {list.linkName}
                            <img
                              src={arrow}
                              alt="img-fluid"
                              width={20}
                              style={{ marginTop: "-8px" }}
                            />
                          </span>
                        </Link>
                      )}

                      <img
                        src={list.imgSrc}
                        alt=""
                        className="img-fluid mt-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text__gradient mt-5 pt-5">
              There's more on the way
            </h4>
          </div>
        </div>

        <div className="row mt-5 pt-5 justify-content-center">
          <div className="col-md-10">
            <h3
              className="fw-light text-center"
              style={{ fontSize: "1.75rem" }}
            >
              Presenting a collection of case studies from the early stages of
              my career as a UX/UI designer.
            </h3>
          </div>
        </div>

        <div className="row mt-5 pt-md-5">
          {oldWork.map((list) => (
            <div className="col-md-6 mt-4" key={list.title}>
              <div className="card recentproject__cards">
                <div className="card-body p-0">
                  <div className="row mt-3 align-items-baseline py-2 px-4">
                    <div className="col-6">
                      <img src={list.logo} alt="img-fluid" width={60} />
                    </div>
                    <div className="col-6 text-end d-flex justify-content-end">
                      <p className="mb-0 ms-4 text-light">{list.type}</p>
                    </div>
                  </div>
                  <h5 className="text-light fw-bold fs-4 mt-3 px-4">
                    {list.title}
                  </h5>
                  <h6 className="custom__gray mt-3 px-4 mb-4">
                    {list.description}
                  </h6>
                  <Link
                    to={list.link}
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text__gradient px-4 fw-bold">
                      View Case Study
                      <img
                        src={arrow}
                        alt="img-fluid"
                        width={20}
                        style={{ marginTop: "-8px" }}
                      />
                    </span>
                  </Link>

                  <img src={list.imgSrc} alt="" className="img-fluid mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 pt-5 justify-content-center">
          <div className="col-md-10">
            <h2 className="text-light text-center">For More Designs</h2>
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

export default CaseStudies;
