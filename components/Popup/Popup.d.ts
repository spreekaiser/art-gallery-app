export type TriggerType = "load" | "hover" | "touch";

export interface IPopupProps {
  trigger: TriggerType;
  color?: string;

  // isAlarm?: boolean;
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
