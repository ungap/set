/*! (c) Andrea Giammarchi - ISC */
var self=this||{};try{self.Set=Set}catch(Set){!function(t,i){"use strict";function e(t){i(this,{_v:{value:[]}}),t&&t.forEach(this.add,this)}function n(i,e){return-1<(t=i._v.indexOf(e))}function s(t){return[t,t]}var r=i(e.prototype,{size:{configurable:!0,get:function(){return this._v.length}}});r.add=function(t){return n(this,t)||this._v.push(t),this},r.clear=function(){var t=this._v.length;this._v.splice(0,t)},r["delete"]=function(i){return n(this,i)&&!!this._v.splice(t,1)},r.entries=function(){return this._v.map(s)},r.forEach=function(t,i){this._v.forEach(function(e,n){t.call(i,e,e,this)},this)},r.has=function(t){return n(this,t)},r.keys=r.values=function(){return this._v.slice(0)},self.Set=e}(0,Object.defineProperties)}