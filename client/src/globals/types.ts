export interface Todo {
  id: number;
  message: string;
  completed: boolean;
  time_updated: Date;
  time_created: Date;
}

export interface ITodoProps {
  todos: Array<Todo>;
}
