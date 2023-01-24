import axios from "axios";

class MailService {
  static URL = "http://localhost:3006/api/";

  static getMessages(name: string) {
    return axios.get(`${this.URL}messages/${name}`);
  }
}

export default MailService;
