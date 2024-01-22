import ahoogaAlarm from "../../../public/audio/ahooga.mp3";

export function playAhoogaAlarm(): void {
  new Audio(ahoogaAlarm).play();
}
