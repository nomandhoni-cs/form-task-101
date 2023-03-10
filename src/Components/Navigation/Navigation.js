import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            Form App
          </Typography>
          <Button
            sx={{
              marginRight: "1rem",
              border: "1px solid #fff",
              "&:hover": {
                border: "1px solid #fff",
                backgroundColor: "#fff",
                color: "#1976d2",
              },
              padding: "0.5rem 1rem",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
            color="inherit"
            component={Link}
            startIcon={<HomeRoundedIcon />}
            to="/"
            >
            Home
          </Button>
          <Button
            sx={{
              marginRight: "1rem",
              border: "1px solid #1976d2",
              backgroundColor: "#fff",
              color: "#1976d2",
              padding: "0.5rem 1rem",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": {
                border: "1px solid #fff",
                backgroundColor: "#1976d2",
                color: "#fff",
              },}}
              
            color="inherit"
            component={Link}
            startIcon={<PeopleRoundedIcon />}
            to="/users"
          >
            users
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
