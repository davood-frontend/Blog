import React from 'react';
import { Box, Typography } from '@mui/material';
import BlogsList from './components/BlogsList';
import Header from './components/Header';
const page = () => {
  return (
    <Box>
      <Header />
      <BlogsList />
    </Box>
  );
};

export default page;