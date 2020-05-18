import React, { useState, createContext } from 'react'

export const EventsContext =  createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState(
    [
      { name: 'Cycling Event', price: "5000", id: '23123'},
      { name: 'Run a marathon', price: "$20", id: '23124'},
      { name: 'Covid support', price: "$30", id: '23125'}
  ]);

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
