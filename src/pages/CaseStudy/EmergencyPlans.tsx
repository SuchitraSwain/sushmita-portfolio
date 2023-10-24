import React, { useEffect } from "react";
import bannerImage from "../../assets/emergencyBanner.png";
import { Link } from "react-router-dom";
import useCaseIcon1 from "../../assets/useCaseIcon1.png";
import useCaseIcon2 from "../../assets/useCaseIcon2.png";
import useCaseIcon3 from "../../assets/useCaseIcon3.png";
import competitive from "../../assets/competitive1.png";
import userPersona from "../../assets/userPersona1.png";
import userJourney from "../../assets/userJourney1.png";
import lockEmg from "../../assets/lockEmg.png";
import feature6 from "../../assets/feature6.png";
import feature7 from "../../assets/feature7.png";
import feature8 from "../../assets/feature8.png";
import feature9 from "../../assets/feature9.png";
import designSystem from "../../assets/designSystem1.png";
import mobileApp1 from "../../assets/mobileApp1.png";
import emergencyPlanGif from "../../assets/emergencyPlanGif.gif";
import ScrollToTop from "react-scroll-to-top";

const EmergencyPlans = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const casesArray = [
    {
      icon: useCaseIcon1,
      title: "Schools",
      description:
        "Make your campus a safe space. Design unique lockdown plans to sequester active shooters. Or, use door exemptions to help law enforcement quickly enter the building.",
    },
    {
      icon: useCaseIcon2,
      title: "Healthcare",
      description:
        "Prevent infant abduction, pharmaceutical or dispensary theft and more by locking down your facility. System administrators can provide exemptions for specific healthcare professionals needing to lead during an emergency.",
    },
    {
      icon: useCaseIcon3,
      title: "Retail",
      description:
        "Stop burglaries while in progress. Lock down the facility until the authorities arrive. In the case of a fire, door exceptions can be made for an easy escape.",
    },
  ];
  return (
    <section className="emergencyPlans__section mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1 className="text-light text-center fw-bold">Emergency Plans</h1>
            <p className="text-light text-center">
              strategies to lock or unlock doors remotely or by physical trigger
            </p>
          </div>
        </div>
        <div className="row justify-content-center banner__section mt-5 pt-5">
          <div className="col-md-10">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <p className="p__white mb-0 fw-bold">
                  Prepare . Plan . Protect
                </p>
                <h1 className="fw-bold text-light">
                  Emergency Lockdown and Door Exemption Plans
                </h1>
                <p className="p__gray">
                  An Emergency Lockdown is a feature used to lockdown specific
                  points of a{" "}
                  <Link
                    to="https://www.getgenea.com/solutions/access-control-for-healthcare/"
                    target="_blank"
                  >
                    healthcare facility
                  </Link>{" "}
                  ,{" "}
                  <Link
                    to="https://www.getgenea.com/solutions/access-control-for-schools/"
                    target="_blank"
                  >
                    school
                  </Link>{" "}
                  ,
                  <Link
                    to="https://www.getgenea.com/solutions/enterprise/"
                    target="_blank"
                  >
                    enterprise
                  </Link>{" "}
                  or any other location using{" "}
                  <Link
                    to="https://www.getgenea.com/blog/access-control-systems/"
                    target="_blank"
                  >
                    Genea Access Control
                  </Link>
                  . During an emergency lockdown, all specified doors will lock,
                  and credentials will deactivate. Design custom door plans to
                  strategically lockdown or keep specific doors open. Create
                  role-based exemptions, granting certain personnel access.
                  Automate your access with a single click.
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

              <hr />
            </div>

            <div className="row mt-5 challenge__section">
              <div className="col-md-4">
                <h3 className="fw-bold">The Challenge</h3>
              </div>
              <div className="col-md-8">
                <p className="fw-bold">
                  <i>
                    Imagine a person wearing a mask breaks into a building with
                    a gun and bullets. You suddenly realize that you're the only
                    one who can stop this armed person from causing harm or
                    damage.
                  </i>
                </p>
                <p className="p__gray">
                  Recognizes situations like this have become all too common.
                  Those responsible for providing security need fast, flexible
                  solutions that protect. That’s why we believe door access
                  control should be customizable. With Custom Emergency Lockdown
                  Plans administrators can create unique rules to keep doors
                  open or locked in emergency situations.
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
                          To give administrators the right tools and options to
                          create special plans for emergency situations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 mb-4">
                  An emergency exit is a door specially designed to help people
                  move out of the building during emergencies, such as fire,
                  active shooter, earthquake, hazardous material spills and
                  floods. You may locate emergency exits in strategic areas
                  inside the building, such as hallways, stairwells and other
                  rooms that have direct access to the outside.
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
                          By using Custom Emergency Lockdown Plans,
                          administrators can set specific rules to control
                          whether doors should stay open or be locked during
                          emergency situations. This provides a solution for
                          better security management in critical times
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="row mt-5">
              <div className="row">
                <div className="col-md-4">
                  <h3>What is an Emergency Lockdown ?</h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    An Emergency Lockdown is a function that can be utilized to
                    lockdown all access points at your property simultaneously.
                    During an emergency lockdown, all doors will be
                    inaccessible, and all active credentials will cease to grant
                    access until the lockdown is lifted. You have the ability to
                    opt certain doors out of the Emergency lockdown if
                    necessary.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h3 className="mb-0">What is an Emergency </h3>
                  <h3>Hold Open?</h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    An Emergency Hold Open is a function that gives
                    administrators the ability to unlock all access points at a
                    building simultaneously. During an emergency hold open, free
                    ingress and egress will be available to everyone and users
                    will not need to scan valid credentials in order to gain
                    access to any given door(s) or gate(s). Like an Emergency
                    Lockdown, certain doors can be opted out of the Emergency
                    Hold Open if need be.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h3>One-Off Door Lockdowns and Hold Opens Capabilities</h3>
                </div>
                <div className="col-md-8">
                  <p className="p__gray">
                    If desired, you may also lockdown or hold open one-off doors
                    at your property. This feature can be especially useful if
                    you’re looking to prevent users from accessing only a
                    specific area at your building, such as during construction
                    or during a special meeting. It also proves to be useful if
                    you are looking to grant access to everyone, such as when
                    visitors are on-site or for a specific event.
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div className="row emergency__plan mt-5">
              <div className="col-md-4">
                <h4>Design an Emergency Plan</h4>
                <p className="p__gray">
                  Fire drills, active shooter, burglaries and more.
                </p>
              </div>
              <div className="col-md-4">
                <h4>Automate Door Schedules</h4>
                <p className="p__gray">
                  Choose which doors lock or remain unlocked.
                </p>
              </div>
              <div className="col-md-4">
                <h4>Choose Permissions</h4>
                <p className="p__gray">
                  Create role-based, access exemptions for first responders,
                  security and others.
                </p>
              </div>
            </div>
            <hr />

            <div className="row use__case mt-5 pt-5">
              <div className="col-md-12">
                <h3 className="text-center">Use Cases</h3>
              </div>
              <div className="col-md-12">
                <div className="row">
                  {casesArray &&
                    casesArray.map((cases) => (
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body">
                            <img
                              src={cases.icon}
                              alt=""
                              className="img-fluid"
                              width={50}
                            />
                            <h4 className="mt-4">{cases.title}</h4>
                            <p className="small">{cases.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                  In the course of my research project, I conducted a thorough
                  Competitive Analysis focusing primarily on two key players in
                  the field: Kisi and Arcules. While there were evident
                  similarities and shared features between the two, I identified
                  specific areas where they could be refined and customized to
                  better align with user experience design principles.
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
                  As it is a cloud-based access control platform, which mostly
                  target to IT specialist at a national enterprise or Property
                  manager/Security manager/Administrators of a commercial real
                  estate portfolio., efficient security management is crucial.
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
                          <h3>Sarah Williams</h3>{" "}
                          <p className="p__gray mx-2 mb-1">
                            - Security Manager
                          </p>
                        </div>
                        <div className="row mt-2 text-md-start text-center">
                          <div className="col-md-2 col-6">
                            <p className="p__white mb-0 fw-bold">Age</p>
                            <p className="small">42</p>
                          </div>
                          <div className="col-md-3 col-6">
                            <p className="p__white mb-0 fw-bold">Gender</p>
                            <p className="small">Female</p>
                          </div>
                          <div className="col-md-3 col-6">
                            <p className="p__white mb-0 fw-bold">Location</p>
                            <p className="small">Urban Area</p>
                          </div>
                          <div className="col-md-4 col-6">
                            <p className="p__white mb-0 fw-bold">Education</p>
                            <p className="small">
                              Bachelor's degree in Property Management
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
                            <strong>Enhance Security:</strong> Dianne's primary
                            goal is to enhance the security of the properties
                            she manages. She needs a solution that allows her to
                            monitor and manage security systems effectively.
                          </li>
                          <li>
                            <strong>Incident Management:</strong> Quick response
                            to security incidents is essential. He requires
                            tools that help him and his team respond rapidly to
                            incidents such as unauthorized access or alarms.
                          </li>

                          <li>
                            <strong>Access Control:</strong> He needs an
                            application that provides robust access control
                            features. This includes managing access permissions
                            for tenants, staff, and contractors.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <p className="p__white fw-bolder">Pain Points:</p>
                        <ul>
                          <li>
                            <strong>Managing Multiple Properties:</strong>{" "}
                            Balancing security management for multiple
                            properties can be overwhelming, and he needs a
                            solution that can adapt to different property types
                            and sizes.
                          </li>
                          <li>
                            <strong>Ensuring Compliance:</strong> Compliance
                            with local regulations and property owner
                            requirements is a constant concern. The application
                            should assist in maintaining compliance
                            effortlessly.
                          </li>
                          <li>
                            <strong>Staff Training:</strong> Ensuring that his
                            team is proficient with the security management
                            application and its features can be time-consuming.
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
                  goal and making the most of the emergency plans feature.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={userJourney} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row mt-5 user__journey">
              <div className="col-md-4">
                <h3>How door lock/unlock works?</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  How can the software be used to manage the locking and
                  unlocking?
                </p>
                <p className="p__gray">
                  <strong>Wireless locks</strong> transmit credential
                  information between the controller and the cloud server.
                  Credentials are synced between the database and the controller
                  within the lock.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={lockEmg} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row mt-5 feature__floor">
              <div className="col-md-4">
                <h3>Features of Custom Emergency Plans</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray" style={{ fontSize: "1.25rem" }}>
                  Previously, Genea Access Control featured two lockdown
                  settings. Administrators could either open or lock all their
                  facility’s doors during an emergency. With the feature update,
                  it is now possible to create a distinct plan.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>01</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Customize the name of each plan, select plans to your
                      favourite list
                    </p>
                    <p className="p__gray">
                      Have the ability to give unique names to different plans,
                      and choose which plans like the most and add them to a
                      list of your favourites. This feature allows you to
                      personalize the names of plans and easily access your
                      preferred plans for quick reference or easy access.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature6} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>02</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Automate the plan to open or lock specific doors
                    </p>
                    <p className="p__gray">
                      Automating the plan to open or lock specific doors
                      involves setting up a system that can automatically
                      control the unlocking or locking of certain doors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature7} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <p className="mb-0 fw-bold p__white">
                  Adding a physical trigger to the emergency plan
                </p>
                <p className="p__gray">
                  Configuring physical triggers is a method to initiate an
                  emergency plan through activating a hardwired device. The
                  hardwired device intended to trigger a plan can be configured
                  as monitor point in your Genea dashboard
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature8} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>03</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Exempting users' card access during the lockdown (Create
                      role-based exemptions)
                    </p>
                    <p className="p__gray">
                      There may be fire drill personnel or doctors or VIPs in
                      your organization, that you would like to exclude and
                      would want their credentials to work on the doors during
                      the lockdown. Let's say, you have an access group for whom
                      you want the access credentials to work during the
                      lockdown, ensure that those employees are in an access
                      group and those groups can be added under Lockdown
                      exemption. Credentials of the members from exempted access
                      group will work on doors during the lockdown. However, the
                      user credentials should have enough rights to locked down
                      doors and should be within the schedule for the cards to
                      work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature9} alt="" className="img-fluid w-100" />
              </div>
            </div>

            <div className="row mobile__app mt-5 pt-5">
              <div className="col-md-7">
                <h3>
                  Mobile App: How to Use the Emergency Lockdown & Hold Open
                  Features
                </h3>
                <p className="p__gray" style={{ fontSize: "1rem" }}>
                  While initiating an emergency lockdown is possible through the
                  Genea admin web dashboard, likely, you may not have immediate
                  access to your computer during a crisis. To address this, the
                  Genea app is equipped with this functionality, allowing you to
                  execute an emergency lockdown from anywhere in the world.
                  Follow these steps to perform an emergency lockdown via the
                  Genea app
                </p>
              </div>
              <div className="col-md-4 offset-md-1">
                <img
                  src={emergencyPlanGif}
                  alt=""
                  className="img-fluid w-100"
                />
              </div>

              <div className="col-md-12 mt-5 pt-md-5">
                <img src={mobileApp1} alt="" className="img-fluid w-100" />
              </div>
            </div>

            <hr />

            <div className="row desgin__system mt-5">
              <div className="col-md-4">
                <h3>Design System</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  We've leveraged our in-house Genea Design System, created
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
                    <h3>Benefits of Emergency Lockdown Plans</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="p__gray">
                      Custom Emergency Plans help teams formulate a unique plan
                      before an emergency occurs. As a result, administrators
                      can save time when they need to most. Custom Emergency
                      Plans also helps teams:
                    </p>
                    <ul>
                      <li>Differ their response by emergency type</li>
                      <li>Quickly respond to emergencies</li>
                      <li>
                        Prevent bad actors from accessing parts of a building
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <h3>Result</h3>
                  </div>
                  <div className="col-md-8">
                    <p className="p__gray">
                      After many rounds of improvements, we've created a page
                      that's clear and serves a vital purpose: connecting IT
                      experts and security managers. It's fulfilling to have
                      helped develop this important feature, which is now
                      available. Since it was launched, user engagement has gone
                      up, and it's become a key part of our access control
                      system. We're excited to see how many new Sense users will
                      use this feature as a valuable learning resource.
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
                      This project provided me with important experience in
                      preparing materials for development in a customer-facing
                      setting. I created a PDF guide with notes on how to build
                      different components, maintained precise visual details in
                      my Figma design file, and organized assets with proper
                      names. This guide significantly expedited the page
                      localization process for the global market, allowing for a
                      swift page launch.
                    </p>
                    <p className="p__white fw-bold mt-5">
                      🌟 Practice Makes Perfect!
                    </p>
                    <p className="p__gray">
                      As I worked on this feature, I improved my design quality
                      by regularly asking for input from colleagues and people
                      involved in the project. I gained valuable experience by
                      presenting my designs at various meetings, learning to
                      have open discussions, and understanding when to stand
                      firm on design choices with input from project
                      stakeholders. This process also highlighted the importance
                      of clear communication within the team, especially when
                      asking questions to address issues and manage tight
                      project deadlines.
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

export default EmergencyPlans;
