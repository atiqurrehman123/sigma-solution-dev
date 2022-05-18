import React, { useEffect, Fragment, useState } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("atiq12@gmail.com");
  const [password, setPassword] = useState("atiq@12");
  const [error, setError] = useState(false);
  const [message,setMessage]=useState("")
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(password, email);
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/multistepform");
      console.log("successfull");
    } catch (error) {
      setError(true);
      const errorCode = error.code;
    const errorMessage = error.message.toString();
      console.log(errorMessage, "eer");
      setMessage(errorMessage)
      setError(true);
    }
  };
  useEffect(() => {
    HandleSubmit();
  }, []);
  
  return (
    <Fragment>
      <AppBar style={{ background: "#333" }} position="sticky">
        <Toolbar title="Enter Personal Information">
          <Typography color="inherit" variant="title">
            Login Form
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        label="Name"
        hintText="Enter Name"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        label="Password"
        hintText="Enter Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button
        style={{
          marginTop: "23px",
          background: "#991A76",
          color: "#FFFFFF",
        }}
        label="Submit Data"
        type="submit"
        onClick={(e) => {
          HandleSubmit(e);
        }}
      >
        Login
      </Button>
      <br />
      <br />
      {error && (
        <Typography
          style={{ textAlign: "center", color: "red" }}
          color="inherit"
          variant="title"
        >
          {message}
        </Typography>
      )}
    </Fragment>
  );
}
