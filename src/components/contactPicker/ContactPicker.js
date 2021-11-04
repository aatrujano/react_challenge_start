import React from 'react';

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;

  return (
    <div>
      <select onChange={onChange}>
        <option value='' key={0}>
          --Please choose a contact--
        </option>
        {contacts.map((contact, index) => (
          <option value={contact.Name} key={index++}>
            {contact.Name}
          </option>
        ))}
      </select>
    </div>
  );
};
