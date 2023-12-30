import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    img: "Verfied_mobiles",
    title: "Hosted On Secured Cloud",
    description:
      "LeadGER, your telemarketing powerhouse, hosted on our secured cloud with 99.9% uptime. Accessible 24/7 from anywhere, no extra hosting charges*. Elevate your call center experience effortlessly..",
  },
  {
    img: "Verfied_mobiles",
    title: "Host On Your Own Premises",
    description:
      "Choose LeadGER's on-premises hosting for full control without compromise with our limited Hosting SPACE. Respect your lead data privacy while enjoying customizable solutions—your premises, your rules, LeadGER delivers..",
  },
  {
    img: "Verfied_mobiles",
    title: "Instant Call Center Setup",
    description:
      "Empower your business instantly with LeadGER's seamless Call Center solutions. Use mobile app convenience with your SIM cards. No hardware required—just a Windows 10 system and internet connection.",
  },
  {
    img: "Verfied_mobiles",
    title: "Android Mobile App",
    description:
      "Experience on-the-go excellence with the LeadGER Mobile app. Empower your agents and field staff with seamless lead access, call management, attendance tracking, and real-time field staff location updates.",
  },
  {
    img: "Verfied_mobiles",
    title: "Click2Call Service Integrated",
    description:
      "Opt for LeadGER's Click2Call Cloud Telephony Service. Unlimited calls for tele-marketing and field staff, with call recordings for connected and not connected calls. Analyze lead data quality and elevate your communication strategy effortlessly",
  },
  {
    img: "Verfied_mobiles",
    title: "SPAM Free Verified Numbers",
    description:
      "Elevate call engagement with LeadGER's TrueCaller tie-up—offering SPAM-free verified numbers. Boost call answers, enhance lead conversations, and ensure success. Every call is a connection, not a spam.",
  },
  {
    img: "Verfied_mobiles",
    title: "Mask Prospective Leads Number(s)",
    description:
      "Shield your leads, empower your team! Our exclusive feature allows clients to mask prospective leads' numbers, ensuring privacy. Agents make calls seamlessly, keeping sensitive information confidential.",
  },
  {
    img: "Verfied_mobiles",
    title: "Call Tracking & Call Recordings",
    description:
      "Track success, refine strategies! LeadGER preserves every detail - from called numbers to lead info, date, and time. Elevate performance with call recordings, giving admins and managers insights for quality and training.",
  },
  {
    img: "Verfied_mobiles",
    title: "Campaign Management",
    description:
      "Seamlessly create and manage multiple outbound campaigns. Upload lead data via CSV, and effortlessly assign, modify, or withdraw data, ensuring optimal engagement. Campaign management tailored to your team's success.",
  },
  {
    img: "Verfied_mobiles",
    title: "Deals Management",
    description:
      "Lead to triumph! In LeadGER, converted leads become deals, easily filterable by team, agent, segment, and more. Streamline post-conversion insights, ensuring efficient tracking and team-centric visibility.",
  },
  {
    img: "Verfied_mobiles",
    title: "Lead Managment",
    description:
      "Agents effortlessly update data, customizing lead statuses based on client requirements—whether it's interest, DND, follow-up, or callback. Ensuring every lead interaction aligns seamlessly with your unique business goals.",
  },
  {
    img: "Verfied_mobiles",
    title: "Reports for Every Call, Every Visit!",
    description:
      "Get detailed Call & Field Visit Reports. Gain insights into every interaction, track progress, and optimize strategies. Empower your team with comprehensive data for informed decision-making.",
  },
  {
    img: "Verfied_mobiles",
    title: "Appointment Schedular",
    description:
      "Streamline your workflow . Whether for call-backs or field visits, take control of your calendar. Seamlessly plan and organize appointments, ensuring efficient time management and maximizing opportunities.",
  },
  {
    img: "Verfied_mobiles",
    title: "Reminders",
    description:
      "Stay on top of priorities! LeadGER keeps you organized from follow-ups to important tasks, set alerts that ensure you never miss a crucial moment. Turning every interaction into an opportunity with timely, personalized reminders.",
  },
  {
    img: "Verfied_mobiles",
    title: "Email Integrated",
    description:
      "Seamlessly merge communication channels! LeadGER's IMAP integration ensures smooth email coordination. Send personalized emails to prospective leads directly from individual employee LeadGER accounts.",
  },
  {
    img: "Verfied_mobiles",
    title: "Send Text Messages",
    description:
      "LeadGER enables to send text messaging for quick and impactful communication. Agents can effortlessly share crucial information or updates, ensuring swift and efficient outreach. Connecting with leads in real-time for instant engagement.",
  },
  {
    img: "Verfied_mobiles",
    title: "Connect On WhatsApp",
    description:
      "Break communication barriers effortlessly! With LeadGER, agents connect with clients on WhatsApp with just one click, whether on the web or desktop. Streamline conversations, enhance accessibility, and deepen client relationships.",
  },
  {
    img: "Verfied_mobiles",
    title: "Push Notifications",
    description:
      "Instant updates at your fingertips! LeadGER's Push Notifications keep you in the loop, delivering real-time alerts on leads, appointments, and more. Never miss a beat—stay connected, responsive with mobile push notifications.",
  },
  {
    img: "Verfied_mobiles",
    title: "Bulk Voice Campaigns",
    description:
      "Instant updates at your fingertips! LeadGER's Push Notifications keep you in the loop, delivering real-time alerts on leads, appointments, and more. Never miss a beat—stay connected, responsive with mobile push notifications.",
  },
  {
    img: "Verfied_mobiles",
    title: "Create Inbound Camoagins",
    description:
      "Create and Publish QR Codes on social media and traditional media—customers scan, enter their number, and click to establish an instant conference call with your agent. Bridge connections seamlessly.",
  },
  {
    img: "Verfied_mobiles",
    title: "Attendance",
    description:
      "LeadGER enables mobile-based attendance with geo-fencing precision. Ensure accountability at individual and branch levels. Geo-fencing prevents home-based punching, optimizing field executive attendance accuracy.",
  },
  {
    img: "Verfied_mobiles",
    title: "Online Support",
    description:
      "A dedicated online support, Monday to Saturday, 9:30 AM to 6:30 PM. From onboarding and training to issue resolution and campaign creation. Experience seamless assistance for unparalleled client satisfaction.",
  },
];

const Service = () => {
  return (
    <div id="features" className="container pt-100 mb-0 mb-md-60">
      <div className="row">
        <div className="col-xl-9 col-lg-10 mx-auto mb-20">
          <h2 className="font-gilroy-bold text-center">
            We Provide Best Services For You
          </h2>
        </div>
        <div className="col-lg-9 mx-auto mb-50">
          <p className="font-rubik text-center">
            Explore the power of our telemarketing CRM application, featuring
            seamless lead management and real-time analytics. Elevate your
            campaigns with intuitive interfaces and intelligent reporting. Drive
            success with a solution tailored to your unique needs, offering a
            comprehensive and user-friendly experience that amplifies your
            telemarketing efforts.
          </p>
        </div>
      </div>

      <div className="row">
        {serviceContent.map((data, i) => {
          return (
            <div key={i} className="col-12 col-md-6">
              <div className="d-flex mb-10 px-4">
                <div className="" style={{ width: "200px" }}>
                  <img
                    style={{ width: "50px" }}
                    className="mr-2"
                    alt="logo"
                    src={`images/logo/${data.img}.png`}
                  />
                </div>
                <div className="px-2">
                  <h3 style={{ fontSize: "25px" }}>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
