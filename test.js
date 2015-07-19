'use strict';
// jshint mocha:true

require('should');
var forceDelete = require('./');

it('should forcefully delete a simple property', function() {
  var obj = {foo: 1234};
  obj.foo.should.equal(1234);
  forceDelete(obj, 'foo');
  obj.should.not.have.property('foo');
});

it('should forcefully delete a non-configurable property', function() {
  var fn = function(a, b, c){ return a + b + c; };
  fn.length.should.equal(3);
  forceDelete(fn, 'length');
  fn.length.should.equal(0);
  // make sure it still runs :)
  fn(1, 2, 3).should.equal(6);
});
