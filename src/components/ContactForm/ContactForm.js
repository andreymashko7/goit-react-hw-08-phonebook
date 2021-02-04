import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(contactsOperations.addContact(name, number));

  const matchContact = () => {
    const namesInPhonebook = contacts.map(({ name }) => name);
    const numbersInPhonebook = contacts.map(({ number }) => number);

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts!!!`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all fields');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (matchContact()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.contactForm}>
      <div className={s.container}>
        <label htmlFor="name" className={s.contactLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            placeholder="Rosie Simpson"
            className={s.input_name}
          ></input>
        </label>

        <label htmlFor="number" className={s.contactLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
            placeholder="459-12-56"
            className={s.input_name}
          ></input>
        </label>
      </div>

      <button type="submit" className="Button">
        Add contact
      </button>
    </form>
  );
}
