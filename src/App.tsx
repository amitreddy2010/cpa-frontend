import React from 'react'
import './App.css'
import Home from './domain/home/Home'
import NavigationBar from './domain/navigation/NavigationBar'
import Reviews from './domain/reviews/Reviews'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './domain/contact/ContactUs'

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        <div>
          <hr />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/reviews'>
              <Reviews />
            </Route>
            <Route path='/contactUs'>
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default App
