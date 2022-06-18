import { RegexState } from "../../State"
import { InvalidFloatState } from './InvalidFloatState';
import { RightOfDecimalState } from "./RightOfDecimalState";

export class LeftOfDecimalState extends RegexState {
  isAccepting: boolean = false;
  handle(char: string): void {
    if ('.'.includes(char)) {
      this.detector.state = new RightOfDecimalState(this.detector);
    } else if (!'0123456789'.includes(char)) {
      this.detector.state = new InvalidFloatState(this.detector);
    }
  }
}
