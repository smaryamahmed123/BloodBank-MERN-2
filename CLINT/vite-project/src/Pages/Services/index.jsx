import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { Box, Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import FeaturedItemsSection from '../BloodDonationCamps';

function Services() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: '100px', marginBottom: '5rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '4rem', marginLeft: '4rem' }}>
          Our Services
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <FeaturedItemsSection />
          {/* Add more service sections as needed */}
        </Grid>

        {/* Call-to-action section */}
        <Box sx={{ marginTop: '6rem', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
            Ready to get started or have any questions? Reach out to us today!
          </Typography>
          <Button variant="contained" color="primary" href="/contact">
            Contact Us
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Services;
