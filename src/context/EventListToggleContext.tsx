import React, { useState,  createContext } from 'react'
import { Event } from '../model/event';

type EventCardState =  {
  id: number,
  cardType: string;
  cardName: string;
  eventCount: number;
}

type eventDisplayState = {
  eventsList: any;
  assignEventsList: any;
  eventCardDetails: Array<EventCardState>;
  assignEventCardDetails: any;
  event: any,
  assignEvent: any
}

export const EventListToggleContext =  createContext<eventDisplayState>({
  eventsList: [],
  assignEventsList: null,
  eventCardDetails: new Array<EventCardState>(),
  assignEventCardDetails: null,
  event: new Event(),
  assignEvent: null
});

function EventListToggleProvider(props: any) {
  const [eventsList, setEventsList] = useState([]);
  const [eventCardDetails, setEventCardDetails] = useState([]);
  const [event, setEvent] = useState({});

  const assignEventsList = (e: any) => setEventsList(e);
  const assignEventCardDetails = (e: any) => setEventCardDetails(e);
  const assignEvent = (e: any) => { setEvent(e); }

  return (
    <EventListToggleContext.Provider
      value={{eventsList, assignEventsList, eventCardDetails, assignEventCardDetails, event, assignEvent}}>
      {props.children}
    </EventListToggleContext.Provider>
  );
}

export default  EventListToggleProvider;
