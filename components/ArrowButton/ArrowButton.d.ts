export interface IButton {
  width?: number;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  type?: "submit";
}

export interface IArrowButton extends IButton {
  children: string;
  isDisabled?: boolean;
}
