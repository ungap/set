var Set = require('../cjs');
var $Set = Set;
test();

delete require.cache[require.resolve('../cjs')];
delete global.Set;

if (typeof process !== 'undefined') {
  var i = 0;
  Object.defineProperty(global, 'Set', {
    configurable: true,
    get: function () {
      if (0 === i++)
        throw $Set;
      return $Set;
    },
    set: function (Set) {
      delete global.Set;
      global.Set = Set;
    }
  });
}

Set = require('../cjs');
global.Set = $Set;

test();

function test() {
  var a = {};
  var b = {};

  var ws1 = new Set;
  var ws2 = new Set([a, b, a]);

  console.assert(ws1.has(a) === false);
  console.assert(ws1.size === 0);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.size === 1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.size === 1);
  ws1.clear();
  console.assert(ws1.size === 0);
  ws1.add(a);
  var entries = ws1.entries();
  if (entries instanceof Array) {
    console.assert(entries.length === 1);
    console.assert(entries[0][0] === a);
    console.assert(entries[0][1] === a);
  }
  var keys = ws1.keys();
  if (keys instanceof Array) {
    console.assert(keys.length === 1);
    console.assert(keys[0] === a);
  }
  var values = ws1.values();
  if (values instanceof Array) {
    console.assert(values.length === 1);
    console.assert(values[0] === a);
  }
  ws1.forEach(function (value, key, map) {
    console.assert(value === key);
    console.assert(key === a);
    console.assert(map === ws1);
    console.assert(this === ws2);
  }, ws2);
  ws1.clear();
  console.assert(ws1.has(a) === false);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1.delete(a) === true);
  console.assert(ws1.delete(a) === false);
  console.assert(ws1.has(a) === false);

  console.assert(ws2.has(a) === true);
  console.assert(ws2.has(b) === true);
  console.assert(ws2.size === 2);
}
