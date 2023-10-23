import React, { useState } from "react";
import interactions from "../../utils/interactions";
import WorkModal from "./WorkModal";

const Interactions = () => {
  const [interaction, setInteraction] = useState({} as any);
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("" as any);

  const handleClose = () => setShow(false);
  return (
    <section className="interaction__section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-5 pt-md-5">
            <h3 className="fw-light">
              Incorporating interactions or animations into the interface can
              bring it to life and provide users with a dynamic and enhanced
              user experience. Here is some of my experimenting with figma
              interactions/animations.
            </h3>
          </div>
        </div>
        <div className="row mt-5">
          {interactions.map((interaction) => (
            <div className="col-md-6 mt-5" key={interaction.name}>
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  src={interaction.logo}
                  alt=""
                  className="img-fluid w-100"
                  onClick={() => {
                    setInteraction(interaction);
                    setModalTitle(interaction.name);
                    setShow(true);
                  }}
                />
                <div className="content-details fadeIn-bottom">
                  <h3
                    className="content-title"
                    onClick={() => {
                      setInteraction(interaction);
                      setModalTitle(interaction.name);
                      setShow(true);
                    }}
                  >
                    Watch Video
                  </h3>
                </div>
              </div>
              <h4 className="mt-4 text-center">{interaction.name}</h4>
            </div>
          ))}
        </div>
      </div>
      {show && (
        <WorkModal
          show={show}
          onHide={handleClose}
          interaction={interaction}
          name={modalTitle}
        />
      )}
    </section>
  );
};

export default Interactions;
