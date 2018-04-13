'use strict'

const assert = require('assert')
const equals = require('equals')
const ownEntries = require('.')

describe('ownEntries()', function () {
  it('should return an array of entries', function () {
    assert(equals(ownEntries({a: 1}), [['a', 1]]))
  })

  it('should include non-enumerable entries', function () {
    const obj = {a: 1}
    Object.defineProperty(obj, 'b', {enumerable: false, value: 2})
    assert(equals(Object.entries(obj), [['a', 1]]))
    assert(equals(ownEntries(obj), [['a', 1], ['b', 2]]))
  })
})
