import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './SideBar';
import Map from './Map';

export default () => (
	<Grid container flexDirection='flex-start' sx={{ width: '100%', height: '100%' }}>
		<SideBar />
		<Map />
	</Grid>
);
