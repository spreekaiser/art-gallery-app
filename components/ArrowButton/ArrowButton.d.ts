export interface IButton {
  width?: number;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

export interface IArrowButton extends IButton {
  children: string;
}
