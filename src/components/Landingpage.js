import React, { Component } from "react";

import Banner from "./Banner";
import Background from "./Background";

const text = "Mobile Developer.";

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Background>
          <Banner
            title="Hello, my name is Tobi"
            subtitle="I am a Mobile Software Engineer"
          ></Banner>
        </Background>
      </div>
    );
  }
}

export default Landingpage;
