import React from "react";
import "./landingpage4-style.css";
import LandingPageLeft4 from "./LandingPageLeft4";
import LandingPageRight4 from "./LandingPageRight4";

const LandingPage4 = () => {
  return (
    <div className="landingpage4-main-container">
      <LandingPageLeft4 />
      <div className="modulepage4-heading">
        <span>Our Modules</span>
      </div>
      <LandingPageRight4 />
    </div>
  );
};

export default LandingPage4;
