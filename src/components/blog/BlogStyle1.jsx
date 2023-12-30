import React from "react";
import { Link } from "react-router-dom";



const BlogContent = [
  {
    img: "field_app",
    title:"TELEMARKETING MOBILE FIRST CRM",
    description: '"Your ultimate tool for seamless communication and lead management on the go,where flexibility meets security! Host it on our cloud for seamless access or on your own server for complete control over lead data".',
    dealyAnimation: "",
  },
  {
    img: "instant_call_center",
    title: "HARDWARE LESS CALL CENTER",
    description: '"Unlock the potential of a Hardware Less Call Center that adapts to your needs. Our application, hosted on our cloud or your local server, ensures efficient communication without compromising on data security."',
    dealyAnimation: "50",
  },
  {
    img: "telemarketing_from_anywhere",
    title: "FIELD APP FOR CALLING AND TRACKING",
    description: '"Empower field executives with our cutting-edge APP—call and track with confidence. Whether on our cloud for convenience or your own server for data control, we prioritize your preferences for a customized experience."',
    dealyAnimation: "100",
  }
];

const BlogStyle1 = () => {
  return (
    <>
      {BlogContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
          data-aos-delay={item.dealyAnimation}
        >
          <div className="post-meta">
            <img
              src={`images/media/${item.img}.jpg`}
              alt="media"
              className="image-meta mb-2"
            />
            <h3 className="title ">
              {item.title}
            </h3>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogStyle1;
