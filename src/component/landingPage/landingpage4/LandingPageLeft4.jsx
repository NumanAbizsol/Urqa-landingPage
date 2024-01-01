import React from "react";
import "./landingpage4-style.css";
import landingpage4image from "../../../assests/LandingPage4.png";
import Startedbutton from "../../share/Startedbutton";
import More from "../../share/More";

const LandingPageLeft4 = () => {
  return (
    <div className="landingpage4-up-container">
      <div>
        <img
          src={landingpage4image}
          alt="landingPageimage4"
          className="landingpage-image4"
        />
      </div>

      <div className="page4-content-side">
        <div className="page4image-heading">lms</div>
        <div className="page4description-context">
          <span>
            Bacon ipsum dolor amet bresaola brisket ground round, buffalo ham
            tri-tip pork rump chislic Bacon ipsum dolor amet bresaola brisket
            ground round, buffalo ham tri-tip pork rump chislic. Bacon ipsum
            dolor amet bresaola brisket ground round, buffalo ham tri-tip pork
            rump chislic. .
          </span>
        </div>
        <div>
          <More />
        </div>
      </div>
    </div>
  );
};

export default LandingPageLeft4;
