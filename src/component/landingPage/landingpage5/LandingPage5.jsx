import React from "react";
import LandingPageLeft5 from "./LandingPageLeft5";
import LandingPageRight5 from "./LandingPageRight5";
import arrowleft from "../../../assests/arrowleft.png";
import arrowright from "../../../assests/arrowright.png";
import avatar from "../../../assests/avatarIconcircle.png";
import star from "../../../assests/ratingStar.png";
import landingpageprivacy from "../../../assests/LandingPage6.png";
import StudentImage from "../../../assests/landingpage7.png";
import fivestar from "../../../assests/5starRating.png";

import "./landingpage5-style.css";
import Startedbutton from "../../share/Startedbutton";

const LandingPage5 = () => {
  return (
    <div>
      <div className="landingpage5-main-container">
        <div className="landingpage5-container">
          <LandingPageLeft5 />
          <LandingPageRight5 />
        </div>
        <div className="content-btn">
          <div>
            <span className="modulepage4-heading">Trust Pilot</span>
          </div>
          <div className="img-container">
            <div>
              <img src={arrowleft} alt="ArrowLeft" />
            </div>
            <div>
              <img src={arrowright} alt="ArrowLeft" />
            </div>
          </div>
        </div>
        <div className="review-box-main-div">
          <div className="review-container--div">
            {/* Left Side */}
            <div className="box-container-landingpage5">
              <div className="conatiner-tag-img-text">
                <div>
                  <img src={avatar} alt="avatar" />
                </div>
                <div>
                  <span className="conatiner-text-title">Theresa Webb</span>
                </div>
              </div>
              <div>
                <img src={star} alt="starIcon" />
              </div>
            </div>

            {/* Right Side */}
            <div className="box-container-text-landingpage">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus asperiores est facilis alias, doloribus molestiae cum
                et commodi laboriosam iste.
              </span>
            </div>
          </div>

          <div className="review-container--div">
            <div className="box-container-landingpage5">
              <div className="conatiner-tag-img-text">
                <div>
                  <img src={avatar} alt="avatar" />
                </div>
                <div>
                  <span className="conatiner-text-title">Theresa Webb</span>
                </div>
              </div>
              <div>
                <img src={star} alt="starIcon" />
              </div>
            </div>
            <div className="box-container-text-landingpage">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus asperiores est facilis alias, doloribus molestiae cum
                et commodi laboriosam iste.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="landingpage6-main-div">
        <div className="left-main-conatiner-page6">
          <div className="heading-div-page6">
            your privacy is our responsibility
          </div>
          <div className="title-div-page6">
            Lorem ipsum, dolor sit amet consectetur.
          </div>
          <div className="description-div-page6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores impedit perferendis suscipit eaque, Lorem ipsum, dolor sit
            amet
          </div>
          <div>
            <Startedbutton />
          </div>
        </div>
        <div className="right-main-conatiner-page6">
          <img src={landingpageprivacy} alt="Privacy-Img" />
        </div>
      </div>

      <div className="landingpage6-main-div" style={{ height: "100vh" }}>
        <div>
          <img src={StudentImage} alt="Student-imge" />
        </div>
        <div className="right-main-conatiner-page6">
          <div className="heading-div-page6">what our students are saying?</div>
          <div className="description-div-page6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione. Lorem ipsum
          </div>
          <div
            className="box-container-landingpage5"
            style={{ padding: "20px 0px" }}
          >
            <div className="conatiner-tag-img-text">
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <span className="conatiner-text-title">Theresa Webb</span>
              </div>
            </div>
            <div>
              <img src={fivestar} alt="5-Star-rating" />
            </div>
          </div>
          <div className="img-container" style={{ padding: "20px 0px" }}>
            <div>
              <img src={arrowleft} alt="ArrowLeft" />
            </div>
            <div>
              <img src={arrowright} alt="ArrowLeft" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="lastlaningPage-main-div">
          <div style={{ width: "55%" }}>
            <div className="heading-container-page7">
              Sign up for our newsletter
            </div>
            <span className="text-container-page7">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat.
            </span>
          </div>
          <div style={{ width: "45%" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Enter your email"
                className="input-text-field-page7"
              />
              <div className="notify-btn">
                <span>Notify me</span>
              </div>
            </div>
            <div className="container-text-description-page7">
              <span>
                We care about the protection of your data. Read our {""}
                <span className="privacy-link-text">Privacy Policy</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage5;
