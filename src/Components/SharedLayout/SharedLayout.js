import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

const SharedLayout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="lg">
      <Outlet />
      </Container>
    </React.Fragment>
  )
}

export default SharedLayout