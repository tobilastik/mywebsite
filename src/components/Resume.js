import React, {Component} from 'react';

export class Resume extends Component {
  constructor (props) {
    super (props);
    this.state = {...props};
  }
  componentDidMount () {
    window.location.replace (
      'https://drive.google.com/open?id=13ci2xDe4ldDJl_0aomAoprNWziNbPYcI'
    );
  }
  render () {
    return <section>Redirecting...</section>;
  }
}

export default Resume;
