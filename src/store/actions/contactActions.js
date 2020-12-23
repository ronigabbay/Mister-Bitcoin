import contactService from '../../services/ContactService.js'

// Action Dispatcher
export function getContacts(filterBy) {
  return async dispatch => {
    const contacts = await contactService.getContacts(filterBy)
    dispatch({ type: 'SET_CONTACTS', contacts })
  }
}

export function getById(contactId) {
    console.log(contactId);
  return async dispatch => {
    const contact = await contactService.getContactById(contactId)
    console.log(contact);
    dispatch({ type: 'SET_CONTACT', contact })
  }
}
export function getEmptyContact() {
  return async dispatch => {
    const contact = await contactService.getEmptyContact()
    dispatch({ type: 'SET_CONTACT', contact })
  }
}
export function removeContact(contactId) {
  return async dispatch => {
    try {
      await contactService.deleteContact(contactId)
      dispatch({ type: 'REMOVE_CONTACT', contactId })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}

export function addContact(contact) {
  return async dispatch => {
    try {
      const savedContact = await contactService.saveContact(contact)
      dispatch({ type: 'ADD_CONTACT', contact: savedContact })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}
export function updateContact(contact) {
  return async dispatch => {
    try {
      const savedContact = await contactService.saveContact(contact)
      dispatch({ type: 'UPDATE_CONTACT', contact: savedContact })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}