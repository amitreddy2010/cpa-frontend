import React, { useEffect } from 'react';
import './App.css';
import Home from './domain/home/Home';
import NavigationBar from './domain/navigation/NavigationBar';
import Reviews from './domain/reviews/Reviews';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <NavigationBar />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
