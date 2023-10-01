import React from "react";
import Right from "../Images/HomeImage.png";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="body_container">
        <div className="left_body_container">
          <p className="intro_line1">Hey There, I'm</p>
          <p className="intro_line2">
            Rayvant Durani <span className="intro"></span>
          </p>
        </div>

        <div className="right_body_container">
          <div className="logo_div">
            <img src={Right} className="logo" alt="Logo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
