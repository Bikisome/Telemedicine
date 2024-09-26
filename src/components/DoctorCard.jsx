import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function DoctorCard({ doctor }) {
  return (
    <Card variant="outlined" style={{ marginBottom: 16 }}>
      <CardContent>
        <Typography variant="h6">{doctor.name}</Typography>
        <Typography color="textSecondary">{doctor.specialty}</Typography>
        <Typography variant="body2">{doctor.experience} years of experience</Typography>
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">₹{doctor.consultationFee}</Typography>
          <Button variant="contained" color="primary">
            Consult Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;