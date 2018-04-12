import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import classes from './App.css';

//components
import Layout from './hoc/Layout/Layout';
import FindCity from './components/FindCity/FindCity';
import Itinerary from './components/Itinerary/Itinerary';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Layout>
      		<Switch>
      			<Route path='/itinerary' component={Itinerary} />
      			<Route path='/' exact component={FindCity} />
      		</Switch>
      	</Layout>
      </div>
    );
  }
}

export default App;
