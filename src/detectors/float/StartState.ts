import { RegexState } from "../../State";
import { InvalidFloatState } from "./InvalidFloatState";
import { LeftOfDecimalState } from "./LeftOfDecimalState";
import { RightOfDecimalState } from './RightOfDecimalState';
import { WaitingOnDecimalState } from './WaitingOnDecimalState';

export class StartState extends RegexState {
  isAccepting: boolean = false;

  handle(char: string): void {
    if ('123456789'.includes(char)) {
      this.detector.state = new LeftOfDecimalState(this.detector);
    } else if ('.'.includes(char)) {
      this.detector.state = new RightOfDecimalState(this.detector);
    } else if ('0'.includes(char)) {
      this.detector.state = new WaitingOnDecimalState(this.detector);
    } else {
      this.detector.state = new InvalidFloatState(this.detector);
    }
  }
}
