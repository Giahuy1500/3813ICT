import { User } from './user';
import { Channel } from './channels';
export interface Group {
  channels: Channel[];
  name: string;
}
