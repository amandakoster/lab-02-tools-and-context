'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

let nums = [1,2,3,4];

describe('testing fp', () => {
  describe('testing fp.map', () => {
    it('it should return an array', () => {
      expect(fp.map(nums, n => n * 3)).toEqual([3, 6, 9, 12]);
    });
  });

  describe('testing fp.map', () => {
    it('it should return an array', () => {
      expect(fp.map(nums, n => n * 5)).toEqual([5, 10, 15, 20]);
    });
  });

  describe('testing fp.filter', () => {
    it('it should return an array', () => {
      expect(fp.filter(nums, n => n < 3)).toEqual([1, 2]);
    });
  });

  describe('testing fp.filter', () => {
    it('it should return an array', () => {
      expect(fp.filter(nums, n => n > 2)).toEqual([3, 4]);
    });
  });

  describe('testing fp.reduce', () => {
    it('it should return 10', () => {
      expect(fp.reduce(nums, (a, v) => a + v)).toEqual(10);
    });
  });

  describe('testing fp.reduce', () => {
    it('should return null', () => {
      expect(fp.reduce(nums, (a, v) => (a,v) ? null : nums )).toEqual(null);
    });
  });

  describe('testing fp.concat', () => {
    it('it should return the array twice', () => {
      expect(fp.concat(nums, nums)).toEqual([1,2,3,4,1,2,3,4]);
    });
  });

  describe('testing fp.concat', () => {
    it('it should return the array twice', () => {
      expect(fp.concat(nums, 'cat')).toEqual([1,2,3,4,'cat']);
    });
  });

  describe('testing fp.splice', () => {
    it('it should return two arrays', () => {
      let spliceArray = fp.splice(nums,[3,1]);
      expect(spliceArray).toEqual([4]);
    });
  });

  describe('testing fp.splice', () => {
    it('it should return two arrays', () => {
      let spliceArray = fp.splice(nums,[0,3]);
      expect(spliceArray).toEqual([1,2,3]);
    });
  });
});
