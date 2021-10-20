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
        <S.NoListFound>Great, there is nothing to do!</S.NoListFound>
      ) : (
        <TodoList list={todoList} />
      )}
    </S.Container>
  );
};

export default TodoContainer;
