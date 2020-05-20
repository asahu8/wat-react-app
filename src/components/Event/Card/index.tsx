import React, { useContext } from 'react'
import { EventListToggleContext } from '../../../context/EventListToggleContext';

const EventCard = (props: any) => {
  const { cardType, totalEvents } = props;
  const { showEvents, toggleEventView } = useContext(EventListToggleContext);

  const toggleEventListing = () => {
    toggleEventView(!showEvents);
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