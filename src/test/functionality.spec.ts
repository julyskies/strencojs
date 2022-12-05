import { expect } from 'chai';

import { decode, encode } from '../index';

const LARGE_STRING = `
This is a pretty large string, it is used in the tests.

The length of this string is bigger than the length of the alphabet used for encoding!

123 321 123
345 543 321
098 980 890
000 000 000

And some special symbols: $%^:[]@()_ !,.=+

Encoding should ignore all of the symbols that are not in the alphabet:
\
Ê
µ

That's it, should be fine...
`;

const SMALL_STRING = 'This is a small string, it is used in the tests...';

describe(
  'Testing functionality',
  (): void => {
    it(
      'Should encode and decode a small string',
      (): void => {
        const encoded = encode(SMALL_STRING);
        const decoded = decode(encoded);
        expect(decoded === SMALL_STRING).to.equal(true);
      },
    );
    it(
      'Should encode and decode a large string',
      (): void => {
        const encoded = encode(LARGE_STRING);
        const decoded = decode(encoded);
        expect(decoded === LARGE_STRING).to.equal(true);
      },
    );
  },
);
