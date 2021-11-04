import React from 'react';

export const ContactForm = (props) => {
  const handleNameChange = (e) => {
    props.setName(e.target.value)
  };

  const handlePhoneChange = (e) => {
    props.setPhone(e.target.value)
  };

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value)
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={props.name}
        onChange={handleNameChange}
      />
      <input
        type='tel'
        placeholder='Phone'
        value={props.phone}
        onChange={handlePhoneChange}
      />
      <input
        type='email'
        placeholder='e-mail'
        value={props.email}
        onChange={handleEmailChange}
      />
      <input type='submit' />
    </form>
  );
};
