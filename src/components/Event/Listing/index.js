import React, { useEffect, useContext} from 'react'
import { EventsContext } from '../../../context/EventsContext';
import EventListItem from '../ListItem';
import './style.scss';

const EventsListing = (props) => {
  const { showEventsListingToggle, eventsListing} = useContext(EventsContext);
  const [ events, setEvents ] = eventsListing;

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('http://localhost:4001/events');
      response.json().then(result => {
        console.log(result);
        setEvents(result.data)
      });
    }
    fetchEvents();
  }, []);

  return(
    <table class="events-table">
      <thead>
      <tr>
        <th className="events-table__heading">Event Name </th>
        <th class="events-table__heading">Date</th>
        <th class="events-table__heading">Created By </th>
        <th class="events-table__heading">Comments Count</th>
      </tr>
      </thead>
      <tbody>
        { events.map(event => { return (<EventListItem item={event} key={event.id} />)}) }
      </tbody>
    </table>
   )
  }


export default EventsListing;