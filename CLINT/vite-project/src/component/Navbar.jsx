import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Fade, Menu, MenuItem, Stack } from '@mui/material';
// import { CustomizedBadges } from './Icons';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { logout } from '../Store/slice/AuthSlice';
import Logo from '../assets/logo.jpg'
const drawerWidth = 240;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  const linkStyles = (path) => ({
    textDecoration: 'none',
    color: currentPath === path ? 'black' : 'lightsteelblue',
    fontWeight: 'inherit',
    fontSize: 20,
    fontFamily: 'fantasy',
    textShadow: currentPath === path ? '0px 0px 2px red' : 'none',
  });

  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const appBar = () => {
    return (
      <>
        <Link to="/" style={linkStyles('/')}>
          Home
        </Link>
        <Link to="/contact" style={linkStyles('/contact')}>
          Contact
        </Link>
        <Link to="/services" style={linkStyles('/services')}>
          Services
        </Link>
        <Link to="/aboutus" style={linkStyles('/aboutus')}>
          About Us
        </Link>

        {isAuthenticated ? (
          <>

            <Button
              id="fade-button"
              aria-controls={opens ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={opens ? 'true' : undefined}
              onClick={handleClick}
              style={linkStyles()}
            >
              Dashboard
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => { navigate("/profile") }}>Profile</MenuItem>
              <MenuItem onClick={() => { navigate("/") }}>My account</MenuItem>
              <MenuItem onClick={() => { navigate("/logout") }}>Logout</MenuItem>
            </Menu>

          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: 'none', color: 'lightsteelblue', fontWeight: 'inherit', fontSize: 20, fontFamily: 'fantasy' }}>
              Login
            </Link>
            {/* <Link to="/signup" style={{ textDecoration: 'none', color: 'lightsteelblue', fontWeight: 'inherit', fontSize: 20, fontFamily: 'fantasy' }}>
              Signup
            </Link> */}
          </>
        )}
      </>
    )
  }

  return (
    <Stack sx={{ display: 'flex' }}>
      <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'red' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Avatar
            src={Logo}
            // variant="square"
            sx={{
              marginRight: 2,
              objectFit: 'contain',
              width: 50, // Set width
              height: 50, // Set height
            }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              // Apply linkStyles() based on the current path
              ...linkStyles(currentPath),
            }}
          >
            Blood Bank App
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {!isMobile && (
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', paddingLeft: 5, }}>
              {appBar()}
            </Stack>
          )}
        </Toolbar>
      </MuiAppBar>
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {/* Drawer content here */}
          <Stack direction="column" spacing={2} sx={{ m: 10 }}>
            {appBar()}
          </Stack>
        </Drawer>
      )}
    </Stack>
  );
};

export default Navbar;

