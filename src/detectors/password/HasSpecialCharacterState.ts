import { RegexState } from "../../State";
import { HasSpecialAndCapitalState } from './HasSpecialAndCapitalState';

export class HasSpecialCharacterState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if ((!'!@#$%&*'.includes(char)) && char.toUpperCase() === char) {
      this.detector.state = new HasSpecialAndCapitalState(this.detector);
    }
  }
}
