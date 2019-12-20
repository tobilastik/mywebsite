import React, {Component} from 'react';
import Typical from 'react-typical';
import {ProgressBar} from 'react-mdl';
import Skills from './Skills';
import Pic from '../../src/assets/intro.jpeg';

class About extends Component {
  render () {
    return (
      <div className="about-container">
        <img src={Pic} alt="avatar" className="about-img" />
        <h4 className="about-header">
          Hello there! my name is Raji Oluwatobiloba.
        </h4>
        <Typical
          className="about-text"
          steps={[
            `I am an Experienced Software Developer with experience in Frontend technologies like React, React Native, 
            Javascript ES6 and ES7, Redux, Python having worked in a.`,
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
        <div>
          <img
            src={require ('../assets/JavaScript-logo.png')}
            className="skills-img"
          />
          <img
            src={require ('../assets/react-native-logo.png')}
            className="skills-img"
          />
          <img
            src={require ('../assets/React-logo.png')}
            className="skills-img"
          />

          <img
            src={require ('../assets/redux-logo.jpg')}
            className="skills-img"
          />
          <img
            src={require ('../assets/python-logo.png')}
            className="skills-img"
          />
        </div>
        <div className="footer">
          <p>
            Copyright © 2019 Raji Oluwatobiloba | All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
