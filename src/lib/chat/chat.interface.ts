export enum MessageRole {
  Client = 1,
  Server,
}

export interface MessageData {
  content: string;
}

export interface Message {
  role: MessageRole;
  data: MessageData;
  createdAt: number;
}
