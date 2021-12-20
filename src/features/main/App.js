import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { isLoaded, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "../firebase/firebaseConfig";

import { Navbar } from "../nav";
import { LoadingSpinner } from "./components";
import { LoginPage } from "../auth";
import { ContactsPage, SingleContactPage, FavoritesPage } from "../contacts";

import "./App.css";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <LoadingSpinner />;
  return children;
};

export const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <AuthIsLoaded>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/contacts/:id" element={<SingleContactPage />} />
              <Route path="/contacts/favorites" element={<FavoritesPage />} />
            </Routes>
          </AuthIsLoaded>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};
