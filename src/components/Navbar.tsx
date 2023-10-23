import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import linkedin from "../assets/Linkedin.png";
import behance from "../assets/Behance.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname, url]);

  return (
    <section className="navbar__section mt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link
                  to="/"
                  className={url === "/work" ? "navbar-brand" : "navbar-brand"}
                >
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                <div className="d-flex align-items-center d-md-none justify-content-between">
                  <div className="soical__media">
                    <Link
                      to="https://www.linkedin.com/in/sushmita-swain-8b184a200/"
                      target="_blank"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="img-fluid me-2"
                        width={30}
                      />
                    </Link>

                    <Link
                      to="https://www.behance.net/sushmitadesign"
                      target="_blank"
                    >
                      <img
                        src={behance}
                        alt="linkedin"
                        className="img-fluid"
                        width={30}
                      />
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      height: "30px",
                      background: "rgba(255, 255, 255, 0.15)",
                      marginLeft: "16px",
                    }}
                  ></div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <img src={hamburger} alt="" className="img-fluid" />
                    </span>
                  </button>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li
                      className={
                        url === "/about-us" ? " active nav-item" : "nav-item"
                      }
                    >
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="about-us"
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li
                      className={
                        url === "/work" ||
                        url === "/interactive-floor-plans" ||
                        url === "/emergency-plans" ||
                        url === "/success-profile-survey"
                          ? " active nav-item"
                          : "nav-item"
                      }
                    >
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="work"
                      >
                        WORK
                      </Link>
                    </li>
                    <li
                      className={
                        url === "/timeline" ? " active nav-item" : "nav-item"
                      }
                    >
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="timeline"
                      >
                        TIMELINE
                      </Link>
                    </li>
                    <li
                      className={
                        url === "/story" ? " active nav-item" : "nav-item"
                      }
                    >
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="story"
                      >
                        STORY
                      </Link>
                    </li>
                    <li
                      className={
                        url === "/bookshelf" ? " active nav-item" : "nav-item"
                      }
                    >
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="bookshelf"
                      >
                        BOOKSHELF
                      </Link>
                    </li>
                  </ul>
                  <div className="soical__media d-md-block d-none">
                    <Link
                      to="https://www.linkedin.com/in/sushmita-swain-8b184a200/"
                      target="_blank"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="img-fluid me-2"
                        width={30}
                      />
                    </Link>

                    <Link
                      to="https://www.behance.net/sushmitadesign"
                      target="_blank"
                    >
                      <img
                        src={behance}
                        alt="linkedin"
                        className="img-fluid"
                        width={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
