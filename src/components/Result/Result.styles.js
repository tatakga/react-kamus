import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--container-width);
  padding: 1rem;
  margin: 0 auto;
`;

export const Meaning = styled.div`
  background-color: var(--primary-color);
  padding: 1rem;
  color: var(--white-color);
  margin: 0.5rem 0;
  border-radius: 10px;
`;
