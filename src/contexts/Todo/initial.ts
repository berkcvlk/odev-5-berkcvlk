export const initialState = {
  todoList: [
    { id: 1001, text: "What happened to Monday?", isChecked: true },
    { id: 1002, text: "Who Am I?", isChecked: false },
    { id: 1003, text: "Legend", isChecked: false },
  ],
  addTodo: () => {},
  removeTodo: () => {},
  toggleChecked: () => {},
  setText: () => {},
  filterByStatus: () => [],
  changeFilterToken: () => {},
};
