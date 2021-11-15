import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails, fetchSessionId, setIsLogged } from "../../store/";
import { Typography, Box } from "@material-ui/core";
import { getUserDetails, getSessionId } from "../../utils";
import CardMedia from "@mui/material/CardMedia";
import {
  noImage,
  // sessionRequest,
  userBg,
  imagePath,
  // tokenRequest,
} from "../../variables";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData, sessionId, isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem("token"));
    if (localToken) {
      console.log(localToken);
      dispatch(setIsLogged());
      dispatch(fetchSessionId(getSessionId()));
    }
  }, []);
  console.log(sessionId, isLogged);

  return (
    <>
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
    </>
  );
};

export default UserPage;

//  return (
//     <>
//       <Box>
//         {() => {
//           switch (singleMoviesStatus) {
//             case "loading":
//               return <Spinner sx={{ mt: "60px" }} />;
//             case "ok":
//               return !movieId ? (
//                 <Typography variant="h4">
//                   We don't have the description about this movie
//                 </Typography>
//               ) : (
//                 <Box
//                   sx={{
//                     width: "100%",
//                     backgroundImage: `url(${userBg})`,
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: "100%",
//                       justifyContent: "flex-start",
//                       display: "flex",
//                       padding: " 60px 40px",
//                       backgroundColor: "rgba(25,118,210, 0.9)",
//                     }}
//                   >
//                     <Box sx={{ width: "30%" }}>
//                       <CardMedia
//                         component="img"
//                         image={
//                           poster_path
//                             ? `${imagePath}${userData.avatar.tmdb.avatar_path}`
//                             : `${noImage}`
//                         }
//                         alt={original_title}
//                         sx={{
//                           borderRadius: "5px",
//                           border: "1px solid #AAB4BE",
//                           height: "330px",
//                           width: "220px",
//                         }}
//                       />
//                     </Box>
//                     <Box sx={{ textAlign: "left", paddingLeft: "50px" }}>
//                       <Typography variant="h4" component="h1">
//                         {original_title}
//                       </Typography>
//                       <Box sx={{ padding: "10px 0px" }}>
//                         <Typography variant="h6">
//                           Release date: {release_date}
//                         </Typography>

//                         <Typography variant="h6">
//                           Duration: {runtime} minutes
//                         </Typography>
//                         <Typography variant="h6">Genres:</Typography>

//                         <RaitingCircle value={raiting} />
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Box>
//               );
//             case "error":
//               return (
//                 <Typography variant="h5">
//                   Guess we have a network error. Please try again later
//                 </Typography>
//               );
//             default:
//               return (
//                 <Typography variant="h5">
//                   something is going wrong. Please try again later
//                 </Typography>
//               );
//           }
//         }}
//       </Box>
//     </>
//   );
// };
