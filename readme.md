# own-entries

Like `Object.entries()`, but includes non-enumerable properties, analogous to `Reflect.ownKeys()`.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i own-entries
```

## API

The module exports a single function.

### Parameter

`obj` (object)

### Return Value

An array of two-element key-value pair arrays.

## Example

```javascript
const ownEntries = require('own-entries')

ownEntries({key: 'value'}) // [['key', 'value']]
```

## Related

* [own-values](https://github.com/lamansky/own-values): The “values” version of this module.
* [entries-array](https://github.com/lamansky/entries-array) / [entries-iterator](https://github.com/lamansky/entries-iterator): Returns an array/iterator of the key-value pairs of an Object, Map, Array, or Typed Array.
