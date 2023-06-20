import React from "react";
import "../style/onboarding.css";
import Form from "react-bootstrap/Form";

const signUpPAge = () => {
  return (
    <div className="section ">
      <a href="/" className="logo">AfricanMarket</a>
      <div className="container mainDiv">
        <h1 className="LoginHeader">Register</h1>
        <Form className="mt-4">
          <Form.Group className="mb-2" controlId="userName">
            <Form.Label className="formText">Full Name</Form.Label>
            <Form.Control className="input-height"  placeholder="Enter your full name" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="userEmail">
            <Form.Label className="formText">Email</Form.Label>
            <Form.Control className="input-height" type="email" placeholder="Enter your email address" />
          </Form.Group>
          <Form.Group className="" controlId="userPassword">
            <Form.Label className="formText">Password </Form.Label>
            <Form.Control 
              type="password"
              placeholder="Enter your password"
              aria-describedby="passwordHelpBlock"
              className="input-height"
            />
          </Form.Group>
          <Form.Text className="mb-4 sopportingText" id="passwordHelpBlock" muted>
            Your password must not be less than 6 characters, contain letters,
            numbers, and special characters.
          </Form.Text>
          <button type="submit" class="primaryBtn ">
            Login
          </button>
        </Form>

        <div className="onboardOption mt-4">
          <h3 className="option">Already have an account? <span> <a href="/login" className="reg"> Login </a> </span> </h3>
        </div>
      </div>
    </div>
  );
};



export default signUpPAge;
