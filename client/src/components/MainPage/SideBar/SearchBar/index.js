import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
// eslint-disable-next-line object-curly-newline
import {
  TextField,
  Button,
  Divider,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import Step from './Step';

const StyledDivider = styled(Divider)(() => ({
  alignSelf: 'stretch',
  width: '100%'
}));

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '7rem'
}));

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const [route, setRoute] = useState([]);

  const onSearch = async () => {
    // const res = await fetch(url?)
    // const data = await res.json()
    const data = ['left', 'left', 'straight', 'right'];
    setRoute(data);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!origin) {
      // can use client location as default
      alert('Please Choose Origin');
      return;
    }

    if (!destination) {
      alert('Please Choose Destination');
      return;
    }

    onSearch({ origin, destination });
  };

  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='center'
      alignItems='flex-center'
    >
      <Form onSubmit={onSubmit}>
        <div>
          <Tooltip title='בחר מיקום על המפה'>
            <IconButton color='secondary'>
              <LocationOn sx={{ verticalAlign: 'middle' }} />
            </IconButton>
          </Tooltip>
          <TextField
            variant='outlined'
            label='מיקום התחלתי'
            value={origin}
            onChange={e => setOrigin(e.target.value)}
          />
        </div>
        <br />
        <div>
          <Tooltip title='בחר מיקום על המפה'>
            <IconButton color='secondary'>
              <LocationOn sx={{ verticalAlign: 'middle' }} />
            </IconButton>
          </Tooltip>
          <TextField
            variant='outlined'
            label='יעד'
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>
        <br />
        <Button
          type='submit'
          variant='contained'
          sx={{
            width: 'auto',
            alignSelf: 'center'
          }}
        >
          חישוב מסלול
        </Button>
        <br />
        <StyledDivider />
      </Form>
      {route.length > 0 && <h3>הוראות נסיעה</h3>}
      {route.map((step, index) => (
        <Step direction={step} key={index} />
      ))}{' '}
    </Grid>
  );
};

export default SearchBar;
