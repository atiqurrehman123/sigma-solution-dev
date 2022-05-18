import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class FormEducationDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  render() {
    const { values, handleChange ,steps} = this.props;
    return (
      <Fragment>
        {/* <AppBar style={{ background: "#333" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Enter Education Details <span>{steps} of 4</span>
            </Typography>
          </Toolbar>
        </AppBar> */}
        <TextField
          label="qualification"
          hintText="Enter qualification"
          onChange={handleChange("qualification")}
          defaultValue={values.qualification}
        />
        <br />
        <TextField
          label="University"
          hintText="Enter university"
          onChange={handleChange("university")}
          defaultValue={values.university}
        />
        <br />
        <TextField
          label="Year"
          hintText="Enter Your year"
          onChange={handleChange("year")}
          defaultValue={values.year}
        />
        <br />
        <br />
        <Button
          style={{
            background: "#EE3B55",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Back"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#991A76",
            color: "#FFFFFF"
          }}
          label="Continue"
          onClick={this.continue}
        >
          {" "}
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FormEducationDetails;
