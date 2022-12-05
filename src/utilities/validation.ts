import { ERRORS, WRAP } from './constants';

interface ValidationResult {
  adjustedString: string;
  adjustedStringLength: number;
}

function validateBasic(value = ''): string {
  if (!value) {
    throw new Error(ERRORS.providedStringIsEmpty);
  }
  if (typeof value !== 'string') {
    throw new Error(ERRORS.providedDataTypeIsInvalid);
  }
  return String.raw`${value}`;
}

export function validateDecoding(encoded: string): ValidationResult {
  const escaped = validateBasic(encoded);
  const ORIGINAL_STRING_LENGTH = escaped.length;
  if (ORIGINAL_STRING_LENGTH < 4) {
    throw new Error(ERRORS.invalidStringFormat);
  }
  const endSymbols = escaped.slice(ORIGINAL_STRING_LENGTH - 2, ORIGINAL_STRING_LENGTH);
  const startSymbols = escaped.slice(0, 2);
  if (!(endSymbols === WRAP && startSymbols === WRAP)) {
    throw new Error(ERRORS.invalidStringFormat);
  }
  const adjustedString = escaped.slice(2, ORIGINAL_STRING_LENGTH - 2);
  return {
    adjustedString,
    adjustedStringLength: adjustedString.length,
  };
}

export function validateEncoding(plaintext: string): ValidationResult {
  const escaped = validateBasic(plaintext);
  return {
    adjustedString: escaped,
    adjustedStringLength: escaped.length,
  };
}
