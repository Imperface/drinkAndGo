import { FC } from "react";
import { WelcomeGreetingWrapper } from "./WelcomeGreeting.styled";
import { WelcomeTitle } from "@/shared/WelcomeTitle";

interface Props {
  className: string;
}

export const WelcomeGreeting: FC<Props> = ({ className }) => {
  return (
    <WelcomeGreetingWrapper className={className}>
      <WelcomeTitle
        className="welcomeGreetingTitle"
        text="Welcome to the app!"
      />
      <p className="welcomeGreetingText">
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
    </WelcomeGreetingWrapper>
  );
};
