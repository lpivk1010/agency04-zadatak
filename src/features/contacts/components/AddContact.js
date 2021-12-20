import React, { useState, useCallback } from "react";

import { useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { ContactsActions } from "../redux";

import { AddContactForm } from "./AddContactForm";
import "../styles/AddContact.css";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [landline, setLandline] = useState("");
  const [email, setEmail] = useState("");
  const [pager, setPager] = useState("");

  const dispatch = useDispatch();
  const firestore = useFirestore();
  useFirestoreConnect("contacts");

  const createContact = useCallback(
    (contact) => {
      dispatch(ContactsActions.createContact({ firestore }, contact));
    },
    [firestore]
  );

  const handleAddContact = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      surname: surname,
      dateOfBirth: dateOfBirth,
      phone: phone,
      landline: landline,
      email: email,
      pager: pager,
    };
    createContact(contact);
  };

  return (
    <AddContactForm
      handleSubmit={handleAddContact}
      handleNameChange={setName}
      handleSurnameChange={setSurname}
      handleDateOfBirthChange={setDateOfBirth}
      handleEmailChange={setEmail}
      handleLandlineChange={setLandline}
      handlePhoneChange={setPhone}
      handlePagerChange={setPager}
    />
  );
};
