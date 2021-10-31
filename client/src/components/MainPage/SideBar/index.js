import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, IconButton, Grid } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ChevronRight, MenuOutlined } from '@mui/icons-material';

const openedMixin = () => ({
	width: '15%',
	overflowX: 'hidden',
});

const closedMixin = () => ({
	overflowX: 'hidden',
	width: '5%',
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ open }) => ({
	width: '15%',
	...(open && {
		...openedMixin(),
		'& .MuiDrawer-paper': openedMixin(),
	}),
	...(!open && {
		...closedMixin(),
		'& .MuiDrawer-paper': closedMixin(),
	}),
}));

export default () => {
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer variant='permanent' open={open} anchor={'right'}>
				<Grid container direction='Column' justifyContent='center' alignItems='flex-end'>
					{open ? (
						<IconButton onClick={handleDrawerClose}>
							<ChevronRight />
						</IconButton>
					) : (
						<IconButton onClick={handleDrawerOpen}>
							<MenuOutlined />
						</IconButton>
					)}
				</Grid>
				<Divider />
			</Drawer>
		</Box>
	);
};
