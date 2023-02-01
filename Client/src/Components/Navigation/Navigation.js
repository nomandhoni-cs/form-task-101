import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
const Navigation = () => {
  console.log("Logged from Navigation");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500 }}>
            Form App
          </Typography>
          <Button sx={{marginRight: "1rem"}} color='inherit' component={Link} startIcon={<HomeRoundedIcon />}to="/">Home</Button>
          <Button sx={{marginRight: "1rem"}} color='inherit' component={Link} startIcon={<PeopleRoundedIcon />}to="/users">users</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
