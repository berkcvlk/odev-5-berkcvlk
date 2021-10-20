import React, { FC, useContext } from "react";

import { Icon } from "components";
import { TodoContext } from "contexts/todoContext";
import { ITodo } from "./types";
import * as S from "./styles";

const Todo: FC<ITodo> = ({ id, text, isChecked }) => {
  const { toggleChecked, setText, removeTodo } = useContext(TodoContext);

  return (
    <S.Todo>
      <S.CheckBox onClick={() => toggleChecked(id)} checked={isChecked}>
        {isChecked && <Icon name="check" />}
      </S.CheckBox>
      <S.TodoText
        suppressContentEditableWarning
        spellCheck={false}
        onBlur={(event: React.FocusEvent) =>
          setText(id, event.target.textContent!)
        }
        checked={isChecked}
        contentEditable={!isChecked}
      >
        {text}
      </S.TodoText>
      <S.CloseButton onClick={() => removeTodo(id)}>
        <Icon name="close" />
      </S.CloseButton>
    </S.Todo>
  );
};

export default Todo;
