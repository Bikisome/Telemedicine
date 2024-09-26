import React from 'react';
import { Button } from '@mui/material';

function SpecialtyButton({ specialty }) {
  return (
    <Button variant="contained" color="primary" style={{ margin: '0 8px 8px 0' }}>
      {specialty}
    </Button>
  );
}

export default SpecialtyButton;