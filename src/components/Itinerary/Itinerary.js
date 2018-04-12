import React from 'react';

import Mapping from './Mapping/Mapping';
import DayPlan from './DayPlan/DayPlan';

import { cities } from '../../data';

const itinerary = (props) => {

	return (
		<div>
	      	{/* <Mapping /> */}
	      	<DayPlan />
		</div>
	);
}

export default itinerary;