import { Dispatch, SetStateAction, useEffect } from "react";
import { IPopupContents, IPopupData, TriggerType } from "../Popup.d";

export default function useOpenPopupOnInterval(
  //   popupContent: IPopupContents,
  popupContent: IPopupData,
  //   trigger: TriggerType,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    // if (popupContents[trigger]) {
    if (popupContent) {
      //   const { delay } = popupContents[trigger];
      const { delay } = popupContent;
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);
}
