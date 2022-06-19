import { RegexDetector } from "../../RegexDetector";
import { RegexState } from "../../State";
import { StartState } from "./StartState";

export class PasswordDetector extends RegexDetector {
  state: RegexState = new StartState(this);

  checkString(char: string) {
    if (char.length < 8) { return false; }
    return super.checkString(char);
  }

  reset(): void {
    this.state = new StartState(this);
  }
}
