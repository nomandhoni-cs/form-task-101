import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { selectors } from "../../SeletorsData";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { Button, FormGroup, InputLabel } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const Form = ({
  inputs,
  handleChange,
  handleFormSubmit,
  successMessage,
  isFormSubmitted,
}) => {
  return (
    <>
      <Box
        sx={{
          width: "96%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "7%",
          border: "2px solid #1976d2",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#1976d2", marginTop: "-0.1rem" }}>User Form</h2>
        <form style={{ width: "100%" }} action="" onSubmit={handleFormSubmit}>
          <FormControl fullWidth>
            <TextField
              required
              name="name"
              value={inputs.name}
              onChange={handleChange}
              type="text"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <br />
            <TextField
              required
              name="email"
              value={inputs.email}
              onChange={handleChange}
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <br />
            <FormControl>
              <InputLabel>Sectors</InputLabel>
              <Select
                required
                name="sector"
                label="Sectors"
                displayEmpty
                value={inputs.sector}
                onChange={handleChange}
              >
                {selectors.map((selector) => (
                  <MenuItem
                    sx={{
                      borderRadius: "10px",
                      ":hover": { backgroundColor: "#1976d2", color: "#fff" },
                      marginLeft: "2%",
                      marginRight: "2%",
                    }}
                    key={selector.id}
                    value={selector.value}
                    name={selector.text}
                  >
                    {selector.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormHelperText sx={{ marginBottom: "7px" }} required>
              Select a Sector*
            </FormHelperText>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inputs.isAgreed}
                    required
                    name="isAgreed"
                    onChange={handleChange}
                  />
                }
                label="Agree to terms and Conditions*"
              />
            </FormGroup>
            <Button
              sx={{
                "&:hover": {
                  border: "2px solid #1976d2",
                  backgroundColor: "#fff",
                  color: "#1976d2",
                },
                padding: "0.5rem 1rem",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
              type="submit"
              variant="contained"
              endIcon={<SendRoundedIcon />}
            >
              Submit
            </Button>
          </FormControl>
        </form>
        {isFormSubmitted ? successMessage() : null}
      </Box>
    </>
  );
};

export default Form;
