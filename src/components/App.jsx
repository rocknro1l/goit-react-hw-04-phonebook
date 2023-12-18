import React, { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import ContactInput from './ContactInput/ContactInput';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import { SearchContact } from './SearchContact/SearchContact';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(loadLocalStorage('CONTACTS'));
  }, []);

  useEffect(() => {
    saveLocalStorage('CONTACTS', contacts);
  }, [contacts]);

  //Storage

  const saveLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadLocalStorage = key => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      console.log(error.message);
      return localStorage.getItem(key);
    }
  };

  const handlerSearch = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const handlerAddContact = (name, number) => {
    const result = contacts.some(el => el.name === name);
    if (result) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [
      ...prevState.contacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  return (
    <Form
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h3>Phonebook</h3>
      <ContactInput onContactAdd={handlerAddContact} />
      <h3>Contacts</h3>
      <SearchContact value={filter} onSearch={handlerSearch} />
      <ContactList onDelete={handleDelete} contacts={filterContacts()} />
    </Form>
  );
};
