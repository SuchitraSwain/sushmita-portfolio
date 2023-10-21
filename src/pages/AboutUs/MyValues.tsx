import React from "react";

const MyValues = () => {
  return (
    <section className="myvalue__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="text-light text-center fw-bold text-uppercase">
              MY VALUES
            </h3>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-5 mt-4">
            <div className="card list__1">
              <div className="card-body">
                <h4 className="text-dark fw-bold">💛 Passion is everything.</h4>
                <p className="text-dark mt-3">
                  I found that because I enjoy what I do, I have the drive and
                  initiative to pour my heart into the things I believe in. I
                  push for boundless creativity and to join other passionate
                  people to make the world a happier place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card list__2">
              <div className="card-body">
                <h4 className="text-dark fw-bold">✍️ Never stop learning.</h4>
                <p className="text-dark mt-3">
                  I constantly seek challenges for my personal growth, actively
                  engaging in competitions, collaborative projects, blog
                  reading, and participation in the design community where I
                  learn from other designers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card list__3">
              <div className="card-body">
                <h4 className="text-dark fw-bold">✊ Embrace the journey.</h4>
                <p className="text-dark mt-3">
                  Embrace the learning curves and failures and discomfort. Open
                  your mind and let curiosity and optimism drive you. Believe in
                  yourself, and also have fun along the way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card list__4">
              <div className="card-body">
                <h4 className="text-dark fw-bold">🙂 Be human.</h4>
                <p className="text-dark mt-3">
                  Empathy and kindness go a long way. Share our knowledge and
                  take time to understand different perspectives. Build towards
                  a culture of inclusion and respect, and stay true to yourself
                  and to others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyValues;
