import { Auth } from "../model/Auth";
import { axiosClient } from "./axiosClient";

export class AuthenticationService {

  async login(authBody: Auth) {
    return await axiosClient.post('auth/login', authBody, { withCredentials: true});
  }

}