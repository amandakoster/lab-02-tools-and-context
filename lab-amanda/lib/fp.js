'use strict';

// make a lib/fp.js for holding the following methods
// create stand alone map, filter, reduce, concat, and splice using call, and apply
// the standlone functions should have the signature (array, ...args) => array

const fp = module.exports = {};

fp.map = (list, callback) => Array.prototype.map.call(list, callback);

fp.filter = (list, callback) => Array.prototype.filter.call(list, callback);

fp.reduce = (list, args) => Array.prototype.reduce.call(list, args);

fp.concat = (list, args) => Array.prototype.concat.call(list, args);

fp.splice = (list, args) => Array.prototype.splice.call(list, args);
