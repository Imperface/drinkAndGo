import { Section } from "@/shared/Section";
import { SignInWrapper } from "./SignIn.styled";
import { WelcomeTitle } from "@/shared/WelcomeTitle";
import { pathOfRoutes } from "@/shared/constants/pathOfRoutes";
import { SignInForm } from "@/widgets/signInForm";
import { CustomLink } from "@/shared/CustomLink";

export const SignIn = () => {
  return (
    <SignInWrapper>
      <Section className="signIn">
        <WelcomeTitle text="Sign In" className="signInTitle" />
        <SignInForm />
        <CustomLink
          className="link"
          styleType="transparent"
          text="Sign Up"
          to={pathOfRoutes.SIGN_UP_ROUTE}
        />
      </Section>
    </SignInWrapper>
  );
};
