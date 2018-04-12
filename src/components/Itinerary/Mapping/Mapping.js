import React, { Component } from 'react';

import GoogleMap from './GoogleMap/GoogleMap';
import { cities } from '../../../data';
import { GOOGLE_MAP_API } from '../../../apiKeys';

import classes from './Mapping.css';

class Mapping extends Component {

  render() {

  	const geoLoc = cities['san_francisco']['geo_location'];

    return (
      // Important! Always set the container height explicitly
      <div className={classes.Mapping}>
      	<GoogleMap apiKey={GOOGLE_MAP_API} center={geoLoc.center} zoom={geoLoc.zoom}/>
      </div>
    );
  }
}

export default Mapping;