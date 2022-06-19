import { RegexState } from "../../State";
import { PartTwoState } from './PartTwoState';
import { InvalidEmailState } from './InvalidState';

export class PartOneState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if (char === '@') {
      this.detector.state = new PartTwoState(this.detector);
    } else if (char === '.') {
      this.detector.state = new InvalidEmailState(this.detector);
    }
  }
}
