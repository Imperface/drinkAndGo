import styled from "styled-components";

export const AppWrapper = styled.div`
  font-weight: 400;
  font-family: "Manrope", sans-serif;
  min-height: 100vh;
  color: ${({ theme }) => theme.mainD};
  background-color: ${({ theme }) => theme.bgcD};

  & a {
    text-decoration: none;
  }

  & img {
    display: block;
  }
  & h1,
  h2,
  h3,
  h4,
  p,
  ul {
    margin: 0;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: inherit;
  }
`;
