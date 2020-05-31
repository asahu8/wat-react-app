import React, { useContext, useEffect, useState } from 'react'
import './style.scss';
import _ from 'lodash';
import Footer from '../../Footer';
import { EventListToggleContext } from '../../../context/EventListToggleContext'
import EventCard from '../Card';
import SetupButton from '../SetupButton';
import { EventService } from '../../../services/EventService';
import WatLoader from '../../UI/loader/wat-loader';

const EventDashboard = () => {
  const { eventCardDetails, assignEventCardDetails } = useContext(EventListToggleContext);
  const [loading, setLoading]  = useState(false);
  const footerContent = "We are proud of what we do, and we do what we are proud of.....";
  let eventService: EventService = new EventService();

  async function prepareDashboard() {
    try {
      setLoading(true);
     let response = await eventService.getEventCards();
      setTimeout(() => {
        assignEventCardDetails(response.data);
        setLoading(false);
      }, 3000);
    }catch(error) {
      if(error.response) {
        console.log(error.response.data);
      }
    }
  }

  useEffect(() => {
    // load the cards from backend only once
    if( _.isEmpty(eventCardDetails)) { prepareDashboard(); }
  }, []);

  const renderDashboard = () => {
    return (
      <div>
        <SetupButton />
        <div className='events__block'>
          {
            eventCardDetails.map(eventCard => {
              return (<EventCard cardType={ eventCard.cardType} cardTitle={eventCard.cardName} totalEvents= {eventCard.eventCount} key={eventCard.id} />)
            })
          }
      </div>
    </div>
    )
  }

  return(
    <div className="events">
      { loading ? <WatLoader/> : renderDashboard() }
      <Footer content={footerContent}/>
    </div>
   )
  }
export default EventDashboard;