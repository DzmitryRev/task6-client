import axios from "axios";
import { IMessage } from "../models/message-model";
import { IUser } from "../models/user-model";

class MailService {
  static URL = "http://localhost:3006/api/";

  static getMessages(name: string) {
    return axios.get<IUser>(`${this.URL}messages/${name}`);
  }

  static getAllUserNames() {
    return axios.get<string[]>(`${this.URL}names`);
  }

  static sendMessage(recipient: string, author: string, subject: string, body: string) {
    return axios.post<{ message: Pick<IMessage, "author" | "subject" | "body"> }>(
      `${this.URL}message`,
      {
        recipient,
        message: { author, subject, body },
      }
    );
  }
}

export default MailService;
