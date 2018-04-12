import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

import classes from './GoogleMap.css';

class Map extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default Map;