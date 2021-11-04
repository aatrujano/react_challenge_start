import React, { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const contacts = props.contacts;
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const changeName = (newName) => {
    setName(newName);
  };
  const [phone, setPhone] = useState('');
  const changePhone = (newPhone) => {
    setPhone(newPhone);
  };
  const [email, setEmail] = useState('');
  const changeEmail = (newEmail) => {
    setEmail(newEmail);
  };
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (isDuplicate === false) {
      props.addContact({
        Name: name,
        Phone: phone,
        email: email,
      });

      setName('');
      setPhone('');
      setEmail('');
    }
    
    alert('contact already on your list');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const nameCheck = contacts.filter((contact) => contact.Name === name);

    if (nameCheck.length > 0) {
      setIsDuplicate(!isDuplicate);
    }
    // eslint-disable-next-line
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          setName={changeName}
          phone={phone}
          setPhone={changePhone}
          email={email}
          setEmail={changeEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
