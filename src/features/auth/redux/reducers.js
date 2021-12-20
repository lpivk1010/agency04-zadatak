const initialState = {
  authError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: action.payload,
      };
    case "LOGIN_SUCCES":
      return {
        ...state,
        authError: null,
      };
    case "LOGOUT_SUCCES":
      return state;
    default:
      return state;
  }
};
