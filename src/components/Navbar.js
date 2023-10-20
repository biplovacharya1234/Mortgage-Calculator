import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
  function Navbar() {
    return (
      <>
        <AppBar position="static">
          <Container maxwidth ="xl" >
            <Toolbar>
              <Typography variant="h5" component="div">
                Mortgage Calculator
              </Typography>
            </Toolbar>
          </Container>

        </AppBar>
      </>
    )
  }

export default Navbar
