import React, {Component} from 'react';
import Background from './Background';

export class Resume extends Component {
  constructor (props) {
    super (props);
    this.state = {...props};
  }
  componentDidMount () {
    window.open (
      'https://drive.google.com/open?id=18SdOoMmjdFy9_qALFLe2xTMAlpNsdVe3',
      '_blank'
    );
  }
  render () {
    return <Background />;
  }
}

export default Resume;
