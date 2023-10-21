import React from "react";
import icon1 from "../assets/footer1.png";
import icon2 from "../assets/footer2.png";
import email from "../assets/email.png";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <section className="footer__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <footer>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <h1 className="fw-bold mt-5">
                    <span className="text__gradient">Reach</span>
                    <img
                      src={icon1}
                      alt="icon1"
                      className="img-fluid mx-3"
                      width={30}
                    />
                    <span className="text__gradient">Out</span>
                    <img
                      src={icon2}
                      alt="icon1"
                      className="img-fluid mx-3"
                      width={30}
                    />
                    <span className="text__gradient">Today</span>
                  </h1>
                </div>
                <div className="col-md-5 mt-4">
                  <h4 className="text-light text-center">
                    I&apos;m always love hearing new ideas and I&apos;m more
                    than happy to chat
                  </h4>
                  <h4 className="text__gradient mt-4 mb-5 d-flex align-items-center justify-content-center">
                    <img
                      src={email}
                      alt=""
                      className="img-fluid mx-2"
                      width={30}
                    />
                    sushmitaswain806@gmail.com
                  </h4>
                </div>
              </div>
            </footer>
            <div className="col-md-12 mt-5">
              <img
                src={footer}
                alt=""
                className="img-fluid d-block mx-auto mt-5 pt-5"
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
