import { RegexState } from "../../State";
import { InvalidBinaryState } from "./InvalidState";
import { WaitingForOneState } from "./WaitingForOneState";

export class ValidState extends RegexState {
  isAccepting: boolean = true;

  handle(char: string) {
    if (char === '0') {
      this.detector.state = new WaitingForOneState(this.detector);
    } else if (char !== '1') {
      this.detector.state = new InvalidBinaryState(this.detector);
    }
  }
}
