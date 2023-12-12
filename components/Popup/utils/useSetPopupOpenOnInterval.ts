import { Dispatch, SetStateAction, useEffect } from "react";
import { IPopupData } from "../Popup.d";

export default function useSetPopupOpenOnInterval(
  popupContent: IPopupData,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (popupContent) {
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
