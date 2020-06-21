/*! (c) Andrea Giammarchi - ISC */
var self = {};
try { self.Set = Set; }
catch (Set) {
  (function (i, dPs) {'use strict';
    var proto = dPs(Set.prototype, {size: {
      configurable: true,
      get: function () {
        return this._v.length;
      }
    }});
    proto.add = function (value) {
      if (!has(this, value))
        this._v.push(value);
      return this;
    };
    proto.clear = function () {
      var length = this._v.length;
      this._v.splice(0, length);
    };
    proto.delete = function (value) {
      return has(this, value) && !!this._v.splice(i, 1);
    };
    proto.entries = function () {
      return this._v.map(pair);
    };
    proto.forEach = function (callback, context) {
      this._v.forEach(
        function (value, i)  {
          callback.call(context, value, value, this);
        },
        this
      );
    };
    proto.has = function (key) {
      return has(this, key);
    };
    proto.keys = proto.values = function () {
      return this._v.slice(0);
    };
    self.Set = Set;
    function Set(iterable) {
      dPs(this, {_v: {value: []}});
      if (iterable)
        iterable.forEach(this.add, this);
    }
    function has(self, value) {
      i = self._v.indexOf(value);
      return -1 < i;
    }
    function pair(value) {
      return [value, value];
    }
  }(0, Object.defineProperties));
}
export default self.Set;
