import { RegexDetector } from "../../RegexDetector";
import { RegexState } from "../../State";
import { StartState } from "./StartState";

export class EmailDetector extends RegexDetector {
  state: RegexState = new StartState(this);

  reset() {
    this.state = new StartState(this);
  }
}
