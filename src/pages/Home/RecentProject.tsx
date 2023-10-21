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
              <div className="col-md-6 col-6">
                <h3 className="text-light text-uppercase">RECENT PROJECTS</h3>
              </div>
              <div className="col-md-6 col-6 text-end">
                <h3 className="text-uppercase text-end">
                  <span className="text__gradient">
                    All Work
                    <img
                      src={fowardArrow}
                      alt="img-fluid"
                      width={22}
                      style={{ marginTop: "-8px" }}
                    />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="row">
                {work.slice(0, 4).map((list) => (
                  <div className="col-md-6 mt-4" key={list.title}>
                    <div className="card recentproject__cards">
                      <div className="card-body p-0">
                        <div className="row mt-3 align-items-baseline py-2 px-4">
                          <div className="col-6">
                            <img src={list.logo} alt="img-fluid" width={40} />
                          </div>
                          <div className="col-6 text-end d-flex justify-content-end">
                            <p>{list.typeSecond}</p>
                            <p className="mb-0 ms-4">{list.type}</p>
                          </div>
                        </div>
                        <h5 className="text-light fw-bold fs-4 mt-3 px-4">
                          {list.title}
                        </h5>
                        <h6 className="custom__gray px-4">{list.company}</h6>
                        <h6 className="custom__gray mt-3 px-4 mb-4">
                          {list.description}
                        </h6>
                        <Link to={list.link} className="text-decoration-none">
                          <span className="text__gradient px-4">
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
                          className="img-fluid mt-5"
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
