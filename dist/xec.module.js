/*!
 * xec 0.0.2 - An async script loader, for the browser, built on Promises.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/xec
 * License: MIT
 */

var one = function one(source) {
  return new Promise(function (resolve, reject) {
    // create the script tag
    var tag = document.createElement('script');

    // add error and load event listeners
    tag.onerror = reject;
    tag.onload = resolve;

    // set async to true
    tag.async = true;

    // set the source
    tag.src = source;

    // append the script tag to the DOM
    document.body.appendChild(tag);
  });
};

var many = function many(sources) {
  return Promise.all(sources.map(function (source) {
    return one(source);
  }));
};

var xec = {
  one: one,
  many: many
};

export default xec;
