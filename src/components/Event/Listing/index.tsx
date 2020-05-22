import React, { useEffect, useContext} from 'react'
import { EventListToggleContext } from '../../../context/EventListToggleContext';
import EventListItem from '../ListItem';
import './style.scss';
import { EventService } from '../../../services/EventService';

const EventsListing = () => {
  const {eventsList, assignEventsList } = useContext(EventListToggleContext);
  const eventService =  new EventService();

    useEffect(() => {
      async function getAll() {
        let data = await eventService.getAllEvents();
        data.json().then((response: any) => {
          assignEventsList(response.data)
        })
      }
      getAll();
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