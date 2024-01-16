import { IArrowButton } from "./ArrowButton.d";
import { Button, Circle, ArrowIcon, ButtonText } from "./ArrowButton.style";

export function ArrowButton({
  children,
  width,
  handleClick,
  color,
}: IArrowButton) {
  return (
    // <Button width={width} onClick={handleClick} className="learn-more">
    <Button color={color} width={width} onClick={handleClick}>
      <Circle className="circle" aria-hidden="true">
        <ArrowIcon className="icon arrow"></ArrowIcon>
      </Circle>
      <ButtonText className="button-text">{children}</ButtonText>
    </Button>
  );
}
