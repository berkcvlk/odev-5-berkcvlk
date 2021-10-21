import { useState } from "react";

import { useTodo } from "hooks";
import { TodoStatus } from "contexts/Todo/types";
import * as S from "./styles";

const Filters = () => {
  const { changeFilterToken } = useTodo();
  const [activeIndex, setActiveIndex] = useState(0);

  const filters: { filter: TodoStatus; name: string }[] = [
    { filter: "ALL", name: "All" },
    { filter: "ACTIVE", name: "Active" },
    { filter: "COMPLETED", name: "Completed" },
  ];

  const onFilterTokenChange = (filter: TodoStatus, index: number) => {
    changeFilterToken(filter);
    setActiveIndex(index);
  };

  return (
    <S.Filters>
      <S.See>See</S.See>
      <S.Buttons>
        {filters.map((item, index) => (
          <S.FilterButton
            onClick={() => onFilterTokenChange(item.filter, index)}
            isActive={activeIndex === index}
          >
            {item.name}
          </S.FilterButton>
        ))}
      </S.Buttons>
    </S.Filters>
  );
};

export default Filters;
