import { ColorsList, ColorItem } from "./ColorPalette.style";

export function ColorPalette({ colors }: { colors: string[] }) {
  return (
    <ColorsList>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </ColorsList>
  );
}
