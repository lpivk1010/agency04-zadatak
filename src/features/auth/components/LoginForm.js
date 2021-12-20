import React from "react";

import logo from "../assets/logo-black.png";

export const LoginForm = ({
  onEmailChange,
  onPasswordChange,
  onSubmit,
  authError,
}) => {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="login-logo" />
      <h3 className="login-title">ADRESSBOOK</h3>
      <form onSubmit={onSubmit} className="login-form">
        <div className="login-input-container">
          <label className="login-label">E-mail:</label>
          <input
            className="login-input"
            type="email"
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>
        <div className="login-input-container">
          <label className="login-label">Password:</label>
          <input
            className="login-input"
            type="password"
            onChange={(e) => onPasswordChange(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          LOG IN
        </button>
        {authError ? (
          <div className="login-error">{authError}</div>
        ) : (
          <div className="no-login-error"></div>
        )}
      </form>
    </div>
  );
};
