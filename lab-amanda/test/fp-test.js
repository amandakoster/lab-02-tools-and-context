'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

let nums = [1,2,3,4];

describe('testing blah', () => {
  describe('testing fp.map', () => {
    it('it should return an array', () => {
      expect(fp.map(nums, n => n * 3)).toEqual([3, 6, 9, 12]);
    });
  });
});
