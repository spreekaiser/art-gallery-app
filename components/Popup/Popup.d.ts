export type TriggerType = "load" | "hover" | "touch";

export interface IPopupProps extends IPopupBox {
  trigger: TriggerType;
  setIsAlarm?: Dispatch<SetStateAction<boolean>>;
}

export interface IPopupBox {
  borderColor?: string;
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
