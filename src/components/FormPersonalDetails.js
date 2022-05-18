import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class FormPersonalDetails extends Component {
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
    const { values, handleChange,steps } = this.props;
    return (
      <Fragment>
        {/* <AppBar style={{ background: "#333" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Enter Personal Details <span>{steps} of 4</span>
            </Typography>
          </Toolbar>
        </AppBar> */}
        <TextField
          label="Occupation"
          hintText="Enter Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          label="City"
          hintText="Enter City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          label="Bio"
          hintText="Enter Your Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
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

export default FormPersonalDetails;
