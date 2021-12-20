const login =
  ({ firebase }, credentials, validation) =>
  async (dispatch) => {
    const { emailValid, passwordValid } = validation;
    firebase
      .login(credentials)
      .then(() => dispatch({ type: "LOGIN_SUCCES" }))
      .catch(() => {
        if (!emailValid && !passwordValid) {
          dispatch({
            type: "LOGIN_ERROR",
            payload: "Invalid e-mail & password format!",
          });
        } else if (!emailValid) {
          dispatch({
            type: "LOGIN_ERROR",
            payload: "E-mail format invalid!",
          });
        } else if (!passwordValid) {
          dispatch({
            type: "LOGIN_ERROR",
            payload:
              "Password must contain aleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 symbol!",
          });
        } else {
          dispatch({
            type: "LOGIN_ERROR",
            payload: "Invalid credentials!",
          });
        }
      });
  };

const logout =
  ({ firebase }) =>
  async (dispatch) => {
    firebase.logout().then(() => dispatch({ type: "LOGOUT_SUCCES" }));
  };

export const AuthActions = {
  login,
  logout,
};
