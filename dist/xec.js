/*!
 * xec 0.0.1 - 
 * Copyright (c) 2016  - 
 * License: 
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.xec = factory());
}(this, function () { 'use strict';

  var xecute = function xecute(source) {
    return new Promise(function (resolve, reject) {
      // create the script tag
      var tag = document.createElement('script');

      // remove event listeners, resolve or reject the Promise
      var done = function done(func) {
        tag.onerror = null;
        tag.onload = null;
        func();
      };

      // add error and load event listeners
      tag.onerror = done(reject);
      tag.onload = done(resolve);

      // set async to true
      tag.async = true;

      // set the source
      tag.src = source;

      // append the script tag to the DOM
      document.body.appendChild(tag);
    });
  };

  return xecute;

}));