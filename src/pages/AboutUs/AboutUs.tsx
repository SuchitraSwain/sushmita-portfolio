import React from "react";
import underline from "../../assets/underline.png";
import Capabilities from "./Capabilities";
import MyValues from "./MyValues";

const AboutUs = () => {
  return (
    <section className="aboutus__section pt-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1 className="text-light text-center fw-bold">ABOUT</h1>
            <img
              src={underline}
              alt="underline"
              className="img-fluid d-block mx-auto mt-4"
              width={500}
            />
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-10">
            <h2 className="text-light fw-bold">
              Bonjour, I&apos;m
              <span className="text__gradient"> Sushmita Swain !</span>
            </h2>
            <p className="sub__para">
              Currently working in KornFerry as UX Researcher Consultant.
            </p>

            <p className="para">
              As a designer I’ve spent the last 4 years crafting interfaces &
              consumer experiences for tech and product companies. I have a
              strong appreciation for simplicity and I enjoy tackling problems
              from a holistic approach while also getting down to the
              nitty-gritty.
            </p>

            <p className="para">
              In 2019, I successfully obtained my master&apos;s degree in
              Physics, which equipped me with a strong background in scientific
              analysis. During my academic journey, I delved into the world of
              computer languages such as Python and MATLAB to conduct data
              analysis. It was during this time that I stumbled upon the field
              of UX/UI design through a college acquaintance whom I collaborated
              on our thesis project. As time went on, I discovered an increasing
              attraction to the domain of design. This passion was not entirely
              new; it stemmed from a lifelong fascination with art and painting,
              which I have nurtured since childhood.
            </p>

            <p className="para">
              I grew up in 10 different states in India and my ability to
              quickly adjust to new challenges in life comes from that. Owing to
              my diverse upbringing, I embrace all cultures and try to bring it
              to the designs I create. I am a movie buff and there’s nothing
              like relaxing to a good masala Bollywood movie. Food is my second
              love and I let my nose guide me to the pleasures of the stomach
              once every weekend.
            </p>
          </div>
        </div>
      </div>
      <Capabilities />
      <MyValues />
    </section>
  );
};

export default AboutUs;
