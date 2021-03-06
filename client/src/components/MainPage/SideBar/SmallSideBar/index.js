import { Grid, Icon, IconButton } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import { ManageAccounts, Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assests/logo-small.svg';

const SideBarButton = styled(IconButton)({
  borderRadius: '2px'
});

export default ({ handleDrawerOpen }) => (
      <Grid container flexDirection={'column'} alignItems={'center'}>
        {
          <Icon sx={{ width: '100%', height: '30%' }}>
            <img src={logo} alt='logo'/>
          </Icon>
        }
        <Grid container flexDirection='column'>
          <SideBarButton onClick={handleDrawerOpen}>
            <Menu/>
          </SideBarButton>
          <NavLink to={'/admin'} component={SideBarButton}>
            <ManageAccounts/>
          </NavLink>
        </Grid>
      </Grid>
);
