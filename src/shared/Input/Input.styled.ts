import styled from "styled-components";

export const InputWrapper = styled.label`
  width: 100%;
  & .input {
    width: 100%;
    border-radius: 42px;

    height: 54px;
    padding: 18px 24px 18px 24px;
    border: 1px solid ${({ theme }) => theme.twentyWhiteD};
    color: ${({ theme }) => theme.whiteD};
    background-color: transparent;
    transition: all 0.5s;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.twentyWhiteD};
      transition: all 0.5s;
    }

    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.semiWhiteD};
      color: ${({ theme }) => theme.whiteD};
      &::placeholder {
        color: ${({ theme }) => theme.whiteD};
      }
    }
  }
`;
