import React, { useContext } from 'react'
import './style.scss';
import Footer from '../../Footer';

import { EventsContext } from '../../../context/EventsContext'
import EventsListing from '../Listing';
import EventCard from '../Card';


const EventDashboard = (props) => {
  const footerContent = "We are proud of what we do, and we do what we are proud of.....";
  const{ showEventsListingToggle, } = useContext(EventsContext);
  const [ showEvents,] = showEventsListingToggle;
  const PAST_CARD = 'past';
  const FUTURE_CARD = 'future';


  const renderDashboard = () => {
    return (<div>
      <div className='events__wrapper'>
        <button className="events__create"> + Create new event </button>
      </div>
      <div className='events__block'>
        <EventCard cardType= {PAST_CARD} totalEvents= {7}/>
        <EventCard cardType= {FUTURE_CARD} totalEvents={3}/>
      </div>
    </div>
    )
  }


  return(
    <div className="events">
      {showEvents ? <EventsListing /> : renderDashboard() }
      <Footer content={footerContent}/>
    </div>
   )
  }

export default EventDashboard;