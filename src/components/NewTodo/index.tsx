import { FC, FormEvent, useContext, useState } from "react";

import { TodoContext } from "contexts/todoContext";
import * as S from "./styles";

const NewTodo: FC = () => {
  const [value, setValue] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Check for basic validation
    if (!value && value.length < 3) {
      return;
    }

    addTodo({
      id: Math.random(),
      text: value,
      isChecked: false,
    });

    // Reset input field
    setValue("");
  };

  return (
    <S.NewTodoForm onSubmit={handleSubmit}>
      <S.New>New</S.New>
      <S.Input
        placeholder="What needs to be done?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </S.NewTodoForm>
  );
};

export default NewTodo;
