import { RegexDetector } from "./RegexDetector";

export abstract class RegexState {
  abstract isAccepting: boolean;

  constructor(protected detector: RegexDetector) { }

  abstract handle(char: string): void;
}
