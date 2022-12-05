import {
  ALPHABET,
  ALPHABET_LENGTH,
  WRAP,
} from './utilities/constants';
import getShift from './utilities/get-shift';
import { validateDecoding, validateEncoding } from './utilities/validation';

export function decode(encoded: string): string {
  const {
    adjustedString,
    adjustedStringLength: STRING_LENGTH,
  } = validateDecoding(encoded);

  const SHIFT = getShift(STRING_LENGTH);
  return adjustedString.split('').map(
    (symbol, stringIndex) => {
      const alphabetIndex = ALPHABET.indexOf(symbol);
      if (alphabetIndex < 0) {
        return symbol;
      }
      let resultIndex = alphabetIndex - SHIFT - stringIndex;
      if (resultIndex < 0) {
        const abs = Math.abs(resultIndex);
        if (abs > ALPHABET_LENGTH) {
          resultIndex = ALPHABET_LENGTH - (abs % ALPHABET_LENGTH);
          if (resultIndex === ALPHABET_LENGTH) {
            resultIndex = 0;
          }
        } else {
          resultIndex = ALPHABET_LENGTH - abs;
        }
      }
      return ALPHABET[resultIndex];
    },
  ).join('');
}

export function encode(plaintext: string): string {
  const {
    adjustedString,
    adjustedStringLength: STRING_LENGTH,
  } = validateEncoding(plaintext);
  const SHIFT = getShift(STRING_LENGTH);
  const encoded = adjustedString.split('').map(
    (symbol, stringIndex) => {
      const alphabetIndex = ALPHABET.indexOf(symbol);
      if (alphabetIndex < 0) {
        return symbol;
      }
      const resultIndex = (alphabetIndex + SHIFT + stringIndex) % ALPHABET_LENGTH;
      return ALPHABET[resultIndex];
    },
  ).join('');
  return `${WRAP}${encoded}${WRAP}`;
}
