import React, { useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert
} from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  AccessTime,
  ShoppingCart,
  CalendarMonth,
  Security,
  CheckCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#2196F3" },
    secondary: { main: "#FF4081" },
    background: { default: "#F0F4F8" },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
});

const ConsultationBooking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    receiveUpdates: true
  });
  const [error, setError] = useState("");

  const handleNext = () => {
    if (activeStep === 0 && (!selectedDate || !selectedTime)) {
      setError("Please select both date and time");
      return;
    }
    setError("");
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setError("");
    setActiveStep((prev) => prev - 1);
  };

  const handleConfirmAndPay = () => {
    if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone) {
      setError("Please fill in all required fields");
      return;
    }
    setError("");
    setOpenConfirmation(true);
  };

  const handleProceedToPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOpenConfirmation(false);
      setShowSuccess(true);
    }, 2000);
  };

  const DateSelection = () => {
    const dates = [
      { day: "Mon", date: "16 Sep" },
      { day: "Tue", date: "17 Sep" },
      { day: "Wed", date: "18 Sep" },
      { day: "Thu", date: "19 Sep" },
      { day: "Fri", date: "20 Sep" },
    ];

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          When should we meet?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <IconButton size="small">
            <ArrowBack />
          </IconButton>
          <Box sx={{ display: "flex", gap: 2 }}>
            {dates.map((item, index) => (
              <Paper
                key={index}
                elevation={selectedDate === item.date ? 3 : 1}
                sx={{
                  p: 2,
                  textAlign: "center",
                  cursor: "pointer",
                  bgcolor: selectedDate === item.date ? "primary.main" : "background.paper",
                  color: selectedDate === item.date ? "white" : "text.primary",
                  "&:hover": {
                    bgcolor: "primary.light",
                    color: "white",
                  },
                }}
                onClick={() => setSelectedDate(item.date)}
              >
                <Typography variant="body2">{item.day}</Typography>
                <Typography variant="body1" fontWeight="bold">
                  {item.date}
                </Typography>
              </Paper>
            ))}
          </Box>
          <IconButton size="small">
            <ArrowForward />
          </IconButton>
        </Box>
        
        <Typography variant="h6" gutterBottom>
          Select time of day
        </Typography>
        <Grid container spacing={2}>
          {["11:30 am", "01:00 pm", "04:30 pm"].map((time, index) => (
            <Grid item xs={4} key={index}>
              <Chip
                icon={<AccessTime />}
                label={time}
                onClick={() => setSelectedTime(time)}
                color={selectedTime === time ? "primary" : "default"}
                variant={selectedTime === time ? "filled" : "outlined"}
                sx={{ width: "100%", justifyContent: "flex-start", py: 3 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const BookingDetails = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Booking Details
      </Typography>
      <Box sx={{ bgcolor: "grey.100", p: 2, borderRadius: 2, mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarMonth color="primary" />
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {selectedDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedTime}
            </Typography>
          </Box>
        </Box>
        <Button size="small" sx={{ mt: 1 }} onClick={handleBack}>
          Change
        </Button>
      </Box>

      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
        value={bookingDetails.name}
        onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
        required
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        value={bookingDetails.email}
        onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
        required
      />
      <TextField
        fullWidth
        label="Phone Number"
        variant="outlined"
        margin="normal"
        value={bookingDetails.phone}
        onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
        InputProps={{
          startAdornment: <Typography sx={{ mr: 1 }}>+91</Typography>,
        }}
        required
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={bookingDetails.receiveUpdates}
            onChange={(e) => setBookingDetails({ ...bookingDetails, receiveUpdates: e.target.checked })}
          />
        }
        label="Receive booking details on phone"
        sx={{ mt: 2, mb: 3 }}
      />

      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Box sx={{ bgcolor: "grey.50", p: 3, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body1">1 x 1:1 Consultation</Typography>
          <Typography variant="body1">₹ 1199.0</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="body1">Other charges</Typography>
          <Typography variant="body1">₹ 0.0</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2, borderTop: 1, borderColor: "grey.200" }}>
          <Typography variant="body1" fontWeight="bold">
            Total
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            ₹ 1199.0
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
        <Security color="action" />
        <Typography variant="body2" color="text.secondary">
          Payments are 100% secure & encrypted
        </Typography>
      </Box>
    </Box>
  );

  const ConfirmationDialog = () => (
    <Dialog 
      open={openConfirmation} 
      onClose={() => setOpenConfirmation(false)}
      PaperProps={{
        sx: {
          borderRadius: 3,
          width: "400px",
          p: 2
        }
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Confirm Booking Details
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <ShoppingCart sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            1:1 Consultation Session
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
            <CalendarMonth color="action" />
            <Typography color="text.secondary">
              {selectedDate} at {selectedTime}
            </Typography>
          </Box>
          <Typography variant="h5" color="primary.main" fontWeight="bold" sx={{ mt: 2 }}>
            ₹1199.0
          </Typography>
        </Box>

        <Box sx={{ bgcolor: "grey.50", p: 2, borderRadius: 2 }}>
          <Typography variant="body2" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Security fontSize="small" />
            Payment will be processed securely
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Booking confirmation will be sent to {bookingDetails.email}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button 
          onClick={() => setOpenConfirmation(false)}
          variant="outlined"
          fullWidth
          sx={{ mr: 1 }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleProceedToPayment}
          variant="contained"
          fullWidth
          disabled={isProcessing}
          sx={{ bgcolor: "black", "&:hover": { bgcolor: "grey.900" } }}
        >
          {isProcessing ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Proceed to Payment"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );

  const SuccessDialog = () => (
    <Dialog 
      open={showSuccess} 
      PaperProps={{ sx: { borderRadius: 3, width: "400px", p: 2 } }}
    >
      <DialogContent>
        <Box sx={{ textAlign: "center", py: 2 }}>
          <CheckCircle sx={{ fontSize: 64, color: "success.main", mb: 2 }} />
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Booking Confirmed!
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Your consultation is scheduled for
          </Typography>
          <Typography variant="h6" color="primary.main" gutterBottom>
            {selectedDate} at {selectedTime}
          </Typography>
          <Box sx={{ bgcolor: "grey.50", p: 2, borderRadius: 2, mt: 3, mb: 2 }}>
            <Typography variant="body2" gutterBottom>
              Booking ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </Typography>
            <Typography variant="body2">
              Confirmation sent to {bookingDetails.email}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          component={Link}
          to="/"
          sx={{ bgcolor: "black", "&:hover": { bgcolor: "grey.900" } }}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Button
              component={Link}
              to="/"
              startIcon={<ArrowBack />}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Typography variant="h5" component="h1" fontWeight="bold">
              1:1 Consultation
            </Typography>
            <Typography variant="body2" sx={{ ml: "auto" }}>
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

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {activeStep === 0 ? <DateSelection /> : <BookingDetails />}

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            {activeStep === 1 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
            )}
            <Button
             variant="contained"
             onClick={activeStep === 0 ? handleNext : handleConfirmAndPay}
             sx={{
               bgcolor: "black",
               color: "white",
               "&:hover": { bgcolor: "grey.900" },
             }}
           >
             {activeStep === 0 ? "Confirm details" : "Confirm & pay"}
           </Button>
         </Box>

         {activeStep === 1 && (
           <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
             <Typography variant="body2" component={Link} to="/terms" sx={{ color: 'text.secondary', textDecoration: 'none' }}>
               Terms
             </Typography>
             <Typography variant="body2" component={Link} to="/privacy" sx={{ color: 'text.secondary', textDecoration: 'none' }}>
               Privacy
             </Typography>
           </Box>
         )}

         <ConfirmationDialog />
         <SuccessDialog />
       </Paper>
     </Container>
   </ThemeProvider>
 );
};

export default ConsultationBooking;