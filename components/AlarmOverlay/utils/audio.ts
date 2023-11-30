import soundFile from "../../../assets/audio/ahooga.mp3";

export function playSound(): void {
  new Audio(soundFile).play();
}
