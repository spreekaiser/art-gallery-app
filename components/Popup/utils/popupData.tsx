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
  hover: {
    content: <div></div>,
    delay: 1000,
    watchman: "sleepy",
    button: "Huh?",
  },
  click: {
    content: <span>OK buddy I warned you, S.W.A.T. is on their way!</span>,
    delay: 1000,
    watchman: "pissed",
    button: "It wasn't me!",
  },
};
