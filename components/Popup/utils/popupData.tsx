import { IPopupContents } from "../Popup.d";

export const popupData: IPopupContents = {
  load: {
    content: (
      <p>
        Hey!
        <br />
        Look, DON&apos;T TOUCH, alright?!
      </p>
    ),
    delay: 1000,
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
    content: <p>OK buddy I warned you, S.W.A.T. is on their way!</p>,
    delay: 1000,
    watchman: "pissed",
    button: "It wasn't me!",
  },
};
