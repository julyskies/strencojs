import { ALPHABET_LENGTH } from './constants';

export default function getShift(stringLength = 0): number {
  return stringLength > ALPHABET_LENGTH
    ? stringLength % ALPHABET_LENGTH
    : ALPHABET_LENGTH % stringLength;
}
