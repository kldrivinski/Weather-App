import React from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Search from './Search';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* exact keyword prevents further matches from happening */}
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/search" exact component={Search} />

        </Switch>
      </div>
    </Router>

  );
}



export default App;
