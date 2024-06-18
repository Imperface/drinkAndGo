import styled from "styled-components";
import { device } from "src/shared/constants/device";

export const GreetingWrapper = styled.div`
  & .welcomeGreeting {
    margin-bottom: 40px;
  }
  & .greetingButtons {
    display: flex;
    justify-content: center;
    column-gap: 14px;
  }
  @media ${device.tablet} {
    & .greetingButtons {
      justify-content: left;
    }
  }
`;
