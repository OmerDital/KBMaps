import React from 'react';
import { styled } from '@mui/material/styles';
import { ArrowBack, ArrowForward, ArrowUpward } from '@mui/icons-material';

const StyledStep = styled('div')(() => ({
  marginRight: '.5rem',
  lineHeight: '2rem',
  fontSize: '1.4rem'
}));

const renderStep = direction => {
  switch (direction) {
    case 'right':
      return (
        <div>
          {' '}
          פנה ימינה <ArrowForward color='info' sx={{ verticalAlign: 'middle' }} />
        </div>
      );
    case 'left':
      return (
        <div>
          {' '}
          פנה שמאלה <ArrowBack color='info' sx={{ verticalAlign: 'middle' }} />
        </div>
      );
    default:
      return (
        <div>
          {' '}
          המשך ישר
          <ArrowUpward color='info' sx={{ verticalAlign: 'middle' }} />
        </div>
      );
  }
};

const Step = ({ direction }) => {
  <StyledStep>{renderStep(direction)}</StyledStep>;
};

export default Step;
