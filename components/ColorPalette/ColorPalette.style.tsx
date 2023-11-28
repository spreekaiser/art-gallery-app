import styled from "styled-components";

export const StyledColorsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem 0 2rem;
`;

export const StyledColorItem = styled.li`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 15%;
  height: 1.5rem;
`;
