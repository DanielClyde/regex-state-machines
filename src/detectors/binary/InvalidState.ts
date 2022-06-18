import { RegexState } from "../../State";

export class InvalidBinaryState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string) {

  }
}
