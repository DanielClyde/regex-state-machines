import { RegexState } from "../../State";

export class InvalidPasswordState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {}
}
