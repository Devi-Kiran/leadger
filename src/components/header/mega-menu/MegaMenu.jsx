import React from "react";

const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown position-static active">
        <a className="py-0 nav-link text-white" href="#">
          Home
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="py-0 nav-link text-white" href="#about">
          About
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="py-0 nav-link text-white" href="#features" >
          Feature
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="py-0 nav-link text-white" href="#pricing" >
          Pricing
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="py-0 nav-link text-white" href="#contact" >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default MegaMenu;
