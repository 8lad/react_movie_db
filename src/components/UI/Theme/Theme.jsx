import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../../theme";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";

const Theme = ({ children }) => {
  const { isLightMode } = useSelector((state) => state.theme);
  const selectedTheme = createTheme(isLightMode ? lightTheme : darkTheme);
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
