import React from "react";
import { Box } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

const FilterSelect = ({
  options,
  name,
  id,
  value,
  onChange,
  label,
  optionName,
  optionValue,
}) => {
  return (
    <Box sx={{ width: "30%", padding: "0px 10px" }}>
      <TextField
        margin="dense"
        select
        variant="outlined"
        value={value}
        fullWidth
        onChange={(e) => onChange(e.target.value)}
        id={id}
        name={name}
        label={label}
      >
        {options.map((option) => (
          <MenuItem value={option[optionValue]} key={option[optionValue]}>
            {option[optionName]}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default FilterSelect;
