import { RegexState } from "../../State";
import { InvalidFloatState } from './InvalidFloatState';

export class ValidFloatState extends RegexState {
  isAccepting: boolean = true;

  handle(char: string): void {
    if (!'0123456789'.includes(char)) {
      this.detector.state = new InvalidFloatState(this.detector);
    }
  }
}
