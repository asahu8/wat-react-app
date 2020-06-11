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
  const [loading, setLoading]  = useState(false);
  const currentEventID = props.location.state.eventID;

  useEffect(() => {
    fetchCurrentEvent(currentEventID);
  }, []);

  const fetchCurrentEvent = async(evenID: number) => {
    let response = await eventService.getEvent(evenID);
    assignEvent(response.data);
    setFetchedEvent(response.data);
  }

  const updateEventHandler = async(event: Event) => {
    setLoading(true);
    const response = await eventService.updateEvent(event);
    setLoading(false);
    history.push("/events-list");
  }

  return (
    <EventForm event={ fetchedEvent } handleSubmit ={ updateEventHandler } buttonLabel={'Update Event'}  loading={loading} />
   );
 }

export default EditEvent;