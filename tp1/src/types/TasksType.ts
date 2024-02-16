import type { User } from "./User";

export interface TasksType {
  id: number;
  text: string;
  completed: boolean;
  editing: boolean;
  userAssigned: User;
}
