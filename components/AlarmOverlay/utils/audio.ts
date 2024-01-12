import ahoogaAlarm from "../../../public/audio/ahooga.mp3";

export function playSound(): void {
  new Audio(ahoogaAlarm).play();
}
