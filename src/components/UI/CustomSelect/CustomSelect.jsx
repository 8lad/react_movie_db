import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

export default function BasicSelect({
  label,
  options,
  value,
  onChange,
  onBlur,
  id,
  name,
  error,
  helperText,
}) {
  return (
    <TextField
      margin="dense"
      fullWidth
      select
      error={error}
      helperText={helperText}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      name={name}
    >
      {options.map((option) => (
        <MenuItem value={option.value} key={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
