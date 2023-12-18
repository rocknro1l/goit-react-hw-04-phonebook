import React from 'react';
import { List, DeleteBtn, ContactItem } from './ContactList.styled';
import { nanoid } from 'nanoid';

export const ContactList = ({ onDelete, contacts }) => {
  return (
    <List>
      {contacts.map(el => (
        <ContactItem key={nanoid()}>
          <h4>
            {el.name}: {el.number}
          </h4>
          <DeleteBtn onClick={() => onDelete(el.id)} type="button">
            DELETE
          </DeleteBtn>
        </ContactItem>
      ))}
    </List>
  );
};
