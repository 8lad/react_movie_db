import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function RaitingCircle(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#081C22",
      }}
    >
      <CircularProgress
        sx={{ color: "#21D07A" }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: "0.9rem", color: "#fff" }}
        >
          {`${props.value}%`}
        </Typography>
      </Box>
    </Box>
  );
}
