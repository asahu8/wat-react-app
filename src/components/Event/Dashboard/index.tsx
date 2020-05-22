import React, { useContext, useEffect } from 'react'
import './style.scss';
import Footer from '../../Footer';
import { EventListToggleContext } from '../../../context/EventListToggleContext'
import EventCard from '../Card';
import SetupButton from '../SetupButton';
import { EventService } from '../../../services/EventService';

const EventDashboard = () => {
  const { eventCardDetails, assignEventCardDetails } = useContext(EventListToggleContext);
  const footerContent = "We are proud of what we do, and we do what we are proud of.....";
  let eventService: EventService = new EventService();

  useEffect(() => {
    async function getAll() {
      let data = await eventService.getEventCards();
      data.json().then((response: any) => {
        assignEventCardDetails(response.data);
      })
    }
    getAll();
  }, []);


  const renderDashboard = () => {
    return (
      <div>
      <SetupButton />
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

  return(
    <div className="events">
      { renderDashboard() }
      <Footer content={footerContent}/>
    </div>
   )
  }
export default EventDashboard;