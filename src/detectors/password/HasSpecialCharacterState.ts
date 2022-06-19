import { RegexState } from "../../State";
import { ValidPasswordState } from './ValidState';

export class HasSpecialCharacterState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if ((!'!@#$%&*'.includes(char)) && char.toUpperCase() === char) {
      this.detector.state = new ValidPasswordState(this.detector);
    }
  }
}
