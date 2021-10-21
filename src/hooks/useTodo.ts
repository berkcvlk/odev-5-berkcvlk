import { useContext } from "react";
import { TodoContext } from "contexts/Todo";

// To avoid imports all of them every time when needed
const useTodo = () => useContext(TodoContext);

export default useTodo;
