import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Button, 
  Avatar, 
  Rating, 
  Select, 
  MenuItem, 
  Container,
  Grid,
  Chip,
  Paper,
  Grow,
  styled
} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DoctorCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  overflow: 'visible',
  borderRadius: 20,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.08)',
  },
}));

const DoctorImage = styled('img')({
  width: 140,
  height: 140,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 30,
  border: '5px solid #fff',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FFD700',
  },
});

const InfoChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const doctors = [
  { 
    name: 'Dr. Akshay Chordla', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 8, 
    location: 'Cure Health Center, Haridwar', 
    rating: 4.6, 
    patientStories: 1141, 
    consultationFee: 499,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Rahul Gupta', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 9, 
    location: 'Cure Health Center, Haridwar', 
    rating: 4.7, 
    patientStories: 1299, 
    consultationFee: 499,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Priya Sharma', 
    specialty: 'MBBS, MS - Gynecology', 
    experience: 12, 
    location: 'Womens Health Clinic, Haridwar', 
    rating: 4.9, 
    patientStories: 2015, 
    consultationFee: 799,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Amit Patel', 
    specialty: 'MBBS, MD - Cardiology', 
    experience: 15, 
    location: 'Heart Care Institute, Haridwar', 
    rating: 4.8, 
    patientStories: 1876, 
    consultationFee: 999,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Sanjay Mehta', 
    specialty: 'MBBS, MS - Orthopedics', 
    experience: 20, 
    location: 'Bone & Joint Hospital, Haridwar', 
    rating: 4.7, 
    patientStories: 2245, 
    consultationFee: 899,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Neha Reddy',
    specialty: 'MBBS, MD - Dermatology', 
    experience: 7, 
    location: 'Skin Care Clinic, Haridwar', 
    rating: 4.5, 
    patientStories: 987, 
    consultationFee: 699,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Rajesh Kumar', 
    specialty: 'MBBS, DM - Neurology', 
    experience: 18, 
    location: 'Brain & Nerve Center, Haridwar', 
    rating: 4.9, 
    patientStories: 1654, 
    consultationFee: 1299,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Anita Desai', 
    specialty: 'MBBS, MD - Pediatrics', 
    experience: 10, 
    location: 'Childrens Hospital, Haridwar', 
    rating: 4.6, 
    patientStories: 1432, 
    consultationFee: 599,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Vikram Singh', 
    specialty: 'MBBS, MS - General Surgery', 
    experience: 22, 
    location: 'City General Hospital, Haridwar' , 
    rating: 4.8, 
    patientStories: 2567, 
    consultationFee: 899,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Meera Kapoor', 
    specialty: 'MBBS, MD - Endocrinology', 
    experience: 14, 
    location: 'Diabetes & Hormone Clinic, Haridawar', 
    rating: 4.7, 
    patientStories: 1765, 
    consultationFee: 799,
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Arjun Nair', 
    specialty: 'MBBS, DM - Oncology', 
    experience: 16, 
    location: 'Cancer Care Institute, Haridwar', 
    rating: 4.9, 
    patientStories: 1987, 
    consultationFee: 1499,
    image: '/api/placeholder/150/150'
  }
];

const ShowHaridwardrs = () => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement sorting logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" fontWeight="bold">Top Doctors Available</Typography>
          </Grid>
          <Grid item>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              displayEmpty
              variant="outlined"
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="">
                <em>Sort By</em>
              </MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="experience">Experience</MenuItem>
              <MenuItem value="fee">Consultation Fee</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>

      {doctors.map((doctor, index) => (
        <Grow in={true} timeout={1000} key={index}>
          <DoctorCard>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item>
                  <DoctorImage src={doctor.image} alt={doctor.name} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary">{doctor.name}</Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>{doctor.specialty}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    <InfoChip icon={<AccessibilityNewIcon />} label={`${doctor.experience} years exp.`} color="primary" variant="outlined" />
                    <InfoChip icon={<LocationOnIcon />} label={doctor.location} color="secondary" variant="outlined" />
                    <InfoChip icon={<EventNoteIcon />} label={`${doctor.patientStories} consultations`} color="success" variant="outlined" />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <StyledRating value={doctor.rating} readOnly size="small" />
                    <Typography variant="body2" fontWeight="bold" sx={{ ml: 1 }}>{doctor.rating}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({doctor.patientStories} Patient Stories)
                    </Typography>
                  </Box>
                  <Button color="primary" variant="outlined" sx={{ mt: 1, borderRadius: 20 }} endIcon={<ChevronRightIcon />}>
                    View Full Profile
                  </Button>
                </Grid>
                <Grid item>
                  <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 4, mb: 3 }}>
                    <Typography variant="body1" gutterBottom>Consultation Fee</Typography>
                    <Typography variant="h4" color="primary" fontWeight="bold">₹ {doctor.consultationFee}/-</Typography>
                  </Paper>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    fullWidth
                    sx={{ py: 1.5, borderRadius: 30 }}
                    startIcon={<LocalHospitalIcon />}
                  >
                    Consult Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </DoctorCard>
        </Grow>
      ))}
    </Container>
  );
};

export default ShowHaridwardrs;