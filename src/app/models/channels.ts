import { Message } from './messages';
export interface Channel {
  name: string;
  messages: Message[];
}
