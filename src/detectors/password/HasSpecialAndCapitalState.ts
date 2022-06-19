import { RegexState } from "../../State";
import { ValidPasswordState } from './ValidState';

export class HasSpecialAndCapitalState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if (!'!@#$%&*'.includes(char)) {
      this.detector.state = new ValidPasswordState(this.detector);
    }
  }
}
