import React from "react";
import { Link } from "react-router-dom";
import FeaturesEight from "../features/FeaturesEight";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four">
      {/* <img
        src="images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img
        src="images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <img
        src="images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      /> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder d-flex justify-content-center">
              <img
                src="images/assets/instant_call_center.png"
                alt="shape"
                className="illustration w-75"
              />
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper mb-4">
              <h1
                style={{ fontSize: "45px" }}
                className="text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Instant Call Center Solution On Cloud (or) "On Your Premises"
              </h1>
              <p
                className="sub-text text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Empowering businesses to effortlessly Generate leads, Engage
                customers, and Retain loyalty for sustained success.
              </p>
              <a
                to="/login"
                className="theme-btn-one text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {" "}
                contact with us
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <span className="text-white d-block mb-3">Empowered With:</span>
              <div className="d-flex flex-wrap">
                <img style={{width: "150px"}} src="images/logo/no_spam_numbers.png" alt="no spam numbers"/>
                <img style={{width: "150px"}} src="images/logo/Truecaller.png" alt="true caller"/>
                <img style={{width: "150px"}} src="images/logo/vodafone_idea.png" alt="vodaphone idea"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <div className="bg-wrapper">
            <FeaturesEight />
          </div>
        </div>
      </div> */}
     
    </div>
  );
};

export default HeroBannerFour;

// import React from "react";
// import { Link } from "react-router-dom";
// import FeaturesEight from "../features/FeaturesEight";

// const HeroBannerFour = () => {
//   return (
//     <div className="hero-banner-four">
//       <img
//         src="images/shape/100.svg"
//         alt="shape"
//         className="shapes shape-four"
//       />
//       <img
//         src="images/shape/101.svg"
//         alt="shape"
//         className="shapes shape-five"
//       />
//       <img
//         src="images/shape/102.svg"
//         alt="shape"
//         className="shapes shape-six"
//       />
//       <img
//         src="images/shape/103.svg"
//         alt="shape"
//         className="shapes shape-seven"
//       />

//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 order-lg-last">
//             <div className="illustration-holder">
//               <img
//                 src="images/assets/ils_14.svg"
//                 alt="shape"
//                 className="illustration"
//               />
//               <img
//                 src="images/assets/ils_14.1.svg"
//                 alt="shape"
//                 className="shapes shape-one"
//               />
//               <img
//                 src="images/assets/ils_14.2.svg"
//                 alt="shape"
//                 className="shapes shape-two"
//               />
//               <img
//                 src="images/assets/ils_14.3.svg"
//                 alt="shape"
//                 className="shapes shape-three"
//               />
//             </div>
//             <p className="review-text">
//               Over <span>150,000+ client</span> all over the world.
//             </p>
//           </div>
//           {/* End .col */}

//           <div style={{border: "1px solid red"}} className="col-lg-6 order-lg-first">
//             <div className="text-wrapper">
//               <h1 data-aos="fade-up" data-aos-duration="1200">
//                 <span>Event ticket</span> organiser & seller.
//               </h1>
//               <p
//                 className="sub-text"
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 data-aos-delay="100"
//               >
//                 For hassale free event, we are here to help you by creating
//                 online ticket.
//               </p>
//               <Link
//                 to="/login"
//                 className="theme-btn-five"
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 data-aos-delay="200"
//               >
//                 {" "}
//                 Let’s get started
//               </Link>
//             </div>
//             {/* /.text-wrapper */}
//           </div>
//           {/* End .col */}
//         </div>
//       </div>

//       <div className="fancy-feature-eight mt-160 md-mt-100">
//         <div className="container">
//           <div className="bg-wrapper">
//             <FeaturesEight />
//           </div>
//         </div>
//       </div>
//       {/* /.fancy-feature-eight */}
//     </div>
//   );
//   //  {/* /.hero-banner-four */}
// };

// export default HeroBannerFour;
