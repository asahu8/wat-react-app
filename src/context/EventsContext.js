import React, { useState, createContext } from 'react'

export const EventsContext =  createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(false);


  return(
    <EventsContext.Provider
      value={{
        showEventsListingToggle: [showEvents, setShowEvents],
        eventsListing: [events, setEvents]
      }}>
      { props.children }
    </EventsContext.Provider>
   );
  }
