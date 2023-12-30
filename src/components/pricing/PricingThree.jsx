import React from "react";

const PricingContent = [
  {
    title: "LeadGER Basic",
    subTitle: "Your Numbers, Our Platform",
    price: "499",
    popular: false,
    priceMeta: "month/user",
    about: "(Minimum 2 Users, Quarterly Billing) Ask for Bulk Discount",
    packageName: "pc1",
    skewClass: "skew-right",
    priceList: [
      {
        title: "Unlimited",
        list: "Outgoing Calls",
      },
      {
        title: "Unlimited",
        list: "Incoming Calls",
      },
      {
        title: "Unlimited",
        list: "Campaigns",
      },
      {
        title: "No",
        list: "Inbound Campaigns",
      },
      {
        title: "Bulk",
        list: "Voice Campaigns Available**",
      },
      {
        title: "10 GB",
        list: "Storage (Call Recordings)",
      },
      {
        title: "No",
        list: "Number Masking",
      },
      {
        title: "Unlimited",
        list: "Push Notifications",
      },
      {
        title: "SMS",
        list: "Any Third Party API",
      },
      {
        title: "Email",
        list: "Any Third Party",
      },
      {
        title: "No ",
        list: "DID",
      },
    ],
    animatinDelay: "0",
  },
  {
    title: "LeadGER Plus",
    subTitle: "Our Virtual Numbers, Our Platform",
    price: "999",
    popular: true,
    priceMeta: "/month/user",
    about: "(Minimum 2 Users, Quarterly Billing) Ask for Bulk Discount",
    packageName: "pc2",
    skewClass: "skew-left",
    priceList: [
      {
        title: "Unlimited",
        list: "Outgoing Calls",
      },
      {
        title: "no",
        list: "Incoming Calls",
      },
      {
        title: "Unlimited",
        list: "Campaigns",
      },
      {
        title: "Unlimited",
        list: "Inbound Campaigns",
      },
      {
        title: "Bulk",
        list: "Voice Campaigns Available**",
      },
      {
        title: "20 GB",
        list: "Storage (Call Recordings)",
      },
      {
        title: "Unlimited",
        list: "Number Masking",
      },
      {
        title: "Unlimited",
        list: "Push Notifications",
      },
      {
        title: "SMS",
        list: "Any Third Party API",
      },
      {
        title: "Email",
        list: "Any Third Party",
      },
      {
        title: "free",
        list: "1 DID",
      },
    ],
    animatinDelay: "100",
  },
  {
    title: "LeadGER Pro",
    subTitle: "Our Verified Virtual Numbers, Our Platform",
    price: "1999",
    popular: false,
    priceMeta: "/month/User",
    about: "(Minimum 2 Users, Quarterly Billing) Ask for Bulk Discount",
    packageName: "pc3",
    skewClass: "skew-right",
    priceList: [
      {
        title: "Unlimited",
        list: "Outgoing Calls",
      },
      {
        title: "Unlimited",
        list: "Incoming Calls",
      },
      {
        title: "Unlimited",
        list: "Campaigns",
      },
      {
        title: "Unlimited",
        list: "Inbound Campaigns",
      },
      {
        title: "Bulk",
        list: "Voice Campaigns Available**",
      },
      {
        title: "30 GB",
        list: "Storage (Call Recordings)",
      },
      {
        title: "Unlimited",
        list: "Number Masking",
      },
      {
        title: "Unlimited",
        list: "Push Notifications",
      },
      {
        title: "SMS",
        list: "Any Third Party API",
      },
      {
        title: "Email",
        list: "Any Third Party",
      },
      {
        title: "FREE",
        list: "1 DID",
      },
    ],
    animatinDelay: "200",
  },
];

const PricingThree = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animatinDelay}
        >
          <div className={`pr-table-wrapper ${item.skewClass}`}>
            <div className={`${item.packageName}`}>
              <span className="pack-name font-slab">{item.title}</span>{" "}
              {item.popular && (
                <span className="bg-danger text-white  font-weight-bold rounded px-2">
                  Popular
                </span>
              )}
              <span className="display-6 d-block">{item.subTitle}</span>
            </div>
            <div className="price font-slab">Rs.{item.price}</div>
            <p className="user-condition">{item.priceMeta}</p>
            <p className="my-2">{item.about}</p>
            <img src="images/shape/114.svg" alt="shape" className="line" />
            <ul>
              {item.priceList.map((val, i) => (
                <li className={{}} key={i}>
                  <span className="font-weight-bold">{val.title}</span>{" "}
                  {val.list}
                </li>
              ))}
            </ul>
            
              <p className="display-6 my-2">
                For All Users Geofencing Attendance System 99.95% Uptime
                <br />
                Online & Phone Support
              </p>
        
            <a href="#" className="subscribe-btn font-rubik">
              Contact Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingThree;
