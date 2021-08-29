import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white-color);
  padding: 0.5rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--container-width);
  background: #fff;
  margin: 0 auto;
  border: solid 1px #fff;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 1rem;
  }
`;
