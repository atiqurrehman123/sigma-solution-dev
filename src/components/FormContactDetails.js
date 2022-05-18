import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import {db} from "../Firebase"
import {collection, addDoc, Timestamp} from 'firebase/firestore'
export class FormContactDetails extends Component {
  continue =async(e) =>  {
    e.preventDefault();
  try {
    await addDoc(collection(db, 'formdata'), this.props.values)
    this.props.nextStep();
  } catch (err) {
    alert(err)
  }
  };
  componentDidMount(){
    this.continue()
  }
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
    const { values, handleChange } = this.props;
    const {
      values: { firstName, lastName, email, occupation, city, bio,qualification,university,year,hobby,contactnumber,address },steps
    } = this.props;
    return (
      <Fragment>
        {/* <AppBar style={{ background: "#333" }} position="sticky">
          <Toolbar title="Enter Contact Details">
            <Typography color="inherit" variant="title">
              Enter Contact Details <span>{steps} of 4</span>
            </Typography>
          </Toolbar>
        </AppBar> */}
        <TextField
          label="address"
          hintText="Enter address"
          onChange={handleChange("address")}
          defaultValue={values.address}
        />
        <br />
        <TextField
          label="Hobby"
          hintText="Enter hobby"
          onChange={handleChange("hobby")}
          defaultValue={values.hobby}
        />
        <br />
        <TextField
          label="Contactnumber"
          hintText="Enter Your contactnumber"
          onChange={handleChange("contactnumber")}
          defaultValue={values.contactnumber}
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
          onClick={(e)=>{this.continue(e)}}
        >
          {" "}
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FormContactDetails;
