import { RegexState } from "../../State";
import { InvalidIntegerState } from './InvalidIntegerState';

export class ValidIntegerState extends RegexState {
  isAccepting: boolean = true;

  handle(char: string): void {
    if (!'0123456789'.includes(char)) {
      this.detector.state = new InvalidIntegerState(this.detector);
    }
  }
}
