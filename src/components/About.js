import React, {Component} from 'react';
import Typical from 'react-typical';

class About extends Component {
  render () {
    return (
      <div className="container">
        <Typical
          steps={[
            `Hello there! My name is Raji Oluwatobiloba, a software developer from Nigeria. Please take a look around!`,
            1000,

            500,
          ]}
          // loop={Infinity}
          wrapper="p"
        />
      </div>
    );
  }
}

export default About;
