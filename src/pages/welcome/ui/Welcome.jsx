import { useState } from "react";
import { WelcomeWrapper } from "./Welcome.styled";
import { Section } from "src/shared/Section";
import { Greeting } from "src/widgets/greeting";

export const Welcome = () => {
  const [status, setStatus] = useState("welcome");

  return (
    <WelcomeWrapper>
      <Section className="Welcome">
        {status === "welcome" && <Greeting callback={setStatus} />}
        {status === "signUp" && "SignUp"}
        {status === "signIn" && "SignIn"}
      </Section>
    </WelcomeWrapper>
  );
};
