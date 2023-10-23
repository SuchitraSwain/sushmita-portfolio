import React, { useState } from "react";
import shotsArray from "../../utils/shots";
import { Link } from "react-router-dom";
import WorkModal from "./WorkModal";

function Shots() {
  const [images, setImages] = useState([] as any);
  const [modalTitle, setModalTitle] = useState("" as any);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <section className="shots__section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-5 pt-md-5">
            <h3 className="fw-light">
              Exploring diverse layout techniques and experimenting with color
              palettes are invaluable means to enhance visual aesthetics and
              stimulate creative expression. Presented below are a curated
              selection of visual compositions.
            </h3>
          </div>
        </div>
        <div className="row mt-5">
          {shotsArray.map((shot) => (
            <div className="col-md-6 mt-5 " key={shot.name}>
              <div className="content">
                <div className="content-overlay"></div>
                <img src={shot.logo} alt="" className="img-fluid w-100" />
                <div className="content-details fadeIn-bottom">
                  <h3
                    className="content-title"
                    onClick={() => {
                      setImages(shot.images);
                      setModalTitle(shot.name);
                      setShow(true);
                    }}
                  >
                    Click Me
                  </h3>
                </div>
              </div>

              <h4 className="mt-4 text-center">{shot.name}</h4>
            </div>
          ))}
        </div>
        <div className="row mt-5 pt-5 justify-content-center">
          <div className="col-md-10">
            <h2 className="text-light text-center">For More Shots</h2>
            <Link
              to="https://www.behance.net/sushmitadesign"
              target="_blank"
              className="text-decoration-none"
            >
              <h3 className="text__gradient">Behance</h3>
            </Link>
          </div>
        </div>

        {show && (
          <WorkModal
            show={show}
            onHide={handleClose}
            images={images}
            name={modalTitle}
          />
        )}
      </div>
    </section>
  );
}

export default Shots;
