import { RegexState } from "../../State";
import { ValidFloatState } from './ValidFloatState';
import { InvalidFloatState } from './InvalidFloatState';

export class RightOfDecimalState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if ('0123456789'.includes(char)) {
      this.detector.state = new ValidFloatState(this.detector);
    } else {
      this.detector.state = new InvalidFloatState(this.detector);
    }
  }
}
