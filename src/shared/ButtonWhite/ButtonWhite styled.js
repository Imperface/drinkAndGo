import styled from "styled-components";

export const ButtonWhiteWrapper = styled.button`
  padding: 18px 44px;
  border-radius: 30px;
  transition: all 0.5s;
  color: ${({ theme }) => theme.secondaryD};
  background-color: ${({ theme }) => theme.whiteD};
  border: 1px solid transparent;
  outline: none;

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
`;
