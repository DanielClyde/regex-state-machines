import { RegexState } from "../../State";
import { HasSpecialCharacterState } from './HasSpecialCharacterState';
import { HasCapitalState } from './HasCapitalState';
import { NoSpecialNoCapitalState } from './NoSpecialNoCapital';

export class StartState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if ('!@#$%&*'.includes(char)) {
      this.detector.state = new HasSpecialCharacterState(this.detector);
    } else if (char.toUpperCase() === char) {
      this.detector.state = new HasCapitalState(this.detector);
    } else {
      this.detector.state = new NoSpecialNoCapitalState(this.detector);
    }
  }
}
