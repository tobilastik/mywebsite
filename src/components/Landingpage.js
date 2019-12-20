import React, {Component} from 'react';
import Confetti from 'react-confetti';
import TextyAnim from 'rc-texty';
import Banner from './Banner';
import Background from './Background';

const text = 'Mobile & Web Developer.';

class Landingpage extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Background>
          <Banner
            title="Hello, my name is Raji Oluwatobiloba,"
            subtitle="I am a"
          >
            <TextyAnim
              className="info-text"
              type="mask-top"
              duration={e => {
                if (e.index === 1) {
                  return 5000;
                }
                return 5000;
              }}
              interval={e => {
                if (e.index === 2) {
                  return 5000;
                }
                return e.index * 500;
              }}
              onEnd={type => {
                // tslint:disable-next-line
                console.log (type);
              }}
            >
              {text}
            </TextyAnim>
          </Banner>
        </Background>

        <Confetti numberOfPieces={1000} />
      </div>
    );
  }
}

export default Landingpage;
