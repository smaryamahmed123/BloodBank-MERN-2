import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toast } from '../../utis/Toost';
import { BASE_URL1 } from '../../Constant';
// import Navbar from '../../component/Navbar';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFail } from '../../Store/slice/AuthSlice'
import 'react-toastify/dist/ReactToastify.css';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    dispatch(loginStart());

    try {
      event.preventDefault();
      console.log(email, password);

      const obj = {
        email,
        password,
      };
      const response = await axios.post(`${BASE_URL1}/login`, obj);
      const { user, token } = response.data;
      dispatch(loginSuccess({ user, token }));
      console.log("response", response);
      localStorage.setItem("data", JSON.stringify(response.data));
      navigate("/profile");
      // if (response.data.status) {
        // Display a success toast notification
        Toast(response.data.message, "success");
        
    
    } catch (error) {
        // Display an error toast notification for any caught error
        Toast(error.message, "error");
        dispatch(loginFail(error.message));
    }
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Navbar /> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}