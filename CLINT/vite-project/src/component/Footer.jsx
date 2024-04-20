import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', padding: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Information */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Our Company
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                            Description of your company or mission goes here.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beatae dicta ipsum molestias quos ab. Quisquam eos unde
                            rem incidunt. Doloribus cum corporis et numquam mollitia
                            distinctio modi iure assumenda ad.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Quick Links
                        </Typography>
                        <Link href="/" color="inherit" display="block" sx={{ marginTop: 1 }}>
                            Home
                        </Link>
                        <Link href="/aboutus" color="inherit" display="block" sx={{ marginTop: 1 }}>
                            About Us
                        </Link>
                        <Link href="/services" color="inherit" display="block" sx={{ marginTop: 1 }}>
                            Services
                        </Link>
                        <Link href="/contact" color="inherit" display="block" sx={{ marginTop: 1 }}>
                            Contact
                        </Link>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                            Address: 1234 Street Name, City, State, ZIP
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                            Phone: +1 (123) 456-7890
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                            Email: contact@yourcompany.com
                        </Typography>
                    </Grid>
                </Grid>

                {/* Footer Bottom */}
                <Box sx={{ marginTop: 3, textAlign: 'center' }}>
                    <Typography variant="body2" color="inherit">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
