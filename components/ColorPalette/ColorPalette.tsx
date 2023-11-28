import { StyledColorsList, StyledColorItem } from "./ColorPalette.style";
import { IColorPaletteProps as IProps } from "./ColorPalette.d";

export function ColorPalette({ colors }: IProps) {
  return (
    <StyledColorsList>
      {colors.map((color) => (
        <StyledColorItem key={color} color={color} />
      ))}
    </StyledColorsList>
  );
}
