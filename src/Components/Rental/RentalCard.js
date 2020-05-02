import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    border: "3px",
    borderColor: "#2f2f2f",
    width: "70%",
    margin: 'auto',
    marginBottom:6,
    marginTop:6
  },
};

class RentalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card elevation={2} className={classes.card}>
          <CardHeader title="static title" subheader="static sub" />
          <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent></CardContent>
          <CardActions>
            <Button> Book Now</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(RentalCard);
