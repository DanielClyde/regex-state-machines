import { RegexState } from "../../State";
import { RightOfDecimalState } from './RightOfDecimalState';
import { InvalidFloatState } from './InvalidFloatState';

export class WaitingOnDecimalState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if (char === '.') {
      this.detector.state = new RightOfDecimalState(this.detector);
    } else {
      this.detector.state = new InvalidFloatState(this.detector);
    }
  }
}
