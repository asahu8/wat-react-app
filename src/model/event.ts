export interface IEvent {
  name: string,
  estimatedBudget: number,
  description: string,
  itemCategories: string;
  eventDate: string;
  location: string;
}


export class Event implements IEvent {
  name: string
  estimatedBudget: number
  description: string
  itemCategories: string;
  eventDate: string
  location: string

  constructor(obj: any) {
    this.name = obj.name;
    this.estimatedBudget = obj.estimatedBudget;
    this.description = obj.description;
    this.itemCategories = obj.itemCategories;
    this.eventDate = obj.eventDate;
    this.location = obj.location
  }

  isPastEvent() {
    return (this.eventDate < Date.now().toString());
  }

}