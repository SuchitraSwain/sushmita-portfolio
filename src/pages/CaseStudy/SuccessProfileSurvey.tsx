import React, { useEffect } from "react";
import bannerImage from "../../assets/bannerImage2.png";
import competitive from "../../assets/competitive2.png";
import userPersona from "../../assets/userPersona2.png";
import userJourney from "../../assets/userJourney2.png";
import stakeholder from "../../assets/stakeholder.png";
import stakeholder1 from "../../assets/stakeholder1.png";
import assesment from "../../assets/assesment.png";
import dashboard from "../../assets/dashboard.png";
import successSurveyBg from "../../assets/successSurveyBg.png";
import designSystem from "../../assets/designSystem2.png";
import ScrollToTop from "react-scroll-to-top";

const SuccessProfileSurvey = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="survey__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1
              className="text-light text-center fw-bold"
              style={{ letterSpacing: "1px" }}
            >
              Success Profile Survey
            </h1>
            <p className="text-light text-center">
              Bridge Potential with Benchmarks.
            </p>
          </div>
        </div>
        <div className="row justify-content-center banner__section mt-5 pt-5">
          <div className="col-md-10">
            <div className="row justify-content-center align-items-center mt-5">
              <div className="col-md-6">
                <p className="p__white mb-0 fw-light">
                  Assessment & Succession
                </p>
                <h1 className="fw-bold text-light">Success Profile</h1>
                <p className="p__gray mt-4">
                  A success profile is a tool or framework used to define the
                  skills, competencies, behaviors, and characteristics that
                  contribute to success in a particular role or within an
                  organization. It provides a clear outline of the expectations
                  and requirements for individuals to perform effectively and
                  achieve desired outcomes.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={bannerImage}
                  alt=""
                  className="img-fluid w-100 d-block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row second__section mt-5 text-md-start text-center mt-5 pt-5">
              <div className="col-md-3">
                <h4 className="fw-bold">Role</h4>
                <p>Product Designer</p>
              </div>
              <div className="col-md-3">
                <h4 className="fw-bold ">Duration</h4>
                <p>6 Months</p>
              </div>
              <div className="col-md-3">
                <h4 className="fw-bold ">Team</h4>
                <p>Product Owner</p>
              </div>
              <div className="col-md-3">
                <h4 className="fw-bold ">Responsibilities</h4>
                <p>UX Research, UI Designs </p>
              </div>
            </div>
            <hr />

            <div className="row mt-5 challenge__section">
              <div className="col-md-4">
                <h3 className="fw-bold">The Challenge</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  Understanding and addressing gaps in organizational
                  performance is a crucial aspect of achieving success. The
                  process involves benchmarking your organization, its leaders,
                  and individual employees against best-in-class profiles. In
                  simpler terms, this means comparing your company and its
                  people to those who are considered the very best in your
                  industry or field.
                </p>
                <p className="p__white fw-bold">
                  <i>
                    KF using kf4d (Korn Ferry Four-Dimensional (KF4D) Executive
                    Assessment) for benchmarking. According to Korn Ferry, The
                    Four Dimensions of Leadership interact and influence one
                    another within an individual.
                  </i>
                </p>
              </div>

              <div className="col-md-12 mt-5">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2 pe-md-0">
                        <p className="mb-0">
                          ⚡ <strong>Problem :</strong>
                        </p>
                      </div>
                      <div className="col-md-10 ps-md-0">
                        <p className="mb-0">
                          We need to enhance platform to facilitate
                          collaborative work on success profiles. Currently,
                          there is no efficient way to review and edit success
                          profiles by aggregating feedback from all
                          stakeholders. Need to work on interactive dashboard to
                          see all stakeholder responses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 mb-4 p__gray">
                  Implement a real-time, shared success profile editing
                  environment where multiple individuals can simultaneously
                  provide feedback, make edits, and offer insights. This ensures
                  that the success profile reflects the collective expertise of
                  the team.
                </p>

                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2 pe-md-0">
                        <p className="mb-0">
                          💡 <strong>Solution :</strong>
                        </p>
                      </div>
                      <div className="col-md-10 ps-md-0">
                        <p className="mb-0">
                          To empower a collaborative approach towards success
                          profiles and establish the capability to set new
                          benchmarking standards through the review of
                          individual stakeholder responses, we propose the
                          development of a robust collaborative platform
                          feature. This feature will enable multiple
                          stakeholders to efficiently and collaboratively
                          contribute to, edit, and evaluate success profiles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 p__gray">
                  Use Case - Success Profiles for Consultant-Led Assessments,
                  Enabling Editing and Incorporating a Collaborative Approach
                  Wherever Needed.
                </p>
              </div>
            </div>
            <hr />

            <div className="row work__need mt-5">
              <div className="row">
                <div className="col-md-4">
                  <h3>
                    What work needs to be done? And who’s the person to do it?
                  </h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    "Taking into consideration insights about teams,
                    organizations, and individuals, Success Profiles have been
                    formulated.
                  </p>
                  <p className="p__gray">
                    They eliminate the need for guesswork about what
                    'excellence' entails. These dynamic benchmarks reveal the
                    specific attributes that your team must possess to advance
                    your organization's objectives, enabling you to:
                  </p>
                  <ul>
                    <li>Identify existing gaps.</li>
                    <li>
                      Develop a plan for potential changes in your
                      organizational structure, if required.
                    </li>
                    <li>
                      Determine the necessary roles and skill sets for
                      recruitment.
                    </li>
                    <li>
                      Execute your strategy with the right personnel in the
                      right positions.
                    </li>
                  </ul>
                  <p className="p__gray">
                    Success Profiles essentially serve as a blueprint for
                    creating your optimal team, relying on substantial data
                    analytics. These analytics amalgamate current trends within
                    your organization, industry, and the job market, delivering
                    the most current information for your decision-making.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h3 className="mb-0">
                    Difference between job description and success profile
                  </h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    A job description shows the specific duties and
                    responsibilities for a specific role, whereas a success
                    profile expresses the personal qualifications, skills,
                    traits and other relevant qualities that an individual
                    requires to successfully perform the respective job.
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div className="row mt-5 competitive__analysis">
              <div className="col-md-4">
                <h3>Competitive Analysis</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  During my research I went through the Mckinsey & company
                  survey, which also help business leaders to understand best
                  practices, compare their companies’ ways of working and
                  performance with a global benchmark, and make informed and
                  effective decisions.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={competitive} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row mt-5 user__persona">
              <div className="col-md-4">
                <h3>User Persona</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  Korn Ferry is a worldwide consulting firm that specializes in
                  finding top talent, helping them grow, and advising
                  organizations. They work with clients from various industries
                  to build strong teams and leaders that boost business success.
                  This involves evaluating participants, examining their
                  answers, and making changes to create a new success profile.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={userPersona}
                          alt=""
                          className="img-fluid d-block mx-md-0 mx-auto"
                          width={140}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                          <h3>Kristin Watson</h3>{" "}
                          <p className="p__gray mx-2 mb-1">
                            - Talent Management Professional
                          </p>
                        </div>
                        <div className="row mt-2 text-md-start text-center">
                          <div className="col-md-2 col-6">
                            <p className="p__white mb-0 fw-bold">Age</p>
                            <p className="small">40</p>
                          </div>
                          <div className="col-md-3 col-6">
                            <p className="p__white mb-0 fw-bold">Gender</p>
                            <p className="small">Female</p>
                          </div>
                          <div className="col-md-3 col-6">
                            <p className="p__white mb-0 fw-bold">Occupation</p>
                            <p className="small">HR Director</p>
                          </div>
                          <div className="col-md-4 col-6">
                            <p className="p__white mb-0 fw-bold">Experience</p>
                            <p className="small">
                              Over 10 years in Human Resources, holds an MBA in
                              Organizational Development.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <p className="p__white fw-bolder">Goals and Needs:</p>
                        <ul>
                          <li>
                            <strong>Effective Talent Management:</strong> Her
                            primary goal is to ensure that her organization
                            attracts, retains, and develops top talent. She
                            wants to create a workplace where employees thrive
                            and contribute to the company's success.
                          </li>
                          <li>
                            <strong>Strategic Decision-Making:</strong> She aims
                            to make data-driven HR decisions that align with the
                            company's strategic objectives, promoting efficiency
                            and productivity.
                          </li>

                          <li>
                            <strong>Leadership Development:</strong> Developing
                            leadership qualities and skills within the
                            organization is a key focus for her. She wants to
                            identify and groom future leaders.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <p className="p__white fw-bolder">Pain Points:</p>
                        <ul>
                          <li>
                            <strong>Aligning Talent:</strong> She faces the
                            challenge of ensuring that the skills and qualities
                            of employees match the organization's evolving needs
                            and strategic direction.
                          </li>
                          <li>
                            <strong>Talent Acquisition:</strong> She needs to
                            find and attract the right talent for various roles,
                            both entry-level and leadership positions.
                          </li>
                          <li>
                            <strong>Performance Evaluation:</strong> She is
                            responsible for setting performance standards and
                            measuring employee success. Ensuring these standards
                            are fair and accurate is a challenge.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="row mt-5 user__journey">
              <div className="col-md-4">
                <h3>User Journey</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  Let's begin by examining the user's path to achieving their
                  goal and making the most of the edit success profile.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={userJourney} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row mt-5 feature__floor">
              <div className="col-md-4">
                <h3>Manage Stakeholder For Collaboration</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray" style={{ fontSize: "1.25rem" }}>
                  We can do edit of success profile survey from :
                  <ul>
                    <li>From KornFerry Access </li>
                    <li>From Korn Ferry Profile Manager</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>01</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Edit Success Profile From Korn Ferry Profile Manager
                    </p>
                    <p className="p__gray">
                      In KF Profile Manager, you can access a list of all the
                      success profiles. From this interface, you have the option
                      to either duplicate a success profile, give it a new name,
                      and make adjustments as needed. Alternatively, you can
                      make standard adjustments that involve no other
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={stakeholder} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>02</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Edit Success Profile From Korn Ferry Assess
                    </p>
                    <p className="p__gray">
                      In KF Profile Manager, you can access a list of all the
                      success profiles. From this interface, you have the option
                      to either duplicate a success profile, give it a new name,
                      and make adjustments as needed. Alternatively, you can
                      make standard adjustments that involve no other
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={stakeholder1} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row assesment__section mt-5">
              <div className="col-md-4">
                <h3>Assessment</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray" style={{ fontSize: "1.25rem" }}>
                  Once you invite stakeholders for take assessment
                  <ul>
                    <li>
                      Before it KF using kf4d (Korn Ferry Four-Dimensional
                      (KF4D){" "}
                    </li>
                    <li>
                      Now we manage to have assessment to our own KF portal with
                      design consistency.
                    </li>
                  </ul>
                </p>
              </div>
              <img src={assesment} alt="" className="img-fluid w-100 mt-5" />
            </div>
            <hr />
            <div className="row assesment__section mt-5">
              <div className="col-md-4">
                <h3>Output Dashboard</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray" style={{ fontSize: "1.25rem" }}>
                  Once stakeholder start taking the assessment we will able to
                  review the response and the stakeholder how have the edit SP
                  access will able to set new benchmark and publish the new SP
                </p>
              </div>
              <img src={dashboard} alt="" className="img-fluid w-100 mt-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 pt-5 px-0">
        <img src={successSurveyBg} alt="" className="img-fluid" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row desgin__system mt-5">
              <div className="col-md-4">
                <h3>Design System</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  We've leveraged our in-house Korn Ferry Design System, created
                  through the use of components and variables, to facilitate
                  quick and efficient access.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={designSystem} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />
            <div className="row mt-5 results justify-content-center">
              <div className="col-md-12">
                <div className="row mt-5">
                  <div className="col-md-4">
                    <h3>Benefits of collaborative Success profile survey</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="p__gray mb-0">
                      They leverage the collective expertise of multiple
                      stakeholders, ensuring a more comprehensive and accurate
                      representation of the skills and qualities needed for
                      success in specific roles.
                    </p>
                    <p className="p__gray mb-0">
                      Collaboration fosters better communication and alignment
                      within teams, as everyone is involved in defining success
                      criteria. This process can lead to a stronger sense of
                      ownership and engagement among employees.{" "}
                    </p>
                    <p className="p__gray mb-0">
                      Collaborative success profiles often result in more
                      robust, adaptable, and relevant benchmarks, enabling
                      organizations to stay agile and effectively respond to
                      changing business needs and industry trends.
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <h3>Result</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="p__gray mb-0">
                      After many rounds of improvements, we've created a page
                      that's clear and serves a vital purpose how we can provide
                      collaborative edit SP without disturbing the current user
                      journey.
                    </p>
                    <p className="p__gray">
                      Contributing to the development of this significant
                      feature has been a fulfilling experience. Since its
                      introduction, user engagement has increased significantly,
                      making it a vital tool for enhancing performance and
                      establishing new benchmarks while identifying areas for
                      improvement. We are enthusiastic about the prospect of
                      more Sense users utilizing this feature as a valuable
                      resource for their learning and growth.
                    </p>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-4">
                    <h3>Takeaways</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="p__white fw-bold">
                      🤝 Executing Design-to-Development Handoff
                    </p>
                    <p className="p__gray">
                      In the collaborative world of success profile surveys, I
                      played a pivotal role in making the design-to-development
                      transition seamless. I put together a comprehensive guide
                      that not only provided clear instructions for the
                      development team on how to build different survey
                      components but also ensured that the visual integrity of
                      our design files was meticulously maintained.
                      Additionally, I took great care in organizing our digital
                      assets with clear labels, which significantly accelerated
                      the survey's adaptation to suit the needs of diverse user
                      groups. This collaborative endeavour allowed us to quickly
                      launch our survey on a global scale, keeping us
                      consistently ahead in the decision-making process.
                    </p>
                    <p className="p__white fw-bold mt-5">
                      🌟 Practice Makes Perfect!
                    </p>
                    <p className="p__gray">
                      Delving deeper into this project, I honed my research
                      skills and elevated my ability to assess the user
                      experience of various products. Collaborating with fellow
                      designers allowed me to exchange ideas and further develop
                      my skills. While I encountered mistakes along the way,
                      each misstep served as a valuable lesson, guiding me
                      towards more effective methods. This project instilled in
                      me the art of embracing feedback with a positive attitude
                      and presenting my designs and research with a newfound
                      professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop onClick={scrollToTop} />
    </section>
  );
};

export default SuccessProfileSurvey;
