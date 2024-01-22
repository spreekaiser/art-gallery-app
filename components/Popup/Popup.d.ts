export type TriggerType = "load" | "touch" | "hover";

export interface IPopupProps extends IPopupBox {
  trigger: TriggerType;
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
