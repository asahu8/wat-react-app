import React from 'react'
import { Event } from '../../../model/event';
import './style.scss';
import EventForm from './EventForm';
import { EventService } from '../../../services/EventService';
import { useHistory } from 'react-router-dom';

const CreateEvent = (props: any) => {
 const history = useHistory();

 const submitHandler = (event: Event) => {
  const eventService = new EventService();

  eventService.saveEvent(event)
  .then((result: any) => {
    history.push("/events-list");
  });
 }

  return(
    <EventForm event= {new Event()} handleSubmit = {submitHandler} buttonLabel= {'Create Event'} > </EventForm>
   );
}

export default CreateEvent;