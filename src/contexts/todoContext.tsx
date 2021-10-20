import { FC, createContext, useState } from "react";

import { ITodo } from "components/TodoList/Todo/types";

interface ITodoContext {
  todoList: ITodo[];
  addTodo: (item: ITodo) => void;
  removeTodo: (id: number) => void;
  toggleChecked: (id: number) => void;
  setText: (id: number, text: string) => void;
}

// Initialize the first render state for ts
const initialState = {
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleChecked: () => {},
  setText: () => {},
};

export const TodoContext = createContext<ITodoContext>(initialState);

const Provider: FC = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: 1, text: "berk", isChecked: false },
    { id: 2, text: "civelek", isChecked: false },
  ]);

  /**
   * Get the index of todo by id
   */
  const getIndexById = (id: number) => {
    return todoList.findIndex((item) => item.id === id);
  };

  /**
   * Set the newer text of the todo
   * This will be use when the editable content span
   * on blur event fired.
   */
  const setText = (id: number, text: string) => {
    const newList = [...todoList];
    const index = getIndexById(id);

    // Set new text of todo;
    newList[index].text = text;

    // Update state
    setTodoList(newList);
  };

  /**
   * Toggle the isChecked of the related todo
   */
  const toggleChecked = (id: number) => {
    const newList = [...todoList];
    const index = getIndexById(id);

    // Toggle the todo isChecked state
    newList[index].isChecked = !newList[index].isChecked;

    // Update state
    setTodoList(newList);
  };

  /**
   * Add new todo item to the list
   */
  const addTodo = (todo: ITodo) => {
    setTodoList((prevTodos) => [...prevTodos, todo]);
  };

  /**
   * Remove the related todo by id
   */
  const removeTodo = (id: number) => {
    setTodoList((prevTodos) => [...prevTodos.filter((todo) => todo.id !== id)]);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, removeTodo, toggleChecked, setText }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Provider;
