import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

const uesStyles = makeStyles(() => ({
  root: {
    paddingTop: "90px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const MainContainer = ({ children, ...props }) => {
  const styles = uesStyles();
  return (
    <Container
      className={styles.root}
      container="main"
      maxWidth="lg"
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
