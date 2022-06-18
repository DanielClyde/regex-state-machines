import { RegexState } from "../../State";
import { InvalidBinaryState } from "./InvalidState";
import { ValidState } from "./ValidState";

export class StartState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if (char !== '1') {
      this.detector.state = new InvalidBinaryState(this.detector);
    } else {
      this.detector.state = new ValidState(this.detector);
    }
  }
}
