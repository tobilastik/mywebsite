import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import About from './About';
import Portfolio from './Portfolio';
import {Resume} from './Resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />;
    <Route path="/portfolio" component={Portfolio} />;
    <Route path="/resume" component={Resume} />

  </Switch>
);

export default Main;
