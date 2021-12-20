import React, { useCallback } from "react";

import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { ContactsActions } from "../redux";

import { ContactsListItem } from "./ContactsListItem";
import "../styles/ContactsList.css";

import Loader from "react-loader-spinner";

export const ContactsList = ({ contacts, isFavoritesPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firestore = useFirestore();
  useFirestoreConnect(["contacts", "favorites"]);

  const favoriteContact = useCallback(
    (id) => {
      dispatch(ContactsActions.favoriteContact({ firestore }, id));
    },
    [firestore]
  );

  const unfavoriteContact = useCallback(
    (id) => {
      dispatch(ContactsActions.unfavoriteContact({ firestore }, id));
    },
    [firestore]
  );

  const editContact = (id, isFavoritesPage) =>
    isFavoritesPage ? navigate("/contacts/" + id) : navigate(id);

  const deleteContact = useCallback(
    (favoriteId, id) => {
      if (favoriteId)
        dispatch(ContactsActions.unfavoriteContact({ firestore }, favoriteId));
      dispatch(ContactsActions.deleteContact({ firestore }, id));
    },
    [firestore]
  );

  return (
    <div className="contacts-container">
      <div className="list-container">
        {contacts ? (
          contacts.map((contact) => (
            <ContactsListItem
              key={contact.id}
              contact={contact}
              handleFavorite={favoriteContact}
              handleUnfavorite={unfavoriteContact}
              handleEdit={editContact}
              handleDelete={deleteContact}
              isFavoritesPage={isFavoritesPage}
            />
          ))
        ) : (
          <Loader type="Oval" height={75} width={75} color="#000000" />
        )}
      </div>
    </div>
  );
};
