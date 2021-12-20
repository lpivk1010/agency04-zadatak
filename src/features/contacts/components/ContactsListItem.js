import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { ContactsSelectors } from "../redux";

import { DeleteModal } from "./DeleteModal";
import { images } from "../assets";
import "../styles/DeleteModal.css";

export const ContactsListItem = ({
  contact,
  handleFavorite,
  handleUnfavorite,
  handleEdit,
  handleDelete,
  isFavoritesPage,
}) => {
  const { id, name, surname } = contact;
  useFirestoreConnect("favorites");
  const isFavorite = useSelector((state) =>
    ContactsSelectors.isFavorite(state, id)
  );
  const favoriteId = useSelector((state) =>
    ContactsSelectors.getFavoriteId(state, id)
  );

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  useEffect(() => {
    if (deleteConfirmed) handleDelete(favoriteId, id);
  }, [deleteConfirmed]);

  return (
    <div className="list-item">
      <div className="initials">
        {name[0]}
        {surname[0]}
      </div>
      <div className="name">
        {name} {surname}
      </div>
      {isFavorite ? (
        <img
          className="icon"
          src={images.unfavorite}
          onClick={() => handleUnfavorite(favoriteId)}
          alt="unfavorite"
        />
      ) : (
        <img
          className="icon"
          src={images.favorite}
          onClick={() => handleFavorite(id)}
          alt="favorite"
        />
      )}
      <img
        className="icon"
        src={images.edit}
        onClick={() => handleEdit(id, isFavoritesPage)}
        alt="edit"
      />
      {!isFavoritesPage && (
        <img
          className="icon"
          src={images.delete}
          onClick={() => setDeleteModal(true)}
          alt="delete"
        />
      )}
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
