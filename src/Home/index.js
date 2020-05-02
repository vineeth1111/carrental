import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = {
  paper: {
    width: "80%",
    height: 100,
    paddingTop:10,
    margin: "auto",
  },
  title: {
    alignSelf: "right",
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Home is mounted");
  }
  render() {
    const { classes } = this.props;
    console.log("Home is rendered");
    return (
      <div>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h5" className={classes.title}>Cars for rent</Typography>
        </Paper>
      </div>
    );
  }
}

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Home);
