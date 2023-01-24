export type IMessage = Readonly<{
  author: string;
  subject: string;
  message: string;
  _id: string;
}>;
