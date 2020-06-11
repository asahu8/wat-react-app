import React, { useState } from 'react'
import { Event } from '../../../model/event';
import './style.scss';
import EventForm from './EventForm';
import { EventService } from '../../../services/EventService';
import { useHistory } from 'react-router-dom';

const CreateEvent = (props: any) => {
 const history = useHistory();
 const [loading, setLoading]  = useState(false);

 const submitHandler = async(event: Event) => {
  const eventService = new EventService();
  setLoading(true);
  await eventService.saveEvent(event);
  setLoading(false);
  history.push("/events-list");
 }


  return(
    <EventForm event={new Event()} handleSubmit = {submitHandler} buttonLabel= {'Create Event'} loading={loading} />
   );
}

export default CreateEvent;