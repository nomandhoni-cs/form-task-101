import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SectorSelector from "../SectorSelector/SectorSelector";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "10%",
        }}
      >
        <TextField required fullWidth label="Full Name" id="fullName" />
        <SectorSelector />
      </Box>
    </>
  );
};

export default Home;
