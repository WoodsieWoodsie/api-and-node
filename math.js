'use strict';

var _ = require('lodash');

exports.double = n => n * 2;
exports.square = n => n * n;
exports.cube = n => n * n * n;
exports.sum = nums => nums.reduce((sum, n) => sum + n, 0);
