import React from 'react';
import { Box, Typography } from '@mui/material';

const AdminHeadline = () => <Box sx={{ marginBottom: '24px' }}>
  <Typography variant="h3" component="div" color='secondary'>
    אייכה?
  </Typography>
  <Typography variant="caption" display="block" gutterBottom color='primary'>
    צד מנהל
  </Typography>
</Box>;

export default AdminHeadline;
