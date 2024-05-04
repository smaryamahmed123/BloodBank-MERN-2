import React, { useState } from 'react';
import { Box, Container, CssBaseline, Grid, Typography, Paper, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Navbar from '../../component/Navbar'; // Import your Navbar component
import Footer from '../../component/Footer'; // Import your Footer component
import { Link } from 'react-router-dom';
import CustomButton from '../../component/Button';
import Img from '../../assets/react.svg';
import FeaturedItemsSection from '../BloodDonationCamps';

// Sample image URLs for featured items
const sampleImage1 = Img;
const sampleImage2 = Img;
const sampleImage3 = Img;

// Home page component
function Home() {
  const [showFullText, setShowFullText] = useState(false);

  // Handler for toggling the visibility of full text
  const handleToggleText = () => {
      setShowFullText(!showFullText);
  }

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ marginTop: '100px' }}>
          {/* Welcome message */}
          <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
            Welcome to Our Website
          </Typography>

          <Grid container spacing={3}>
            {/* Featured Items Section */}
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Featured Items
              </Typography>
              <Grid container spacing={3}>
              
             < FeaturedItemsSection/>
                
               
              </Grid>
            </Grid>
          </Grid>

          {/* Our Services Section */}
          <Grid item xs={12} sx={{ marginTop: 4 }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Our Services
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  // Limit the text to a certain number of lines and show ellipsis if overflows
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitLineClamp: showFullText ? 'unset' : 3, // Adjust the number of lines as needed
                }}
              >
                Describe the services you offer here. You can add more details about the benefits and features of your services.
                {/* Rest of your content here */}
              </Typography>
              {/* CustomButton to toggle the visibility of full text */}
              {!showFullText && (
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: 'pointer', marginBottom: 2 }}
                  onClick={handleToggleText}
                >
                  Show more...
                </Typography>
              )}
              {showFullText && (
                <>
                  <Typography variant='body1'>
                    {/* Your expanded text here */}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ cursor: 'pointer', marginBottom: 2 }}
                    onClick={handleToggleText}
                  >
                    Show less
                  </Typography>
                </>
              )}
              <CustomButton
                variant="contained"
                // color="inherit"
                component={Link}
                to="/services"
                sx={{ marginTop: 2 }}
                text="See more"
              />
            </Paper>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sx={{ marginTop: 4 }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                We'd love to hear from you! Whether you have a question about our services,
                need support, or just want to say hello, feel free to reach out.
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Address:</strong> 1234 Street Name, City, State, ZIP
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Phone:</strong> +1 (123) 456-7890
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Email:</strong> contact@yourcompany.com
              </Typography>
              <Grid item xs={12} md={6}>
                {/* CustomButton to navigate to the contact page */}
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  If you have any specific inquiries, visit our contact page.
                </Typography>
                <CustomButton
                  variant="contained"
                  // color="inherit"
                  component={Link}
                  to="/contact"
                  sx={{ marginTop: 2 }}
                  text=" See more"
                />
              </Grid>
            </Paper>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
