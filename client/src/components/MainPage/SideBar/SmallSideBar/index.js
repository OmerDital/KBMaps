import { Grid, Icon, IconButton } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import { ManageAccounts, Menu } from '@mui/icons-material';
import logo from '../../../../assests/logo-small.svg';

const SideBarButton = styled(IconButton)({
  borderRadius: '2px'
});

export default ({ handleDrawerOpen }) => {
  const sideBarOptions = [
    {
      ButtonIcon: Menu,
      onClick: handleDrawerOpen
    },
    {
      ButtonIcon: ManageAccounts
    }
  ];

  return (
    <Grid container flexDirection={'column'} alignItems={'center'}>
      {
        <Icon sx={{ width: '100%', height: '30%' }}>
          <img src={logo} alt='logo' />
        </Icon>
      }
      <Grid container flexDirection='column'>
        {sideBarOptions.map(({ ButtonIcon, onClick }, index) => (
          <SideBarButton key={index} onClick={onClick}>
            <ButtonIcon />
          </SideBarButton>
        ))}
      </Grid>
    </Grid>
  );
};
