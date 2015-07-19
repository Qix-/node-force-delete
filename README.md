# node-force-delete [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/node-force-delete.svg?style=flat-square)](https://travis-ci.org/Qix-/node-force-delete) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/node-force-delete.svg?style=flat-square)](https://coveralls.io/r/Qix-/node-force-delete)
Forcfully delete a property from an object. Works even with un-configurable
property descriptors.

```javascript
var forceDelete = require('force-delete');

var obj = { foo = 'bar' };
forceDelete(obj, 'foo');
console.log(obj);                             //-> {}

var fn = function(a, b, c) { /* ... */ };
forceDelete(fn, 'length');
console.log(fn.length);                       //-> 0
Object.defineProperty(fn, 'length', {
  value: 10
});
console.log(fn.length);                       //-> 10
```

## License
Licensed under the MIT license
