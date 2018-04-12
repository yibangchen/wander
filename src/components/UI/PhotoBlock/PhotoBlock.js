import React from 'react';
import classes from './PhotoBlock.css';

const photoBlock = (props) => (
	<div className={classes.PhotoBlock}>
		<div className={classes.Photo}></div>
		<div className={classes.Desc}></div>
	</div>
);

export default photoBlock;
