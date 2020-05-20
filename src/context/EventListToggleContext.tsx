import React, { useState,  createContext } from 'react'


type eventDisplayState = {
    showEvents: boolean;
    eventsList: any;
    toggleEventView: any,
    assignEventsList: any;
}

export const EventListToggleContext =  createContext<eventDisplayState>({
    showEvents: false,
    toggleEventView: null,
    eventsList: [],
    assignEventsList: null
});

function EventListToggleProvider(props: any) {
    const [showEvents, setShowEvents] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    const toggleEventView = () => setShowEvents(!showEvents);
    const assignEventsList = (e: any) =>
        setEventsList(e);

    return (
        <EventListToggleContext.Provider
            value={{ showEvents, toggleEventView, eventsList, assignEventsList}}>
            {props.children}
        </EventListToggleContext.Provider>
    );
}


export default  EventListToggleProvider;