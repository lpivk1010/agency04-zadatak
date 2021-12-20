import React, { useState, useCallback, useEffect } from "react";
import _ from "lodash";

import { useParams, Navigate, useNavigate } from "react-router-dom";

import {
  useFirestoreConnect,
  useFirestore,
  useFirebaseConnect,
} from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { ContactsSelectors, ContactsActions } from "../redux";

import { UpdateContact } from "../components";
import { DeleteModal } from "../components/DeleteModal";
import { images } from "../assets";
import "../styles/SingleContactPage.css";

import Loader from "react-loader-spinner";

export const SingleContactPage = () => {
  const params = useParams();
  const { id } = params;

  const [update, setUpdate] = useState(false);

  useFirebaseConnect(["auth"]);
  const auth = useSelector((state) => state.firebase.auth);

  useFirestoreConnect(["contacts", "favorites"]);
  const contacts = useSelector((state) => ContactsSelectors.getContacts(state));
  const contact = contacts ? _.find(contacts, { id }) : null;

  const firestore = useFirestore();
  const dispatch = useDispatch();
  const favoriteId = useSelector((state) =>
    ContactsSelectors.getFavoriteId(state, id)
  );
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
  const isFavorite = useSelector((state) =>
    ContactsSelectors.isFavorite(state, id)
  );

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const navigate = useNavigate();

  const deleteContact = useCallback(
    (favoriteId, id) => {
      if (favoriteId)
        dispatch(ContactsActions.unfavoriteContact({ firestore }, favoriteId));
      dispatch(ContactsActions.deleteContact({ firestore }, id));
      navigate("/", { replace: true });
    },
    [firestore]
  );

  useEffect(() => {
    if (deleteConfirmed) deleteContact(favoriteId, id);
  }, [deleteConfirmed]);

  if (!auth.uid) {
    return <Navigate to="/" />;
  }

  if (!contact) {
    return (
      <div className="loader-single">
        <Loader height={200} width={200} color="#000000" />
      </div>
    );
  }

  const { name, surname, dateOfBirth, phone, landline, email, pager } = contact;

  return (
    <div className="single-page">
      <div className="options">
        <div className="unfavorite">
          {isFavorite ? (
            <img
              className="icon"
              src={images.unfavorite}
              onClick={() => unfavoriteContact(favoriteId)}
              alt="unfavorite"
            />
          ) : (
            <img
              className="icon"
              src={images.favorite}
              onClick={() => favoriteContact(id)}
              alt="favorite"
            />
          )}
        </div>
        <div className="avatar">
          {name[0]}
          {surname[0]}
        </div>
        <div className="edit-delete">
          <img
            src={images.edit}
            onClick={() => setUpdate(!update)}
            alt="edit"
            className="img"
          />
          <img
            src={images.delete}
            onClick={() => setDeleteModal(true)}
            alt="delete"
            className="img"
          />
        </div>
      </div>
      {!update && (
        <div className="details">
          <div className="detail-line">
            <label className="detail-label">Name:</label>
            <div className="detail">{name}</div>
          </div>
          <div className="detail-line">
            <label className="detail-label">Surname:</label>
            <div className="detail">{surname}</div>
          </div>
          <div className="detail-line">
            <label className="detail-label">Born:</label>
            <div className="detail">{dateOfBirth}</div>
          </div>
          {email && (
            <div className="detail-line">
              <label className="detail-label">E-mail:</label>
              <div className="detail">{email}</div>
            </div>
          )}
          {phone && (
            <div className="detail-line">
              <label className="detail-label">Phone number:</label>
              <div className="detail">{phone}</div>
            </div>
          )}
          {landline && (
            <div className="detail-line">
              <label className="detail-label">Landline number:</label>
              <div className="detail">{landline}</div>
            </div>
          )}
          {pager && (
            <div className="detail-line">
              <label className="detail-label">Pager number:</label>
              <div className="detail">{pager}</div>
            </div>
          )}
        </div>
      )}
      {update && <UpdateContact contact={contact} />}
      {deleteModal && (
        <DeleteModal
          name={name}
          surname={surname}
          onDeleteConfirmed={setDeleteConfirmed}
          onCloseModal={setDeleteModal}
        />
      )}
    </div>
  );
};
