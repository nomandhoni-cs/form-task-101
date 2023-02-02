import * as React from "react";
import MenuItem from "@mui/material/MenuItem";


const SectorSelector = ({ selector }) => {
  return (
      <MenuItem value={selector.value}>{selector.text}</MenuItem> 
  );
};

export default SectorSelector;
