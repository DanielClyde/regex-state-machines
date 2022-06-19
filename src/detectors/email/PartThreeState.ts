import { RegexState } from "../../State";
import { InvalidEmailState } from './InvalidState';
import { PartFourState } from './PartFourState';

export class PartThreeState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if (char === '@') {
      this.detector.state = new InvalidEmailState(this.detector);
    } else if (char === '.') {
      this.detector.state = new PartFourState(this.detector);
    }
  }
}
