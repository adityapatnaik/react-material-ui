import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appbar: {
    alignItems: "center"
  }
});

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="primary" position="sticky">
        <Toolbar>
          <Typography variant="h5">Aditya Patnaik</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
