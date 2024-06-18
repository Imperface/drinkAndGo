import styled from "styled-components";
import { device } from "src/shared/constants/device";

export const WelcomeGreetingWrapper = styled.div`
  text-align: center;
  max-width: 319px;

  & .welcomeGreetingTitle {
    font-weight: 600;
    font-size: 26px;
    line-height: 1.14;
    margin-bottom: 14px;
  }

  & .welcomeGreetingText {
    font-size: 14px;
    line-height: 1.3;
  }

  @media ${device.tablet} {
    text-align: left;
    max-width: 470px;

    & .welcomeGreetingTitle {
      font-size: 40px;
      line-height: 1.1;
    }

    & .welcomeGreetingText {
      font-weight: 400;
      font-size: 18px;
    }
  }

  @media ${device.desktop} {
    max-width: 485px;
  }
`;
