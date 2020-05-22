import { Event } from "../model/event";

export class EventService {

  readonly  BASE_URL = "http://localhost:4001"
  async getAllEvents() {
    return await fetch(`${this.BASE_URL}/events`);
  }

  saveEvent(event: Event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { event })
    };
    return fetch(`${this.BASE_URL}/events`, requestOptions);
  }

}