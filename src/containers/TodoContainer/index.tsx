import { TodoList, NewTodo, Icon } from "components";
import * as S from "./styles";

const TodoContainer = () => {
  return (
    <S.Container>
      <NewTodo />
      <TodoList list={[{ text: "berk" }, { text: "civelek" }]} />
      <Icon name="close" />
    </S.Container>
  );
};

export default TodoContainer;
