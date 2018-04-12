import React from 'react';

import Mapping from './Mapping/Mapping';
import DayPlan from './DayPlan/DayPlan';

import { cities } from '../data.js';

const itinerary = (props) => {

	return (
		<div>
			<DayPlan cards={ cities[props.cityName]} />
		</div>
	);
}

export default itinerary;