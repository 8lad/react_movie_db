import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./extraHeaderData";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ThemeSwitch from "../UI/Switch/Switch";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flex: "1", textAlign: "left" }}>MOVIES DB</Typography>
        <Box sx={{ display: "flex", mr: "30px" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button variant="contained" color="success">
            Search
          </Button>
        </Box>

        <Button onClick={() => navigate("/movies")} color="inherit">
          Movies
        </Button>
        <Button onClick={() => navigate("/favorites")} color="inherit">
          Favorites
        </Button>
        <Button onClick={() => navigate("/login")} color="inherit">
          Log in
        </Button>
        <Button onClick={() => navigate("/signin")} color="inherit">
          Sign in
        </Button>
        <Box>
          <ThemeSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
