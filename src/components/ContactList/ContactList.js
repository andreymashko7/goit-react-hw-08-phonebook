import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import { useEffect } from 'react';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';
import './ContactList.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="Contacts__item">
          <p className="Contacts__text">
            {name} : {number}
          </p>

          <button
            type="button"
            className="ButtonDelete"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
