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
import { Button, FormGroup} from "@mui/material";
const Home = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    sector: "",
    isAgreed: false,
  });

  const handleChange = (event) => {
// handle change for all inputs and add sector name to inputs
    const { name, value, checked } = event.target;
    if (name === "isAgreed") {
      setInputs((prev) => ({ ...prev, [name]: checked }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }

    console.log(inputs);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", inputs);
  };
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
          border: "1px solid purple",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form style={{width: "100%"}} action="" onSubmit={formSubmit}>
        <FormControl fullWidth>
          <TextField
            required
            name="name"
            value={inputs.name}
            onChange={handleChange}
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
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <br />
          <Select
            required
            name="sector"
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
          <FormHelperText required>Select a Sector</FormHelperText>
          <br />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required name="isAgreed" onChange={handleChange} />}
              label="Agree to terms and Conditions"
            />
          </FormGroup>
          <Button type="submit" variant="contained">Submit</Button>
        </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Home;
