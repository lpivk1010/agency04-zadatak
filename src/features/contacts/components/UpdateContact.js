import React, { useState, useCallback } from "react";

import { useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { ContactsActions } from "../redux";

import { UpdateContactForm } from "./UpdateContactForm";
import "../styles/AddContact.css";

export const UpdateContact = ({ contact }) => {
  const { id } = contact;
  const [name, setName] = useState(contact.name);
  const [surname, setSurname] = useState(contact.surname);
  const [dateOfBirth, setDateOfBirth] = useState(contact.dateOfBirth);
  const [phone, setPhone] = useState(contact.phone);
  const [landline, setLandline] = useState(contact.landline);
  const [email, setEmail] = useState(contact.email);
  const [pager, setPager] = useState(contact.pager);

  const dispatch = useDispatch();
  const firestore = useFirestore();
  useFirestoreConnect("contacts");

  const updateContact = useCallback(
    (contact) => {
      dispatch(ContactsActions.updateContact({ firestore }, contact));
    },
    [firestore]
  );

  const handleUpdateContact = (e) => {
    e.preventDefault();
    const contact = {
      id: id,
      name: name,
      surname: surname,
      dateOfBirth: dateOfBirth,
      phone: phone,
      landline: landline,
      email: email,
      pager: pager,
    };
    updateContact(contact);
  };

  return (
    <UpdateContactForm
      contact={contact}
      handleSubmit={handleUpdateContact}
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
