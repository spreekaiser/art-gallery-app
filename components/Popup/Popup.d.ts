export interface IPopupProps {
  trigger: "load" | "hover" | "touch";
  delay: number;
  content: string;
  buttonText: string;
  watchman: "sleepy" | "concerned" | "angry";
  // color?: string;
}
