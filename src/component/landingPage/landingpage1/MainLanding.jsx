import React from "react";
import LeftIMainImage from "./LeftIMainImage";
import RIghtContent from "./RIghtContent";
import "./landing-style.css";

const MainLanding = () => {
  return (
    <div className="landing1-screen">
      <RIghtContent />
      <LeftIMainImage />
    </div>
  );
};

export default MainLanding;
