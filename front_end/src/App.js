import React, {Component, Fragment} from "react";
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './views/components/Header';
import Home from './views/components/Home';


  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }
  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  // }
  
  // componentWillMount() {
  //   this.callAPI();
  // }



  
  const styles = theme => ({
    main: {
      padding: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2),
      },
    },
  });
  
  const App = ({ classes }) => (
    <Fragment>
      <CssBaseline />
      <AppHeader />
      <main className={classes.main}>
        <Home />
      </main>
    </Fragment>
  );
  
  export default withStyles(styles)(App);