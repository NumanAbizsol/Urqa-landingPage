import React from "react";
import "./landingpage4-style.css";
import quiz from "../../../assests/moduleiconQuiz.png";
import course from "../../../assests/Moduleiconcourse.png";
import flash from "../../../assests/moduleiconflashcard.png";
import More from "../../share/More";

const data = [
  {
    id: 1,
    heading: "Course Builder",
    description: "Bacon ipsum dolor amet bresaola brisket ground round",
    img: course, // Specify the image for this item
  },
  {
    id: 2,
    heading: "Course Builder",
    description: "Bacon ipsum dolor amet bresaola brisket ground round",
    img: quiz, // Specify the image for this item
  },
  {
    id: 3,
    heading: "Course Builder",
    description: "Bacon ipsum dolor amet bresaola brisket ground round",
    img: flash, // Specify the image for this item
  },
];

const LandingPageRight4 = () => {
  return (
    <div className="landingpage4-boxes-main-container">
      {data.map((item) => (
        <div key={item.id} className="landingpage4-box">
          <div>
            <img src={item.img} alt="QuizBuilder" />
          </div>
          <div className="page4-box-heading">
            <span>{item.heading}</span>
          </div>
          <div className="page4-description">
            <span>{item.description}</span>
          </div>
          <div>
            <More />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPageRight4;
