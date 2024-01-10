import { IArrowButton } from "./ArrowButton.d";
import { Button, Circle, ArrowIcon, ButtonText } from "./ArrowButton.style";

export function ArrowButton({ children, width }: IArrowButton) {
  return (
    <Button width={width} className="learn-more">
      <Circle className="circle" aria-hidden="true">
        <ArrowIcon className="icon arrow"></ArrowIcon>
      </Circle>
      <ButtonText className="button-text">{children}</ButtonText>
    </Button>
  );
}
