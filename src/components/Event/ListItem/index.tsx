import React, { useState, useContext } from 'react'
import './style.scss';
import { Event } from '../../../model/event';
import { Redirect } from 'react-router-dom';
import { EventService } from '../../../services/EventService';
import { EventListToggleContext } from '../../../context/EventListToggleContext';

const EventListItem = (props: any) => {
  const { id, name, eventDate, createdBy, location, commentsCount, budget, items, description } = props.item;
  const [redirect, setRedirect] = useState(false);
  const eventService =  new EventService();
  const {eventsList, assignEventsList } = useContext(EventListToggleContext);

  const editEvent = () => { setRedirect(true); }
  function deleteHandler() {
    let data = eventService.removeEvent(id);
    data.then((response: any) => {
      const updatedList = eventsList.filter((event: Event) => event.id !== id);
      assignEventsList(updatedList);
    }, (error) => {
      console.log(error);
      console.log('something went wrong')
    });
  }

  return (
    <tr>
      <td className="list-item">{name}</td>
      <td className="list-item">{eventDate}</td>
      <td className="list-item">{budget}</td>
      <td className="list-item">{items}</td>
      <td className="list-item">{description}</td>
      <td className="list-item">{location}</td>
      <td className="list-item">{createdBy}</td>
      <td className="list-item">{commentsCount}</td>
      <td className="list-item">
        <span onClick={() => editEvent()}> Edit </span> ||
        <span onClick={() => deleteHandler()}> Delete </span>
      </td>
      {(redirect ? <Redirect to={{ pathname: "/edit-event", state: { eventID: id } }} /> : '')}
    </tr>
  );
}

export default EventListItem;
