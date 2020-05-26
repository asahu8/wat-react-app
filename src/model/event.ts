export class Event {
  id: number;
  name: string
  budget: number
  description: string
  items: string;
  eventDate: string
  location: string

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.name = obj && obj.name;
    this.budget = obj && obj.budget;
    this.description = obj && obj.description;
    this.items =  obj && obj.items;
    this.eventDate =  obj && obj.eventDate;
    this.location =  obj &&  obj.location
  }

  isPastEvent() {
    return (this.eventDate < Date.now().toString());
  }

}