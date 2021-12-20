import React from "react";

import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirebaseConnect } from "react-redux-firebase";
import { ContactsSelectors } from "../redux";

import { ContactsList } from "../components";
import "../styles/FavoritesPage.css";

export const FavoritesPage = () => {
  useFirebaseConnect("auth");
  useFirestoreConnect(["contacts", "favorites"]);
  const auth = useSelector((state) => state.firebase.auth);

  const favoriteContacts = useSelector((state) =>
    ContactsSelectors.getFavoritesContacts(state)
  );

  if (!auth.uid) {
    return <Navigate to="/" />;
  }

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Favorites:</h1>
      <ContactsList contacts={favoriteContacts} isFavoritesPage={true} />
    </div>
  );
};
