import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Blog from './Blog';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />;
    <Route path="/portfolio" component={Portfolio} />;
    <Route path="/blog" component={Blog} />;
    <Route path="/contact" component={Contact} />;
  </Switch>
);

export default Main;
