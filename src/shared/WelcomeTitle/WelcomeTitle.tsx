import { FC } from "react";
import { WelcomeTitleWrapper } from "./WelcomeTitle.styled";

interface Props {
  className: string;
  text: string;
}

export const WelcomeTitle: FC<Props> = ({ className, text }) => {
  return (
    <WelcomeTitleWrapper className={className}>{text}</WelcomeTitleWrapper>
  );
};
