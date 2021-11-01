import { Grid, Icon, IconButton } from '@mui/material';
import React from 'react';
import logo from '../../../../assests/logo-small.svg';
import { styled } from '@mui/system';
import { ManageAccounts, Menu } from '@mui/icons-material';

const SideBarButton = styled(IconButton)({
	borderRadius: '2px',
});

export default ({ handleDrawerOpen }) => {
	const sideBarOptions = [
		{
			Icon: Menu,
			onClick: handleDrawerOpen,
		},
		{
			Icon: ManageAccounts,
		},
	];

	return (
		<Grid container flexDirection={'column'} alignItems={'center'}>
			{
				<Icon sx={{ width: '100%', height: '30%' }}>
					<img src={logo} alt='logo' />
				</Icon>
			}
			<Grid container flexDirection='column'>
				{sideBarOptions.map(({ Icon, onClick }, index) => (
					<SideBarButton key={index} onClick={onClick}>
						<Icon />
					</SideBarButton>
				))}
			</Grid>
		</Grid>
	);
};
