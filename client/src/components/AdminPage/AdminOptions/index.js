import React from 'react';
import {
  Button, Grid
} from '@mui/material';
import AdminHeadline from './AdminHeadline';
import AddSiteForm from './AddSiteForm';

const AdminOptions = () => <Grid container direction='column'>
  <AdminHeadline/>
  <Grid container>
    <Button>הוספת אתר</Button>
    <Button>עדכון אתר</Button>
    <AddSiteForm />
  </Grid>
</Grid>;

export default AdminOptions;
