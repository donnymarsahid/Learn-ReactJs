import React from 'react';
import Contact from './Portfolio/Contact';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Portfolio from './Portfolio/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
