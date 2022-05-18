import React, { Component } from "react";
import FormUserDetails from "./components/FormUserDetails";
import FormPersonalDetails from "./components/FormPersonalDetails";
import FormEducationDetails from "./components/FormEducationDetails";
import FormContactDetails from "./components/FormContactDetails";
import Confirm from "./components/Confirm";
import TableRecord from "./components/TableRecord";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
const steps = [
  "User Details",
  "Personal Details",
  "Education Details",
  "Contact Dtails",
];
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    qualification: "",
    university: "",
    year: "",
    hobby: "",
    contactnumber: "",
    address: "",
  };
  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  firstStep = () => {
    this.setState({
      step: 1,
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      qualification,
      university,
      year,
      hobby,
      contactnumber,
      address,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      qualification,
      university,
      year,
      hobby,
      contactnumber,
      address,
    };

    switch (step) {
      default:
        return <h1>User Forms not working. Enable Javascript!</h1>;
      case 1:
        return (
          <>
            <Stepperform stepper={step} />
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              steps={step}
            />
          </>
        );
      case 2:
        return (
          <>
            <Stepperform stepper={step} />
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              steps={step}
            />
          </>
        );
      case 3:
        return (
          <>
            <Stepperform stepper={step} />
            <FormEducationDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              steps={step}
            />
          </>
        );
      case 4:
        return (
          <>
            <Stepperform stepper={step} />
            <FormContactDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              steps={step}
            />
          </>
        );
      case 5:
        return (
          <>
            <TableRecord firstStep={this.firstStep} steps={step} />
          </>
        );
    }
  }
}
export default UserForm;
const Stepperform = ({ stepper }) => {
  return (
    <Box sx={{ width: "100%" }} style={{marginTop:"20px"}}>
      <Stepper activeStep={stepper} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
