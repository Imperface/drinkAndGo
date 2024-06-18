import { WelcomeGreetingWrapper } from "./WelcomeGreeting.styled";

export const WelcomeGreeting = ({ className }) => {
  return (
    <WelcomeGreetingWrapper className={className}>
      <h2 className="welcomeGreetingTitle">Welcome to the app!</h2>
      <p className="welcomeGreetingText">
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
    </WelcomeGreetingWrapper>
  );
};
