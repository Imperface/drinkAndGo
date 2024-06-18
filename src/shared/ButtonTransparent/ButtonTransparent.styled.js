import styled from "styled-components";

export const ButtonTransparentWrapper = styled.button`
  padding: 18px 44px;
  border-radius: 30px;
  transition: all 0.5s;
  outline: none;
  color: ${({ theme }) => theme.mainD};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.whiteD};

  &:hover:enabled,
  &:focus:enabled {
    background-color: ${({ theme }) => theme.whiteD};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.secondaryD};
  }
  &:active:enabled {
    transform: translateY(4px);
    opacity: 0.5;
  }
  &:disabled {
    cursor: default;
    opacity: 0.2;
  }
`;
