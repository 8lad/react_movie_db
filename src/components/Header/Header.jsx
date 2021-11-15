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
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.user);
  return (
    <AppBar>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography sx={{ flex: "1", textAlign: "left" }}>MOVIES DB</Typography>
        <SearchBar />

        <Button
          onClick={() => {
            navigate(isLogged ? "/movies" : "/");
            dispatch(fetchMovies(createUrl(1)));
          }}
          color="inherit"
        >
          Movies
        </Button>
        <Button
          onClick={() => navigate(isLogged ? "/favorites" : "/")}
          color="inherit"
        >
          Favorites
        </Button>
        <Button
          onClick={() => navigate(isLogged ? "/userpage" : "/")}
          color="inherit"
        >
          Profile
        </Button>
        <Button onClick={() => navigate("/")} color="inherit">
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
