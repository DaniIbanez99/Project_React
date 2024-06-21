import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Typography, Box, Button, Grid, Paper } from '@mui/material';

const Detalles_medicamentos = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const drug = location.state ? location.state.drug : null;

  if (!drug) {
    return (
      <Typography variant="body1" color="text.secondary">
        No details found for this medication.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 5, px: 3, p: 1 }}>
      <Typography  variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', color: '#020a0d', fontWeight: 'bold' }}>
        Medication Details
      </Typography>
      <Button variant="contained" onClick={() => navigate(-1)} sx={{ mb: 2, backgroundColor: '#020a0d', '&:hover': { backgroundColor: '#1464c4' } }}>
        Return
      </Button>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: '20px', boxShadow: '1px 2px 2px rgb(0,0,0)' }}>
        <Typography variant="h6" component="h3" gutterBottom sx={{ textAlign: 'center', mb: 3, color: '#020a0d', fontWeight: 'bold' }}>
          Main Information
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ mt: 2, color: '#333' }}>
              <strong>Tradename:</strong> {drug.openfda.brand_name ? drug.openfda.brand_name[0] : 'Name not available'}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 2, color: '#333' }}>
              <strong>Generic name:</strong> {drug.openfda.generic_name ? drug.openfda.generic_name[0] : 'Name not available'}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 2, color: '#333' }}>
              <strong>Maker:</strong> {drug.openfda.manufacturer_name ? drug.openfda.manufacturer_name[0] : 'Manufacturer not available'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ mt: 3, color: '#333' }}>
              <strong>Active Substance:</strong> {drug.openfda.substance_name ? drug.openfda.substance_name[0] : 'Substance not available'}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 5, color: '#333' }}>
              <strong>Pharmaceutical form:</strong> {drug.openfda.product_type ? drug.openfda.product_type[0] : 'Form not available'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {drug.description && (
        <Paper elevation={3} sx={{ p: 5, borderRadius: '20px', boxShadow: '1px 2px 3px rgb(0,0,0)'}}>
          <Typography variant="h6" component="h3" gutterBottom sx={{ textAlign: 'center', mb: 3, color: '#020a0d', fontWeight: 'bold' }}>
            Description
          </Typography>
          <Typography variant="body1" paragraph sx={{color: '#333' }}>
            {drug.description}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Detalles_medicamentos;
