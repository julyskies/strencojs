## strencojs

String encoding with modified [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) for Javascript.

Encoding is done using [rolling cipher](http://www.thealmightyguru.com/Wiki/index.php?title=Rolling_cipher).

Minimal required Node version: `v12.0.0`

### Install

```shell script
npm i strencojs
```

### Usage

##### Encode plaintext string

```typescript
import { encode } from 'strencojs';

const plaintext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const encoded = encode(plaintext);
console.log(encoded); // %%7z;1tsk1JA!NbAFwzj j&{r(3#"+L%m*{<D%Wrh@iyB(qM!eG)>B/ox/%%
```

##### Decode encoded string

```typescript
import { decode } from './index';

const encoded = '%%7z;1tsk1JA!NbAFwzj j&{r(3#"+L%m*{<D%Wrh@iyB(qM!eG)>B/ox/%%';
const decoded = decode(encoded);
console.log(decoded); // Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
### Security

This module is not secure, since its main goal is to make the original value unreadable. There are no additional keys, passphrases or secrets required, meaning that anyone can decode encoded value. It is not recommended to store sensitive data encoded with this module.

### Performance

By default, this module encodes values in the main thread, meaning that it blocks JS execution. While this is not an issue if you are encoding small strings, this might become a problem when encoding big multiline strings with tens of thousands of symbols.

For the reference: encoding a string that consists of 10000 symbols takes `2 ms`, decoding the same string takes about `3 ms`.

Worker threads should be used for the encoding when dealing with big multiline strings.

### Deploy

```shell script
git clone https://github.com/peterdee/caesar-encoding
cd ./caesar-encoding
nvm use 18
npm i
```

### Testing

```shell script
npm run test
```

Using [Chai](https://www.chaijs.com) & [Mocha](https://mochajs.org)

### Linting

```shell script
npm run lint
```

Using [ESLint](https://eslint.org)

### License

[MIT](./LICENSE.md)
