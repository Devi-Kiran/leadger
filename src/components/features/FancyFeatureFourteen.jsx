import React from "react";
import Tilt from "react-parallax-tilt";

const FancyFeatureFourteen = () => {
  return (
    <div id="about" className="fancy-feature-fourteen pt-80 mb-50">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="mb-3 display-6">
              A Simple, yet powerfull Telemarketing CRM for SMB's
            </h2>
            <p className="mb-3">
              Unlock the full potential of your business with LeadGER, the
              ultimate all-in-one CRM platform. From seamless call center
              solutions to cutting-edge tele-marketing CRM and efficient field
              executive tracking, LeadGER is designed to elevate your customer
              management strategy to new heights. What's more? It's all powered
              by cloud telephony, eliminating the need for cumbersome hardware.
            </p>

            <div>
              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ width: "40px" }}
                    className="mr-2"
                    src="images/logo/Verfied_mobiles.png"
                    alt="logo"
                  />
                  <span className="font-weight-bold text-dark">
                    Call Center Excellence:
                  </span>
                </div>
                <p>
                  Revolutionize your call center operations with LeadGER's
                  comprehensive suite of tools. Manage incoming and outgoing
                  calls efficiently, ensuring every customer interaction is a
                  positive and productive experience.
                </p>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ width: "40px" }}
                    className="mr-2"
                    src="images/logo/Verfied_mobiles.png"
                    alt="logo"
                  />
                  <span className="font-weight-bold text-dark">
                    Tele-marketing CRM:
                  </span>
                </div>
                <p>
                  Optimize your tele-marketing efforts with our intuitive CRM
                  system. Identify and target leads effortlessly, and with our
                  click-to-call functionality, reach by SPAM FREE verified
                  mobile numbers with ease. LeadGER streamlines your
                  tele-marketing strategy for maximum impact.
                </p>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ width: "40px" }}
                    className="mr-2"
                    src="images/logo/Verfied_mobiles.png"
                    alt="logo"
                  />
                  <span className="font-weight-bold text-dark">
                    Field Executive Tracking:
                  </span>
                </div>
                <p>
                  Gain real-time insights into your field executive activities.
                  Track their movements, monitor performance, and ensure your
                  team is operating at peak efficiency, all from the convenience
                  of our user-friendly platform.
                </p>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    style={{ width: "40px" }}
                    className="mr-2"
                    src="images/logo/Verfied_mobiles.png"
                    alt="logo"
                  />
                  <span className="font-weight-bold text-dark">
                    Cloud Telephony with Click2Call:
                  </span>
                </div>
                <p>
                  Say goodbye to hardware hassles. LeadGER is powered by cloud
                  telephony, offering flexibility and scalability without the
                  need for GSM gateways. Our click-to-call feature enables quick
                  and verified mobile number connections, boosting your outreach
                  strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 ml-auto d-flex align-items-center justify-content-center">
            <div className="right-side md-mt-60">
              <div className="d-flex">
                <div className="col-md-6">
                  <Tilt>
                    <div
                      style={{ background: "#E39600" }}
                      className="logo-meta text-center mt-55 d-flex flex-column justify-content-center align-items-center text-white"
                    >
                      <img
                        style={{ width: "50px" }}
                        src="images/logo/Verfied_mobiles.png"
                        alt="logo"
                      />
                      <span className="fs-20 display-4 font-weight-bold">
                        1050
                      </span>
                      <span className="">Active Users</span>
                    </div>
                  </Tilt>
                  <Tilt>
                    <div
                      style={{ background: "#C6E6FD", color: "#63B0E3" }}
                      className="logo-meta text-center d-flex flex-column justify-content-center align-items-center"
                    >
                      <img
                        style={{ width: "50px" }}
                        src="images/logo/Verfied_mobiles.png"
                        alt="logo"
                      />
                      <span className="fs-20 display-4 font-weight-bold">
                        10
                      </span>
                      <span className="">Million Calls made</span>
                    </div>
                  </Tilt>
                </div>
                <div className="col-md-6">
                  <Tilt>
                    <div
                      style={{ background: "#EFDFF7", color: "#B17CC6" }}
                      className="logo-meta text-center d-flex flex-column justify-content-center align-items-center"
                    >
                      <img
                        style={{ width: "50px" }}
                        src="images/logo/Verfied_mobiles.png"
                        alt="logo"
                      />
                      <span className="fs-20 display-4 font-weight-bold">
                        200
                      </span>
                      <span className="">Plus Active Instalations</span>
                    </div>
                  </Tilt>
                  <Tilt>
                    <div
                      style={{ background: "#006666" }}
                      className="logo-meta text-center d-flex flex-column justify-content-center align-items-center text-white"
                    >
                      {/* lg d-flex align-items-center justify-content-center  */}
                      <img
                        style={{ width: "50px" }}
                        src="images/logo/Verfied_mobiles.png"
                        alt="logo"
                      />
                      <span className="fs-20 display-4 font-weight-bold">
                        100+
                      </span>
                      <span className="">Clients satisfaction</span>
                    </div>
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyFeatureFourteen;
