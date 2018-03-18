import React from 'react';

import Mapping from './Mapping/Mapping';
import DayPlan from './DayPlan/DayPlan';

const itinerary = (props) => {
	return (
		<div>
			this is an itnerary
			<Mapping loaded='false'/>
			<DayPlan />
		</div>
	);
}

export default itinerary;