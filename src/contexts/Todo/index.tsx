import { FC, createContext, useState } from "react";

import { initialState } from "./initial";
import { ITodoContext, TodoStatus } from "./types";
import { ITodo } from "components/TodoList/Todo/types";

export const TodoContext = createContext<ITodoContext>(initialState);

const Provider: FC = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodo[]>(initialState.todoList);
  const [filterToken, setFilterToken] = useState<TodoStatus>("ALL");

  /**v
   * Get the index of todo by id
   */
  const getIndexById = (id: number): number => {
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
   * Change filter token handler
   */
  const changeFilterToken = (filter: TodoStatus) => {
    setFilterToken(filter);
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
   * Filter list by ALL | ACTIVE | COMPLETED
   */
  const filterByStatus = (): ITodo[] => {
    const filterOptions = {
      ALL: { filter: null },
      ACTIVE: { filter: true },
      COMPLETED: { filter: false },
    };

    return [...todoList].filter(
      (todo) => todo.isChecked !== filterOptions[filterToken].filter
    );
  };

  /**
   * Remove the related todo by id
   */
  const removeTodo = (id: number) => {
    setTodoList((prevTodos) => [...prevTodos.filter((todo) => todo.id !== id)]);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        removeTodo,
        toggleChecked,
        setText,
        filterByStatus,
        changeFilterToken,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Provider;
