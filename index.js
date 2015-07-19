'use strict';

var del = require('bindings')('binding.node').del;

module.exports = function forceDelete(obj, property) {
  del(obj, property);
};
