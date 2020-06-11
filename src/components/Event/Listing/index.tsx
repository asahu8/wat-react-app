import React, { useEffect, useContext, useState} from 'react'
import { EventListToggleContext } from '../../../context/EventListToggleContext';
import EventListItem from '../ListItem';
import './style.scss';
import { EventService } from '../../../services/EventService';
import { Table } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import WatLoader from '../../UI/loader/wat-loader';

const EventsListing = () => {
  const {eventsList, assignEventsList } = useContext(EventListToggleContext);
  const eventService =  new EventService();
  const [loading, setLoading]  = useState(false);
  const history = useHistory();

  useEffect(() => {
    // TODO: Handle this part efficiently later. For now fetching events for every landing!
    // if( _.isEmpty(eventsList)) { showAllEvents(); }
    showAllEvents();
  }, []);

  const showAllEvents = async() => {
    setLoading(true);
    let response = await eventService.getAllEvents();
    assignEventsList(response.data);
    setLoading(false);
  }

  return(
   loading ? <WatLoader /> :
    <div className="events-listing ui basic segment">
      <div className="button-navs">
        <button className="ui right floated blue button" onClick={() => history.push('/events')}> Back</button>
        <button className="ui left floated teal button" onClick={() => history.push('/add-event')}> Add Event </button>
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell> Event Name </Table.HeaderCell>
          <Table.HeaderCell> Date </Table.HeaderCell>
          <Table.HeaderCell> budget </Table.HeaderCell>
          <Table.HeaderCell> items </Table.HeaderCell>
          <Table.HeaderCell> description </Table.HeaderCell>
          <Table.HeaderCell> location</Table.HeaderCell>
          <Table.HeaderCell> Created by </Table.HeaderCell>
          <Table.HeaderCell> Comments Count </Table.HeaderCell>
          <Table.HeaderCell> Action </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { eventsList.map((event: any) => {return (<EventListItem item={event} key={event.id} />)}) }
        </Table.Body>
      </Table>
    </div>
   )
  }

  export default EventsListing;
