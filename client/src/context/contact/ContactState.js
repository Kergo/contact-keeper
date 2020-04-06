import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sasho',
        email: 'sashs@sadas.coasd',
        phone: '232-231231',
        type: 'prof'
      },
      {
        id: 2,
        name: 'Gosho',
        email: 'sashs@sadas.coasd',
        phone: '232-231231',
        type: 'prof'
      },
      {
        id: 3,
        name: 'Tosho',
        email: 'sashs@sadas.coasd',
        phone: '232-231231',
        type: 'prof'
      },
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{contacts: state.contacts}}>
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState;