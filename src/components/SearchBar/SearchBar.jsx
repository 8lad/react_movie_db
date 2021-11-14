import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../Header/stylesHeaderData";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { fetchMovies } from "../../store";
import { searchUrl } from "../../utils/searchUrl";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchedMovie, setSearchedMovie] = useState("");
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", mr: "30px" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchedMovie}
          onChange={(e) => {
            setSearchedMovie(e.target.value);
          }}
        />
      </Search>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          if (searchedMovie && searchedMovie.length > 2) {
            dispatch(fetchMovies(searchUrl(String(searchedMovie))));
            setSearchedMovie("");
            navigate("/movies");
          }
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
