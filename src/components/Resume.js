import React, { Component } from "react";
import Background from "./Background";

export default class Resume extends Component {
  componentDidMount() {
    window.open("https://drive.google.com/file/d/1F_sxWnx9ZX2o3gwxfhppzzPZXjMP5CUL/view?usp=sharing", "_blank");
  }
  render() {
    return <Background />;
  }
}
