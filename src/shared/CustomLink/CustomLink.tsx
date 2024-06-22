import { CustomLinkWrapper } from "./CustomLink.styled";
import { FC } from "react";

interface Props {
  to: string;
  text: string;
  className?: string;
  styleType: "white" | "transparent";
}

export const CustomLink: FC<Props> = ({
  to,
  text,
  className = "",
  styleType,
}) => {
  return (
    <CustomLinkWrapper to={to} className={`${className} ${styleType}`}>
      {text}
    </CustomLinkWrapper>
  );
};
