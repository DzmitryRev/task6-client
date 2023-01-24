import { IMessage } from "./message-model";

export interface IUser {
  name: string;
  messages: IMessage[];
}
