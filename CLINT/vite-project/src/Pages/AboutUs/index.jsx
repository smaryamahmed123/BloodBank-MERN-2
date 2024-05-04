// import React from 'react'
// import Navbar from '../../component/Navbar'
// import { Box, Button, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material'
// import Footer from '../../component/Footer'
// import { Link } from 'react-router-dom'

// function AboutUs() {
//   return (
//     <>
//       <CssBaseline />
//       <Navbar />
//       <Container>
//         <Box sx={{ marginTop: '100px' }}>
//           {/* Introduction */}
//           <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
//             About Us
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 4 }}>
//             Welcome to our Blood Bank! We are committed to saving lives by providing safe, reliable, and readily available blood supplies to hospitals and healthcare facilities in our community. Our work directly supports emergency care, surgeries, and other medical treatments, and we appreciate your interest in learning more about our mission and values.
//           </Typography>

//           {/* Mission, Vision, Values */}
//           <Grid container spacing={4}>
//             {/* Mission */}
//             {/* <Grid item xs={12} md={4}>
//                         <Paper elevation={3} sx={{ padding: 3 }}>
//                             <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
//                                 Our Mission
//                             </Typography>
//                             <Typography variant="body2">
//                                 Our mission is to ensure a steady and safe supply of blood for medical emergencies, surgeries, and other healthcare needs. We strive to educate the public on the importance of blood donation and encourage voluntary donations.
//                             </Typography>
//                         </Paper>
//                     </Grid> */}

//             <Grid item xs={12} md={4}>
//               <Paper elevation={3} sx={{ padding: 3 }}>
//                 <CardMedia
//                   component="img"
//                   height="180"
//                   image="path/to/your/mission_image.jpg"
//                   alt="Mission"
//                 />
//                 <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
//                   Our Mission
//                 </Typography>
//                 <Typography variant="body2">
//                   Our mission is to ensure a steady and safe supply of blood for medical emergencies, surgeries, and other healthcare needs. We strive to educate the public on the importance of blood donation and encourage voluntary donations.
//                 </Typography>
//               </Paper>
//             </Grid>


//             {/* Vision */}
//             <Grid item xs={12} md={4}>
//               <Paper elevation={3} sx={{ padding: 3 }}>
//                 <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
//                   Our Vision
//                 </Typography>
//                 <Typography variant="body2">
//                   We envision a community where no one suffers due to the lack of available blood for medical needs. By fostering collaboration and compassion, we work towards a future where safe blood is accessible to all.
//                 </Typography>
//               </Paper>
//             </Grid>

//             {/* Values */}
//             <Grid item xs={12} md={4}>
//               <Paper elevation={3} sx={{ padding: 3 }}>
//                 <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
//                   Our Values
//                 </Typography>
//                 <Typography variant="body2">
//                   We prioritize compassion, integrity, and excellence in our services. Safety is our utmost priority for both donors and recipients, and we aim to provide the highest quality of care in all that we do.
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>

//           {/* How to Help */}
//           <Box sx={{ marginY: 4 }}>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//               How You Can Help
//             </Typography>
//             <Typography variant="body1" sx={{ marginBottom: 2 }}>
//               Your support is essential! Here are some ways you can get involved:
//             </Typography>

//             <Grid container spacing={2}>
//               {/* Donate Blood */}
//               <Grid item xs={12} md={6}>
//                 <Paper elevation={3} sx={{ padding: 2 }}>
//                   <Typography variant="h6" sx={{ color: 'primary.main' }}>
//                     Donate Blood
//                   </Typography>
//                   <Typography variant="body2" sx={{ marginBottom: 2 }}>
//                     Donating blood is a simple and impactful way to save lives. Join our community of donors to make a difference today.
//                   </Typography>
//                   <Button  component={Link} to="/register"  variant="contained" color="primary">
//                     Learn More
//                   </Button>
//                 </Paper>
//               </Grid>

//               {/* Volunteer */}
//               <Grid item xs={12} md={6}>
//                 <Paper elevation={3} sx={{ padding: 2 }}>
//                   <Typography variant="h6" sx={{ color: 'primary.main' }}>
//                     Volunteer
//                   </Typography>
//                   <Typography variant="body2" sx={{ marginBottom: 2 }}>
//                     Volunteering your time and skills helps us achieve our goals. Explore opportunities to support our efforts.
//                   </Typography>
//                   <Button variant="contained" color="primary">
//                     Get Involved
//                   </Button>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//       <Footer></Footer>
//     </>
//   )
// }

// export default AboutUs







import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { Box, Button, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import missionImage from './mission_image.jpg'; // Import your mission image
// import visionImage from './vision_image.jpg'; // Import your vision image
// import valuesImage from './values_image.jpg'; // Import your values image

function AboutUs() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box sx={{ marginTop: '100px' }}>
          {/* Introduction */}
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Welcome to our Blood Bank! We are committed to saving lives by providing safe, reliable, and readily available blood supplies to hospitals and healthcare facilities in our community. Our work directly supports emergency care, surgeries, and other medical treatments, and we appreciate your interest in learning more about our mission and values.
          </Typography>

          {/* Mission, Vision, Values */}
          <Grid container spacing={4}>
            {/* Mission */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <CardMedia
                  component="img"
                  height="180"
                  // image={missionImage}
                  alt="Mission"
                  sx={{ marginBottom: 2 }}
                />
                <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
                  Our Mission
                </Typography>
                <Typography variant="body2">
                  Our mission is to ensure a steady and safe supply of blood for medical emergencies, surgeries, and other healthcare needs. We strive to educate the public on the importance of blood donation and encourage voluntary donations.
                </Typography>
              </Paper>
            </Grid>

            {/* Vision */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <CardMedia
                  component="img"
                  height="180"
                  // image={visionImage}
                  alt="Vision"
                  sx={{ marginBottom: 2 }}
                />
                <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
                  Our Vision
                </Typography>
                <Typography variant="body2">
                  We envision a community where no one suffers due to the lack of available blood for medical needs. By fostering collaboration and compassion, we work towards a future where safe blood is accessible to all.
                </Typography>
              </Paper>
            </Grid>

            {/* Values */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <CardMedia
                  component="img"
                  height="180"
                  // image={valuesImage}
                  alt="Values"
                  sx={{ marginBottom: 2 }}
                />
                <Typography variant="h5" sx={{ marginBottom: 2, color: 'primary.main' }}>
                  Our Values
                </Typography>
                <Typography variant="body2">
                  We prioritize compassion, integrity, and excellence in our services. Safety is our utmost priority for both donors and recipients, and we aim to provide the highest quality of care in all that we do.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* How to Help */}
          <Box sx={{ marginY: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              How You Can Help
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Your support is essential! Here are some ways you can get involved:
            </Typography>

            <Grid container spacing={2}>
              {/* Donate Blood */}
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    Donate Blood
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    Donating blood is a simple and impactful way to save lives. Join our community of donors to make a difference today.
                  </Typography>
                  <Button component={Link} to="/register" variant="contained" color="primary">
                    Learn More
                  </Button>
                </Paper>
              </Grid>

              {/* Volunteer */}
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    Volunteer
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    Volunteering your time and skills helps us achieve our goals. Explore opportunities to support our efforts.
                  </Typography>
                  <Button variant="contained" color="primary">
                    Get Involved
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
