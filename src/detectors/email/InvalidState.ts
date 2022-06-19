import { RegexState } from "../../State";

export class InvalidEmailState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void { }
}
