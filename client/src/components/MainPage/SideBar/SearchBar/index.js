import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/node/InputBase';
// eslint-disable-next-line object-curly-newline
import { FormLabel, Button, Divider, Grid } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import Step from './Step';

const StyledInputBase = styled(InputBase)(() => ({
  background: '#FFF',
  paddingLeft: '1.2rem',
  border: 'solid 1px #797979',
  borderRadius: '.4rem',
  marginBottom: '1.4rem',
  width: '80%'
}));

const StyledDivider = styled(Divider)(() => ({ alignSelf: 'stretch', width: '100%' }));

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'end',
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
    <Grid container flexDirection='column' justifyContent='center' alignItems='flex-end'>
      <Form onSubmit={onSubmit}>
        <div>
          <FormLabel sx={{ color: '#426FE2' }}>מקור</FormLabel>
          <br />
          <LocationOn sx={{ verticalAlign: 'middle' }} />
          <StyledInputBase
            placeholder='תל אביב'
            value={origin}
            onChange={e => setOrigin(e.target.value)}
          />
        </div>
        <div>
          <FormLabel sx={{ color: '#426FE2' }}>יעד</FormLabel>
          <br />
          <LocationOn sx={{ verticalAlign: 'middle' }} />
          <StyledInputBase
            placeholder='המכללה למנהל'
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>
        <br />
        <Button
          type='submit'
          variant='contained'
          sx={{
            width: '80%',
            alignSelf: 'center'
          }}>
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