import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ThemeSwitch from "../UI/Switch/Switch";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store";
import { createUrl } from "../../utils";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flex: "1", textAlign: "left" }}>MOVIES DB</Typography>
        <SearchBar />
        <Button
          onClick={() => {
            navigate("/movies");
            dispatch(fetchMovies(createUrl(1)));
          }}
          color="inherit"
        >
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
