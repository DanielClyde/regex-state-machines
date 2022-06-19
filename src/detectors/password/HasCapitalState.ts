import { RegexState } from "../../State";
import { HasSpecialAndCapitalState } from "./HasSpecialAndCapitalState";

export class HasCapitalState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {
    if ('!@#$%&*'.includes(char)) {
      this.detector.state = new HasSpecialAndCapitalState(this.detector);
    }
  }
}
