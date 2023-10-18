import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import linkedin from "../assets/Linkedin.png";
import behance from "../assets/Behance.png";

const Navbar = () => {
  return (
    <section className="navbar__section mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active text-light"
                        aria-current="page"
                        to="about-us"
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="about-us"
                      >
                        WORK
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="about-us"
                      >
                        TIMELINE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="about-us"
                      >
                        STORY
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-light"
                        aria-current="page"
                        to="bookshelf"
                      >
                        BOOKSHELF
                      </Link>
                    </li>
                  </ul>

                  <div className="soical__media">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="img-fluid me-2"
                      width={30}
                    />
                    <img
                      src={behance}
                      alt="linkedin"
                      className="img-fluid"
                      width={30}
                    />
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
