import React, { useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../store/";
import { Typography, Box } from "@material-ui/core";
import Spinner from "../../components/UI/Spinner/Spinner";
import { createUrl } from "../../utils/createUrl";
import PaginationControlled from "../../components/UI/Pagination/PaginationControlled";
import Filters from "../../components/Filters/Filters";
const RatedMovies = () => {
  const dispatch = useDispatch();
  const { mainMoviesStatus, movies, total_pages, currentPage } = useSelector(
    (state) => state.main
  );

  useEffect(() => {
    dispatch(fetchMovies(createUrl(currentPage)));
  }, [currentPage, dispatch]);

  return (
    <>
      <Filters />
      <Box>
        {() => {
          switch (mainMoviesStatus) {
            case "loading":
              return <Spinner sx={{ mt: "60px" }} />;
            case "ok":
              return movies.length < 1 ? (
                <Typography variant="h4">
                  We didn't find any movies for you. Please try something elese
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
                  {movies.map((item) => (
                    <MovieCard singleMovie={item} key={item.id} />
                  ))}
                  {total_pages ? <PaginationControlled /> : null}
                </Box>
              );
            case "error":
              return (
                <Typography variant="h5">
                  Guess we have a network error. Please try again later
                </Typography>
              );
            default:
              return (
                <Typography variant="h5">We don't have any movies</Typography>
              );
          }
        }}
      </Box>
    </>
  );
};

export default RatedMovies;
