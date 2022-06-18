import { assert, describe, it} from 'vitest';
import { BinaryDetector } from '../src/detectors/binary/BinaryDetector';
import { StartState } from '../src/detectors/binary/StartState';

describe('Binary Detector', () => {
  const detector = new BinaryDetector();

  it('Empty string should be invalid', () => {
    assert(detector.state instanceof StartState);
    assert(detector.checkString('') === false);
  });

  it('Should detect valid binary starting and ending with 1', () => {
    assert(detector.checkString('1') === true);
    assert(detector.checkString('11') === true);
    assert(detector.checkString('111') === true);
    assert(detector.checkString('1000010010011') === true);
    assert(detector.checkString('101') === true);
    assert(detector.checkString('1111111101111111') === true);
  });

  it('Should detect invalid binary', () => {
    assert(detector.checkString('1a01') === false);
    assert(detector.checkString('100000') === false);
    assert(detector.checkString('0011111') === false);
    assert(detector.checkString('101010101b') === false);
    assert(detector.checkString('1010101.1') === false);
    assert(detector.checkString('010') === false);
    assert(detector.checkString('01') === false);
    assert(detector.checkString('10') === false);
  });
});
