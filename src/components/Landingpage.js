import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Confetti from 'react-confetti';
import TextyAnim from 'rc-texty';

const text = 'Mobile & Web Developer';

class Landingpage extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="avatar-container">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <div className="banner" />
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
            <div className="social">
              <i class="fa fa-code" aria-hidden="true" />
            </div>
          </Cell>
        </Grid>
        <Confetti numberOfPieces={1000} />
      </div>
    );
  }
}

export default Landingpage;
