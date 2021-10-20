import { FC } from "react";

import Check from "./svgs/Check";
import Close from "./svgs/Close";

interface IIcon {
  name: string;
}

const Icon: FC<IIcon> = ({ name, ...rest }) => {
  const icons: { [index: string]: JSX.Element } = {
    check: <Check />,
    close: <Close />,
  };

  return <>{icons[name]}</>;
};

export default Icon;
