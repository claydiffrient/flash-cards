require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({6:[function(require,module,exports) {
module.exports = {};
},{"./img/IndexCards.png":13}],23:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],15:[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(e){if("MODULE_NOT_FOUND"===e.code)return new s(function(e,n){t(r).then(e,n)});throw e}}function t(r){var e=r[r.length-1];return Promise.all(r.slice(0,-1).map(u)).then(function(){return require(e)})}var n={};function o(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=o;var i={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),i[e])return i[e];var o=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[o];return u?i[e]=u(r()+e).then(function(r){return r&&(module.bundle.modules[t]=[function(e,t){t.exports=r},{}]),r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return this.promise||(this.promise=new Promise(this.executor).then(r,e))},s.prototype.catch=function(r){return this.promise||(this.promise=new Promise(this.executor).catch(r))};
},{"./bundle-url":23}],0:[function(require,module,exports) {
var b=require(15);b.load([["d8daf4ad0bcf448fdf16f5869a1d1929.png",13]]);
},{}]},{},[0])