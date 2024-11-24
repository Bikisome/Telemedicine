import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Container, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Avatar,
  InputAdornment,
  Chip,
  Fade,
  Zoom,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import ShowAllDrs from './ShowAllDrs';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(3),
  boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(3),
    transition: 'all 0.3s ease-in-out',
    '& fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-2px)',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'scale(1.02)',
  },
}));

const AvailabilityDot = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  display: 'inline-block',
  marginRight: theme.spacing(1),
}));

const SpecialtyChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: theme.spacing(2),
  fontWeight: 'bold',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
}));

const SpecialtiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const specialties = [
    { name: 'Gynecologist', availableDoctors: '500+ available Doctors', color: '#FF69B4' },
    { name: 'Cardiologist', availableDoctors: '300+ available Doctors', color: '#FF6347' },
    { name: 'Dermatologist', availableDoctors: '400+ available Doctors', color: '#20B2AA' },
    { name: 'Pediatrician', availableDoctors: '600+ available Doctors', color: '#4169E1' },
    { name: 'Neurologist', availableDoctors: '200+ available Doctors', color: '#9932CC' },
    { name: 'Orthopedist', availableDoctors: '350+ available Doctors', color: '#228B22' },
    { name: 'Psychiatrist', availableDoctors: '250+ available Doctors', color: '#DAA520' },
  ];

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const handleBack = () => {
    setSelectedSpecialty(null);
  };

  if (selectedSpecialty) {
    return <ShowAllDrs specialty={selectedSpecialty} onBack={handleBack} />;
  }

  return (
    <Box sx={{ bgcolor: '#EBE5FC', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Fade in={true} timeout={1000}>
          <StyledPaper elevation={0}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
              Find Your Specialist
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555', mb: 4 }}>
              Search for doctors or specialties, or choose from the list below
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Type symptoms or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mr: 2 }}
              />
              <StyledButton
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
              >
                Search
              </StyledButton>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {specialties.map((specialty, index) => (
                <SpecialtyChip
                  key={index}
                  label={specialty.name}
                  onClick={() => setSearchTerm(specialty.name)}
                  sx={{ backgroundColor: specialty.color, color: 'white' }}
                />
              ))}
            </Box>
          </StyledPaper>
        </Fade>

        <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <List>
            {filteredSpecialties.map((specialty, index) => (
              <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                <StyledListItem
                  key={index}
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSpecialtyClick(specialty)}
                  sx={{ cursor: 'pointer' }}
                >
                  <Avatar sx={{ bgcolor: specialty.color, mr: 2 }}>
                    <LocalHospitalIcon />
                  </Avatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {specialty.name}
                      </Typography>
                    }
                    secondary={
                      <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                        <AvailabilityDot />
                        <Typography variant="body2" color="text.secondary">
                          {specialty.availableDoctors}
                        </Typography>
                      </Box>
                    }
                  />
                  <ChevronRightIcon color="action"/>
                </StyledListItem>
              </Zoom>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default SpecialtiesPage;