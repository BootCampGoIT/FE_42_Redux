import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signUpOperation,
  signInOperation,
} from "../../redux/auth/authOperation.js";
import { useLocation } from "react-router-dom";
import { AuthContainer } from "./AuthFormStyled.js";

const initialState = { email: "", password: "" };

const AuthForm = () => {
  const [state, setState] = useState(initialState);
  const error = useSelector((state) => state.auth.error);
  const location = useLocation();
  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [error]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/signup") {
      dispatch(signUpOperation(state));
    } else {
      dispatch(signInOperation(state));
    }
  };

  return (
    <>
      <h3>{error}</h3>
      <AuthContainer onSubmit={onHandleSubmit}>
        <label className='formLabel'>
          Email
          <input
            name='email'
            type='text'
            value={state.email}
            onChange={onHandleChange}
            className='formInput'
          />
        </label>
        <label className='formLabel'>
          Password
          <input
            name='password'
            type='text'
            value={state.password}
            onChange={onHandleChange}
            className='formInput'
          />
        </label>
        <button type='submit' className='formButton'>
          {location.pathname === "/signup" ? "Sign Up" : "Sign In"}
        </button>
      </AuthContainer>
    </>
  );
};

export default AuthForm;
