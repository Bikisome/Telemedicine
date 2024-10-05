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
  TextField,
  Fade,
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link ,Navigate} from 'react-router-dom';
import doctorConsultationImage from '../assets/imagePro.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FF4081',
    },
    background: {
      default: '#F0F4F8',
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
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.08)',
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
    image: '/api/placeholder/150/150'
  },
  { 
    name: 'Dr. Rahul Gupta', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 9, 
    location: 'Cure Health Center, Mumbai', 
    rating: 4.7, 
    patientStories: 1299, 
    consultationFee: 499,
    image: '/api/placeholder/150/150'
  },
];

const SpecialtyButton = styled(Button)(({ theme, color }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: '20px',
  backgroundColor: 'white',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiAvatar-root': {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2),
    backgroundColor: color,
    transition: 'all 0.3s ease-in-out',
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
               component={Link}
            to="/consultnow"
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
);

const Home = () => {
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 2 }}>
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
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Zoom in={true} timeout={1000}>
              <Box sx={{ position: 'relative', height: '400px', overflow: 'hidden', borderRadius: '20px' }}>
                <img src={doctorConsultationImage} alt="Doctor Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                  p: 3,
                  color: 'white'
                }}>
                  <Typography variant="h5" fontWeight="bold">Consult with Top Doctors</Typography>
                  <Typography variant="body1">Anytime, Anywhere</Typography>
                </Box>
              </Box>
            </Zoom>
          </Grid>
        </Grid>

        <Box sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h3" fontWeight="bold">25+ Specialties</Typography>
            <Button 
              component={Link}
              to="/specialties"
              endIcon={<ChevronRightIcon />} 
              color="primary" 
              variant="outlined" 
              size="large"
            >
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
          <Button variant="outlined" fullWidth size="large" sx={{ mt: 4, py: 2, borderRadius: 30 }}
            component={Link}
            to="/showalldoctors"
            endIcon={<ChevronRightIcon />} 
            color="primary" 
        
          >
            SHOW MORE DOCTORS
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;