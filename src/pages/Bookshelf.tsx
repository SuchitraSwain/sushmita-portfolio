import React from "react";
import bookshelfDesktop from "../assets/bookshelf-desktop.png";
import bookshelfMobile from "../assets/bookshelf-mobile.png";
import underline from "../assets/underline.png";

const Bookshelf = () => {
  return (
    <section className="bookshelf__section pt-5 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-light text-center fw-bold">BOOKSHELF</h1>
            <img
              src={underline}
              alt="underline"
              className="img-fluid d-block mx-auto mt-4"
              width={500}
            />
          </div>
          <div className="col-md-12 text-center mt-5 pt-5">
            <h3>Below are some of the books I&apos;ve enjoyed reading</h3>
          </div>
          <div className="col-md-12 mt-5 pt-5">
            <img
              src={bookshelfDesktop}
              alt=""
              className="img-fluid d-md-block d-none mx-auto"
              style={{ width: "70%" }}
            />
            <img
              src={bookshelfMobile}
              alt=""
              className="img-fluid d-md-none d-block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
