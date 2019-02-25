/**
 * ©2019 Christopher Merrill
 */

console.log("started!");

function handleMessage(request, sender, sendResponse)
    {
    console.log("Received event: " + request.message);
    }

browser.runtime.onMessage.addListener(handleMessage);