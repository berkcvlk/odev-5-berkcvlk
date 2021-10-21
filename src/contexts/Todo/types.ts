import { ITodo } from "components/TodoList/Todo/types";

export type TodoStatus = "ALL" | "ACTIVE" | "COMPLETED";

export interface ITodoContext {
  todoList: ITodo[];
  addTodo: (item: ITodo) => void;
  removeTodo: (id: number) => void;
  toggleChecked: (id: number) => void;
  setText: (id: number, text: string) => void;
  filterByStatus: () => ITodo[];
  changeFilterToken: (filter: TodoStatus) => void;
}
