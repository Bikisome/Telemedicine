import React from 'react';
import { 
  Typography, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  Avatar, 
  Box, 
  Chip,
  Rating,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Paper,
  Zoom,
  Grow,
  InputAdornment,
  TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SearchIcon from '@mui/icons-material/Search';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MoodIcon from '@mui/icons-material/Mood';
import doctorConsultationImage from '../assets/imagePro.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
  },
});

const specialties = [
  { name: 'Gynecologist', color: '#4CAF50', icon: <PregnantWomanIcon /> },
  { name: 'Ayurvedic', color: '#FF9800', icon: <SpaIcon /> },
  { name: 'Sexologist', color: '#E91E63', icon: <FavoriteIcon /> },
  { name: 'Urologist', color: '#2196F3', icon: <AccessibilityNewIcon /> },
  { name: 'Neurologist', color: '#9C27B0', icon: <PsychologyIcon /> },
  { name: 'Psychiatrist', color: '#00BCD4', icon: <MoodIcon /> },
];

const doctors = [
  { 
    name: 'Dr. Akshay Chordla', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 8, 
    location: 'Cure Health Center, Mumbai', 
    rating: 4.6, 
    patientStories: 1141, 
    consultationFee: 499,
    image: 'data:image/jpeg;base64,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'
  },
  { 
    name: 'Dr. Rahul Gupta', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 9, 
    location: 'Cure Health Center, Mumbai', 
    rating: 4.7, 
    patientStories: 1299, 
    consultationFee: 499,
    image: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid'

  },
];

const SpecialtyButton = styled(Button)(({ theme, color }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: '20px',
  backgroundColor: 'white',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiAvatar-root': {
    width: 70,
    height: 70,
    marginBottom: theme.spacing(2),
    backgroundColor: color,
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover .MuiAvatar-root': {
    transform: 'scale(1.15)',
  },
}));

const DoctorCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  overflow: 'visible',
}));

const DoctorImage = styled('img')({
  width: 140,
  height: 140,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 30,
  border: '5px solid #fff',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FFD700',
  },
});

const DoctorInfo = ({ doctor }) => (
  <Grow in={true} timeout={1000}>
    <DoctorCard>
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <DoctorImage src={doctor.image} alt={doctor.name} />
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary">{doctor.name}</Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>{doctor.specialty}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AccessibilityNewIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">{doctor.experience} years of Experience</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalHospitalIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">{doctor.location}</Typography>
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
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ mb: 3, px: 4, py: 1.5, borderRadius: 30 }}
              startIcon={<LocalHospitalIcon />}
            >
              Consult Now
            </Button>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 4 }}>
              <Typography variant="body1" gutterBottom>Consultation Fee</Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">₹ {doctor.consultationFee}/-</Typography>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </DoctorCard>
  </Grow>
);

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Zoom in={true} timeout={1000}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" color="primary">
                  Skip the travel!
                </Typography>
                <Typography variant="h4" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
                  Take Online Doctor Consultation
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary" sx={{ mb: 4 }}>
                  Private consultation + Audio call - Starts at just ₹199
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search for doctors, specialties, symptoms..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button 
                          variant="contained" 
                          color="primary" 
                          size="large"
                          sx={{ 
                            borderRadius: '0 30px 30px 0',
                            height: '100%',
                            px: 4
                          }}
                        >
                          Find a Doctor
                        </Button>
                      </InputAdornment>
                    ),
                    sx: { 
                      borderRadius: 30,
                      pr: 0,
                    }
                  }}
                  sx={{ mb: 4 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'success.main', mr: 1 }} />
                  <Typography variant="body1" fontWeight="medium">1400+ doctors online</Typography>
                </Box>
              </Box>
            </Zoom>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={doctorConsultationImage} alt="Doctor Consultation" style={{ width: '100%', maxHeight: '350px', objectFit: 'contain' }} />
          </Grid>
        </Grid>

        <Box sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h3" fontWeight="bold">25+ Specialties</Typography>
            <Button endIcon={<ChevronRightIcon />} color="primary" variant="outlined" size="large">
              View all
            </Button>
          </Box>
          <Typography variant="h6" gutterBottom color="text.secondary" sx={{ mb: 4 }}>
            Consult with top doctors across specialties
          </Typography>
          <Grid container spacing={4}>
            {specialties.map((specialty, index) => (
              <Grid item key={index} xs={6} sm={4} md={2}>
                <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                  <SpecialtyButton color={specialty.color}>
                    <Avatar sx={{ bgcolor: specialty.color, color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
                      {specialty.icon}
                    </Avatar>
                    <Typography variant="body1" fontWeight="medium">{specialty.name}</Typography>
                    <Chip label="Find Doctors" size="small" sx={{ mt: 2 }} color="primary" />
                  </SpecialtyButton>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography variant="h3" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>Popular Doctors Available</Typography>
          {doctors.map((doctor, index) => (
            <DoctorInfo key={index} doctor={doctor} />
          ))}
          <Button variant="outlined" fullWidth size="large" sx={{ mt: 4, py: 2, borderRadius: 30 }}>
            SHOW MORE DOCTORS
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;