import { assert, describe, it} from 'vitest';
import { FloatDetector } from '../src/detectors/float/FloatDetector';
import { StartState } from '../src/detectors/float/StartState';

describe('Float Detector', () => {
  const detector = new FloatDetector();

  it('Empty string should be invalid', () => {
    assert(detector.state instanceof StartState);
    assert(detector.checkString('') === false);
  });

  it('Should detect valid float', () => {
    assert(detector.checkString('1.0') === true);
    assert(detector.checkString('123.32') === true);
    assert(detector.checkString('0.200') === true);
    assert(detector.checkString('123456789.123456789023404') === true);
    assert(detector.checkString('.123') === true);
  });

  it('Should detect invalid float', () => {
    assert(detector.checkString('01.34') === false);
    assert(detector.checkString('123') === false);
    assert(detector.checkString('123.123.2') === false);
    assert(detector.checkString('12.4.') === false);
    assert(detector.checkString('123.a') === false);
    assert(detector.checkString('123.') === false);
  });
});
