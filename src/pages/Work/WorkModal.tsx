import React from "react";
import { Modal } from "react-bootstrap";

const WorkModal = (props: {
  show?: any;
  onHide?: any;
  images?: any;
  interaction?: any;
  name?: any;
}) => {
  const { show, onHide, images, interaction, name } = props;
  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered size="lg">
      <Modal.Header closeButton className="border-0">
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {images && (
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {images &&
                images.map((image: any, index: number) => (
                  <div
                    className={`${
                      index === 0 ? "carousel-item active" : " carousel-item"
                    }`}
                    key={index}
                  >
                    <img
                      src={image}
                      className="d-block w-100 mb-4"
                      alt="images"
                    />
                  </div>
                ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}

        {interaction && (
          <video
            height="500"
            style={{ width: "100%", backgroundImage: `url(${interaction.bg})` }}
            controls
            autoPlay
            className="mb-4"
          >
            <source src={interaction.video} type="video/mp4" />
          </video>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default WorkModal;
