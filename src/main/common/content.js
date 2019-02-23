/**
 * copyright 2019 Christopher Merrill
 */

window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

console.log("running in the page");