import React from "react";
import LandingPage2 from "./landingpage2/LandingPage2";
import LandingPage3 from "./landingpage3/LandingPage3";
import LandingPage4 from "./landingpage4/LandingPage4";
import LandingPage5 from "./landingpage5/LandingPage5";
import MainLanding from "./landingpage1/MainLanding";

const LandingPage = () => {
  return (
    <div>
      <MainLanding />
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />
    </div>
  );
};

export default LandingPage;
