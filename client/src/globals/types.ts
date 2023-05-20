export interface Todo {
  message: string;
  time_updated: Date;
  time_created: Date;
}

export interface ITodoProps {
  todos: Array<Todo>;
}

export interface ITodoProp {
  todo: Todo;
}