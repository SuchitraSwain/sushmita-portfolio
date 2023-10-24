import React from "react";
import fowardArrow from "../../assets/fowardArrow.png";
import arrow from "../../assets/arrow.png";
import work from "../../utils/work";
import { Link } from "react-router-dom";

const RecentProject = () => {
  return (
    <section className="recentproject__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row align-items-center">
              <div className="col-md-6 col-8">
                <h3 className="text-uppercase">RECENT PROJECTS</h3>
              </div>
              <div className="col-md-6 col-4 text-end">
                <Link to="/work" className="text-decoration-none">
                  <h4 className="text-uppercase text-end">
                    <span className="text__gradient fw-bolder">
                      All Work
                      <img
                        src={fowardArrow}
                        alt="img-fluid"
                        width={22}
                        style={{ marginTop: "-8px" }}
                      />
                    </span>
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="row">
                {work.slice(0, 4).map((list) => (
                  <div className="col-md-6 mt-4" key={list.title}>
                    <div className="card recentproject__cards">
                      <div className="card-body p-0">
                        <div className="row mt-3 align-items-center py-2 px-4">
                          <div className="col-6">
                            <img src={list.logo} alt="img-fluid" width={60} />
                          </div>
                          <div className="col-6 text-end d-flex justify-content-end">
                            <p>{list.typeSecond}</p>
                            <p className="mb-0 ms-4">{list.type}</p>
                          </div>
                        </div>
                        <h5 className="text-light fw-bold fs-4 mt-3 px-4 mb-0">
                          {list.title}
                        </h5>
                        <h6 className="custom__gray px-4">{list.company}</h6>
                        <h6 className="custom__gray mt-3 px-4 mb-4">
                          {list.description}
                        </h6>
                        <Link
                          to={list.link}
                          className="text-decoration-none"
                          onClick={() =>
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            })
                          }
                        >
                          <span className="text__gradient px-4 fw-bold">
                            View Case Study{" "}
                            <img
                              src={arrow}
                              alt="img-fluid"
                              width={20}
                              style={{ marginTop: "-8px" }}
                            />
                          </span>
                        </Link>

                        <img
                          src={list.imgSrc}
                          alt=""
                          className="img-fluid mt-5 card__border__bottom"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
