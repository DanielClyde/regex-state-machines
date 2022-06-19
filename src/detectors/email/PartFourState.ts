import { RegexState } from "../../State";
import { InvalidEmailState } from './InvalidState';
import { ValidState } from "./ValidState";

export class PartFourState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if ('.@'.includes(char)) {
      this.detector.state = new InvalidEmailState(this.detector);
    } else {
      this.detector.state = new ValidState(this.detector);
    }
  }
}
