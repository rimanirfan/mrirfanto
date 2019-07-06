import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="">
      <h1>Home Page</h1>
      <Router>
        <div>
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
