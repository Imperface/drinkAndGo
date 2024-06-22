import styled from "styled-components";
import { device } from "@/shared/constants/device";

export const WelcomeGreetingWrapper = styled.div`
  text-align: center;
  max-width: 319px;

  & .welcomeGreetingTitle {
    margin-bottom: 14px;
  }

  & .welcomeGreetingText {
    font-size: 14px;
    line-height: 1.3;
  }

  @media ${device.tablet} {
    text-align: left;
    max-width: 470px;

    & .welcomeGreetingText {
      font-weight: 400;
      font-size: 18px;
    }
  }

  @media ${device.desktop} {
    max-width: 485px;
  }
`;
