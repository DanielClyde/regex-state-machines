import { assert, describe, it} from 'vitest';
import { IntegerDetector } from '../src/detectors/integer/IntegerDetector';
import { StartState } from '../src/detectors/integer/StartState';

describe('Integer Detector', () => {
  const detector = new IntegerDetector();

  it('Empty string should be invalid', () => {
    assert(detector.state instanceof StartState);
    assert(detector.checkString('') === false);
  });

  it('Should detect valid integer', () => {
    assert(detector.checkString('1') === true);
    assert(detector.checkString('12') === true);
    assert(detector.checkString('10') === true);
    assert(detector.checkString('102342') === true);
  });

  it('Should not allow leading 0', () => {
    assert(detector.checkString('0') === false);
    assert(detector.checkString('01') === false);
    assert(detector.checkString('012') === false);
    assert(detector.checkString('053') === false);
  });

  it('Should not allow invalid characters', () => {
    assert(detector.checkString('a') === false);
    assert(detector.checkString('234a') === false);
    assert(detector.checkString('12345123!') === false);
    assert(detector.checkString('23464j23') === false);
  });
});
