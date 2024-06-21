import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField label="Search medications" variant="outlined" fullWidth value={query} onChange={(e) => setQuery(e.target.value)}/>
      <Button variant="contained" type="submit" sx={{ml: 2, background: '#020a0d' }} >
        search
      </Button>
    </Box>
  );
};

export default SearchBar;
