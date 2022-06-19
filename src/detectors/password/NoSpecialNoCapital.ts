import { RegexState } from "../../State";
import { HasSpecialCharacterState } from './HasSpecialCharacterState';
import { HasCapitalState } from './HasCapitalState';

export class NoSpecialNoCapitalState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if ('!@#$%&*'.includes(char)) {
      this.detector.state = new HasSpecialCharacterState(this.detector);
    } else if (char.toUpperCase() === char) {
      this.detector.state = new HasCapitalState(this.detector);
    }
  }
}
