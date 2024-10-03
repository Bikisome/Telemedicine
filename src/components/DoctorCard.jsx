import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Avatar, 
  Chip, 
  Rating, 
  styled 
} from '@mui/material';
import { AccessTime, LocationOn, Star } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  transition: 'all 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const DoctorAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginRight: theme.spacing(2),
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: theme.shadows[3],
}));

const InfoChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  '& .MuiChip-icon': {
    color: theme.palette.text.secondary,
  },
}));

function DoctorCard({ doctor }) {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <DoctorAvatar 
            alt={doctor.name} 
            src={doctor.image || "/api/placeholder/96/96"} 
          />
          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              {doctor.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {doctor.specialty}
            </Typography>
            <Rating
              name="read-only"
              value={doctor.rating || 4.5}
              readOnly
              size="small"
              icon={<Star fontSize="inherit" />}
            />
          </Box>
        </Box>

        <Box mb={2}>
          <InfoChip
            icon={<AccessTime />}
            label={`${doctor.experience} years experience`}
            variant="outlined"
            size="small"
          />
          <InfoChip
            icon={<LocationOn />}
            label={doctor.location || "Main Hospital"}
            variant="outlined"
            size="small"
          />
        </Box>

        <Typography variant="body2" color="textSecondary" paragraph>
          {doctor.description || "Experienced doctor specializing in providing quality healthcare and personalized treatment plans for patients."}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Consultation Fee
            </Typography>
            <Typography variant="h6" color="secondary">
              ₹{doctor.consultationFee}
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ 
              borderRadius: 20,
              px: 3,
              py: 1,
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Consult Now
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default DoctorCard;