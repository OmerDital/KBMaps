import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './SideBar';
import Map from './Map';

export default () => (
  <Grid container sx={{ width: '100%', height: '100%' }}>
    <Map />
    <SideBar />
  </Grid>
);
