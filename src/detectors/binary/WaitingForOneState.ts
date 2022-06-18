import { RegexState } from "../../State";
import { ValidState } from "./ValidState";
import { InvalidBinaryState } from './InvalidState';

export class WaitingForOneState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if (char === '1') {
      this.detector.state = new ValidState(this.detector);
    } else if (char !== '0') {
      this.detector.state = new InvalidBinaryState(this.detector);
    }
  }
}
