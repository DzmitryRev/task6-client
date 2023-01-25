export type IMessage = {
  author: string;
  subject: string;
  body: string;
  _id: string;
};

export type IMessageFor = {
  recipient: string;
  subject: string;
  body: string;
};
