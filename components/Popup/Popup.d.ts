export type TriggerType = "load" | "hover" | "touch";

export interface IPopupProps {
  trigger: TriggerType;
  borderColor?: string;
  setIsAlarm?: Dispatch<SetStateAction<boolean>>;
}

export interface IPopupData {
  content: JSX.Element;
  delay: number;
  watchman: string;
  button: string;
}

export interface IPopupContents {
  [key: string]: IPopupData;
}
