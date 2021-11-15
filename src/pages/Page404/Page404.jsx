import React from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Typography, Button } from "@mui/material";

const Page404 = () => {
  const navigation = useNavigate();
  return (
    <MainContainer>
      <Typography variant="h3" sx={{ mb: "20px" }}>
        Error 404. Unforunately, but this page doesn't exist
      </Typography>
      <Button variant="contained" onClick={() => navigation("/")}>
        Go back
      </Button>
    </MainContainer>
  );
};

export default Page404;
