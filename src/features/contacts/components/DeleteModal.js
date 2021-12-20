import React from "react";
import "../styles/DeleteModal.css";

export const DeleteModal = ({
  name,
  surname,
  onDeleteConfirmed,
  onCloseModal,
}) => {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div>
          Are you sure you want to delete contact {name} {surname}?
        </div>
        <div className="modal-buttons">
          <button
            className="modal-button delete"
            onClick={() => onDeleteConfirmed(true)}
          >
            DELETE
          </button>
          <button
            className="modal-button close"
            onClick={() => onCloseModal(false)}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
