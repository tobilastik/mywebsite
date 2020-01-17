import React, {Component} from 'react';
import Background from './Background';

export default class Resume extends Component {
  constructor (props) {
    super (props);
    this.state = {...props};
  }
  componentDidMount () {
    window.open (
      'https://drive.google.com/open?id=1yvYDSf_nH5X5R9hKMaLPRL0lOHMWmZGC',
      '_blank'
    );
  }
  render () {
    return <Background />;
  }
}
