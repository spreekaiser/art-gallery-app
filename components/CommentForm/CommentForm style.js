import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  margin: 1rem 0;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: inherit;
  padding: 0;
  border: none;
`;

export const StyledTextarea = styled.textarea`
  width: inherit;
  padding: 1rem;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  background-color: var(--accent-color1);
  color: var(--main-color2);
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  transition: all 0.3s ease;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  filter: ${(props) => (props.disabled ? "saturate(50%)" : "none")};

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        filter: brightness(110%);
        color: var(--accent-color2);
        box-shadow: 3px 3px 6px #333;
        transform: scale(1.02) rotate(1deg);
      }
    `}
`;
