import { assert, describe, it} from 'vitest';
import { StartState } from '../src/detectors/email/StartState';
import { EmailDetector } from '../src/detectors/email/EmailDetector';

describe('Email Detector', () => {
  const detector = new EmailDetector();

  it('Empty string should be invalid', () => {
    assert(detector.state instanceof StartState);
    assert(detector.checkString('') === false);
  });

  it('Should detect valid emails', () => {
    assert(detector.checkString('a@b.c') === true);
    assert(detector.checkString('abc123@gmail.com123') === true);
    assert(detector.checkString('a!#$%^b@&*().c0m') === true);
    assert(detector.checkString('dantheman27c@gmail.com') === true);
  });

  it('Should detect invalid emails', () => {
    assert(detector.checkString('a@b') === false);
    assert(detector.checkString('a.b@c') === false);
    assert(detector.checkString('a@b.') === false);
    assert(detector.checkString('a.') === false);
    assert(detector.checkString('a@b@b.c') === false);
    assert(detector.checkString('a@b.c.c') === false);
    assert(detector.checkString('@b.c') === false);
  });
});
