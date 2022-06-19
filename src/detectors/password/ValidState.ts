import { RegexState } from "../../State";
import { HasSpecialAndCapitalState } from './HasSpecialAndCapitalState';

export class ValidPasswordState extends RegexState {
  isAccepting: boolean = true;

  handle(char: string) {
    if ('!@#$%&*'.includes(char)) {
      this.detector.state = new HasSpecialAndCapitalState(this.detector);
    }
  }
}
