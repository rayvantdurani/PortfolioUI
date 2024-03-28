import React from "react";
import "./aboutme.css";

function Aboutme() {
  return (
    <React.Fragment>
      <div className="aboutme_container">
        <div className="aboutme_left_container">
          <div className="about_me_left_intro_div">
            <p className="aboutme_left_line1"> Currently Working as a</p>
            <p className="aboutme_left_line2"> Senior Software Developer</p>
            <p className="aboutme_left_line3">in HSBC</p>
          </div>
        </div>

        <div className="aboutme_right_container">
          <div className="aboutme_right_intro_div">
            <p className="aboutme_intro">
              I thrive in highly collaborative environments and enjoy working
              across teams whether on new development or enhancing existing
              systems. I am a motivated learner constantly improving upon my
              skills. My ultimate goal is to build robust solutions that provide
              great value. My technical skills include languages like Java,
              JavaScript, and Python, as well as frameworks like Spring and
              React. I have implemented full stack applications using React for
              frontend and Spring REST APIs on the backend. Database knowledge
              in MySQL rounds out my skillset.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Aboutme;
