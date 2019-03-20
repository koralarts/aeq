const constructCastles = require('../castle')
const assert = require('assert')

describe('Castle', () => {
  describe('#1 Invalid Input', () => {
    it('should return 0 when array is undefined', () => {
      assert.equal(constructCastles(), 0)
    })
    it('should return 0 when array is null', () => {
      assert.equal(constructCastles(null), 0)
    })
    it('should return 0 when array is empty', () => {
      assert.equal(constructCastles([]), 0)
    })
    it('should return 0 when value is object', () => {
      assert.equal(constructCastles({}), 0)
    })
    it('should return 0 when value is string', () => {
      assert.equal(constructCastles('hi there'), 0)
    })
    it('should return 0 when value is number', () => {
      assert.equal(constructCastles(3), 0)
    })
  })
  describe('#2 Valid Input', () => {
    it('should return 1 when input array has less than 3 items', () => {
      assert.equal(constructCastles([1,2]), 1)
    })
    it('should return 1 when finding valley at the start', () => {
      assert.equal(constructCastles([1,1,1,2,2,2]), 1)
    })
    it('should return 1 when finding peak at the start', () => {
      assert.equal(constructCastles([2,2,2,1,1,1]), 1)
    })
    it('should return 2 when finding peak', () => {
      assert.equal(constructCastles([1,1,1,2,2,2,1,1,1]), 2)
    })
    it('should return 2 when finding valley', () => {
      assert.equal(constructCastles([2,2,2,1,1,1,2,2,2]), 2)
    })
    it('should return 4 when finding valleys and peaks', () => {
      assert.equal(constructCastles([2,2,2,1,1,1,2,2,2,1,1,1,2,2,2]), 4)
    })
  })
  describe('#3 Aequelibrium Input', () => {
    it('enter description here', () => {
      // Enter values and expected result
      assert.equal(constructCastles([1]), 1)
    })
  })
})
