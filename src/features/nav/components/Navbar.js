import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { AuthActions } from "../../auth";

import { LoggedInLinks } from "./LoggedInLinks";

export const Navbar = () => {
  useFirebaseConnect("auth");
  const auth = useSelector((state) => state.firebase.auth);

  const firebase = useFirebase();
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(AuthActions.logout({ firebase }));
  }, [firebase]);

  return auth.uid ? <LoggedInLinks handleLogout={logOut} /> : <></>;
};
