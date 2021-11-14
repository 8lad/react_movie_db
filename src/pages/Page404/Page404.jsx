import React from "react";
import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Typography } from "@mui/material";
const Page404 = () => {
  return (
    <MainContainer>
      <Typography variant="h3" sx={{ mb: "20px" }}>
        Error 404. Unforunately, but this page doesn't exist
      </Typography>
      <Link to="/">Main page</Link>
    </MainContainer>
  );
};

export default Page404;
