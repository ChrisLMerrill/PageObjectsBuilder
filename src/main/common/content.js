/**
 * copyright 2019 Christopher Merrill
 */

/*
window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();
*/

console.log("running in the page");

document.addEventListener('click', function (event)
    {
    var message = 'clicked: ' + event.target.nodeName;
    console.log(message);
    browser.runtime.sendMessage({"event":"click", "message":message});
    });