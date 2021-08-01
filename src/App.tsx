import React from 'react'
import './App.css'
import Home from './domain/home/Home'
import NavigationBar from './domain/navigation/NavigationBar'
import Reviews from './domain/reviews/Reviews'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const HeaderEnum = {
  HOME: 'Home',
  ABOUT: 'About',
  REVIEWS: 'Reviews',
} as const

type HeaderEnum = typeof HeaderEnum[keyof typeof HeaderEnum]

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        <div>
          <ul>
            <li>
              <Link to='/'>{HeaderEnum.HOME}</Link>
            </li>
            <li>
              <Link to='/about'>{HeaderEnum.ABOUT}</Link>
            </li>
            <li>
              <Link to='/reviews'>{HeaderEnum.REVIEWS}</Link>
            </li>
          </ul>

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
