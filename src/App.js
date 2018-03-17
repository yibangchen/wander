import React, { Component } from 'react';
import classes from './App.css';

//components
import Itinerary from './components/Itinerary/Itinerary';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Itinerary />
      </div>
    );
  }
}

export default App;
