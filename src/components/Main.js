import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Resume from './Resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />;
    <Route path="/blog" component={Blog} />;
    <Route path="/resume" component={Resume} />

  </Switch>
);

export default Main;
