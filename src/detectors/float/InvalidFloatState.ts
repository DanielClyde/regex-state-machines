import { RegexState } from "../../State";

export class InvalidFloatState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void { }
}
