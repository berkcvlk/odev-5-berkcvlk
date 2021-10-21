import { useTodo } from "hooks";
import { TodoList, NewTodo, Filters } from "components";
import * as S from "./styles";

const TodoContainer = () => {
  const { todoList, filterByStatus } = useTodo();

  return (
    <S.Container>
      <S.Title>Toodos</S.Title>
      <NewTodo />
      <S.Hr />
      {todoList.length === 0 ? (
        <S.NoListFound>Great, there is nothing to do!</S.NoListFound>
      ) : (
        <>
          <Filters />
          <TodoList list={filterByStatus()} />
        </>
      )}
    </S.Container>
  );
};

export default TodoContainer;
