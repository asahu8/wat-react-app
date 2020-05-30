// import { Event } from "../model/event";

export class FooterService {

  readonly  BASE_URL = "http://localhost:4001"
  async getAllContent() {
    return await fetch(`${this.BASE_URL}/footer-contents`);
  }
}