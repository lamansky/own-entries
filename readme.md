# own-entries

Like `Object.entries()`, but includes non-enumerable properties, analogous to `Reflect.ownKeys()`

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i own-entries
```

## API

The module exports a single function.

**Parameter**: `obj` (object)
**Return Value**: An array of entries

## Example

```javascript
const ownEntries = require('own-entries')

ownEntries({key: 'value'}) // [['key', 'value']]
```
