import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, CssBaseline, Container, MenuItem, Select, Typography, Snackbar } from '@mui/material';
import { BASE_URL3 } from '../Constant';
import Navbar from '../component/Navbar';
import blood1 from '../assets/blood2.jpeg';
import Footer from '../component/Footer';
import { Toast } from '../utis/Toost';

function DonorRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        bloodGroup: '',
        contactInfo: '',
        messagess: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleCloseSnackbar = () => {
        setError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Call the backend API to add the donor
            await axios.post(`${BASE_URL3}/doner`, formData);
            // Display success toast
            Toast('Donor registration successful!', 'success');
            // Clear form data
            setFormData({
                name: '',
                bloodGroup: '',
                contactInfo: '',
                messagess: '',
            });
        } catch (error) {
            // Display error toast
            Toast('Error registering donor. Please try again.', 'error');
        }
    };

    return (
        <>
            <Navbar />
            <CssBaseline />
            <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
                <Box sx={{ width: '100%', marginBottom: 2 }}>
                    <img src={blood1} alt="Blood Donation" style={{ width: '100%', borderRadius: '4px' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
                        <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>Donor Registration</Typography>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <Select
                            label="Blood Group"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                            required
                            fullWidth
                            displayEmpty
                            margin="dense"
                        >
                            <MenuItem value="" disabled>Select Blood Group</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                        </Select>
                        <TextField
                            label="Contact Info"
                            name="contactInfo"
                            value={formData.contactInfo}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            multiline
                            required
                            rows={4}
                            label="Message"
                            name="messagess"
                            value={formData.messagess}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>Register Donor</Button>
                    </form>
                </Box>
                <Snackbar
                    open={!!error}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message={error}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    severity="error"
                />
                <Snackbar
                    open={success}
                    autoHideDuration={6000}
                    onClose={() => setSuccess(false)}
                    message="Donor registration successful!"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    severity="success"
                />
            </Container>
            <Footer />
        </>
    );
}

export default DonorRegistrationForm;
