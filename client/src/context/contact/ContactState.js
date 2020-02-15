import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  SET_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: 1,
        name: "Cormac Walsh",
        email: "cormac@walsh.com",
        phone: "087523516"
      },
      {
        type: "professional",
        id: 2,
        name: "Conor Walsh",
        email: "conor@walsh.com",
        phone: "087523126"
      },
      {
        type: "personal",
        id: 3,
        name: "Caitriona Walsh",
        email: "caitriona@walsh.com",
        phone: "087528746"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //  Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // Delete Contact

  // Update Contact

  // Set Current Contact

  // Clear Current Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
