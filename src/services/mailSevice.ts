import axios from "axios";
import { IUser } from "../models/user-model";

class MailService {
  static URL = "http://localhost:3006/api/";

  static getMessages(name: string) {
    return axios.get<IUser>(`${this.URL}messages/${name}`);
  }
}

export default MailService;
