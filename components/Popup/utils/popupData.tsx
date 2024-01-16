import { IPopupContents } from "../Popup.d";

export const popupData: IPopupContents = {
  load: {
    content: (
      <span>
        Hey!
        <br />
        Don&apos;t touch ANY art pieces, alright?!
      </span>
    ),
    delay: 2000,
    watchman: "sleepy",
    button: "I promise! 🤥",
  },
  touch: {
    content: (
      <span>
        What the ...?!
        <br />
        What is WRONG with you?!!
      </span>
    ),
    delay: 2000,
    watchman: "pissed",
    button: "It wasn't me!",
  },
  // hover: {
  //   content: <div></div>,
  //   delay: 1000,
  //   watchman: "sleepy",
  //   button: "Huh?",
  // },
};
