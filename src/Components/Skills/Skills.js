import React from "react";
import "./skills.css";
import HTML5 from "../Images/HTML5.png";
import CSSimg from "../Images/CSS.png";
import JSimg from "../Images/JS.png";
import Springimg from "../Images/spring.png";
import Reactimg from "../Images/react.png";
import Javaimg from "../Images/Java.png";
import Mysqlimg from "../Images/mysql.png";
import Mongodbimg from "../Images/mongodb.png";

function Skills() {
  return (
    <React.Fragment>
      <div className="skills_container">
        <div className="technicalskills_div">
          <div className="skill_div">
            <h3 className="skill_Name">HTML5</h3>
            <img src={HTML5} className="skill_img" alt="" />
            <p className="skill_details">4+ Years Of Experience</p>
          </div>

          <div className="skill_div">
            <h3 className="skill_Name">JavaScript</h3>
            <img src={JSimg} className="skill_img" alt="" />
            <p className="skill_details">2+ Years Of Experience</p>
          </div>
          <div className="skill_div">
            <h3 className="skill_Name">CSS</h3>
            <img src={CSSimg} className="skill_img" alt="" />
            <p className="skill_details">4+ Years Of Experience</p>
          </div>

          <div className="skill_div">
            <h3 className="skill_Name">Spring Rest API</h3>
            <img src={Springimg} className="skill_img" alt="" />
            <p className="skill_details">4+ Years Of Experience</p>
          </div>
          <div className="skill_div">
            <h3 className="skill_Name">REACT JS</h3>
            <img src={Reactimg} className="skill_img" alt="" />
            <p className="skill_details">2+ Years Of Experience</p>
          </div>

          <div className="skill_div">
            <h3 className="skill_Name">Java</h3>
            <img src={Javaimg} className="skill_img" alt="" />
            <p className="skill_details">4+ Years Of Experience</p>
          </div>

          <div className="skill_div">
            <h3 className="skill_Name">Git</h3>
            <img src={CSSimg} className="skill_img" alt="" />
            <p className="skill_details">4+ Years Of Experience</p>
          </div>
          <div className="skill_div">
            <h3 className="skill_Name">MY SQL</h3>
            <img src={Mysqlimg} className="skill_img" alt="" />
            <p className="skill_details">3+ Years Of Experience</p>
          </div>
          <div className="skill_div">
            <h3 className="skill_Name">Mongo Db</h3>
            <img src={Mongodbimg} className="skill_img" alt="" />
            <p className="skill_details">1+ Years Of Experience</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
