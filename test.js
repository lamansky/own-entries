'use strict'

const assert = require('assert')
const ownEntries = require('.')

describe('ownEntries()', function () {
  it('should return an array of own entries', function () {
    const entries = ownEntries({a: 1})
    assert(Array.isArray(entries))
    assert.strictEqual(entries.length, 1)
    assert(Array.isArray(entries[0]))
    assert.strictEqual(entries[0].length, 2)
    assert.strictEqual(entries[0][0], 'a')
    assert.strictEqual(entries[0][1], 1)
  })
})
