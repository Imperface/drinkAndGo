import styled from "styled-components";
import { device } from "@/shared/constants/device";

export const WelcomeTitleWrapper = styled.h2`
  font-weight: 600;
  font-size: 26px;
  line-height: 1.14;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.1;
  }
`;
