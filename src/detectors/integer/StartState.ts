import { RegexState } from "../../State";
import { ValidIntegerState } from './ValidIntegerState';
import { InvalidIntegerState } from './InvalidIntegerState';

export class StartState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if ('123456789'.includes(char)) {
      this.detector.state = new ValidIntegerState(this.detector);
    } else {
      this.detector.state = new InvalidIntegerState(this.detector);
    }
  }
}
