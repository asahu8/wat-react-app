// import { Event } from "../model/event";

export class ContributorService {

  readonly  BASE_URL = "http://localhost:4001"
  async getAllContributors() {
    return await fetch(`${this.BASE_URL}/contributors`);
  }

  async getContributor(contributorID: number) {
    return await fetch(`${this.BASE_URL}/contributors/${contributorID}`);
  }
}