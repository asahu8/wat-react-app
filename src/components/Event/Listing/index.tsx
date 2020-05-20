import React, { useEffect, useContext} from 'react'
import { EventListToggleContext } from '../../../context/EventListToggleContext';
import EventListItem from '../ListItem';
import './style.scss';


const EventsListing = () => {
  const {eventsList, assignEventsList } = useContext(EventListToggleContext);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('http://localhost:4001/events');
      response.json().then(result => {
        console.log(result);
        assignEventsList(result.data)
      });
    }
    fetchEvents();
  }, []);

  return(
      <table className="events-table">
      <thead>
      <tr>
        <th className="events-table__heading">Event Name </th>
        <th className="events-table__heading">Date</th>
        <th className="events-table__heading">Created By </th>
        <th className="events-table__heading">Comments Count</th>
      </tr>
      </thead>
      <tbody>
        { eventsList.map((event: any) => { return (<EventListItem item={event} key={event.id} />)}) }
      </tbody>
    </table>
   )
  }

  export default EventsListing;