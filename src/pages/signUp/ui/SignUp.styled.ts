import { device } from "@/shared/constants/device";
import styled from "styled-components";

export const SignUpWrapper = styled.div`
  & .link {
    width: 335px;
  }
  @media ${device.tablet} {
    & .link {
      width: 400px;
    }
  }
`;
