import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Grid } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ChevronRight } from '@mui/icons-material';
import SmallSideBar from './SmallSideBar';
import SearchBar from './SearchBar';

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
	height: '100%',
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
				<Grid container flexDirection='column' justifyContent='center' alignItems='flex-start'>
					{open ? (
						<>
						<IconButton onClick={handleDrawerClose}>
							<ChevronRight />
						</IconButton>
						<SearchBar/>
						</>
					) : (
						<SmallSideBar handleDrawerOpen={handleDrawerOpen} />
					)}
				</Grid>
			</Drawer>
		</Box>
	);
};
