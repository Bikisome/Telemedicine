import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import SpecialtyButton from '../components/SpecialtyButton';
import DoctorCard from '../components/DoctorCard';

const specialties = ['Gynecologist', 'Ayurveda', 'Sexologist', 'Urologist', 'Neurologist', 'Psychiatrist'];

const doctors = [
  { name: 'Dr. John Doe', specialty: 'Psychiatry', experience: 8, consultationFee: 499 },
  { name: 'Dr. Jane Smith', specialty: 'Psychiatry', experience: 10, consultationFee: 599 },
];

function Home() {
  return (
    <Box sx={{px: 40 }}>
      <Typography variant="h4" gutterBottom>
        Skip the travel!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Take Online Doctor Consultation
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Private consultation + Audio call starts at just ₹199
      </Typography>
      
      <Box my={4}>
        <Typography variant="h6" gutterBottom>
          25+ Specialties
        </Typography>
        <Grid container spacing={1}>
          {specialties.map((specialty, index) => (
            <Grid item key={index}>
              <SpecialtyButton specialty={specialty} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box my={4}>
        <Typography variant="h6" gutterBottom>
          Popular Doctors Available
        </Typography>
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </Box>
    </Box>
  );
}

export default Home;