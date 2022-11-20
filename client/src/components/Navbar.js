import * as React from 'react';
import "../App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
        <Box sx={{ flexGrow: 3 }}>
              <Link href="/dashboard" variant="h6" color="white" underline="none" sx={{ margin: 1 }}>
                Dashboard
              </Link>
              <Link href="/mentorship" variant="h6" color="white" underline="none" sx={{ margin: 1 }}>
                Mentorship
              </Link>
              <Link href="/resources" variant="h6" color="white" underline="none" sx={{ margin: 1 }}>
                Resources
              </Link>
          </Box>
          <Box >
            <Link href="/signin" color="white" underline="none">
              <Button color="inherit">Login</Button>
            </Link> 
          </Box>      
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default Navbar;