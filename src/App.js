import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./userForm";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/multistepform" element={<UserForm />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
