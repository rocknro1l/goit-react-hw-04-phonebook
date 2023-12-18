import React, { useState } from 'react';
import { Input, Button } from './ContactInput.styled';

const ContactInput = ({ onContactAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onContactAdd(name, number);
    setName(name);
    setNumber(number);
  };

  const handlerChangeName = e => {
    setName(e.target.value);
  };

  const handlerChangePhone = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        onChange={handlerChangeName}
        type="text"
        name="name"
        value={name}
        required
      />
      <label htmlFor="phone">Phone</label>
      <Input
        id="phone"
        onChange={handlerChangePhone}
        type="tel"
        name="number"
        value={number}
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactInput;
