import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

export default class Skills extends Component {
  render () {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>
            {this.props.skill}
            <ProgressBar
              style={{margin: 'auto', display: 'flex'}}
              progress={this.props.progress}
              buffer={87}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}
