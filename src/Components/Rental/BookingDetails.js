import React, { Component } from "react";
// import RaisedButton from "@material-ui/core/";
// import TextField from "material-ui/TextField";
// import styles from "react-with-styles";
// import Popup from "./components/popup";
class Bookingdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      Name: "",
      ContactNumber: "",
      Issuedate: "",
      Returndate: "",
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <p>this is booking deatails page</p>
    );
  }
}

const style = {
  margin: 15,
  row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
};
export default Bookingdetails;
