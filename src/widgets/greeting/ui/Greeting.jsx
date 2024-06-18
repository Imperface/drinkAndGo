import { GreetingWrapper } from "./Greeting.styled";
import { WelcomeGreeting } from "src/entities/welcomeGreeting";
import { ButtonTransparent } from "src/shared/ButtonTransparent";
import { ButtonWhite } from "src/shared/ButtonWhite";

export const Greeting = ({ callback }) => {
  return (
    <GreetingWrapper>
      <WelcomeGreeting className="welcomeGreeting" />
      <div className="greetingButtons">
        <ButtonWhite
          type="button"
          text="Sign Up"
          callback={() => callback("signUp")}
        />
        <ButtonTransparent
          type="button"
          text="Sign In"
          callback={() => callback("signIn")}
        />
      </div>
    </GreetingWrapper>
  );
};
