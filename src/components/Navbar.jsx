import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const location = useLocation().pathname;

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Herolo Weather App
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          disableElevation
          color={location !== "/" ? "primary" : "secondary"}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/favorites"
          variant="contained"
          disableElevation
          color={location !== "/favorites" ? "primary" : "secondary"}
        >
          Favorites ❤
        </Button>
      </Toolbar>
    </AppBar>
  );
}
