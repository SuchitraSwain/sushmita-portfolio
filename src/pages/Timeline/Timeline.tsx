import React from "react";
import kfTimeline from "../../assets/kfTimeline.png";
import kfIcon from "../../assets/kf.png";
import underline from "../../assets/underline.png";
import localPocketTimeline from "../../assets/localPocketTimeline.png";
import localPocketIcon from "../../assets/localPocketLogo.png";
import geneaIcon from "../../assets/genea1.png";
import geneaTimeline from "../../assets/geneaTimeline.png";
import detrackIcon from "../../assets/detrack1.png";
import detrackTimeline from "../../assets/detrackTimeline.png";
import buildrytIcon from "../../assets/buildrytLogo.png";
import buildrytTimeline from "../../assets/buildrytTimeline.png";
import cheylesmoreIcon from "../../assets/cheylesmoreLogo.png";
import cheylesmoreTimeline from "../../assets/cheylesmoreTimeline.png";
import brainTechIcon from "../../assets/brainTechLogo.png";
import brainTechTimeline from "../../assets/brainTechTimeline.png";
import line from "../../assets/line.png";

const Timeline = () => {
  const timelineList = [
    {
      title: "KornFerry",
      subTitle: "UX RESEARCHER",
      type: "consultant",
      icon: kfIcon,
      img: kfTimeline,
      duration: "May 2022 - Present",
      describe:
        "Korn Ferry was founded in Los Angeles by Lester B. Korn and Richard M. Ferry in 1969. The Korn Ferry Institute is here to help you, your team and your organization thrive in the new economy by providing innovative thought leadership, research, data and expertise to support you on your journey to greatness.",
    },
    {
      title: "Local Pocket",
      subTitle: "PRODUCT DESIGNER",
      type: "consultant",
      icon: localPocketIcon,
      img: localPocketTimeline,
      duration: "Aug 2022 - Present",
      describe:
        "Local Pocket is a bespoke app helping to connect diverse customers with independent businesses within a local neighbourhood Based on a unique “local community” concept that allows different trades to offer promotions and discounts on goods or services within an area.",
    },
    {
      title: "Genea",
      subTitle: "UX/UI DESIGNER → PRODUCT DESIGNER",
      type: "Full-time",
      icon: geneaIcon,
      img: geneaTimeline,
      duration: "May 2021 -  Oct 2023",
      describeFirst:
        "Cloud-Based Access Control Software, Modernized & Automated",
      describe:
        "In the perfect marriage of security and convenience, our cloud-based access control platform offers users a modern, mobile-first solution, all while reducing costs and slashing admin times. Automate adding and removing users with our numerous integrations. ",
    },
    {
      title: "Detrack Systems",
      subTitle: "PRODUCT DESIGNER",
      type: "Full-time",
      icon: detrackIcon,
      img: detrackTimeline,
      duration: "June 2022 -  June 2023",
      describeFirst: "Maximize Profits. Automate Your Last Mile",
      describe:
        "Delivery management software that is powerful and easy-to-use, and effective for real-time delivery notifications, real-time proof of delivery, and vehicle tracking at an affordable price",
    },
    {
      title: "Buildryt",
      subTitle: "UX/UI DESIGNER",
      type: "FREELANCING",
      icon: buildrytIcon,
      img: buildrytTimeline,
      duration: "Mar 2022",
      describe:
        "Buildryt is a leading technology enabled construction firm, that prides itself building the most sustainable, effective and efficient houses with highest-quality construction services to our clients across India at reasonable pricing while maintaining trust, professionalism, and honesty.",
    },
    {
      title: "Cheylesmore Chartered Accountants",
      subTitle: "UX/UI DESIGNER",
      type: "FREELANCING",
      icon: cheylesmoreIcon,
      img: cheylesmoreTimeline,
      duration: "Feb 2022",
      describe:
        "Cheylesmore Accountants differentiate themselves from traditional accounting firms through their commitment to providing a refreshing client experience. They make substantial use of the latest technologies to maintain up-to-date financial systems, which subsequently helps their clients to have clearer financial forecasts.",
    },
    {
      title: "BrainEnTech Neuroscience",
      subTitle: "UX/UI DESIGNER",
      type: "FULL-TIME",
      icon: brainTechIcon,
      img: brainTechTimeline,
      duration: "Jun 2020 - May 2021",
      describe:
        "We combine cutting edge Neuroscience and AI for enhancing the rate at which humans can learn. Our seamless interfaces allows the AI to  interact with human brain activity and create content that appeals to the optimal learning patterns.",
    },
  ];
  return (
    <section className="timeline__section pt-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1 className="text-light text-center fw-bold">TIMELINE</h1>
            <img
              src={underline}
              alt="underline"
              className="img-fluid d-block mx-auto mt-4"
              width={500}
            />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            {timelineList.map((timeline: any) => (
              <>
                <div className="row mt-5 card__details">
                  <div className="line">
                    <img src={line} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-3 pe-md-1">
                    <p className="text-light mb-md-0 mb-3 fw-bold d-flex justify-content-md-end justify-content-end align-items-center flex-md-row flex-row-reverse">
                      {timeline.duration}{" "}
                      <div className="dot ms-md-3 me-md-0 me-3"></div>
                    </p>
                  </div>
                  <div className="col-md-9 col-11 ms-md-0 ms-3">
                    <div className="card p-md-3 p-1">
                      <div className="card-body">
                        <div className="row align-items-start">
                          <div className="col-md-12 mb-4">
                            <button type="button" className="btn">
                              {timeline.type}
                            </button>
                          </div>
                        </div>
                        <div className="row align-items-start">
                          <div className="col-md-2 col-3 pe-md-0">
                            <img
                              src={timeline.icon}
                              alt={timeline.title}
                              className="img-fluid"
                              width={60}
                            />
                          </div>
                          <div className="col-md-10 col-9 ps-md-0 header">
                            <h2 className="mb-0 off__white fw-bold">
                              {timeline.title}
                            </h2>
                            <p className="custom__gray mt-1">
                              {timeline.subTitle}
                            </p>
                          </div>
                        </div>
                        <div className="row mt-4 align-items-start">
                          <div className="col-md-8">
                            <p className="text-light mb-0">
                              {timeline.describeFirst}
                            </p>
                            <p className="text-light">{timeline.describe}</p>
                          </div>
                          <div className="col-md-4 d-flex justify-content-md-end justify-content-start">
                            <img
                              src={timeline.img}
                              alt=""
                              className="img-fluid timeline__img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
