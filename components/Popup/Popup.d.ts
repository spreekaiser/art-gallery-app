export interface IPopupProps {
  trigger: "load" | "hover" | "touch";
}

export interface IPopupData {
  content: JSX.Element;
  delay: number;
  watchman: string;
  button: string;
}
