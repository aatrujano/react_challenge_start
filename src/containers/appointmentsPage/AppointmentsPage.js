import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  const { contacts, appointments, addAppointment } = props;
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };
  const [contact, setContact] = useState('');
  const changeContact = (newContact) => {
    setContact(newContact);
  };
  const [date, setDate] = useState('');
  const changeDate = (newDate) => {
    setDate(newDate);
  };
  const [time, setTime] = useState('');
  const changeTime = (newTime) => {
    setTime(newTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment({
      Title: title,
      Contact: contact,
      Date: date,
      Time: time,
    });

    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          contacts={contacts}
          title={title}
          setTitle={changeTitle}
          contact={contact}
          setContact={changeContact}
          date={date}
          setDate={changeDate}
          time={time}
          setTime={changeTime}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments}/>
      </section>
    </div>
  );
};
