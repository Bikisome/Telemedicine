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
import { Link ,Navigate,useNavigate } from 'react-router-dom';
import doctorConsultationImage from '../assets/imagePro.png';
import ShowHaridwardrs from './ShowHaridwardrs';
import DoctorProfile from './DoctorProfile';


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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfLh2yqT16aVBNL3xMq1XR_iCDQ35sVYwt9Hsdrrm9BImqLqIyfXV1Yg&s'
  },
  { 
    name: 'Dr. Rahul Gupta', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 9, 
    location: 'Cure Health Center, Mumbai', 
    rating: 4.7, 
    patientStories: 1299, 
    consultationFee: 499,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAUDBgECBwj/xAA6EAABAwMCAwYEBAMJAQAAAAABAAIDBAUREiETMUEGIjJRcaEUYYHBB0KRsdHh8CMkM0NSYnKCkhX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAMAAQQDAQAAAAAAAAAAAQIDETEEEiEiEzJBM//aAAwDAQACEQMRAD8A9vREQEREBERARFpX4k9sH9maCKCiIFfU/wCGXNyI2jm4pfhMna2qtuVDQDNbVwQbf5kgasFLfrRVvDKa5UsrjyDZRlfORtl5vcjpzSVFS47uklJyR9Vgm7OXamLZXUEzNJ8fUe6p+TFr+HJ9TZHmi8d/DDt1XNuENhvr3ytm7tPPIe8x2PCc8wenzXsI5K0vWVxsvy5REUoEREBERAREQEREBERAREQF41+KVLJV9uKFhBczgNLQTtz3Xsq0Xt1Y+NfrVdY3bxh8UrTyLcfxKz23mNa6P3jJYYGCn0NZhrW7Li9RaadxbhoxklavTU1/FeXU9M2mjbq7zZnHWNWxPTBHyUjtFRV9xmbFHNGQIeIGSAua5/kRkZHr+hXnWTw9Wd93WlXVhpbrT3GLSR8WyNrmn83P7FfRURLo2uIwSAcHovDam3VYoXQXR0Rniqo6mnEfMbhmHfQr3GHeNpIxkLv0X6vP9VjZl2u6Ii2coiIgIiICIiAiIgIiICIiAoV0t0VxjYyYuGh2oaSpq4KiyWcqcbZex5n/APQmpdVNNIYY436T3dRz5Y8lXXmtq6eognc8vY1oaGxwFpcT555c+Sve3r2226U8/BJjqIXcUN33BG+OuQfZaTd79agwOZUTzPae5EM930zsF52WrmVxe1q2TLCZNy7Dxvr75WS1MTZY44ywucMgEOGPrz/ReiN5Lz/8Ia81ltuAmDI5G1ILYm/lYWDHzO+d/PPoPQRy2XbqxmOPHl+ozuWdERFqwEREBERAREQEREBERARF1c/HTKDkkDqq2a4yyXNtDRxNcWYdPJIcBgPQebiF3uVaygpX1UrXPDSA2Nvie4nAaPmSVrVfTXmyx1d+kujXP1MfNQspmmN7AQNIce/r07AggZx3VIqr78Tcri2rmz8NKD8O3Hhi25/M+L646LXrlYmuLnNYSBvnC3+40zBSGHGeG7IHXbmP68lSTaTCdLnvjPibzXB6vDLDZ2f16fo9uOevl/jX+w8NVRdqKcxEticAybPItdnA9cgY9CvVbXcnVLqiGdgZNA/DtPJzSMtcPp+yp+zdvhZHG9sYbpJkcCPzFuPYH2UmjeyO+3GJpzJ8NE7RqwSO8u3XjzCd8uHdnM9lsbAHAjOVyogBAyO67mf0WaCUyNGoAOxy81axkyoiKAREQEREBERAREQFizkrvIcBdBywpFd2gphU28ZJHBmjmyP9jgfspF0ibLS8FwyJJWNx/wBgf2BWaZokjdE7HfBHJRGSCUU7ZHgSQuPEBO+oAt985SiNWYZUPOfz5O3Q7/dS2ujbSdxjWk7AAYGVHrXNlqJGtB1FjXbj1H2SPJj35hb+2ZSdZe6y3jpZWubSSNHiMrgc+pJWCka09qro4NG9PCNfXG+ym29mmSRoJ70rn/TS37lRotQ7Q3AtadJoo8EDYkF23qs879l8fC5888z5dAogL/jGPGzG93+KlZzE3Ge80eqi12Y2sa04OfYc1VKxRcN5BcqqRERAREQEREBERB0k5gLgbI8jVuuAc8juPJSI8/FdI1kTww41FxAP7rtFSxtdxZsSS7f2haAR6Klvl8kobg2lga3UIuI/WDyJw3H/AJd7KNT9pKmSQtMMbh1y7Cpltwnxa2x0bMp2RcVuBWknk6Fo93Z/cLDqGlmDsTupXwza6Kmmlc5ruEDhp55wgtcTRjiSny3G3sunHOcctwvXa3hrmvfncDTnr5/daZVXCawXjU+mqSyZroodMmoSvcc5I6YGSt4pqVtPG6MPcdTtWTz6fwUC52RlfLG91RMx0TXBmnGBnr6rHPLzxrhJ2dU1Be62tmZT0ksTnEkSPDSQ0+Q6bD59OZ5LZKphdFp31acZKiWqy09rEjo3yuc7YajjS3qBjzxueZViQ0gDG2ehVdcsny03ZYZZfWM0DtULD10hd1ipv8JpxjUAQPJZVLIREQEREBERAREQYpdnMx1XAyeZXabDQCfNYTM0DwuP0UiLdLTSXJo47f7Row2Rpw4LXans3caeZrrdJBI0czI7Tj6YK2r4nHhjI+acRriCYyf+Szy04Z3tjXDfswnJWO0CoFsphWM0TiMB7cjZSySFDqLjFTgula/A6taq6v7WW630zaiq4rIi8MB0cyfktJj8M7e1eZK4z5qnt3am0XNmqhqmVAzjuEEhSzdKflokz5aSCpQmFyjRzAyCE7lxwPl5rCa4vB4UEgH+p5wu9rj4kz6hxBx3RhKLTGMfJERVBERAREQEREBERAIBGHclV3TXQUzp6XXqzjh5yD9FaKPV7taz55UzyNbp+0Nya4CqtLpARziBB/QhWdPfqN+kSxz07iPDLEQrAM1DK6OpI3EEtBx5q3wAlpqnaN0b/R2V5/29hbcrtT0DABFSjWR0Lj/JbtU2imka9/DAfpIDmnBH1WrW6yileNUss7tsyTPLnH1J3K30c72s9l58K3s92PpxVVrJGFrHtimjc3YjIcHj02afqrtlBcaaqYygqnCJo8EnfHurq2gNlLQMZhA/r9VLgiBDnnmdlTPL7Jx7xq9zrLpSxcaQRRxBwHdbkHp1Wz9n5/ibXFIcasnVgY3XarpIKiAxTxNkYcEh3rldbOyOESwRgBrXagAs8r1aLJERUSIiICIiAiIgIiICi1JPEClKO/DycqYOIn5OFkJwsGMEELISrVDmR3cd6Fauypc7wuALhzK2R7tnDzBWnCqoII2PlrYGtGxOsHfy2W+ieWW1e0sn98dkjJi+4VqxumJqobRVQV9W+almZNFoADmHI3P8lsDz3WqmycvF8PDs4bfRV9C7RcS3o9p39FYO358sKrGW3WnA2Goj2WS66REVQREQEREBERAREQDyUR/VEVoDT3V2CIpqHGAc+i0z4WARwQiJvDbxHAY66uaIuj0/mstyF+GDGsuHaAtGB8SwADkMGVegzdERU3/6J1fq7HwhVVUcXCmI5iUe65RZVqu0RFQEREBERB//2Q=='
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
            <Button 
                color="primary" 
                variant="outlined" 
                sx={{ mt: 1, borderRadius: 20 }} 
                endIcon={<ChevronRightIcon />}
                   component={Link}
            to="/drprofile"
              >
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
  const navigate = useNavigate();

  const handleFindDoctor = () => {
    navigate('/showalldoctorsinHaridwar');
  };

  const handleViewProfile = () => {
    navigate('/drprofile');
  };

 
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
                          onClick={handleFindDoctor}
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
                    <Chip label="Find Doctors"   component={Link}
            to="/showalldoctors" size="small" sx={{ mt: 2 }} color="primary" />
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
        <Box sx={{ mt: 10 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
            Why Choose Online Consultation?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "24/7 Availability",
                description: "Connect with doctors anytime, anywhere",
                icon: <AccessibilityNewIcon sx={{ fontSize: 40 }} />
              },
              {
                title: "Expert Doctors",
                description: "Consult with experienced specialists",
                icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />
              },
              {
                title: "Affordable Prices",
                description: "Quality healthcare at reasonable rates",
                icon: <FavoriteIcon sx={{ fontSize: 40 }} />
              }
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'primary.main',
                        mb: 2
                      }}
                    >
                      {benefit.icon}
                    </Avatar>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Safety Message */}
        <Box 
          sx={{ 
            mt: 10, 
            p: 4, 
            borderRadius: 4, 
            bgcolor: 'primary.light',
            color: 'primary.contrastText'
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold" align="center">
            Your Health & Safety is Our Priority
          </Typography>
          <Typography variant="body1" align="center">
            All our doctors are verified professionals. Your personal information is 100% secure with us.
          </Typography>
         
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;