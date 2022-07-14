import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails, fetchSessionId, setIsLogged } from "../../store/";
import { Typography, Box } from "@material-ui/core";
import { getUserDetails } from "../../utils";
import CardMedia from "@mui/material/CardMedia";
import Spinner from "../../components/UI/Spinner/Spinner";
import { noImage, userBg, imagePath } from "../../variables";

const UserPage = () => {
  const dispatch = useDispatch();

  const { userData, sessionId, detailsStatus } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem("token"));
    const token = { ...localToken };
    if (localStorage.getItem("token")) {
      dispatch(setIsLogged(true));
      dispatch(fetchSessionId(token));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("session", JSON.stringify(sessionId));
    const session = JSON.parse(localStorage.getItem("session"));
    dispatch(fetchUserDetails(getUserDetails(session.session_id)));
  }, [dispatch, sessionId]);

  return (
    <>
      <Box>
        {() => {
          switch (detailsStatus) {
            case "loading":
              return <Spinner sx={{ mt: "60px" }} />;
            case "ok":
              return !userData ? (
                <Typography variant="h4">
                  We don't have the description about this movie
                </Typography>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    backgroundImage: `url(${userBg})`,
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
                          imagePath
                            ? `${imagePath}${userData.avatar.tmdb.avatar_path}`
                            : `${noImage}`
                        }
                        alt="user avatar"
                        sx={{
                          borderRadius: "50%",
                          border: "1px solid #AAB4BE",
                          height: "220px",
                          width: "220px",
                        }}
                      />
                    </Box>
                    <Box sx={{ textAlign: "left", paddingLeft: "50px" }}>
                      <Typography variant="h4" component="h1">
                        Hello: {userData.username}
                      </Typography>
                      <Box sx={{ padding: "10px 0px" }}>
                        <Typography variant="h6">
                          User language: {userData.iso_639_1}
                        </Typography>

                        <Typography variant="h6">
                          User location: {userData.iso_3166_1}
                        </Typography>
                      </Box>
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

export default UserPage;
