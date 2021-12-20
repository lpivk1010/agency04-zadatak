import React, { useState, useCallback } from "react";

import { Navigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { AuthActions } from "../redux";

import { LoginForm } from "../components";
import "../styles/LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const auth = useSelector((state) => state.firebase.auth);
  const { authError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const firebase = useFirebase();
  useFirebaseConnect("auth");

  const onEmailChange = (email) => {
    if (/^\S+@\S+\.\S+$/.test(email)) setEmailValid(true);
    else setEmailValid(false);
    setEmail(email);
  };

  const onPasswordChange = (password) => {
    if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password))
      setPasswordValid(true);
    else setPasswordValid(false);
    setPassword(password);
  };

  const loginUser = useCallback(
    (credentials, validation) => {
      dispatch(AuthActions.login({ firebase }, credentials, validation));
    },
    [firebase]
  );

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    const validation = {
      emailValid,
      passwordValid,
    };
    loginUser(credentials, validation);
  };

  if (auth.uid) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className="login-page">
      <LoginForm
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onSubmit={handleLoginSubmit}
        authError={authError}
      />
    </div>
  );
};
