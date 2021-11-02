import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
// eslint-disable-next-line object-curly-newline
import { Box, IconButton, Grid, Icon } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ChevronRight } from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { margin, positions } from '@mui/system';
import SmallSideBar from './SmallSideBar';
import SearchBar from './SearchBar';
import logo from '../../../assests/logo.svg';

const openedMixin = () => ({ width: '15%', overflowX: 'hidden' });

const closedMixin = () => ({ overflowX: 'hidden', width: '5%' });

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ open }) => ({
  width: '15%',
  height: '100%',
  ...(open && {
    ...openedMixin(),
    '& .MuiDrawer-paper': openedMixin()
  }),
  ...(!open && {
    ...closedMixin(),
    '& .MuiDrawer-paper': closedMixin()
  })
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
      <Drawer variant='permanent' open={open} anchor={'left'}>
        <Grid
          container
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='flex-start'
        >
          {open ? (
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRight />
              </IconButton>
              <Icon
                sx={{
                  width: 'auto',
                  height: 'auto',
                  transform: 'scale(.8)',
                  position: 'absolute',
                  left: 20
                }}
              >
                <img src={logo} alt='logo' />
              </Icon>
              <SearchBar />
            </div>
          ) : (
            <SmallSideBar handleDrawerOpen={handleDrawerOpen} />
          )}{' '}
        </Grid>
      </Drawer>
    </Box>
  );
};
