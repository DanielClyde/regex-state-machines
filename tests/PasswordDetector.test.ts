import { assert, describe, it} from 'vitest';
import { StartState } from '../src/detectors/password/StartState';
import { PasswordDetector } from '../src/detectors/password/PasswordDetector';


describe('Password Detector', () => {
  const detector = new PasswordDetector();

  it('Empty string should be invalid', () => {
    assert(detector.state instanceof StartState);
    assert(detector.checkString('') === false);
  });

  it('Should detect valid passwords', () => {
    assert(detector.checkString('aaaaH!aa') === true);
    assert(detector.checkString('1234567*9J') === true);
  });

  it('Should detect passwords that are too short', () => {
    assert(detector.checkString('aH!ab*s') === false);
    assert(detector.checkString('@#G') === false);
  });

  it('Should detect invalid passwords that are missing a special char', () => {
    assert(detector.checkString('passwordIsCool') === false);
  });

  it('Should detect invalid passwords that are missing a capital', () => {
    assert(detector.checkString('thisisapa$$word') === false);
  });

  it('Should detect invalid passwords that end in a special char', () => {
    assert(detector.checkString('aaaaH!aa$') === false);
  });
});
