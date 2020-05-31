import { axiosClient } from "./axiosClient";
import { Event } from "../model/event";

export class EventService {
  async getAllEvents() {
    return await axiosClient.get('events');
  }

  async getEventCards() {
    return await axiosClient.get('events/cards');
  }

  async getEvent(eventID: number) {
    return await axiosClient.get(`events/${eventID}`);
  }

  removeEvent(eventID: number) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`http://localhost:4001/events/${eventID}`, requestOptions);
  }

  saveEvent(event: Event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { event })
    };
    return fetch(`http://localhost:4001/events`, requestOptions);
  }

  updateEvent(event: Event) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { event })
    };
    return fetch(`http://localhost:4001/events/${event.id}`, requestOptions);
  }

}