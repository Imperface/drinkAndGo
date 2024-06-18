import styled from "styled-components";
import { device } from "src/shared/constants/device";

export const ButtonWhiteWrapper = styled.button`
  padding: 18px 44px;
  border-radius: 30px;
  transition: all 0.5s;
  color: ${({ theme }) => theme.secondaryD};
  background-color: ${({ theme }) => theme.whiteD};
  border: 1px solid transparent;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;

  &:hover:enabled,
  &:focus:enabled {
    background-color: transparent;
    color: ${({ theme }) => theme.mainD};
    border: 1px solid ${({ theme }) => theme.whiteD};
  }
  &:active:enabled {
    transform: translateY(4px);
    opacity: 0.5;
  }
  &:disabled {
    cursor: default;
    opacity: 0.2;
  }
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.1;
  }
`;
