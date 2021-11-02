import React from 'react';
import { Grid } from '@mui/material';
import Map from '../MainPage/Map';
import AdminOptions from './AdminOptions';

const AdminPage = () => <Grid container sx={{ height: '100%' }} direction='row'>
  <Grid item xs={4} sx={{ padding: '10px', backgroundColor: '#F0EEEE' }}>
    <AdminOptions/>
  </Grid>
  <Grid item xs={8}>
    <Map/>
  </Grid>
</Grid>;

export default AdminPage;
