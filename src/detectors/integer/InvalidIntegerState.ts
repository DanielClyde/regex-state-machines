import { RegexState } from "../../State";

export class InvalidIntegerState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void { }
}
