import React, {Component} from 'react';
import Background from './Background';

export default class Resume extends Component {
  constructor (props) {
    super (props);
    this.state = {...props};
  }
  componentDidMount () {
    window.open (
      'https://drive.google.com/open?id=11K8qqhsByydxT2TGkr1Wv4khwh9bAuz9',
      '_blank'
    );
  }
  render () {
    return <Background />;
  }
}
