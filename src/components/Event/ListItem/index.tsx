import React, { useState, useContext } from 'react'
import './style.scss';
import { Event } from '../../../model/event';
import { Redirect } from 'react-router-dom';
import { EventService } from '../../../services/EventService';
import { EventListToggleContext } from '../../../context/EventListToggleContext';
import { Table } from 'semantic-ui-react'

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
      console.log('something went wrong');
    });
  }

  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{eventDate}</Table.Cell>
      <Table.Cell>{budget}</Table.Cell>
      <Table.Cell>{items}</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{location}</Table.Cell>
      <Table.Cell>{createdBy}</Table.Cell>
      <Table.Cell>{commentsCount}</Table.Cell>
      <Table.Cell>
        <i className="edit icon" onClick={() => editEvent()} />
        <i className="trash icon" onClick={() => deleteHandler()} />
      </Table.Cell>
        {(redirect ? <Redirect to={{ pathname: "/edit-event", state: { eventID: id } }} /> : '')}
      </Table.Row>
  );
}

export default EventListItem;
