import styled from "styled-components";

type Props = {
  colors: string[];
};
export function ColorPalette({ colors }: Props) {
  return (
    <StyledColorsList>
      {colors.map((color) => (
        <StyledColorItem key={color} color={color} />
      ))}
    </StyledColorsList>
  );
}

const StyledColorsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem 0 2rem;
`;

const StyledColorItem = styled.li`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 15%;
  height: 1.5rem;
`;
