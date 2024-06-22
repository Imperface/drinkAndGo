import styled from "styled-components";
import { device } from "@/shared/constants/device";
import { Link } from "react-router-dom";

export const CustomLinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 44px;
  border-radius: 30px;
  transition: all 0.5s;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;

  &.white {
    color: ${({ theme }) => theme.secondaryD};
    background-color: ${({ theme }) => theme.whiteD};
    border: 1px solid transparent;
  }

  &.transparent {
    color: ${({ theme }) => theme.mainD};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.whiteD};
  }

  &:hover,
  &:focus {
    &.white {
      background-color: transparent;
      color: ${({ theme }) => theme.mainD};
      border: 1px solid ${({ theme }) => theme.whiteD};
    }

    &.transparent {
      background-color: ${({ theme }) => theme.whiteD};
      border: 1px solid transparent;
      color: ${({ theme }) => theme.secondaryD};
    }
  }

  &:active {
    transform: translateY(4px);
    opacity: 0.5;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.1;
  }
`;
