import React, { useEffect } from "react";
import bannerImage from "../../assets/floorPlan1.png";
import { Link } from "react-router-dom";
import competitive from "../../assets/competitive.png";
import userJourney from "../../assets/userJourney.png";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import feature5 from "../../assets/feature5.png";
import functionImage from "../../assets/function.png";
import functionImage1 from "../../assets/function1.png";
import designSystem from "../../assets/designSystem.png";
import interactiveBg from "../../assets/interactiveBg1.png";
import userPersona from "../../assets/userPersona.png";
import geneaLaptopGif from "../../assets/Genealaptop.gif";
import ScrollToTop from "react-scroll-to-top";

const InteractiveFloorPlans = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const benefits = [
    {
      title: "Troubleshooting Access Control",
      describe: [
        "Troubleshooting equipment quickly and effectively is crucial in maintaining a secure environment.",
        "Genea’s Interactive Floor Plans utilise color-coded icons to provide real-time status updates regarding doors and cameras. When a door is online, locked, unlocked or held open, the icon on the map will change colour accordingly.",
        "This intuitive colour-coding system immediately alerts IT and security teams to any issues and prompts them to begin troubleshooting. Instant visibility expedites the identification and resolution of security concerns, ensuring uninterrupted protection.",
      ],
    },
    {
      title: "Camera Views: Centralised Surveillance",
      describe: [
        "One of the major advantages of cloud-based access control is its ability to connect disparate systems, like video, visitor and identity management.",
        "Integrating your video management system with access control amplifies the power of Interactive Floor Plans. By seamlessly connecting the two systems, you can strategically position cameras anywhere on the interactive map.",
        "With just a single click from a pop-out menu, security personnel can access live camera feeds, simplifying monitoring and response.",
        "The platform even offers adjustable settings such as camera angles and fields of view, further enhancing surveillance capabilities.",
      ],
    },
    {
      title: "Quick-Grant Access: Streamlined Visitor Management",
      describe: [
        "The process of granting temporary access to visitors or end users can often be cumbersome. However, with Interactive Floor Plans, this task becomes much easier.",
        "From the pop-out menu, system administrators can grant immediate door access with a single click. By eliminating the need to navigate through multiple windows, IT and security teams can enhance operational efficiency, ensuring smooth visitor management.",
      ],
    },
    {
      title: "Access Logs: Detailed System Audit Trail",
      describe: [
        "Maintaining a comprehensive audit trail of system changes is essential for security compliance and incident investigations. Interactive Floor Plans provide access logs that offer detailed accounts of any modifications made within the access control system.",
        "By accessing the pop-out menu, IT and security teams can preview event descriptions, including unlocked doors or forced entry attempts, and identify the individuals responsible for these changes. This transparency strengthens accountability and facilitates effective security governance.",
      ],
    },
  ];

  return (
    <section className="interactve__floor__plan__section pt-5 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h1
              className="text-light text-center fw-bold"
              style={{ letterSpacing: "1px" }}
            >
              Interactive Floor Plans
            </h1>
            <p className="text-light text-center">
              for Enhancing Access Control Security Management{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center banner__section">
          <div className="col-md-10">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <p className="mb-0">Visualize Your Security</p>
                <h1 className="fw-bold text-light">
                  Interactive Floor Plans for Access Control
                </h1>
                <p className="mt-3">
                  Interactive Floor Plans gives you the ability to oversee,
                  organize and interact with your entire access control system
                  right from a graphical map. Upload your floor plans, place
                  cameras, add door icons and begin. With a single click, IT and
                  security teams can respond more efficiently to emergencies and
                  view security video from anywhere in their facility. Take your
                  cloud-based security to the next level with Interactive Floor
                  Plans.
                </p>
              </div>
              <div className="col-md-6 position-relative">
                <img
                  src={bannerImage}
                  alt=""
                  className="img-fluid w-100 d-block mx-auto position-relative"
                />
                <img
                  src={geneaLaptopGif}
                  alt=""
                  className="img-fluid interactve__banner__gif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 second__container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row second__section text-md-start text-center">
              <div className="col-md-3">
                <h4 className="fw-bold ">Role</h4>
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
                  Partial View, Partial Security and Physical Security
                </p>
                <p>
                  In the realm of IT and security, the challenge of partial
                  system insight poses a significant hurdle for organizations.
                  The absence of comprehensive information not only compromises
                  security but also exposes organizations to considerable risks.
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
                          IT and security teams lack sufficient visibility into
                          their systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 mb-4">
                  Without this vital information, administrators are
                  ill-equipped to respond swiftly and effectively to security
                  threats.{" "}
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
                          In the form of Interactive Floor Plans, which has the
                          potential to provide administrators with a holistic
                          view of their access control systems, empowering them
                          with the tools needed to mitigate risks and ensure
                          robust security measures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  For example,{" "}
                  <Link
                    to="https://www.getgenea.com/blog/video-management/"
                    target="_blank"
                  >
                    video management
                  </Link>{" "}
                  systems, including video surveillance cameras, would run
                  through a separate platform from a company’s door access
                  control system. Consequently, this makes having a singular
                  overview of one’s physical security system impossible.
                  However, in recent years, some access control providers have
                  switched to operating through the{" "}
                  <Link to="https://www.getgenea.com/blog/cloud-access-control-for-security-consultants/">
                    {" "}
                    cloud.
                  </Link>
                </p>
              </div>
            </div>
            <hr />

            <div className="row security__mean mt-5">
              <div className="col-md-4">
                <h3>What does this mean for security teams ?</h3>
              </div>
              <div className="col-md-8">
                <ul>
                  <li>
                    Disparate systems can be{" "}
                    <Link
                      to="https://www.getgenea.com/blog/access-control-integrations-streamline-property-access-software/"
                      target="_blank"
                    >
                      integrated
                    </Link>
                    . IT and security teams no longer need to toggle between
                    different computer screens for an overview of their
                    security. Instead, everything security is in one place,
                    behind a single pane of glass. From a practical standpoint,
                    this means faster reaction times and a more efficient way to
                    gain oversight across your entire facility or facilities.
                  </li>
                  <li>
                    The cloud also means new{" "}
                    <Link
                      to="https://www.getgenea.com/products/access-control/"
                      target="__blank"
                    >
                      security features
                    </Link>{" "}
                    can be instantly deployed by the manufacturer once they are
                    developed. Since Genea Access Control is cloud-based, this
                    feature was quickly released to customers giving them a
                    visual way to achieve detailed oversight of their
                    facilities.
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <div className="row mt-5 competitive__analysis">
              <div className="col-md-4">
                <h3>Competitive Analysis</h3>
              </div>
              <div className="col-md-8">
                <p>
                  In the course of my research project, I conducted a thorough
                  Competitive Analysis focusing primarily on two key players in
                  the field: Envoy and Arcules. While there were evident
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
                <p>
                  As Genea is a cloud-based access control platform, which
                  mostly target to IT specialist at a national enterprise or
                  Property manager/Security manager/Administrators of a
                  commercial real estate portfolio., efficient security
                  management is crucial.
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
                            <p className="small">38</p>
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
                            <p className="p__white mb-0 fw-bold">Family</p>
                            <p className="small">Married with two children</p>
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
                            <strong>Efficient Security Management:</strong>{" "}
                            Sarah needs a security management application that
                            streamlines her tasks, making it easier to monitor
                            security systems, access control, and surveillance
                            cameras.
                          </li>
                          <li>
                            <strong>Proactive Threat Detection:</strong> She
                            wants to be alerted to potential security threats in
                            real-time, enabling her to take immediate action to
                            prevent security breaches.
                          </li>
                          <li>
                            <strong>Data Insights:</strong> Sarah requires
                            detailed reports and analytics to assess the
                            performance of security measures, enabling her to
                            make data-driven decisions and improvements.
                          </li>

                          <li>
                            <strong>User-Friendly Interface:</strong> As a busy
                            professional, she seeks an intuitive and
                            easy-to-navigate interface to save time and minimize
                            the learning curve.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <p className="p__white fw-bolder">Pain Points:</p>
                        <ul>
                          <li>
                            <strong>Complexity:</strong> Dealing with multiple
                            security components and systems can be overwhelming
                            and time-consuming.
                          </li>
                          <li>
                            <strong>Inefficient Reporting:</strong> Manual data
                            collection and reporting is a tedious and
                            error-prone task.
                          </li>
                          <li>
                            <strong>Security Vulnerabilities:</strong> Without
                            real-time threat detection, she feels exposed to
                            potential risks.
                          </li>
                        </ul>
                        <p className="p__white fw-bolder">Quotes:</p>
                        <ul>
                          <li>
                            "I need a solution that lets me stay on top of
                            security, without drowning in complexity."
                          </li>
                          <li>
                            "Real-time alerts are crucial for preventing
                            security breaches."
                          </li>
                          <li>
                            "Efficient reporting would save me so much time and
                            frustration."
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
                  goal and making the most of the Interactive Floor Plan
                  feature.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img src={userJourney} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row mt-5 feature__floor">
              <div className="col-md-4">
                <h3>Features for a Interactive Floor Plans</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray" style={{ fontSize: "1.25rem" }}>
                  Interactive Floor Plans presents a comprehensive bird’s eye
                  view of your entire security system. By mapping doors and
                  access points onto graphical floor plans, IT and security
                  teams gain a holistic understanding of their facility’s
                  security layout. This visual representation allows for easy
                  identification and assessment of potential vulnerabilities,
                  enabling proactive security measures.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>01</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Mapped Devices (Doors, Cameras, Controllers, Monitor Point
                      and Control Point.
                    </p>
                    <p className="p__gray">
                      Map your devices and access points onto a visual
                      floorplan. With Interactive Floor Plans for Access
                      Control, you get a bird’s eye view of your entire security
                      system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature1} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>02</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Color-Coded Doors and other devices
                    </p>
                    <p className="p__gray">
                      Color-coded door icons indicate whether a door is online,
                      locked, unlocked or held open. This feature helps IT and
                      security teams quickly troubleshoot any issues that arise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature2} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>03</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">
                      Camera Views: Centralized Surveillance
                    </p>
                    <p className="p__gray">
                      One of the major advantages of cloud-based access control
                      is its ability to connect disparate systems, like video,
                      visitor and identity management. Integrating your video
                      management system with access control amplifies the power
                      of Interactive Floor Plans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature3} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>04</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">Access Logs</p>
                    <p className="p__gray">
                      Access Logs give IT and security teams a detailed account
                      of any system changes made. From the pop-out menu, you can
                      preview event descriptions, such as which doors were
                      unlocked or forced open doors. Access Logs also let you
                      know who performed the change.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature4} alt="" className="img-fluid w-100" />
              </div>

              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-1 col-2 pe-md-0">
                    <h1>05</h1>
                  </div>
                  <div className="col-md-11 col-10">
                    <p className="mb-0 fw-bold p__white">Quick Grant Access</p>
                    <p className="p__gray">
                      Grant temporary access without toggling through multiple
                      windows. From the pop-out menu, give your visitors or end
                      users instant door access.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <img src={feature5} alt="" className="img-fluid w-100" />
              </div>
            </div>
            <hr />

            <div className="row mt-5 functiona__floor">
              <div className="col-md-12">
                <h3>
                  How Does Emergency Management Function within Interactive
                  Floor Plans?
                </h3>
                <p className="small">
                  Emergency Management in Interactive Floor Plans is designed to
                  facilitate swift and intuitive management of emergency plans,
                  offering users seamless navigation and adaptable control
                  options. With this feature, users have the capability to
                  efficiently coordinate and respond to various emergencies by
                  leveraging the dynamic and interactive floor plans in Genea
                  Access Control. Our objective is to prioritize user safety and
                  security by providing a system that is both user-friendly and
                  comprehensive.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <img
                  src={functionImage}
                  alt="functionImage"
                  className="img-fluid w-100"
                />
              </div>
              <div className="col-md-4 mt-5">
                <h3>How door a software liked to device?</h3>
                <p className="small">For reference shown the door flow.</p>
              </div>
              <div className="col-md-8 mt-5">
                <p className="p__gray mb-0">
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
                <img
                  src={functionImage1}
                  alt="functionImage"
                  className="img-fluid w-100"
                />
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

            <div className="row benefits mt-5">
              <div className="col-md-4">
                <h3>Benefits of security interactive floor plans</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  Interactive Floor Plans gives teams many advantages when it
                  comes to increasing response time and managing their security.
                  These benefits include faster troubleshooting, quick-grant
                  access and easily accessible audit logs.
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <div className="row flex-wrap">
                  {benefits.map((benefit) => (
                    <div className="col-md-6 mt-4">
                      <div className="card h-100 px-3 py-2">
                        <div className="card-body">
                          <h4 className="p__white fw-bold">{benefit.title}</h4>
                          <ul>
                            {benefit.describe.map((li) => (
                              <li className="small">{li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 pt-5 px-0">
        <img src={interactiveBg} alt="" className="img-fluid" />
      </div>

      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <h3>Result</h3>
              </div>
              <div className="col-md-8">
                <p className="p__gray">
                  After numerous rounds of reviews and iterations, we've
                  successfully crafted a page that embodies clarity and purpose.
                  Its central aim is to bridge the gap between IT specialists
                  and security managers. It's truly rewarding to have
                  contributed to the development of this significant feature,
                  which is now live. Following the feature's launch, user
                  retention has witnessed a notable increase, and it has played
                  a pivotal role in our access control system. We are excited to
                  know that countless new Sense users will visit this feature,
                  engaging with it as a valuable resource for learning and
                  knowledge.
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
                  I created a comprehensive design specification document that
                  includes all design assets, such as high-fidelity mockups,
                  style guides, and interactive prototypes. This document
                  outlines the user interface elements, interactions, and user
                  flows, ensuring a clear understanding of the design intent.
                  Additionally, I organized a meeting with the development team
                  to walk them through the designs, answer any questions, and
                  provide ongoing support throughout the implementation phase.
                  This collaborative approach helps facilitate a smooth
                  transition from design to development, ensuring that the final
                  product aligns with the design vision.
                </p>
                <p className="p__white fw-bold mt-5">
                  🌟 Practice Makes Perfect!
                </p>
                <p className="p__gray">
                  Working as a designer, I've learned that practice is the key
                  to perfection. I've realized the importance of iterative
                  design, where feedback and user insights play a crucial role
                  in refining the user experience. Open communication and
                  collaboration with colleagues and stakeholders are essential
                  for successful design projects. Additionally, embracing
                  mistakes as opportunities for improvement has been a valuable
                  lesson, ultimately contributing to my growth as a designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop onClick={scrollToTop} />
    </section>
  );
};

export default InteractiveFloorPlans;
