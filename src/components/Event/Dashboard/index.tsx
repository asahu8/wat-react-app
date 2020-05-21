import React, { useContext, useEffect } from 'react'
import './style.scss';
import Footer from '../../Footer';

import { EventListToggleContext } from '../../../context/EventListToggleContext'
import EventsListing from '../Listing';
import EventCard from '../Card';


const EventDashboard = () => {
  const { eventCardDetails, assignEventCardDetails } = useContext(EventListToggleContext);

  const footerContent = "We are proud of what we do, and we do what we are proud of.....";
  const PAST_CARD = 'past';
  const FUTURE_CARD = 'future';

  useEffect(() => {
    async function fetchEventCards() {
      const response = await fetch("http://localhost:4001/event-cards");
      response.json().then(result => {
        console.log(result);
        assignEventCardDetails(result.data);
      });
    }
    fetchEventCards();
  }, []);

  const renderDashboard = () => {
    return (
      <div>
      <div className='events__wrapper'>
        <button className="events__create"> + Create new event </button>
      </div>
      <div className='events__block'>
        {
        eventCardDetails.map(eventCard => {
          return ( <EventCard cardType={ eventCard.cardType} cardTitle={eventCard.cardName} totalEvents= {eventCard.eventCount}/>)
        })
        }
      </div>
    </div>
    )
  }

  const {showEvents} = useContext(EventListToggleContext);

  return(
    <div className="events">
      {showEvents ? <EventsListing /> : renderDashboard() }
      <Footer content={footerContent}/>
    </div>
   )
  }
export default EventDashboard;