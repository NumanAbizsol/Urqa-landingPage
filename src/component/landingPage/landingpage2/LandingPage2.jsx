import React from "react";
import LandingPageLeft2 from "./LandingPageLeft2";
import LandingPageRight2 from "./LandingPageRight2";
import "./landingpage2-style.css";

const LandingPage2 = () => {
  return (
    <div className="landing-page-2" style={{ display: "flex" }}>
      <LandingPageLeft2 />
      <LandingPageRight2 />
    </div>
  );
};

export default LandingPage2;
