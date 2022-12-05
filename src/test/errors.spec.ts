import { expect } from 'chai';

import { decode, encode } from '../index';
import { ERRORS, WRAP } from '../utilities/constants';

describe(
  'Testing decoding errors',
  (): void => {
    it(
      'Should throw an error if provided string is empty',
      (): void => {
        try {
          decode('');
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.equal(ERRORS.providedStringIsEmpty);
        }
      },
    );
    it(
      'Should throw an error if provided data is not a string',
      (): void => {
        try {
          decode({} as string);
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.equal(ERRORS.providedDataTypeIsInvalid);
        }
      },
    );
    it(
      'Should throw an error if provided string is too short',
      (): void => {
        try {
          decode('$3f');
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.equal(ERRORS.invalidStringFormat);
        }
      },
    );
    it(
      'Should throw an error if provided string has invalid format',
      (): void => {
        try {
          decode(`${WRAP}invalid`);
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.equal(ERRORS.invalidStringFormat);
        }
      },
    );
  },
);

describe(
  'Testing encoding errors',
  (): void => {
    it(
      'Should throw an error if provided string is empty',
      (): void => {
        try {
          encode('');
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.equal(ERRORS.providedStringIsEmpty);
        }
      },
    );
    it(
      'Should throw an error if provided data is not a string',
      (): void => {
        try {
          encode({} as string);
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.equal(ERRORS.providedDataTypeIsInvalid);
        }
      },
    );
  },
);
