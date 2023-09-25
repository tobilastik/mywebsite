import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {"</>"}
            </Typography>
            <div>
              <Link className="nav-links" to="/">
                Home
              </Link>
              <Link className="nav-links" to="/about">About</Link>
              <Link className="nav-links" to="/blog">
                Blog
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <Main />
    </React.Fragment>
  );
}

export default App;
