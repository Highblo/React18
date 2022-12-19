import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isSelected?: boolean;
  onClick: (assignee: string) => void;
}

export const Avatar: FC<Props> = (props) => {
  const { children, isSelected = false, onClick } = props;
  const border = isSelected ? "3px solid orange" : "1px solid gray";
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        border,
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "30px",
        userSelect: "none",
      }}
      onClick={() => onClick(`${children}`)}
    >
      {children}
    </div>
  );
};
