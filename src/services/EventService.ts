import { Event } from "../model/event";

export class EventService {

  readonly  BASE_URL = "http://localhost:4001"
  async getAllEvents() {
    return await fetch(`${this.BASE_URL}/events`);
  }

  async getEventCards() {
    return await fetch(`${this.BASE_URL}/events/cards`);
  }

  async getEvent(eventID: number) {
    return await fetch(`${this.BASE_URL}/events/${eventID}`);
  }

  removeEvent(eventID: number) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${this.BASE_URL}/events/${eventID}`, requestOptions);
  }

  saveEvent(event: Event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { event })
    };
    return fetch(`${this.BASE_URL}/events`, requestOptions);
  }

  updateEvent(event: Event) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { event })
    };
    return fetch(`${this.BASE_URL}/events/${event.id}`, requestOptions);
  }

}