import _ from "lodash";

const createContact =
  ({ firestore }, contact) =>
  async (dispatch) => {
    firestore
      .collection("contacts")
      .add(contact)
      .then(() => dispatch({ type: "CREATE_CONTACT" }))
      .catch((err) => dispatch({ type: "CREATE_CONTACT_ERROR" }, err));
  };

const updateContact =
  ({ firestore }, contact) =>
  async (dispatch) => {
    firestore
      .collection("contacts")
      .doc(contact.id)
      .update(contact)
      .then(() => {
        window.location.reload();
        dispatch({ type: "UPDATE_CONTACT" });
      })
      .catch((err) => dispatch({ type: "UPDATE_CONTACT_ERROR" }, err));
  };

const deleteContact =
  ({ firestore }, id) =>
  async (dispatch) => {
    firestore
      .collection("contacts")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_CONTACT" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_CONTACT_ERROR" }, err);
      });
  };

const favoriteContact =
  ({ firestore }, id) =>
  async (dispatch) => {
    firestore
      .collection("favorites")
      .add({ originalId: id })
      .then(() => dispatch({ type: "FAVORITE_CONTACT" }))
      .catch((err) => dispatch({ type: "FAVORITE_CONTACT_ERROR" }, err));
  };

const unfavoriteContact =
  ({ firestore }, id) =>
  async (dispatch) => {
    firestore
      .collection("favorites")
      .doc(id)
      .delete()
      .then(() => dispatch({ type: "UNFAVORITE_CONTACT" }))
      .catch((err) => dispatch({ type: "UNFAVORITE_CONTACT_ERROR" }, err));
  };

export const ContactsActions = {
  createContact,
  updateContact,
  deleteContact,
  favoriteContact,
  unfavoriteContact,
};
