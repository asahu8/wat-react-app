import React, { useContext } from 'react'
import { EventsContext } from '../../../context/EventsContext';

const EventCard = (props) => {
  const { cardType, totalEvents } = props;
  const { showEventsListingToggle, } = useContext(EventsContext);
  const [ showEvents, setshowEvents ] = showEventsListingToggle;

  const toggleEventListing = () => {
    setshowEvents(!showEvents);
  }

  const getCardLabel = () => {
    return (cardType === "past" ? "Past Events" : "Future Events");
  }

  return(
    <button className={ `events__individual-block events__${cardType}`} onClick={toggleEventListing}>
      <h2> {getCardLabel()}</h2>
      <h2> {totalEvents} </h2>
    </button>
   );
  }

export default EventCard;