import { RegexState } from "../../State";
import { InvalidEmailState } from './InvalidState';

export class ValidState extends RegexState {
  isAccepting: boolean = true;

  handle(char: string): void {
    if ('.@'.includes(char)) {
      this.detector.state = new InvalidEmailState(this.detector);
    }
  }
}
