import React, { Component, Fragment } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {db} from "../Firebase"
import {collection, addDoc, Timestamp} from 'firebase/firestore'
export class Confirm extends Component {
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

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio,qualification,university,year,hobby,contactnumber,address },steps
    } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#098F8F" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Confirm Details <span>{steps} of 4</span>
            </Typography>
          </Toolbar>
        </AppBar>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Confirm your info
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
          <ListItem>
            <ListItemText primary="qualification" secondary={qualification} />
          </ListItem>
          <ListItem>
            <ListItemText primary="university" secondary={university} />
          </ListItem>
          <ListItem>
            <ListItemText primary="year" secondary={year} />
          </ListItem>
          <ListItem>
            <ListItemText primary="hobby" secondary={hobby} />
          </ListItem>
          <ListItem>
            <ListItemText primary="contactnumber" secondary={contactnumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary="address" secondary={address} />
          </ListItem>
          
        </List>

        <br />

        <br />
        <Button
          style={{
            background: "#EE3B55",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Continue"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#3C61B8",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Continue"
          onClick={(e)=>{this.continue(e)}}
        >
          Confirm and Continue
        </Button>
      </Fragment>
    );
  }
}

export default Confirm;
