import React, { useState } from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Grid,
  Chip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

const ConsultationBooking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const DateSelection = () => {
    const dates = [
      { day: 'Mon', date: '16 Sep' },
      { day: 'Tue', date: '17 Sep' },
      { day: 'Wed', date: '18 Sep' },
      { day: 'Thu', date: '19 Sep' },
      { day: 'Fri', date: '20 Sep' },
    ];

    return (
      <Box>
        <Typography variant="h6" gutterBottom>When should we meet?</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <IconButton size="small">
            <ArrowBackIcon />
          </IconButton>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {dates.map((item, index) => (
              <Paper
                key={index}
                elevation={selectedDate === item.date ? 3 : 1}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  bgcolor: selectedDate === item.date ? 'primary.main' : 'background.paper',
                  color: selectedDate === item.date ? 'white' : 'text.primary',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'white',
                  },
                }}
                onClick={() => handleDateSelect(item.date)}
              >
                <Typography variant="body2">{item.day}</Typography>
                <Typography variant="body1" fontWeight="bold">{item.date}</Typography>
              </Paper>
            ))}
          </Box>
          <IconButton size="small">
            <ArrowForwardIcon />
          </IconButton>
        </Box>
        <Typography variant="h6" gutterBottom>Select time of day</Typography>
        <Grid container spacing={2}>
          {['11:30 am', '01:00 pm', '04:30 pm'].map((time, index) => (
            <Grid item xs={4} key={index}>
              <Chip
                icon={<AccessTimeIcon />}
                label={time}
                onClick={() => handleTimeSelect(time)}
                color={selectedTime === time ? 'primary' : 'default'}
                variant={selectedTime === time ? 'filled' : 'outlined'}
                sx={{ width: '100%', justifyContent: 'flex-start', py: 3 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const BookingDetails = () => (
    <Box>
      <Typography variant="h6" gutterBottom>Booking Details</Typography>
      <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2, mb: 3 }}>
        <Typography variant="body1" fontWeight="bold">
          {selectedDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {selectedTime}
        </Typography>
        <Button size="small" sx={{ mt: 1 }} onClick={handleBack}>Change</Button>
      </Box>
      
      <TextField fullWidth label="Name" variant="outlined" margin="normal" />
      <TextField fullWidth label="Email" variant="outlined" margin="normal" />
      <TextField 
        fullWidth 
        label="Phone Number" 
        variant="outlined" 
        margin="normal"
        InputProps={{
          startAdornment: <Typography sx={{ mr: 1 }}>+91</Typography>,
        }}
      />
      
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Receive booking details on phone"
        sx={{ mt: 2, mb: 3 }}
      />
      
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1">1 x 1:1 Consultant</Typography>
        <Typography variant="body1">₹ 1199.0</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body1">Other</Typography>
        <Typography variant="body1">₹ 0.0</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="body1" fontWeight="bold">Total</Typography>
        <Typography variant="body1" fontWeight="bold">₹ 1199.0</Typography>
      </Box>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Payments are 100% secure & encrypted
      </Typography>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Button 
              component={Link} 
              to="/" 
              startIcon={<ArrowBackIcon />}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Typography variant="h5" component="h1" fontWeight="bold">
              1:1 Consultation
            </Typography>
            <Typography variant="body2" sx={{ ml: 'auto' }}>
              ★ 4.5/5
            </Typography>
          </Box>

          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            <Step>
              <StepLabel>Select Date & Time</StepLabel>
            </Step>
            <Step>
              <StepLabel>Confirm Details</StepLabel>
            </Step>
          </Stepper>

          {activeStep === 0 ? <DateSelection /> : <BookingDetails />}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            {activeStep === 1 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={activeStep === 0 ? handleNext : undefined}
              sx={{
                bgcolor: 'black', 
                color: 'white', 
                '&:hover': { bgcolor: 'grey.900' },
              }}
            >
              {activeStep === 0 ? 'Confirm details' : 'Confirm & pay'}
            </Button>
          </Box>

          {activeStep === 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="body2">Terms</Typography>
              <Typography variant="body2">Privacy</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ConsultationBooking;