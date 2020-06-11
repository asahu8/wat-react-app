import { axiosClient } from "./axiosClient";
import { Event } from "../model/event";

export class EventService {
  getAllEvents = async() => {
    return await axiosClient.get('events');
  }

  getEventCards = async() => {
    return await axiosClient.get('events/cards');
  }

  getEvent = async(eventID: number) => {
    return await axiosClient.get(`events/${eventID}`);
  }

  removeEvent = async(eventID: number) =>{
    return await axiosClient.delete(`events/${eventID}`);
  }

  saveEvent = async(event: Event)  => {
    return await axiosClient.post(`events/`, event);
  }

  updateEvent = async(event: Event) => {
    return await axiosClient.post(`events/`, event);
  }

}