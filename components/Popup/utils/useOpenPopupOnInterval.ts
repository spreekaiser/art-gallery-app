import { Dispatch, SetStateAction, useEffect } from "react";
import { IPopupContents, TriggerType } from "../Popup.d";

export default function useOpenPopupOnInterval(
  popupContents: IPopupContents,
  trigger: TriggerType,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (popupContents[trigger]) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, popupContents[trigger].delay || 0);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);
}
