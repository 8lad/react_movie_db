import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleMovie } from "../../store/";
import { Typography, Box } from "@material-ui/core";
import Spinner from "../../components/UI/Spinner/Spinner";
import { singleMovieUrl } from "../../utils";
import CardMedia from "@mui/material/CardMedia";
import { imagePath, noImage } from "../../variables";
import RaitingCircle from "../../components/UI/RaitingCircle/RaitingCircle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const SingleMovie = () => {
  const dispatch = useDispatch();
  const { singleMoviesStatus, movieId, movieData } = useSelector(
    (state) => state.single
  );
  const {
    backdrop_path,
    budget,
    genres,
    original_title,
    release_date,
    runtime,
    vote_average,
    overview,
    tagline,
    poster_path,
  } = movieData;
  const raiting = vote_average * 10;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSingleMovie(singleMovieUrl(movieId)));
  }, [movieId, dispatch]);
  return (
    <>
      <Box>
        {() => {
          switch (singleMoviesStatus) {
            case "loading":
              return <Spinner sx={{ mt: "60px" }} />;
            case "ok":
              return !movieId ? (
                <Typography variant="h4">
                  We don't have the description about this movie
                </Typography>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    backgroundImage: `url(${imagePath}${backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      padding: " 60px 40px",
                      backgroundColor: "rgba(25,118,210, 0.9)",
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <CardMedia
                        component="img"
                        image={
                          poster_path
                            ? `${imagePath}${poster_path}`
                            : `${noImage}`
                        }
                        alt={original_title}
                        sx={{
                          borderRadius: "5px",
                          border: "1px solid #AAB4BE",
                          height: "330px",
                          width: "220px",
                        }}
                      />
                    </Box>
                    <Box sx={{ textAlign: "left", paddingLeft: "50px" }}>
                      <Typography variant="h4" component="h1">
                        {original_title}
                      </Typography>
                      <Box sx={{ padding: "10px 0px" }}>
                        <Typography variant="h6">
                          Release date: {release_date}
                        </Typography>

                        <Typography variant="h6">
                          Duration: {runtime} minutes
                        </Typography>
                        <Typography variant="h6">
                          Genres:
                          {genres.map((item) => (
                            <Box
                              component="span"
                              sx={{
                                margin: "0px 7px",
                              }}
                              key={item.name}
                            >
                              {item.name}
                            </Box>
                          ))}
                        </Typography>

                        <Typography variant="h6">Budget: {budget}$</Typography>
                      </Box>
                      <RaitingCircle value={raiting} />
                      <Typography variant="h5" component="h5">
                        Slogan:
                      </Typography>
                      <Typography paragraph>{tagline}</Typography>
                      <Typography variant="h5" component="h5">
                        Description:
                      </Typography>
                      <Typography paragraph>{overview}</Typography>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => navigate(-1)}
                      >
                        Go back
                      </Button>
                    </Box>
                  </Box>
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
                <Typography variant="h5">
                  something is going wrong. Please try again later
                </Typography>
              );
          }
        }}
      </Box>
    </>
  );
};

export default SingleMovie;
