import { RegexState } from "./State";

export abstract class RegexDetector {
  abstract state: RegexState;
  protected abstract reset(): void;

  checkString(input: string): boolean {
    for (const char of input.trim()) {
      this.state.handle(char);
    }
    const ret =  this.state.isAccepting;
    this.reset();
    return ret;
  }
}
