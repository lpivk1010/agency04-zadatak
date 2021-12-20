import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirebaseConnect } from "react-redux-firebase";
import { ContactsSelectors } from "../redux";

import { AddContact, ContactsList } from "../components";
import "../styles/ContactsPage.css";

export const ContactsPage = () => {
  useFirestoreConnect("contacts");
  useFirebaseConnect("auth");

  const auth = useSelector((state) => state.firebase.auth);
  const contacts = useSelector((state) => ContactsSelectors.getContacts(state));

  if (!auth.uid) {
    return <Navigate to="/" />;
  }

  return (
    <div className="contacts-page">
      <div className="titles">
        <h1 className="contacts-title">Add new contact:</h1>
        <h1 className="contacts-title">List of contacts:</h1>
      </div>
      <div className="contacts-page-content">
        <AddContact />
        <ContactsList contacts={contacts} isFavoritesPage={false} />
      </div>
    </div>
  );
};
