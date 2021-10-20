import { FC } from "react";

import Todo from "./Todo";
import { ITodoList } from "./types";
import * as S from "./styles";

const TodoList: FC<ITodoList> = ({ list }) => {
  return (
    <S.TodoList>
      {list.map((item, index) => (
        <Todo key={index} {...item} />
      ))}
    </S.TodoList>
  );
};

export default TodoList;
