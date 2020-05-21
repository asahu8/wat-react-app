import React, { useState,  createContext } from 'react'


type eventDisplayState = {
    showEvents: boolean;
    eventsList: any;
    toggleEventView: any,
    assignEventsList: any;
    eventCardDetails: Array<EventCardState>;
    assignEventCardDetails: any;
}

type EventCardState =  {
    cardType: string;
    cardName: string;
    eventCount: number;
}

export const EventListToggleContext =  createContext<eventDisplayState>({
    showEvents: false,
    toggleEventView: null,
    eventsList: [],
    assignEventsList: null,
    eventCardDetails: new Array<EventCardState>(),
    assignEventCardDetails: null
});

function EventListToggleProvider(props: any) {
    const [showEvents, setShowEvents] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    const [eventCardDetails, setEventCardDetails] = useState([]);

    const toggleEventView = () => setShowEvents(!showEvents);
    const assignEventsList = (e: any) =>
        setEventsList(e);
    const assignEventCardDetails = (e: any) =>
        setEventCardDetails(e);


    return (
        <EventListToggleContext.Provider
            value={{ showEvents, toggleEventView, eventsList, assignEventsList, eventCardDetails, assignEventCardDetails}}>
            {props.children}
        </EventListToggleContext.Provider>
    );
}


export default  EventListToggleProvider;