import React from "react";
import "./contactme.css";
import ContactUs from "../Images/contactUs.jpg";
// import { Link } from "react-router-dom";
function ContactMe() {
  function downloadResume() {
    window.location.href =
      "https://drive.google.com/file/d/1MesPMhZcDLqUm6VLlkuVTfLI2UQOQsvB/view?usp=sharing";
  }
  return (
    <React.Fragment>
      <div className="contactme_container">
        <div className="section1">
          <div className="img_div">
            <img src={ContactUs} className="img" alt="contactUsimg"></img>
          </div>
          <div className="contact_content_div">
            <p className="contactme_header">
              Let's Make something Awesome Together !
            </p>
            <div className="icon_div">
              <button onClick={downloadResume} className="resume_button">
                My Resume
              </button>
            </div>
          </div>
        </div>

        <div className="contactme_body">
          <div className="section2">
            <div className="icon_div_social">
              <h2 className="github">
                <a href="https://github.com/rayvantdurani" className="link">
                  Github
                </a>
              </h2>
            </div>

            <div className="icon_div_social">
              <h2 className="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/rayvant-durani-ba3b61155"
                  className="link"
                >
                  LinkedIn
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactMe;
