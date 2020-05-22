import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const EventCard = (props: any) => {
  const { cardType, cardTitle, totalEvents } = props;
  const [redirect, setRedirect] = useState(false);
  const navigateToEvents =() => {
    setRedirect(true);
  }

  return(
    <button className={ `events__individual-block events__${cardType}`} onClick={() => navigateToEvents()}>
      <h2> {cardTitle}</h2>
      <h2> {totalEvents} </h2>
      { redirect ? <Redirect to='/events-list'/> : '' }
    </button>
   );
  }

export default EventCard;