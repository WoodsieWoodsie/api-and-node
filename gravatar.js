'use strict';

var md5 = require('md5');

exports.hashify = message => md5(message);