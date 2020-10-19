import React, { Component } from "react";
import Typical from "react-typical";
import Pic from "../../src/assets/tobi.JPG";
import Background from "./Background";

class About extends Component {
  render() {
    return (
      <Background>
        <div className="about-container">
          <img src={Pic} alt="avatar" className="about-img" />
          <h4 className="about-header">
            Hello there! my name is Raji Oluwatobiloba.
          </h4>
          <h4 className="about-text">
            I am an Experienced Software Developer with a demonstrated history
            of working in the information technology and services industry.
            Skilled in Mobile app technologies such as React Native, Flutter and
            Swift Programming language. Enthusiastic about using clean, elegant,
            code to solve complex real-world problems. An energetic and
            passionate developer who is driven, can meet strict deadlines and
            has excellent delivery.
          </h4>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/raji-oluwatobiloba/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/tobilastik"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCcPhLPz-YGOIHJ-xceWRimA?view_as=subscriber"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>

            <a
              href="https://twitter.com/tobilastik"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/tobilastik"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>

          <hr style={{ borderTop: "3px solid red" }} />
          <div className="footer">
            <p>Copyright © 2020 Raji Oluwatobiloba | All rights reserved.</p>
          </div>
        </div>
      </Background>
    );
  }
}

export default About;
