import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = (props) => {
  const {
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
  } = props;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelContactChange = (e) => {
    setContact(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type='date'
        value={date}
        onChange={handleDateChange}
        min={getTodayString}
      />
      <input type='time' value={time} onChange={handleTimeChange} />
      <ContactPicker        
        contacts={contacts}
        onChange={handelContactChange}
      />
      <input type='submit' />
    </form>
  );
};
