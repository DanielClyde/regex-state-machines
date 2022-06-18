import { RegexDetector } from "../../RegexDetector";
import { RegexState } from "../../State";

export class InvalidIntegerState extends RegexState {
  isAccepting: boolean = false;

  constructor(detector: RegexDetector) {
    super(detector);
  }

  handle(char: string): void { }
}
