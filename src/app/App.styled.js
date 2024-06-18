import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.mainD};
  background-color: ${({ theme }) => theme.bgcD};

  & img {
    display: block;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
