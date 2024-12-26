import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  TextField,
  MenuItem,
  Button,
  Chip,
  Rating,
  AppBar,
  Toolbar,
  InputAdornment,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import { Search, Check } from "lucide-react";

const hospitals = [
  {
    name: "Apollo Hospitals",
    location: "Delhi NCR",
    rating: 4.8,
    specialties: ["Cardiology", "Neurology", "Oncology"],
    image: "",
    verified: true,
    doctors: 450,
    link: "https://www.apollopharmacy.in/?srsltid=AfmBOophrbORP3hhxHV7rK1bf-GZNE4zT1QDm0_OBRyZyiF6syhCyRge",
  },
  {
    name: "Fortis Healthcare",
    location: "Mumbai",
    rating: 4.7,
    specialties: ["Orthopedics", "Pediatrics", "Surgery"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 380,
    link: "https://www.fortishealthcare.com/",
  },
  {
    name: "Max Healthcare",
    location: "Bangalore",
    rating: 4.6,
    specialties: ["Cardiology", "Gynecology", "Dermatology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 320,
    link: "https://www.maxhealthcare.in/",
  },
  {
    name: "Medanta Hospital",
    location: "Gurugram",
    rating: 4.9,
    specialties: ["Cardiology", "Neurosurgery", "Transplants"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 500,
    link: "https://www.medanta.org/",
  },
  {
    name: "AIIMS",
    location: "Delhi",
    rating: 4.7,
    specialties: ["General Medicine", "Surgery", "Research"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 800,
    link: "https://www.aiims.edu/index.php/en",
  },
  {
    name: "Manipal Hospitals",
    location: "Bangalore",
    rating: 4.5,
    specialties: ["Oncology", "Cardiology", "Neurology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 400,
    link: "https://www.manipalhospitals.com/",
  },
  {
    name: "Kokilaben Hospital",
    location: "Mumbai",
    rating: 4.6,
    specialties: ["Robotics Surgery", "Oncology", "Cardiology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 350,
    link: "https://www.kokilabenhospital.com/",
  },
  {
    name: "Narayana Health",
    location: "Bangalore",
    rating: 4.4,
    specialties: ["Cardiac Care", "Pediatrics", "Nephrology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 420,
    link: "https://www.narayanahealth.org/",
  },
  {
    name: "BLK Hospital",
    location: "Delhi",
    rating: 4.3,
    specialties: ["Orthopedics", "Gastroenterology", "Urology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 300,
    link: "https://www.blkmaxhospital.com/",
  },
  {
    name: "Hinduja Hospital",
    location: "Mumbai",
    rating: 4.7,
    specialties: ["Neurology", "Oncology", "Cardiology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 380,
    link: "https://www.hindujahospital.com/",
  },
  {
    name: "Artemis Hospital",
    location: "Gurugram",
    rating: 4.5,
    specialties: ["Joint Replacement", "Spine Surgery", "Cardiac Care"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 280,
    link: "https://www.artemishospitals.com/",
  },
  {
    name: "Ruby Hall Clinic",
    location: "Pune",
    rating: 4.4,
    specialties: ["Cardiology", "Neuroscience", "Oncology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 290,
    link: "https://rubyhall.com/",
  },
  {
    name: "Jaslok Hospital",
    location: "Mumbai",
    rating: 4.5,
    specialties: ["Nephrology", "Gastroenterology", "Endocrinology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 310,
    link: "https://www.jaslokhospital.net/",
  },
  {
    name: "Columbia Asia",
    location: "Bangalore",
    rating: 4.3,
    specialties: ["General Surgery", "Internal Medicine", "Pediatrics"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 250,
    link: "https://www.columbiaasia.com/",
  },
  {
    name: "Tata Memorial",
    location: "Mumbai",
    rating: 4.8,
    specialties: ["Cancer Care", "Research", "Nuclear Medicine"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 450,
    link: "https://tmc.gov.in/",
  },
  {
    name: "Sir Ganga Ram Hospital",
    location: "Delhi",
    rating: 4.6,
    specialties: ["Multi-Specialty", "Research", "Emergency Care"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 400,
    link: "https://sgrh.com/",
  },
  {
    name: "Christian Medical College",
    location: "Vellore",
    rating: 4.7,
    specialties: ["Research", "General Medicine", "Surgery"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 600,
    link: "https://www.cmch-vellore.edu/",
  },
  {
    name: "Lilavati Hospital",
    location: "Mumbai",
    rating: 4.5,
    specialties: ["Cardiology", "Neurosurgery", "Oncology"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 340,
    link: "https://lilavatihospital.com/",
  },
  {
    name: "Jupiter Hospital",
    location: "Thane",
    rating: 4.4,
    specialties: ["Transplants", "Cardiac Care", "Neuroscience"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 280,
    link: "https://www.jupiterhospital.com/",
  },
  {
    name: "Breach Candy Hospital",
    location: "Mumbai",
    rating: 4.6,
    specialties: ["General Medicine", "Surgery", "Critical Care"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 300,
    link: "https://www.breachcandyhospital.org/",
  },
  {
    name: "Asian Heart Institute",
    location: "Mumbai",
    rating: 4.8,
    specialties: ["Cardiac Care", "Cardiology", "Cardiac Surgery"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 200,
    link: "https://asianheartinstitute.org/",
  },
  {
    name: "Sankara Nethralaya",
    location: "Chennai",
    rating: 4.7,
    specialties: ["Ophthalmology", "Eye Care", "Eye Surgery"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 150,
    link: "https://www.sankaranethralaya.org/",
  },
  {
    name: "Global Hospitals",
    location: "Hyderabad",
    rating: 4.5,
    specialties: ["Multi-Specialty", "Transplants", "Critical Care"],
    image: "/api/placeholder/400/300",
    verified: true,
    doctors: 350,
    link: "https://www.gleneagleshospitals.co.in/",
  },
];

const HospitalDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const theme = useTheme();

  const locations = [
    ...new Set(hospitals.map((hospital) => hospital.location)),
  ];

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesLocation =
      !selectedLocation || hospital.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "primary.main", fontWeight: 600 }}
          >
            MedDirectory
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 6,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            color: "white",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Find Top Hospitals
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600 }}>
            Connect with India's leading healthcare institutions and experienced
            medical professionals
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search hospitals by name, specialty, or treatment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={20} color={theme.palette.text.secondary} />
                  </InputAdornment>
                ),
              }}
              sx={{
                bgcolor: "white",
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              label="Filter by Location"
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value="">All Locations</MenuItem>
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {filteredHospitals.map((hospital) => (
            <Grid item xs={12} sm={6} md={4} key={hospital.name}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                  },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {hospital.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "text.secondary",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        {hospital.location}
                      </Typography>
                    </Box>
                    {hospital.verified && (
                      <Chip
                        icon={<Check size={16} />}
                        label="Verified"
                        size="small"
                        color="success"
                        sx={{ fontSize: "0.75rem" }}
                      />
                    )}
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Rating
                        value={hospital.rating}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" color="text.secondary">
                        {hospital.rating}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "primary.main",
                        fontWeight: 500,
                      }}
                    >
                      {hospital.doctors} Expert Doctors
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{ mb: 1 }}
                    >
                      Key Specialties
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                      {hospital.specialties.map((specialty, index) => (
                        <Chip
                          key={index}
                          label={specialty}
                          size="small"
                          sx={{
                            bgcolor: "primary.50",
                            color: "primary.main",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    href={hospital.link}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: 1.5,
                      boxShadow: "none",
                      "&:hover": {
                        boxShadow: "none",
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    Visit Hospital Portal
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HospitalDirectory;
