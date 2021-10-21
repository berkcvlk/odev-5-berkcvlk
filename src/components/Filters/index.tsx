import { useTodo } from "hooks";
import * as S from "./styles";

const Filters = () => {
  const { changeFilterToken } = useTodo();

  return (
    <S.Filters>
      <S.See>See</S.See>
      <S.Buttons>
        <S.FilterButton onClick={() => changeFilterToken("ALL")} isActive>
          All
        </S.FilterButton>
        <S.FilterButton onClick={() => changeFilterToken("ACTIVE")} isActive>
          Active
        </S.FilterButton>
        <S.FilterButton onClick={() => changeFilterToken("COMPLETED")} isActive>
          Completed
        </S.FilterButton>
      </S.Buttons>
    </S.Filters>
  );
};

export default Filters;
