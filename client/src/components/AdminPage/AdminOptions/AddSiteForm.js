import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button, Card, CardContent, Grid, Snackbar, TextField
} from '@mui/material';
import { styled } from '@mui/system';
import { useMutation } from 'react-query';
import axios from 'axios';

const MarginGrid = styled(Grid)({
  margin: '5px'
});

const AddSiteForm = () => {
  const {
    register, handleSubmit, reset, formState: { errors }
  } = useForm();

  const [isSuccess, setIsSuccess] = useState();

  const mutation = useMutation(newSite => axios.post('/api/sites', newSite));
  const onSubmit = async data => {
    await mutation.mutateAsync(data);

    if (mutation.isSuccess) {
      setIsSuccess(true);
    }

    reset();
  };

  return (
      <>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container justifyContent='flex-start'>
                <MarginGrid item xs={5}>
                  <TextField label="שם אתר" variant="standard" {...register('name', {
                    required: true,
                    maxLength: 100
                  })}
                             error={errors.name}
                             helperText={errors.name && 'נדרש למלא שם'}/>
                </MarginGrid>
                <MarginGrid item xs={5}>
                  <TextField label="כתובת" variant="standard" {...register('address', {
                    required: true,
                    maxLength: 400
                  })}
                             error={errors.address}
                             helperText={errors.address && 'נדרש למלא כתובת'}/>
                </MarginGrid>
                <MarginGrid item xs={5}>
                  <TextField type='number' label="קו אורך" variant="standard" {...register('longitude', {
                    required: true,
                    maxLength: 100
                  })}
                             error={errors.longitude}
                             helperText={errors.longitude && 'נדרש למלא קו אורך'}/>
                </MarginGrid>
                <MarginGrid item xs={5}>
                  <TextField type='number' label="קו רוחב" variant="standard" {...register('latitude', {
                    required: true,
                    maxLength: 100
                  })}
                             error={errors.latitude}
                             helperText={errors.latitude && 'נדרש למלא קו רוחב'}/>
                </MarginGrid>
                <MarginGrid item xs={10}>
                  <TextField label="תיאור" variant="standard" {...register('description', {
                    required: true,
                    maxLength: 500
                  })} sx={{ width: '100%' }}
                             error={errors.description}
                             helperText={errors.description && 'נדרש למלא תיאור'}/>
                </MarginGrid>
                <MarginGrid item xs={5}>
                  <TextField label="שם איש קשר" variant="standard" {...register('contactName', {
                    required: true,
                    maxLength: 100
                  })}
                             error={errors.contactName}
                             helperText={errors.contactName && 'נדרש למלא שם איש קשר'}/>
                </MarginGrid>
                <MarginGrid item xs={5}>
                  <TextField label="מספר טלפון" variant="standard" {...register('contactNumber', {
                    required: true,
                    maxLength: 100
                  })}
                             error={errors.contactNumber}
                             helperText={errors.contactNumber && 'נדרש למלא מספר איש קשר'}/>
                </MarginGrid>
                <MarginGrid container justifyContent='center' sx={{ marginTop: '24px' }}>
                  <Grid container item justifyContent='space-between' xs={5}>
                    <Button type="submit" variant="outlined" onClick={() => reset()}>ניקוי</Button>
                    <Button type="submit" variant="contained">שמירה</Button>
                  </Grid>
                </MarginGrid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Snackbar
            open={isSuccess}
            autoHideDuration={6000}
            onClose={() => setIsSuccess(false)}
            message="אתר נוצר בהצלחה"
        />
      </>
  );
};

export default AddSiteForm;
