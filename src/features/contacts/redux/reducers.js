export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      console.log("CREATE SUCCESS!");
    case "CREATE_CONTACT_ERROR":
      console.log(action.payload);
      return state;
    case "UPDATE_CONTACT":
      console.log("UPDATE SUCCESS!");
    case "UPDATE_CONTACT_ERROR":
      console.log(action.payload);
      return state;
    case "DELETE_CONTACT":
      console.log("DELETE SUCCESS!");
      return state;
    case "DELETE_CONTACT_ERROR":
      console.log(action.payload);
      return state;
    case "FAVORITE_CONTACT":
      console.log("FAVORITE SUCCES!");
      return state;
    case "FAVORITE_CONTACT_ERROR":
      console.log(action.payload);
      return state;
    case "UNFAVORITE_CONTACT":
      console.log("Unfavorite Success!");
      return state;
    case "UNFAVORITE_CONTACT_ERROR":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
