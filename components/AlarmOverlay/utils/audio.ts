import ahoogaAlarm from "../../../public/audio/ahooga.mp3";

// export function playSound(): void {
export function playAhoogaAlarm(): void {
  new Audio(ahoogaAlarm).play();
}
