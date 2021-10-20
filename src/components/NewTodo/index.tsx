import { FC } from "react";

import * as S from "./styles";

const NewTodo: FC = () => {
  return (
    <S.NewTodoForm>
      <S.New>New</S.New>
      <S.Input placeholder="What needs to be done?" />
    </S.NewTodoForm>
  );
};

export default NewTodo;
