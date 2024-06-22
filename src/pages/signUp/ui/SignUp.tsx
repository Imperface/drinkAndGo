import { Section } from "@/shared/Section";
import { SignUpWrapper } from "./SignUp.styled";
import { WelcomeTitle } from "@/shared/WelcomeTitle";
import { SignUpForm } from "@/widgets/signUpForm";
import { CustomLink } from "@/shared/CustomLink";
import { pathOfRoutes } from "@/shared/constants/pathOfRoutes";

export const SignUp = () => {
  return (
    <SignUpWrapper>
      <Section className="signUp">
        <WelcomeTitle text="Sign Up" className="signUpTitle" />
        <SignUpForm />
        <CustomLink
          className="link"
          styleType="transparent"
          text="Sign In"
          to={pathOfRoutes.SIGN_IN_ROUTE}
        />
      </Section>
    </SignUpWrapper>
  );
};
