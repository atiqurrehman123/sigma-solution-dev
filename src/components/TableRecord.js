import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MuiThemeProvider,
} from "@material-ui/core";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  Timestamp,
  getDocFromCache,
  getDocs,
} from "firebase/firestore";
import FormData from "./FormData";
const usercollection = collection(db, "formdata");

export class TableRecord extends Component {
  state = {
    getformdata: [],
    loading: true,
  };
  continue = async () => {
    try {
      const data = await getDocs(usercollection);
      let users = [];
      data.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      this.setState({ getformdata: users });
      this.setState({ loading: false });
    } catch (err) {
      alert(err);
    }
  };
  componentDidMount() {
    this.continue();
  }
  first = (e) => {
    setTimeout(() => {
      this.props.firstStep();
    }, 1000);
  };
  render() {
    return (
      <MuiThemeProvider>
        <AppBar style={{ background: "#77E976" }} position="static">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
            Form Record
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        {this.state.loading ? (
          <h1>Fetch Record From firebase</h1>
        ) : (
          <Typography color="inherit" variant="title">
            <FormData tableRecord={this.state.getformdata} />
          </Typography>
        )}
      </MuiThemeProvider>
    );
  }
}

export default TableRecord;
