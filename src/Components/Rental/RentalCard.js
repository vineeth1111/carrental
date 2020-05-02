import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';

class RentalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    return (
      <Card>
        <CardHeader title="static title" subheader="static sub" />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent ></CardContent>
        <CardActions >
            <Button></Button>
        </CardActions>
      </Card>
    );
  }
}

export default RentalCard;