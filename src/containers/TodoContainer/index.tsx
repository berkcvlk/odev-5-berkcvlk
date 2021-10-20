import { useContext } from "react";

import { TodoContext } from "contexts/todoContext";
import { TodoList, NewTodo } from "components";
import * as S from "./styles";

const TodoContainer = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <S.Container>
      <S.Title>Toodos</S.Title>
      <NewTodo />
      <S.Hr />
      {todoList.length === 0 ? (
        "Greate, there is nothing to do!"
      ) : (
        <TodoList list={todoList} />
      )}
    </S.Container>
  );
};

export default TodoContainer;
