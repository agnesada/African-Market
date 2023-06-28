import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import { login } from '../store/auth/loginSlice';
import "../style/onboarding.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {loading, data, error} = useSelector((state) => state.login)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleSubmit = (event) => {
    event.preventDefault()
    if(email === " " || password === " "){
      toast.warning('All fields are required', {
				position: toast.POSITION.TOP_RIGHT,
			});
    } else{
      dispatch(login(email, password))
      setEmail('')
      setPassword('')
    }
  }

  useEffect(()=>{
    if(data){
      toast.success('Login Successful', {
				position: toast.POSITION.TOP_RIGHT,
			});
      setTimeout(() => {
        // navigate('/checkout')   
      }, 3000);
    }
    else if (error){
      toast.error(error, {
				position: toast.POSITION.TOP_RIGHT,
			});
    }
  }, [data, error, navigate])

  return (
    <div className="section ">
      <a href="/" className="logo">
        AfricanMarket
      </a>
      <div className="container mainDiv">
      <ToastContainer />
        <h1 className="LoginHeader">Login</h1>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="userEmail">
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
          {/* <Form.Text className="mb-4 sopportingText" id="passwordHelpBlock" muted>
            Your password must not be less than 6 characters, contain letters,
            numbers, and special characters.
          </Form.Text> */}
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            <button type="submit" className="primaryBtn" onClick={HandleSubmit}>
              Login
            </button>
          )}
        </Form>

        <div className="onboardOption mt-4">
          <h3 className="option">
            Don't have an account?{" "}
            <span>
              {" "}
              <Link to={`/register`} className="reg">
                Register
              </Link>
            </span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
