import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Typography, Box } from "@material-ui/core";
const FavoriteMovies = () => {
  const favorteMoviesList = JSON.parse(localStorage.getItem("movies"));

  return (
    <Box>
      {!favorteMoviesList || favorteMoviesList.length < 1 ? (
        <Typography variant="h4">
          You don't have favorite movies yet. Try to finde something
        </Typography>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {favorteMoviesList.map((item) => (
            <MovieCard singleMovie={item} key={item.id} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FavoriteMovies;
