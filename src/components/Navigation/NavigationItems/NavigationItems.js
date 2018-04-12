import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css'

const navigationItems = (props)=> (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/'>Discover</NavigationItem>
		<NavigationItem link='/'>Schedule</NavigationItem>
		<NavigationItem link='/'>Social</NavigationItem>
		<NavigationItem link='/'>Account</NavigationItem>
	</ul>
);

export default navigationItems;