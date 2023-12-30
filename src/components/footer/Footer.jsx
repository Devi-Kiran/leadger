import React from "react";

const Footer = () => {
  return (
    <div className="d-flex flex-column  flex-md-row py-5">
      <div
        className="w-100 d-flex justify-content-center mb-50"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div style={{ maxWidth: "355px" }}>
          <h3 className="font-weight-bold mb-3">Reach us quickly</h3>
          <p className="mb-3">
            We provide profissional services for grow your business.
          </p>
          <form>
            <div className="mb-3">
              <label className="d-block" htmlFor="name">
                Name
              </label>
              <input
                className="rounded border border-solid w-100 p-1"
                id="name"
                type="text"
                rel=""
              />
            </div>
            <div className="mb-3">
              <label className="d-block" htmlFor="company">
                Company
              </label>
              <input
                className="rounded border border-solid w-100 p-1"
                id="company"
                type="text"
                required
              />
            </div>
            <div className="mb-3">
              <label className="d-block" htmlFor="designation">
                Designation
              </label>
              <input
                className="rounded border border-solid w-100 p-1"
                id="designation"
                type="text"
                required
              />
            </div>

            <div className="mb-3">
              <label className="d-block" htmlFor="email">
                Email Address
              </label>
              <input
                className="rounded border border-solid w-100 p-1"
                id="email"
                type="email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="d-block" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                className="rounded border border-solid w-100 p-1"
                id="mobile"
                type="number"
                required
              />
            </div>

            <div className="mb-3">
              <label className="d-block" htmlFor="city">
                City
              </label>
              <input
                className="rounded border border-solid w-100 p-1"
                id="city"
                type="text"
                required
              />
            </div>
            <button className="theme-btn-one text-white">Submit</button>
          </form>
        </div>
      </div>
      <div
        className="w-100 d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div style={{ maxWidth: "355px" }}>
          <div>
            <span className="font-weight-bold text-dark">ADDRESS</span>
            <address>
              6-11-22/30, Ground Floor, Teegala Guda, East Prasanth Nagar,
              Dilsukhnagar, Hyderabad, Telangana, India 500036
            </address>
          </div>
          <hr />
          <div>
            <span className="font-weight-bold text-dark">PHONES</span>
            <br />
            <span className="text-dark">Support</span>{" "}
            <a href="mailto:admin@ametecsindia.com">+91-9666612424</a>
            <br />
            <span className="text-dark">Sales:</span>{" "}
            <a href="mailto:lakshmi@ametecsindia.com">+91-7702001122</a>
          </div>
          <hr />
          <div>
            <span className="font-weight-bold text-dark">E-MAILS</span>
            <div>
              <span className="text-dark">Support:</span>{" "}
              <a href="mailto:admin@ametecsindia.com">admin@ametecsindia.com</a>
              <br />
              <span className="text-dark">Query:</span>{" "}
              <a href="mailto:lakshmi@ametecsindia.com">
                lakshmi@ametecsindia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
