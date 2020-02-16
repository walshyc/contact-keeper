import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  SET_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.map(con =>
            con.id === action.payload.id ? action.payload : con
          )
        ]
      };
    default:
      return state;
  }
};
