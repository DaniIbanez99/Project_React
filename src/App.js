import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Lista_medicamentos from './components/Lista_medicamentos';
import Detalles_medicamentos from './pages/Detalles_medicamentos';


const App = () => {
  const [drugs, setDrugs] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query}"&limit=40`
      );

      
      const uniqueDrugs = filterUniqueDrugs(response.data.results);

      setDrugs(uniqueDrugs);
    } catch (error) {
      console.error('Error fetching data from OpenFDA', error);
      setDrugs([]);
    }
  };

  const filterUniqueDrugs = (results) => {
   
    const uniqueBrandNames = new Set();
    const uniqueDrugs = [];

    results.forEach((drug) => {
      const brandName = drug.openfda.brand_name ? drug.openfda.brand_name[0] : null;
      if (brandName && !uniqueBrandNames.has(brandName)) {
        uniqueBrandNames.add(brandName);
        uniqueDrugs.push(drug);
      }
    });

    return uniqueDrugs;
  };

  return (
    <Router>
    <Container maxWidth="md" sx={{ mt: 2, p: 1, backgroundColor: '#ebf4f7', borderRadius: 4, boxShadow: '10px 10px 30px rgba(66, 135, 245)' }}>
      <Routes>
        <Route path="/" element={<>
          <Typography variant="h4" component="h1" gutterBottom sx={{mt: 2, m: 2.5,  textAlign: 'center'}}>
            Medication Finder
          </Typography>
          <SearchBar onSearch={handleSearch}/>
          <Lista_medicamentos drugs={drugs} />
        </>} />
        <Route path="/drug/:id" element={<Detalles_medicamentos />} />
      </Routes>
    </Container>
  </Router>
  );
};

export default App;
