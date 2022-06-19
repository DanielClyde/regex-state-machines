import { RegexState } from "../../State"
import { InvalidEmailState } from './InvalidState';
import { PartThreeState } from './PartThreeState';

export class PartTwoState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if ('.@'.includes(char)) {
      this.detector.state = new InvalidEmailState(this.detector);
    } else {
      this.detector.state = new PartThreeState(this.detector);
    }
  }
}
