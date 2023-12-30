import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/header/HeaderFour";
import HeroBannerFour from "../../components/hero-banner/HeroBannerFour";
import FancyFeatureFourteen from "../../components/features/FancyFeatureFourteen";
import BlogV1 from "../inner-pages/blog-pages/BlogV1";
import FeatureNine from "../../components/features/FeatureNine";
import Faq from "../../components/faq/Faq";
import Service from "../../components/service/Service";
import PricingThree from "../../components/pricing/PricingThree";
import TestimonialThree from "../../components/testimonial/TestimonialThree";
import FaqFour from "../../components/faq/FaqFour";
import FooterFour from "../../components/footer/FooterFour";
import Footer from "../../components/footer/Footer";
import FooterEight from "../../components/footer/FooterEight";
import FooterSeven from "../../components/footer/FooterSeven";
import FooterSix from "../../components/footer/FooterSix";
import FooterFive from "../../components/footer/FooterFive";
import FooterTwo from "../../components/footer/FooterTwo";
import FooterThree from "../../components/footer/FooterThree";
import CallToActionFive from "../../components/call-to-action/CallToActionFive";

const EventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Event Organizer || Deski-Saas & Software React Template</title>
      </Helmet>

      <Header />

      <HeroBannerFour />

      <BlogV1/>

      {/* mt-250 mb-200 md-mt-150 md-mb-150 */}
      <div className="fancy-text-block-nineteen pt-20">
        <div className="container" >
          <FancyFeatureFourteen/>
        </div>
      </div>


      <div className="fancy-hero-two mb-50">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 style={{fontSize: "30px"}} className="font-weight-bold mb-3">Do You Want To Boost your answered marketing calls?</h1>
                <p className="">
                  Harness the potential of Truecaller to propel your business forward. Trusted by industry leaders, Truecaller for Business is the go-to solution for expanding your customer base, building trust, and mitigating risks effectively...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Service/>

      {/* mt-250 mb-200 md-mt-150 md-mb-150 */}
      <div className="pricing-section-three">
        <div id="pricing" className="container">
          <div className="title-style-five text-white text-center mb-50 md-mb-40">
            <h6>Our Pricing Packages</h6>
            <div className="row">
              <div className="col-lg-9 m-auto">
                <p>Our pricing packages cater to both cloud hosting and on-premises hosting.</p>
              </div>
            </div>
          </div>

          <div className="pricing-table-area-three">
            <PricingThree />
          </div>
          <p className="text-white text-center mt-5">           
            Note: The Above price Excluding of GST. For clients opting for on-premises hosting and seeking to leverage all features, it is essential to possess a dependable Windows system or server, a stable internet connection, a static IP, and their own domain.
          </p>
        </div>   
      </div>
  
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.98568866719577!2d78.515255!3d17.374748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9974e8280011%3A0xe0a62e9805825e27!2sAMETECS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1703729071783!5m2!1sen!2sin" style={{border: "0px", width: "100%", height: "450px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </footer>
    </div>
  );
};

export default EventOrganizer;
