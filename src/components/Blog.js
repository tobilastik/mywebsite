import React, { Component } from "react";
import Background from "./Background";

export default class Resume extends Component {
  componentDidMount() {
    window.open("https://dev.to/tobilastik", "_blank");
  }
  render() {
    return <Background />;
  }
}
