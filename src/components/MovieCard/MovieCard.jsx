import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { imagePath, noImage } from "../../variables/";
import RaitingCircle from "../UI/RaitingCircle/RaitingCircle";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../store";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { addFavoriteMovie, removeFavoriteMovie } from "../../utils/";

export default function MovieCard({ singleMovie }) {
  const raiting = singleMovie.vote_average * 10;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Box sx={{ padding: "10px", display: "flex" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 220,
        }}
      >
        <CardMedia
          onClick={() => {
            if (singleMovie.id) {
              dispatch(setMovieId(singleMovie.id));
              navigate("/moviepage");
            }
          }}
          component="img"
          height="330"
          image={
            singleMovie.poster_path
              ? `${imagePath}${singleMovie.poster_path}`
              : `${noImage}`
          }
          alt={singleMovie.title}
        />
        <CardContent sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-60px",
              left: "20px",
            }}
          >
            <RaitingCircle value={raiting} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "-60px",
              right: "20px",
              width: "40px",
              height: "40px",
              backgroundColor: "#AAB4BE",
              borderRadius: "50%",
            }}
            onClick={() => {
              if (!isFavorite) {
                addFavoriteMovie("movies", singleMovie);
              }
              if (isFavorite) {
                removeFavoriteMovie("movies", singleMovie);
              }

              setIsFavorite(!isFavorite);
            }}
          >
            <IconButton aria-label="add to favorites">
              {isFavorite ? (
                <FavoriteIcon sx={{ color: pink[500] }} />
              ) : (
                <FavoriteIcon />
              )}
            </IconButton>
          </Box>
          <Typography variant="h6" color="text.secondary" sx={{ mb: "10px" }}>
            {singleMovie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release date: {singleMovie.release_date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
