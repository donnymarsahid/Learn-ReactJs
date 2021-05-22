import React, { Component } from 'react';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    );
  }
}
