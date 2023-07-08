import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/auth/signUpSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../style/onboarding.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUpPAge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, data, error } = useSelector((state) => state.register);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are required", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      dispatch(register(name, email, password));
      setName(" ");
      setEmail(" ");
      setPassword(" ");
    }
  };

  useEffect(() => {
    if (data) {
      toast.success("You have successfully created an account", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [data, error, navigate]);

  return (
    <div className="section ">
      <a href="/" className="logo">
        AfricanMarket
      </a>
      <div className="container mainDiv">
        <ToastContainer />
        <h1 className="LoginHeader">Register</h1>
        <Form action="" className="mt-4">
          <Form.Group className="mb-2" controlId="userName">
            <Form.Label className="formText">Full Name</Form.Label>
            <Form.Control
              className="input-height"
              placeholder="Enter your full name"
              value={name}
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="userEmail">
            <Form.Label className="formText">Email</Form.Label>
            <Form.Control
              className="input-height"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="" controlId="userPassword">
            <Form.Label className="formText">Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              aria-describedby="passwordHelpBlock"
              className="input-height"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            <button type="submit" className="primaryBtn" onClick={HandleSubmit}>
              Register
            </button>
          )}
        </Form>

        <div className="onboardOption mt-4">
          <h3 className="option">
            Already have an account?
            <span>
              {" "}
              <Link to={`/login`} className="reg">
                Login
              </Link>{" "}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUpPAge;
