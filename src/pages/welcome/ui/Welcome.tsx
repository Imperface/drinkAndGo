import { WelcomeWrapper } from "./Welcome.styled";
import { Section } from "@/shared/Section";
import { Greeting } from "@/widgets/greeting";

export const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Section className="welcome">
        <Greeting />
      </Section>
    </WelcomeWrapper>
  );
};
