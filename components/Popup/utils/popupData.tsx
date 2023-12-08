interface IPopupData {
  content: JSX.Element;
  delay: number;
  watchman: string;
  button: string;
}

export const popupData: { [key: string]: IPopupData } = {
  load: {
    content: <p>Hey! Look, DON&apos;T TOUCH, alright?!</p>,
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
    content: <div></div>,
    delay: 1000,
    watchman: "pissed",
    button: "It wasn't me!",
  },
};
