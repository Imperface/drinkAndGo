import { FC } from "react";
import { ButtonWrapper } from "./Button.styled";

interface Props {
  btnClassName?: string;
  tClassName?: string;
  type: "button" | "submit";
  text?: string;
  isLoading?: boolean;
  styleType: "white" | "transparent";
  callback?: () => void;
}

export const Button: FC<Props> = ({
  btnClassName,
  tClassName,
  type,
  text,
  isLoading,
  styleType,
  callback,
}) => {
  return (
    <ButtonWrapper
      className={`${btnClassName} ${styleType}`}
      type={type}
      disabled={isLoading}
      onClick={callback}
    >
      <span className={tClassName}>{text}</span>
    </ButtonWrapper>
  );
};
