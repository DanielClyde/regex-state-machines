import { RegexState } from "../../State";
import { InvalidEmailState } from './InvalidState';
import { PartOneState } from './PartOneState';

export class StartState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if ('@.'.includes(char)) {
      this.detector.state = new InvalidEmailState(this.detector);
    } else {
      this.detector.state = new PartOneState(this.detector);
    }
  }
}
