import React from "react";
import bannerImage from "../../assets/bannerImage3.png";
import competitive from "../../assets/competitive3.png";
import userPersona from "../../assets/userPersona3.png";
import userJourney from "../../assets/userJourney3.png";
import strategy from "../../assets/strategy.png";
import strategy1 from "../../assets/strategy1.png";
import designSystem from "../../assets/designSystem3.png";

const DeTrack = () => {
  return (
    <section className="onboarding__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1 className="text-light text-center fw-bold">
              Onboarding Experience
            </h1>
            <p className="text-light text-center">
              Streamline Delivery Success with Ease.
            </p>
          </div>
        </div>
        <div className="row justify-content-center banner__section mt-5 pt-5">
          <div className="col-md-10">
            <div className="row justify-content-center align-items-center mt-5">
              <div className="col-md-6">
                <p className="p__white mb-0 fw-bold">Assessment & Succession</p>
                <h1 className="fw-bold text-light">
                  Emergency Lockdown and Door Exemption Plans
                </h1>
                <p className="p__gray">
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

            <div className="row second__section mt-5 text-md-start text-center mt-5 pt-5">
              <div className="col-md-3">
                <h4 className="fw-bold">Role</h4>
                <p>Product Designer</p>
              </div>
              <div className="col-md-3">
                <h4 className="fw-bold ">Duration</h4>
                <p>6 Weeks</p>
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
                  My team discovered through analytics that the product was
                  losing way too many users that were interacting with the
                  product for the first time. Upon analysis of the user journey
                  using{" "}
                  <strong>
                    <i>Hotjar</i>
                  </strong>
                  , we discovered users were being dumped right into the product
                  with no setup guidance and everyone needed to go through the
                  long sign up form.
                </p>
                <p className="p__gray">
                  Prolonged sign-up forms are causing user frustration and
                  leading to user attrition, resulting in a suboptimal user
                  experience and reduced conversions. We need a solution to
                  streamline the sign-up process and retain more users. This
                  barrier in product was costing the company potential new
                  revenue.
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
                          Analytics revealed a significant drop in first-time
                          user retention due to the absence of onboarding
                          guidance and a lengthy sign-up form. This issue is
                          causing user frustration, high attrition rates, and
                          lost revenue opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 mb-4 p__gray">
                  We require a user-centered solution to streamline the sign-up
                  process and enhance the onboarding experience for improved
                  user retention and conversion rates
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
                          To address the issue of high user attrition during the
                          sign-up process and to enhance user retention and
                          engagement, I implemented a two-pronged approach:
                          <ul style={{ listStyle: "number" }}>
                            <li>Progressive Profiling Strategy</li>
                            <li> Guided Onboarding</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 p__gray">
                  The majority of SaaS executives are so concerned with
                  engineering and raising money that they don’t give enough
                  thought to building a SaaS onboarding process.
                </p>
                <p className="mt-4 p__gray">
                  What matters is whether your customers find value in your
                  product and whether they actually want to use it consistently.
                </p>
                <p>
                  A successful progressive profiling & customer onboarding
                  process will solve that problem by reducing the cognitive load
                  and educating your customers and showing them how to get
                  maximum value from using it.
                </p>
              </div>
            </div>
            <hr />

            <div className="row work__need mt-5">
              <div className="row">
                <div className="col-md-4">
                  <h3>UX Goal</h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    Provide an onboarding solution that optimizes ease-of-use,
                    adheres to best practices, and effectively boosts new user
                    registrations. This solution should seamlessly guide users
                    to the main application screen, enabling them to access all
                    management features without adding complexity to the
                    learning curve.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h3 className="mb-0">
                    What is Progressive Profiling Strategy?
                  </h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    Optimized the experience by introducing a progressive
                    profiling strategy. Instead of overwhelming users with a
                    lengthy form upfront, the system now requests essential
                    information during initial registration. As users engage
                    with the platform over time, additional details are
                    collected progressively, reducing friction and enhancing the
                    onboarding experience.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h3 className="mb-0">What is Onboarding Process?</h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    Recognizing the need for user guidance, Introduced an
                    onboarding process that gently introduces new users to the
                    product. It provides clear information about the services,
                    benefits, and how to get started, helping users feel more
                    confident and motivated to explore the platform. These
                    enhancements collectively resulted in a substantial
                    reduction in user attrition and a noticeable improvement in
                    user retention, positively impacting the conversion rates
                    and overall user experience.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h3 className="mb-0">
                    What are the benefits of an onboarding process
                  </h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    Onboarding can significantly decrease the learning curve
                    from a UX perspective. Companies that prioritize a strong
                    onboarding process tend to experience:
                  </p>
                  <ul style={{ listStyle: "number" }}>
                    <li>
                      Enhanced customer satisfaction, as users are more likely
                      to find value in their product.
                    </li>
                    <li>
                      Users become better informed, understanding not only the
                      company's specific offerings but also gaining industry
                      knowledge.
                    </li>
                    <li>
                      Increased customer retention, primarily due to the first
                      two factors, leading to longer and more engaged customer
                      relationships.
                    </li>
                  </ul>
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
                  During my research we went through the Mckinsey & company
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
                <p className="p__gray mb-0">
                  Detrack is delivery management system, the primary users
                  typically include Customer Support Officers, Customers,
                  Dispatchers, and Managers.
                </p>
                <p className="p__gray">
                  This web app is primarily utilized by Operations Managers, who
                  rely on it for various functions, including:
                  <ul style={{ listStyle: "number" }}>
                    <li>Adding contacts and creating client logins.</li>
                    <li>
                      Uploading delivery and collection data, with the ability
                      to make changes or edit information.
                    </li>
                    <li>
                      Assigning drivers to deliveries and modifying relevant
                      details as needed.
                    </li>
                  </ul>
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
                          <h3>David</h3>{" "}
                          <p className="p__gray mx-2 mb-1">
                            - Operations Manager
                          </p>
                        </div>
                        <div className="row mt-2 text-md-start text-center">
                          <div className="col-md-2 col-6">
                            <p className="p__white mb-0 fw-bold">Age</p>
                            <p className="small">38</p>
                          </div>
                          <div className="col-md-3 col-6">
                            <p className="p__white mb-0 fw-bold">Gender</p>
                            <p className="small">Female</p>
                          </div>
                          <div className="col-md-3 col-6">
                            <p className="p__white mb-0 fw-bold">Occupation</p>
                            <p className="small">Manager</p>
                          </div>
                          <div className="col-md-4 col-6">
                            <p className="p__white mb-0 fw-bold">Experience</p>
                            <p className="small">
                              15 years in logistics and operations
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
                            <strong>Efficient Operations:</strong> David's
                            primary goal is to streamline and optimize the
                            delivery processes within his organization to reduce
                            costs and enhance service quality.
                          </li>
                          <li>
                            <strong>Customer Satisfaction:</strong> He's deeply
                            committed to ensuring that customers receive their
                            deliveries on time and with accurate notifications,
                            thereby improving customer satisfaction.
                          </li>

                          <li>
                            <strong>Data-Driven Decisions:</strong> David values
                            data analytics and real-time tracking to make
                            informed decisions about routes, resource
                            allocation, and cost management.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <p className="p__gray" style={{ fontSize: "1rem" }}>
                          David is a seasoned Operations Manager in a mid-sized
                          logistics company. He oversees the day-to-day
                          operations, ensuring that deliveries run smoothly and
                          efficiently.
                        </p>
                        <p className="p__white fw-bolder">Pain Points:</p>
                        <ul>
                          <li>
                            <strong>Lack of Guidance:</strong> David encounters
                            challenges when using the delivery management
                            software due to a lack of clear onboarding and
                            guidance. This hampers his ability to maximize the
                            software's potential.
                          </li>
                          <li>
                            <strong>Lengthy Sign-Up Process:</strong> The
                            lengthy and complex sign-up form frustrates David,
                            as it delays his ability to get started and benefit
                            from the system's capabilities.
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
                  goal and making the most of feature.
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
                      Step-by-Step Wizard in sign up flow
                    </p>
                    <p className="p__gray">
                      We've opted for a step-by-step wizard instead of
                      progressive profiling because we require important user
                      details. However, we want to avoid overwhelming users with
                      a lengthy form, which can lead to cognitive overload. The
                      step-by-step approach allows users to add information with
                      greater accuracy and focus, one step at a time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={strategy} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>02</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">Onboarding Process</p>
                    <p className="p__gray">
                      The onboarding process can be designed to gradually
                      introduce users to the features and benefits of your
                      platform. This progressive approach helps users become
                      more familiar with the product, potentially increasing
                      their engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={strategy1} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

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
                    <h3>Result</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="p__gray mb-0">
                      Post launch, we started tracking the data 30 days after
                      the release and continued to track ongoing. The results
                      were very rewarding. We've achieved our UX goals of
                      increasing user registration and getting the users to
                      reach the main screen of the application.
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
                      In this project, I gained valuable experience in preparing
                      materials for development that would be seen by customers.
                      I put together a PDF guide that explained how to create
                      various parts of the project. I also made sure all the
                      visual details in my design file were accurate and kept
                      everything well-organized with clear names. This guide
                      made it much faster to adapt the project for different
                      markets, so we could launch it quickly.
                    </p>
                    <p className="p__white fw-bold mt-5">
                      🌟 Practice Makes Perfect!
                    </p>
                    <p className="p__gray">
                      This project has emphasized the importance of UX research
                      in enhancing my skills. It involves gathering feedback and
                      insights on how users perceive the product to enhance the
                      overall user experience. Collaboration with colleagues and
                      stakeholders and the ability to learn from mistakes have
                      been pivotal for successful design. I've come to see that
                      mistakes are chances to improve and have played a
                      significant role in my growth as a designer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeTrack;
