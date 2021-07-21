import React from 'react';
import './App.css';
import Home from './domain/home/Home';
import NavigationBar from './domain/navigation/NavigationBar';
import Reviews from './domain/reviews/Reviews';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Reviews />
    </div>
  );
}

export default App;
