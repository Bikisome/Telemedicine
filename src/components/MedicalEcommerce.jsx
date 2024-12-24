import React from 'react';
import {
  Box,
  Container,
  InputBase,
  IconButton,
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  alpha,
  styled
} from '@mui/material';
import {
  Search,
  ShoppingCart,
  LocalOffer,
  LocalHospital,
  Spa,
  Face,
  NavigateNext,
  Add
} from '@mui/icons-material';

// Custom styled components
const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 700,
  borderRadius: 50,
  padding: '4px 16px',
  marginRight: theme.spacing(2),
  boxShadow: 'none',
  border: `1px solid ${theme.palette.grey[300]}`,
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  }
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: 50,
  padding: '20px 10px',
  '& .MuiChip-icon': {
    fontSize: 20,
  },
  '&.MuiChip-clickable:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '& .MuiChip-icon': {
      color: 'white',
    }
  }
}));

const BrandCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: 16,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: `1px solid ${theme.palette.grey[200]}`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.main,
  }
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: 16,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  }
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  textTransform: 'none',
  padding: '8px 24px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}));

const MedicalEcommerce = () => {
  const brands = [
    { name: 'PATANJALI', color: '#4CAF50' },
    { name: 'HIMALAYA', color: '#2196F3' },
    { name: 'SUN', color: '#FF9800' },
    { name: 'ZYDUS', color: '#9C27B0' },
    { name: 'cipla', color: '#F44336' },
    { name: 'LUPIN', color: '#3F51B5' }
  ];

  const ProductItem = () => (
    <ProductCard elevation={1}>
      <Box sx={{ 
        height: 200, 
        bgcolor: alpha('#2196F3', 0.1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <LocalHospital sx={{ fontSize: 40, color: 'primary.main', opacity: 0.5 }} />
      </Box>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Product Name
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          ₹299
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          ALL THE PRODUCT DETAILS
        </Typography>
        <AddToCartButton
          fullWidth
          startIcon={<Add />}
        >
          Add to Cart
        </AddToCartButton>
      </CardContent>
    </ProductCard>
  );

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ py: 3, display: 'flex', alignItems: 'center' }}>
          <SearchWrapper>
            <Search sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder="Search for medicines..."
              fullWidth
              sx={{ ml: 1 }}
            />
          </SearchWrapper>
          <IconButton sx={{ color: 'primary.main' }}>
            <LocalOffer />
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <ShoppingCart />
          </IconButton>
        </Box>

        {/* Categories */}
        <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
          <CategoryChip
            icon={<LocalHospital />}
            label="Medicine"
            clickable
            color="primary"
          />
          <CategoryChip
            icon={<Spa />}
            label="Wellness"
            clickable
          />
          <CategoryChip
            icon={<Face />}
            label="Beauty"
            clickable
          />
        </Box>

        {/* Brands */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Shop from Top Brands
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, overflow: 'auto', pb: 2, position: 'relative' }}>
            {brands.map((brand, index) => (
              <BrandCard key={index} elevation={0}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600,
                    color: brand.color
                  }}
                >
                  {brand.name}
                </Typography>
              </BrandCard>
            ))}
            <IconButton
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'primary.main', color: 'white' }
              }}
            >
              <NavigateNext />
            </IconButton>
          </Box>
        </Box>

        {/* Deals Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Limited Time Deals
            </Typography>
            <Chip 
              label="Upto 40% OFF" 
              color="error" 
              size="small" 
              sx={{ ml: 2 }}
            />
          </Box>
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <ProductItem />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* New Arrivals */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            New Arrivals
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <ProductItem />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Beauty Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Beauty
            </Typography>
            <Chip 
              label="Upto 45% OFF" 
              color="error" 
              size="small" 
              sx={{ ml: 2 }}
            />
          </Box>
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <ProductItem />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MedicalEcommerce;