import ahoogaAlarm from "../../../assets/audio/ahooga.mp3";

export function playSound(): void {
  new Audio(ahoogaAlarm).play();
}
