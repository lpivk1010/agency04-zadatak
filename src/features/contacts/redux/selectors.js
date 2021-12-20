import _ from "lodash";

const getContacts = (state) => state.firestore.ordered.contacts;
const getFavorites = (state) => state.firestore.ordered.favorites;

const getFavoritesIds = (state) => {
  const favorites = getFavorites(state);
  return _.map(favorites, (favorite) => favorite.originalId);
};

const getFavoritesContacts = (state) => {
  const contacts = getContacts(state);
  const favoritesIds = getFavoritesIds(state);
  const favoriteContacts = _.map(favoritesIds, (id) =>
    _.find(contacts, (contact) => contact.id == id)
  );
  return favoriteContacts;
};

const isFavorite = (state, id) => {
  const favoritesIds = getFavoritesIds(state);
  return favoritesIds.includes(id);
};

const getFavoriteId = (state, originalId) => {
  const favorites = getFavorites(state);
  const object = _.find(
    favorites,
    (favorite) => originalId == favorite.originalId
  );
  if (object) return object.id;
  else return null;
};

export const ContactsSelectors = {
  getContacts,
  getFavorites,
  getFavoritesIds,
  getFavoritesContacts,
  getFavoriteId,
  isFavorite,
};
