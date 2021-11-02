import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './SideBar';
import Map from './Map';

const MainPage = () => (
    <Grid container direction='row' sx={{ height: '100%' }}>
      <SideBar/>
      <Map/>
    <SideBar />
    </Grid>
);

export default MainPage;
