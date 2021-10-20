import { FC } from "react";

import { ITodo } from "./types";
import * as S from "./styles";

const Todo: FC<ITodo> = ({ text }) => {
  return <S.Todo>{text}</S.Todo>;
};

export default Todo;
