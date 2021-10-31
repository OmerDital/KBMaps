import { Grid, Icon } from '@mui/material';
import React from 'react';
import { sideBarOptions } from './sideBarOptions';
import logo from '../../../../assests/logo-small.svg';

export default () => {
	return (
		<Grid container direction='column'>
			{
				<Icon sx={{ width: '100%', height: '100%' }}>
					<img src={logo} alt='logo' />
				</Icon>
			}
		</Grid>
	);
};
