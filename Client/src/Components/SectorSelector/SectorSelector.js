import * as React from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
const SectorSelector = ({ selector }) => {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
      <MenuItem value={selector.value}>{selector.text}</MenuItem> 
  );
};

export default SectorSelector;
