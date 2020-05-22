import React, { useEffect, useContext, useState } from 'react'
import EventForm from './EventForm';
import { EventService } from '../../../services/EventService';
import { EventListToggleContext } from '../../../context/EventListToggleContext';
import { Event } from "../../../model/event";
import { useHistory } from 'react-router-dom';

const EditEvent = (props: any) => {
  const eventService = new EventService();
  const { assignEvent } = useContext(EventListToggleContext);
  const [fetchedEvent, setFetchedEvent] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function fetchEvent(evenID: number) {
      let response = await eventService.getEvent(evenID);
      response.json().then((response: any) => {
        assignEvent(response);
        setFetchedEvent(response);
      })
    }
    fetchEvent(props.location.state.eventID);
  }, []);

  const updateEventHandler = (event: Event) => {
    const eventService = new EventService();
    eventService.updateEvent(event)
    .then((result: any) => {
      history.push("/events-list");
    });
  }

  return (
    <EventForm event={ fetchedEvent } handleSubmit ={ updateEventHandler } buttonLabel={' Update Event' } />
   );
 }

export default EditEvent;