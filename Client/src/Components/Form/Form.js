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
import SendRoundedIcon from '@mui/icons-material/SendRounded';
const Form = ({ inputs, handleChange, formSubmit, successMessage, isFormSubmitted }) => {
  return (
    <>
      <Box
        sx={{
          width: "80%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "7%",
          border: "1px solid #1976d2",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form style={{ width: "100%" }} action="" onSubmit={formSubmit}>
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
                    key={selector.id}
                    value={selector.value}
                    name={selector.text}
                  >
                    {selector.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormHelperText required>Select a Sector*</FormHelperText>
            <br />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox required name="isAgreed" onChange={handleChange} />
                }
                label="Agree to terms and Conditions*"
              />
            </FormGroup>
            <Button type="submit" variant="contained" endIcon={<SendRoundedIcon />}>
              Submit
            </Button>
          </FormControl>
        </form>
        {
            isFormSubmitted ? successMessage() : null
        }
      </Box>
    </>
  );
};

export default Form;
