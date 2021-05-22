import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import NavbarComponent from './NavbarComponent';
import About from './About';

export default class index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponent />
          <Route path="/" exact component={Portfolio} />
          <Route path="/About" component={About} />
        </BrowserRouter>
      </div>
    );
  }
}
