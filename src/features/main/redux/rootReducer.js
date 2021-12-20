import { combineReducers } from "redux";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import { authReducer } from "../../auth";
import { contactsReducer } from "../../contacts";

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
