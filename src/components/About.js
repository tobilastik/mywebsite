import React, {Component} from 'react';
import Typical from 'react-typical';
import {ProgressBar} from 'react-mdl';
import Skills from './Skills';

class About extends Component {
  render () {
    return (
      <div className="about-container">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
          alt="avatar"
          className="about-img"
        />
        <h4 className="about-header">
          Hello there! my name is Raji Oluwatobiloba.
        </h4>
        <Typical
          className="about-text"
          steps={[
            `I am an Experienced Software Developer with passion for solving problems I am an .`,
            10000,
            1000,
          ]}
          // loop={Infinity}
          wrapper="p"
        />
        <div className="social-links">
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-github-square" aria-hidden="true" />
          </a>

          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-youtube-square" aria-hidden="true" />
          </a>

          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-twitter-square" aria-hidden="true" />
          </a>
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true" />
          </a>
        </div>

        <hr style={{borderTop: '3px solid red'}} />
        <h2>Skills</h2>

        <div style={{margin: '1em'}}>
          <Skills skill="Javascript" progress={80} />
          <Skills skill="React Native" progress={80} />
          <Skills skill="React" progress={70} />
          <Skills skill="HTML/CSS" progress={60} />

        </div>
      </div>
    );
  }
}

export default About;
