import { RegexDetector } from "../../RegexDetector";
import { RegexState } from "../../State";
import { InvalidIntegerState } from './InvalidIntegerState';

export class ValidIntegerState extends RegexState {
  isAccepting: boolean = true;

  constructor(detector: RegexDetector) {
    super(detector);
  }

  handle(char: string): void {
    if (!'0123456789'.includes(char)) {
      this.detector.state = new InvalidIntegerState(this.detector);
    }
  }
}
