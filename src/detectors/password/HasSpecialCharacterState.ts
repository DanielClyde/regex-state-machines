import { RegexState } from "../../State";
import { HasCapitalState } from "./HasCapitalState";

export class HasSpecialCharacterState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if (char.toUpperCase() === char) {
      this.detector.state = new HasCapitalState(this.detector);
    }
  }
}
