import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {white} from 'ansi-colors';

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
            <div className="banner">
              <h1 className="info-text">Mobile & Web Developer</h1>
            </div>
            <div className="social">
              <i class="fa fa-code" aria-hidden="true" />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
