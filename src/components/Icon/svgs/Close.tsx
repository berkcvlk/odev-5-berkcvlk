import { FC } from "react";

const Close: FC = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.667 9.333L8 8m0 0l1.333-1.333M8 8L6.667 6.667M8 8l1.333 1.333M14 8A6 6 0 112 8a6 6 0 0112 0z"
        stroke="#E86065"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;
