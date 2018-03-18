import React, { Component } from 'react';

import classes from './Mapping.css';

import Map from './Map/Map';

class Mapping extends Component {

	state = {

	}

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