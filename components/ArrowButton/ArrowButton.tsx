import { IArrowButton } from "./ArrowButton.d";
import { Button, Circle, ArrowIcon, ButtonText } from "./ArrowButton.style";

export function ArrowButton({
  children,
  width,
  handleClick,
  color,
  isDisabled,
}: IArrowButton) {
  return (
    <Button
      color={color}
      width={width}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <Circle className="circle" aria-hidden="true">
        <ArrowIcon className="icon arrow"></ArrowIcon>
      </Circle>
      <ButtonText className="button-text">{children}</ButtonText>
    </Button>
  );
}
