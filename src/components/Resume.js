import React, {Component} from 'react';
import Background from './Background';

export default class Resume extends Component {
  constructor (props) {
    super (props);
    this.state = {...props};
  }
  componentDidMount () {
    window.open (
      'https://drive.google.com/open?id=1__3G8EdVACUJ3yDKacjoh9doeGRsVYo0',
      '_blank'
    );
  }
  render () {
    return <Background />;
  }
}
