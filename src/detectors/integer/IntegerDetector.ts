import { RegexDetector } from "../../RegexDetector";
import { RegexState } from "../../State";
import { StartState } from "./StartState";

export class IntegerDetector extends RegexDetector {
  state: RegexState = new StartState(this);

  protected reset(): void {
    this.state = new StartState(this);
  }
}
