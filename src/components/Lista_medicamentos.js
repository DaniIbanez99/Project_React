import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Lista_medicamentos = ({ drugs }) => {
  const navigate = useNavigate();

  const handleDrugClick = (drug, index) => {
    navigate(`/drug/${index}`, { state: { drug } });
  };

  return (
    <Box sx={{ maxHeight: '700px', overflowY: 'auto','&::-webkit-scrollbar': { width: '10px'}, '&::-webkit-scrollbar-thumb': { backgroundColor: '#020a0d', borderRadius: '10px' }, '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#1464c4' }}}>
      {drugs.length > 0 ? (
        <List>
          {drugs.map((drug, index) => (
            <ListItem key={index} divider button onClick={() => handleDrugClick(drug, index)}>
              <ListItemText
                primary={ drug.openfda && drug.openfda.brand_name ? drug.openfda.brand_name[0] : 'Nombre no disponible'}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                    Generic name: {drug.openfda && drug.openfda.generic_name ? drug.openfda.generic_name[0] : 'Nombre no disponible'}
                    </Typography>
                    <br />
                    Maker: {drug.openfda && drug.openfda.manufacturer_name ? drug.openfda.manufacturer_name[0] : 'Fabricante no disponible'}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No results found
        </Typography>
      )}
    </Box>
  );
};

export default Lista_medicamentos;
