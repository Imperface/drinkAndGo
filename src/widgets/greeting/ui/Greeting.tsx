import { GreetingWrapper } from "./Greeting.styled";
import { WelcomeGreeting } from "@/entities/welcomeGreeting";
import { CustomLink } from "@/shared/CustomLink";
import { pathOfRoutes } from "@/shared/constants/pathOfRoutes";

export const Greeting = () => {
  return (
    <GreetingWrapper>
      <WelcomeGreeting className="welcomeGreeting" />
      <div className="greetingButtons">
        <CustomLink
          to={pathOfRoutes.SIGN_UP_ROUTE}
          text="Sign Up"
          styleType="white"
        />
        <CustomLink
          to={pathOfRoutes.SIGN_IN_ROUTE}
          text="Sign In"
          styleType="transparent"
        />
      </div>
    </GreetingWrapper>
  );
};
