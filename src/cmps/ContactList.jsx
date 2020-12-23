import { ContactPreview } from './ContactPreview.jsx';

export function ContactList({ contacts}) {
  
  return (
    <ul className="contact-list clean-list flex wrap justify-center">
      {
        contacts.map(contact => <ContactPreview  contact={contact} key={contact._id} />)
      }
    </ul>
  )
}