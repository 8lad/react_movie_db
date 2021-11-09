import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    padding: theme.spacing(1.5),
  },
}));

const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Button
      className={styles.root}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
