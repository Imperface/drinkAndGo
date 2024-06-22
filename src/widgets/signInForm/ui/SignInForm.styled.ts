import { device } from "@/shared/constants/device";
import styled from "styled-components";

export const SignInFormWrapper = styled.form`
  width: 335px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 14px;

  padding-top: 28px;
  padding-bottom: 14px;

  & .submitButton {
    margin-top: 14px;
    width: 100%;
  }

  @media ${device.tablet} {
    width: 400px;
  }
`;
