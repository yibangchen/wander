import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map/Map';

import classes from './Mapping.css';

class Mapping extends Component {

	apiKey = 'AIzaSyBgrgWCYAK-yTM9EL563J40Oa_tCY7X-4o';

	render() {
		if (!this.props.loaded) {
			return <div className='Mapping'>Loading...</div>
		}
		return  (
			<div className='Mapping'>
				<Map google={ this.props.google }/>
			</div>	
		);
	}
}



export default Mapping;