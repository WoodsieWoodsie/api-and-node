'use strict';

var _ = require('lodash');



exports.double = n => n * 2;
exports.square = n => n * n;
exports.cube = n => n * n * n;
exports.sum = nums => nums.reduce((sum, n) => sum + parseInt(n), 0);

// let nums = [1,2,3];
// console.log(sum(nums));